import React from 'react'

function Input(
    className
    label,
    onAmountChange,
    onCurrencyChange,
    selectAmount,
    
){
  return (
    <>
    <div className="w-full bg-white p-3 rounded-lg text-sm flex mb-1">
            <div className="w-1/2">
              <label className="text-gray-400 mb-2 inline-block">{label}</label>
              <input 
                className="outline-none w-full bg-transparent py-1.5 text-lg font-semibold"
                type="number" 
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
              <label className="text-gray-400 mb-2 w-full">Currency Type</label>
              <select 
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none uppercase font-medium"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                <option value="usd">USD</option>
              </select>
            </div>
          </div>
    </>
  )
}

export default Input;

