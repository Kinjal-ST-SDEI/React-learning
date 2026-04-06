import { Input } from './components';
import React, { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-blue-950 bg-cover bg-no-repeat">
      
      <div className="w-full max-w-md mx-auto border border-gray-60 border-opacity-30 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => { e.preventDefault(); /* Add conversion logic */ }}>
          
          {/* From Input */}
          <Input 
            amount={amount}
            setAmount={setAmount}
            from={from}
            setFrom={setFrom}
          />

          {/* Swap Button */}
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 uppercase text-xs"
              onClick={swap}
            >
              swap
            </button>
          </div>

          {/* To Input */}
          <div className="w-full bg-white p-3 rounded-lg text-sm flex mt-1 mb-4">
            <div className="w-1/2">
              <label className="text-gray-400 mb-2 inline-block">To</label>
              <input 
                className="outline-none w-full bg-transparent py-1.5 text-lg font-semibold"
                type="number" 
                placeholder="Result"
                value={convertedAmount}
                readOnly
              />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
              <label className="text-gray-400 mb-2 w-full">Currency Type</label>
              <select 
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none uppercase font-medium"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                <option value="inr">INR</option>
                <option value="usd">USD</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-bold uppercase tracking-wide active:scale-95 transition-transform">
            Convert {from} to {to}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;