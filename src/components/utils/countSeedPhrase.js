export function countSeedPhrase (bitsSize) {
    return (bitsSize + (bitsSize / 32)) / 11
}