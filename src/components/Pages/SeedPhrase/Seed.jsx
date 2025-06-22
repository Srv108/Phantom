import { Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { generateSeedPhrase } from "../../utils/wallet/generateMnemonics";
import { countSeedPhrase } from "../../utils/wallet/countSeedPhrase";
import { copyToClipboard } from "../../utils/copyToClipboard";


export const CreateSeedPhrasePage = () => {

    const [ bitsSize, setBitsSize ] = useState(128);
    const [ rowCount, setRowCount ] = useState(5);

    const [seedPhrase, setSeedPhrase] = useState(Array(12).fill("..."));


    async function generateMnemonics() {
        /* logic to generate seed phrase */
        try {
            const mn = await generateSeedPhrase(bitsSize);
            setSeedPhrase(mn);

            // setSeedPhrase(mn);
        } catch (error) {
            console.log('error occured', error);
        }
    }
    
    async function handleClick(e){
        e.preventDefault();
        console.log(bitsSize);
        generateMnemonics();
    }

    const handleChooseWordCount = (e) => {
        const Size = parseInt(e.target.value);

        /* update the size of the bits */
        setBitsSize(Size);

        /* call function to count the woord of seed phrase */
        const wordCount = countSeedPhrase(Size);
        console.log('word count is ',wordCount);

        setRowCount(wordCount/3);

        console.log(wordCount, " ", rowCount);
    }

    useEffect(() => {
        console.log('seedphrase')
    },[ seedPhrase ]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Generate Seed Phrase</h1>
                <p className="text-gray-600 mt-2">Select the number of words and generate your secure seed phrase.</p>
            </div>

            <div className="flex justify-center items-center gap-6 mb-8">
                <select
                    onChange={handleChooseWordCount}
                    className="px-4 py-2 rounded-md border border-gray-300 shadow-sm text-gray-700 bg-white focus:ring-2 focus:ring-indigo-500"
                >
                    <option value={128}>12 Words</option>
                    <option value={160}>15 Words</option>
                    <option value={192}>18 Words</option>
                    <option value={224}>21 Words</option>
                    <option value={256}>24 Words</option>
                </select>

                <button
                    onClick={handleClick}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition-all"
                >
                    Generate
                </button>

                {/* button to hide the phrase */}
                <button
                    className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition-all"
                >
                    <span> Hide </span>
                </button>

                {/* button to copy the phrase */}
                <button
                    onClick={() => {
                        const text = seedPhrase.join(" ");
                        copyToClipboard(text);
                    }}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition-all"
                >
                    <span className="flex flex-row gap-1 items-center"> <Copy className="size-5 mb-1" /> Copy </span>
                </button>
            </div>

            <div
                className={`grid gap-4 grid-cols-3 grid-rows-${rowCount}`}
            >
            {seedPhrase.map((word, index) => (
                <div
                key={index}
                className="border border-gray-300 bg-gray-50 rounded-lg p-3 text-center text-sm font-medium text-gray-700 shadow-sm"
                >
                <span className="text-indigo-500 mr-1">{index + 1}.</span>
                {word}
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}