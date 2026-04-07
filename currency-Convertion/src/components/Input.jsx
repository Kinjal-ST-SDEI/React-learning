import React from 'react'

function Input({
  label,
  amount,
  onConvertedAmountChange, 
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "",
  amountDisable = false,
  currencyDisable = false,
  className = "",

}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex mb-1 ${className}`}>
      <div className="w-1/2">
        <label className="text-gray-400 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5 text-lg font-semibold"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))&& updateConvertedAmount && updateConvertedAmount(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label className="text-gray-400 mb-2 w-full">Currency Type</label>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none uppercase font-medium"
          value={selectCurrency.toUpperCase()}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => {
              return <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          })}
        </select>
      </div>
    </div>
  )
}

export default Input;
