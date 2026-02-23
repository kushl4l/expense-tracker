import React from "react";

const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {

  const handlePrevMonth = () => {
    setSelectedMonth(
      new Date(
        selectedMonth.getFullYear(),
        selectedMonth.getMonth() - 1
      )
    );
  };

  const handleNextMonth = () => {
    setSelectedMonth(
      new Date(
        selectedMonth.getFullYear(),
        selectedMonth.getMonth() + 1
      )
    );
  };

  const now = new Date();

const isCurrentMonth =
  selectedMonth.getMonth() === now.getMonth() &&
  selectedMonth.getFullYear() === now.getFullYear();

  const formattedMonth = selectedMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl p-4 mt-6">
      
      <button
        onClick={handlePrevMonth}
        className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700"
      >
        ←
      </button>

      <h2 className="text-lg font-semibold">
        {formattedMonth}
      </h2>

     <button
  onClick={handleNextMonth}
  disabled={isCurrentMonth}
  className={`px-4 py-2 rounded-lg transition
    ${
      isCurrentMonth
        ? "bg-slate-800 text-slate-500 cursor-not-allowed"
        : "bg-slate-800 hover:bg-slate-700"
    }`}
>
  →
</button>

    </div>
  );
};

export default MonthSelector;