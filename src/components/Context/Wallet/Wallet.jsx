import { createContext, useEffect, useState } from "react";
import { mnemonicToSeed, validateMnemonic } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import bs58 from "bs58";
import { Keypair } from "@solana/web3.js";
import { HDNodeWallet } from "ethers";

const WalletContext = createContext();

export const WalletContextProvider = ({ children }) => {

    const [mnemonic, setMnemonic] = useState("");
    const [solanaIndex, setSolanaIndex] = useState(0);
    const [ethereumIndex, setEthereumIndex] = useState(0);

    const [solanaAccount, setSolanaAccount] = useState([]);
    const [ethereumAccount, setEthereumAccount] = useState([]);

    /*     Solana HD Wallet Generator       */
    const getSolanaAccount = async (mnemonic, index) => {
        const seed = await mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${index}'/0'`;
        const derived = derivePath(path, seed.toString("hex")).key;
        const secretKey = nacl.sign.keyPair.fromSeed(derived).secretKey;
        const keypair = Keypair.fromSecretKey(secretKey);

        return {
            path,
            privateKey: bs58.encode(secretKey),
            publicKey: keypair.publicKey.toBase58()
        };
    };

    /* Ethereum HD Wallet Generator */
    const getEthereumAccount = async (mnemonic, index) => {
        const seed = await mnemonicToSeed(mnemonic);
        const master = HDNodeWallet.fromSeed(seed);
        const path = `m/44'/60'/${index}'/0/0`;
        const child = master.derivePath(path);

        return {
            path,
            privateKey: child.privateKey,
            address: child.address
        };
    };

    /* Derive accounts when mnemonic or indices change */
    useEffect(() => {
        (async () => {
        const valid = validateMnemonic(mnemonic);
        if (!valid) {
            console.warn("Invalid mnemonic");
            return;
        }

        try {
            const solana = await getSolanaAccount(mnemonic, solanaIndex);
            const ethereum = await getEthereumAccount(mnemonic, ethereumIndex);

            console.log("Solana account ", solana);
            console.log("ethereum account ", ethereum);
            
            setSolanaAccount((prev) => [...prev, solana]);
            setEthereumAccount((prev) => [...prev, ethereum]);
        } catch (err) {
            console.error("Wallet derivation error:", err);
        }
        })();
    }, [mnemonic, solanaIndex, ethereumIndex]);

    return (
        <WalletContext.Provider
        value={{
            mnemonic,
            setMnemonic,
            solanaAccount,
            ethereumAccount,
            setSolanaIndex,
            setEthereumIndex
        }}
        >
        {children}
        </WalletContext.Provider>
    );
};

export default WalletContext;
