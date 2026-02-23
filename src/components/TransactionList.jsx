import React from "react";

const TransactionList = ({ transactions = [], onDelete }) => {
  if (transactions.length === 0) {
    return (
      <div className="mt-6 text-slate-400">
        No transactions yet.
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex justify-between items-center"
        >
          {/* Left Side */}
          <div>
            <p className="font-medium">{transaction.title}</p>
            <p className="text-xs text-indigo-400 mt-1">
              {transaction.category}
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <p
              className={`font-semibold ${
                transaction.type === "income"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {transaction.type === "expense" ? "-" : "+"}
              ₹{transaction.amount}
            </p>

            <button
              onClick={() => onDelete(transaction.id)}
              className="text-red-400 hover:text-red-500"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
