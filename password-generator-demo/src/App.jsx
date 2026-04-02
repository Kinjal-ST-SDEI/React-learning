import React, { useCallback, useState, useEffect } from 'react'

const App = () => {
  const [length, setlength] = useState(8);
  const [password, setpassword] = useState('');
  const [numcon, setNumcon] = useState(false)
  const [charcon, setCharcon] = useState(false)
  const passwordGenerator = useCallback(() => {
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const num = '0123456789';
    let pass = '';
    let characters = char;
    if (numcon) {
      characters += num;
    }
    if (charcon) {
      characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    }
    for (let i = 0; i < length; i++) {
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setpassword(pass);
  }, [length, numcon, charcon, setpassword]);

  useEffect(() => {
  }, [passwordGenerator]);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-950 px-4">
        <div className="bg-gray-900 w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-800">
          <h1 className="text-white text-2xl font-semibold mb-6 text-center">Password Generator</h1>

          {/* Input Group */}
          <div className="flex overflow-hidden rounded-lg mb-6 shadow-inner bg-gray-800">
            <input
              className="bg-transparent px-4 py-3 w-full text-orange-400 outline-none font-mono text-lg"
              type="text"
              placeholder="Password"
              value={password}
              readOnly
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 text-white font-medium">
              Copy
            </button>
          </div>

          {/* Controls Group */}
          <div className="flex flex-col gap-4 text-gray-300">
            <div className="flex items-center gap-x-4 bg-gray-800/50 p-3 rounded-xl">
              <input
                type="range"
                min={8}
                max={50}
                value={length}
                className="cursor-pointer accent-blue-500"
                onChange={(e) => setlength(e.target.value)}
              />
              <label className="text-sm font-medium min-w-[80px]">Length: {length}</label>
            </div>

            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="numberInput"
                  className="w-4 h-4 rounded accent-blue-500"
                  onChange={() => setNumcon(!numcon)}
                />
                <label htmlFor="numberInput" className="cursor-pointer select-none">Numbers</label>
              </div>

              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="charInput"
                  className="w-4 h-4 rounded accent-blue-500"
                  onChange={() => setCharcon(!charcon)}
                />
                <label htmlFor="charInput" className="cursor-pointer select-none">Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App