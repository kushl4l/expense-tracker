import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food"); // default category

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
      category,
      date: new Date()
    };

    onAddTransaction(newTransaction);

    // Reset fields
    setTitle("");
    setAmount("");
    setType("expense");
    setCategory("Food");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-6"
    >
      <h3 className="text-lg font-semibold mb-4">Add Transaction</h3>

      <div className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Salary">Salary</option>
        </select>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 transition rounded-lg p-3 font-semibold"
        >
          Add Transaction
        </button>

      </div>
    </form>
  );
}

export default TransactionForm;
