"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const staff = [
  "Dianne Russell",
  "Robert Fox",
  "Arlene McCoy",
  "Guy Hawkins",
  "Annette Black",
  "Jenny Wilson",
  "Jane Cooper",
  "Kristin Watson",
  "Jacob Jones",
  "Esther Howard",
];

const data = [
  { name: "Create Leads", value: 78, fill: "#bad4ff" },
  { name: "Lost Leads", value: 55, fill: "#ffb3bb" },
  { name: "Converted Leads", value: 75, fill: "#c7f9cc" },
];

export default function StaffReport() {
  const [activeStaff, setActiveStaff] = useState("Dianne Russell");

  return (
    <div className="w-full  mx-auto p-6 rounded-3xl border border-purple-100 shadow-sm bg-white">
      <h2 className="text-lg md:text-2xl font-bold text-[#6928DB] font-inter mb-4">Staff Report</h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {staff.map((person) => (
          <button
            key={person}
            onClick={() => setActiveStaff(person)}
            className={`px-3 py-2 rounded-lg text-sm border transition ${
              activeStaff === person
                ? "bg-[#5A5A5A] text-white border-[#5A5A5A]"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {person}
          </button>
        ))}
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              tick={{ fill: "#6b6b6b", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6b6b6b", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
{data.map((entry, index) => (
<Cell key={`cell-${index}`} fill={entry.fill} />
))}
</Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
