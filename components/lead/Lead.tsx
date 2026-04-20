"use client";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Facebook", value: 55 },
  { name: "Google", value: 78 },
];

export default function SourcesConversion() {
  return (
    <div className="w-full  mx-auto p-6 rounded-3xl border border-purple-100 shadow-sm bg-white">
      <h2 className="text-lg md:text-2xl font-bold text-[#6928DB] font-inter mb-4">Sources Conversion</h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" tick={{ fill: "#6b6b6b" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#6b6b6b" }} axisLine={false} tickLine={false} />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#e9d8fd" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
