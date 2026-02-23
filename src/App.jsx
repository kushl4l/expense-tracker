import { useEffect, useState } from "react";
import Header from "./components/Header";
import BalanceSummary from "./components/BalanceSummary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";
import MonthSelector from "./components/MonthSelector";

function App() {
  const [transactions, setTransactions] = useState(() => {
  const saved = localStorage.getItem("transactions");
  return saved ? JSON.parse(saved) : [];
});

 const addTransaction = (transaction) => {
  const transactionWithDate = {
    ...transaction,
    date: new Date(
  selectedMonth.getFullYear(),
  selectedMonth.getMonth(),
  1
)
  };

  setTransactions(prev => [...prev, transactionWithDate]);
};

  const deleteTransaction=(id)=>{
       setTransactions((prev) =>
    prev.filter((transaction) => transaction.id !== id)
  );
  }

 const [selectedMonth, setSelectedMonth] = useState(new Date());
 const filteredTransactions=transactions.filter(transaction=>{
  const d= new Date(transaction.date);
  return (
    d.getMonth()=== selectedMonth.getMonth() && 
    d.getFullYear()=== selectedMonth.getFullYear()
  );
 })
  

  useEffect(()=>{
    
    localStorage.setItem("transactions",JSON.stringify(transactions));
  },[transactions]);


const incomes = filteredTransactions.filter(
  t => t.type === "income"
);

const expenses = filteredTransactions.filter(
  t => t.type === "expense"
);




 const totalIncome = incomes.reduce(
  (acc, curr) => acc + curr.amount,
  0
);

const totalExpense = expenses.reduce(
  (acc, curr) => acc + curr.amount,
  0
);

  const balance=totalIncome-totalExpense;


  const expenseByCategory=filteredTransactions.filter((transaction)=>transaction.type==="expense").reduce((acc,curr)=>{
    if (!acc[curr.category]) {
      acc[curr.category]=0;
    }
    acc[curr.category] += curr.amount;

  return acc;
  },{});


  const chartData = Object.entries(expenseByCategory).map(
  ([category, amount]) => ({
     name: category,
     value: amount
  })
);










  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
   

 <main className="max-w-3xl mx-auto px-6 py-10">
  <MonthSelector
  selectedMonth={selectedMonth}
  setSelectedMonth={setSelectedMonth}
/>
        <BalanceSummary balance={balance} totalExpense={totalExpense} totalIncome={totalIncome}/>
        <TransactionForm onAddTransaction={addTransaction}/>
        <TransactionList transactions={filteredTransactions} onDelete={deleteTransaction} />
        <ExpenseChart data={chartData}/>
      </main>
 </div>

  );
}

export default App;
