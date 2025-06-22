import { CombineContext } from "../utils/hooks/CombineContexts"
import { WalletContextProvider } from "./Wallet/Wallet"

export const AppContextProviders = CombineContext(
    WalletContextProvider,
)