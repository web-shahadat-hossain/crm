/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 20, expense: 30 },
  { month: "Feb", income: 28, expense: 35 },
  { month: "Mar", income: 32, expense: 40 },
  { month: "Apr", income: 45, expense: 55 },
  { month: "May", income: 60, expense: 62 },
  { month: "Jun", income: 48, expense: 70 },
  { month: "Jul", income: 50, expense: 68 },
  { month: "Aug", income: 43, expense: 63 },
  { month: "Sept", income: 44, expense: 60 },
  { month: "Oct", income: 47, expense: 58 },
  { month: "Nov", income: 55, expense: 52 },
  { month: "Dec", income: 68, expense: 48 },
];

// Custom tooltip (matches screenshot style)
function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-lg border rounded-xl px-4 py-3 text-center">
        <p className="text-xs text-gray-500">15 Aug 2022</p>
        <p className="text-lg font-bold text-gray-900">
          ${payload[0].value.toLocaleString()}.10
        </p>
      </div>
    );
  }
  return null;
}

export default function ExpensesVsIncomeChart() {
  return (
    <div className="w-full p-10 bg-white rounded-2xl m-4 shadow-sm border">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[30px] font-inter font-semibold text-[#212121]">
          Expenses vs Income
        </h2>

        <button className="border px-4 py-2 rounded-lg text-sm bg-[#F9FAFB]">
          2025 ▼
        </button>
      </div>

      {/* Chart */}
      <div className="w-full h-[380px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          >
            {/* Grid */}
            <CartesianGrid
              stroke="#E5E7EB"
              strokeDasharray="3 3"
              vertical={false}
            />

            {/* X-Axis */}
            <XAxis
              dataKey="month"
              tick={{ fill: "#6B7280", fontSize: 12 }}
              tickMargin={10}
            />

            {/* Y-Axis */}
            <YAxis
              domain={[0, 100]}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />

            {/* Legend */}
            <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ marginBottom: 20 }}
              iconType="circle"
            />

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} />

            {/* Income Line (Blue) */}
            <Line
              type="monotone"
              dataKey="income"
              name="Total Income"
              stroke="#2563EB"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />

            {/* Expense Line (Orange) */}
            <Line
              type="monotone"
              dataKey="expense"
              name="Expense"
              stroke="#F59E0B"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
