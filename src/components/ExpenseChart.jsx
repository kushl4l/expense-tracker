import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22c55e", "#ef4444", "#3b82f6", "#f59e0b", "#a855f7"];

const ExpenseChart = ({ data }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">
        Expenses by Category
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;