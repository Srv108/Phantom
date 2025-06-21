import { generateMnemonic } from "bip39";

export async function generateSeedPhrase(bitsSize) {
    try {
        console.log('bits size is', bitsSize);

        const mn = generateMnemonic(bitsSize);
        const words = mn.split(" ");
        console.log("mnemonic generated:", words);
        
        return words;
    } catch (error) {
        console.log('error occured', error);
    }
}

