import { Input } from './components';
import React, { useState } from 'react';
import useCurrency from './hooks/useCurrency';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    console.log(to, from);
    console.log(amount, convertedAmount);
    const temp1 = convertedAmount;
    setConvertedAmount(convertedAmount);
    setAmount(temp1);
  };
  
const { info } = useCurrency(from);

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-blue-950 bg-cover bg-no-repeat">
      
      <div className="w-full max-w-md mx-auto border border-gray-60 border-opacity-30 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => { e.preventDefault(); /* Add conversion logic */ }}>
          
          {/* From Input */}
          <Input 
            label="From"
            amount={amount}
            onAmountChange={setAmount}
            onCurrencyChange={setFrom}
            selectCurrency={from}
            currencyOptions={info ? Object.keys(info) : []}
          />

          {/* Swap Button */}
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 uppercase text-xs"
              onClick={() =>(
                swap()
              )}
            >
              swap
            </button>
          </div>

          {/* To Input */}
          <Input 
            label="To"
            amount={convertedAmount}
            onAmountChange={setAmount}
            onCurrencyChange={setTo}
            selectCurrency={to}
            currencyOptions={info ? Object.keys(info) : []}
            amountDisable={true}
            // currencyDisable={true}
            // convertionRate={info ? info[to] : 1}
            // updateConvertedAmount={setConvertedAmount}
          />

          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-bold uppercase tracking-wide active:scale-95 transition-transform">
            Convert {from} to {to}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;