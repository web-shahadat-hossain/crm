"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { category: "Automobile Expenses", notBillable: 22, billable: 30 },
  { category: "Insurance", notBillable: 28, billable: 35 },
  { category: "IT and Internet Expenses", notBillable: 55, billable: 60 },
  { category: "Meals", notBillable: 48, billable: 70 },
  { category: "Parking", notBillable: 50, billable: 68 },
  { category: "Telephone", notBillable: 43, billable: 63 },
  { category: "Travel Expenses", notBillable: 58, billable: 55 },
  { category: "Trips", notBillable: 72, billable: 52 },
];

export default function ExpensesLineChart() {
  return (
    <div className="w-full border bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-[#333] mb-4">Expenses</h2>

      <div className="w-full h-[680px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 60 }}>

            {/* GRID */}
            <CartesianGrid
              stroke="#E5E7EB"
              strokeDasharray="3 3"
              vertical={false}
            />

            {/* X-AXIS */}
            <XAxis
              dataKey="category"
              tick={{ fontSize: 12, fill: "#6B7280" }}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={90}
            />

            {/* Y-AXIS */}
            <YAxis
              tick={{ fontSize: 12, fill: "#6B7280" }}
              domain={[0, 100]}
            />

            {/* LEGEND */}
            <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ paddingBottom: 20 }}
              iconType="circle"
            />

            {/* TOOLTIP */}
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                padding: "10px",
                border: "1px solid #e5e7eb",
              }}
              labelStyle={{ color: "#111" }}
               formatter={(value) => `$${Number(value).toLocaleString()}.00`}
            />

            {/* BLUE LINE */}
            <Line
              type="monotone"
              dataKey="notBillable"
              name="Not billable expenses by categories"
              stroke="#2563EB"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />

            {/* ORANGE LINE */}
            <Line
              type="monotone"
              dataKey="billable"
              name="Billable expenses by categories"
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
