import { useId } from "react";
function InputBox({label, amount,selectCurrency ,onAmountChange, currency, onCurrencyChange, currencyOptions = [], className = ""}) {
    const inputId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-12">

                <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">{label}</label>
                <input
                    id={inputId}
                    value={amount}
                    className="outline-none w-full bg-transparent py-1"
                    type="number"
                    placeholder="Amount"    
                    onClick={(e) => onAmountChange(e.target.value)}
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    value={selectCurrency}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) => onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) = (<option key={currency} value={currency} >
                        {currency}
                    </option>))}
                </select>
            </div>
        </div>
    )
}
export default InputBox;
