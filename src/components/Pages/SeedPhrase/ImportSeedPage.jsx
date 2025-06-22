import { useState } from "react";
import { useWallet } from "../../Hooks/Wallet/useWallet";

export const ImportSeedPhrasePage = () => {
    const [ words, setWords ]   = useState(Array(12).fill(""));
    const { setMnemonic } = useWallet();


    const normalise = (str) => str.trim().toLowerCase().replace(/\s+/g, " ");

    const changeWord = (idx, value) => {
        setWords((prev) => {
            const next = [...prev];
            next[idx]  = normalise(value);
            return next;
        });
    };

    const handlePaste = (e) => {
        const pastedText = e.clipboardData.getData("text");
        /* stop the browser default paste */
        e.preventDefault();

        if(!pastedText) return;

        console.log(pastedText);
        /* set mnemonics */
        setMnemonic(pastedText.trim().toLowerCase());
        /*  */
        const word = pastedText.trim().toLowerCase().split(/\s+/);
        setWords(word);

        const length = word.length;
        console.log('seed length is ',length);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
                {/* header */}
                <header className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Import Your Seed Phrase
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Enter (or paste) your phrase below.
                    </p>

                    
                </header>

                {/* input grid */}
                <div
                    className="grid gap-4"
                    style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
                >
                {words.map((word, index) => (
                    <label
                        key={index}
                        className="relative flex items-center justify-center border border-gray-300 bg-gray-50 rounded-lg shadow-sm px-4 py-2.5 focus-within:ring-2 focus-within:ring-indigo-400"
                    >
                    <span className="absolute left-2 text-indigo-500 select-none">
                        {index + 1}.
                    </span>
                    <input
                        type="text"
                        value={word}
                        onChange={(e) => changeWord(index,e.target.value)}
                        onPaste={handlePaste}
                        autoComplete="off"
                        spellCheck="false"
                        className="pl-6 w-full bg-transparent outline-none text-sm font-medium text-gray-700"
                        placeholder="....."
                    />
                    </label>
                ))}
                </div>

                <div
                    className=" pt-5 flex  justify-end"
                >
                    <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition cursor-pointer"
                    >
                        Import Wallet
                    </button>
                </div>
            </div>
        </div>
    );
};
