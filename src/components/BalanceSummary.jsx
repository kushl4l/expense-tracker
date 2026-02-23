import React from 'react'

const BalanceSummary = (props) => {
  return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg shadow-black/20">
      
      <h2 className="text-slate-400 text-sm uppercase tracking-wide">
        Total Balance
      </h2>
      
      <p className={`text-3xl font-bold mt-2 ${props.balance < 0 ? "text-red-400" : "text-green-400"}`}>
        {`₹${props.balance}`}
      </p>

      <div className="flex justify-between mt-6">
        <div>
          <p className="text-sm text-slate-400">Income</p>
          <p className="text-green-400 font-semibold">{`₹${props.totalIncome}`}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Expenses</p>
          <p className="text-red-400 font-semibold">{`₹${props.totalExpense}`}</p>
        </div>
      </div>

    </div>
  )
}

export default BalanceSummary