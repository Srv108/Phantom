import { useContext } from "react"
import WalletContext from "../../Context/Wallet/Wallet"

export const useWallet = () =>  useContext(WalletContext)