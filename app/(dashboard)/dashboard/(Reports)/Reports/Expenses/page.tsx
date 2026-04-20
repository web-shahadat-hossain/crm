"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import ExpensesLineChart from "@/components/Expenses/ExpensesChart";

export default function ExpensesReport() {
  const [search, setSearch] = useState("");

  const yearList = ["2023", "2024", "2025", "2026"];

  const rows = [
    "Automobile Expenses",
    "Insurance",
    "IT and Internet Expenses",
    "Meals",
    "Parking",
    "Telephone",
    "Travel Expenses",
    "Trips",
    "Net Amount (Subtotal)",
    "Total Tax",
    "Total",
  ];

  return (
    <div className="  bg-white p-6  w-full">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#777777] font-inter">
        Expenses
      </h2>
      <hr className="my-5" />
      {/* Search + Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 items-start">
        {/* Search Box */}
        <div className="relative col-span-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Knowledge Base"
            className="w-full bg-[#F6F6FB] rounded-md px-3 py-3 text-sm border border-gray-200"
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-start md:justify-end">
          <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
            Detailed Report
          </button>

          <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
            Detailed Report
          </button>

          <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
            Export
          </button>
        </div>
      </div>

      {/* Year + Checkbox */}
      <div className="flex flex-col    mt-6 gap-3">
        {/* Year Dropdown */}
        <div>
          <p className="text-sm text-gray-600 mb-1">Choose Year</p>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
            {yearList.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" />
          Exclude Billable Expenses
        </label>
      </div>

      {/* TABLE */}
      <div className="mt-6 overflow-x-auto border ">
        <table className="min-w-max w-full text-sm">
          {/* HEADER */}
          <thead className="bg-[#E6E6E6] text-gray-600 text-xs">
            <tr className="text-center">
              <th className="px-4 py-3 text-left w-52">Article Name</th>
              <th className="px-4 py-3">Jan</th>
              <th className="px-4 py-3">Feb</th>
              <th className="px-4 py-3">March</th>
              <th className="px-4 py-3">April</th>
              <th className="px-4 py-3">May</th>
              <th className="px-4 py-3">June</th>
              <th className="px-4 py-3">July</th>
              <th className="px-4 py-3">August</th>
              <th className="px-4 py-3">Sept</th>
              <th className="px-4 py-3">Oct</th>
              <th className="px-4 py-3">Nov</th>
              <th className="px-4 py-3">Dec</th>
              <th className="px-4 py-3">Year(2025)</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="text-center border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-left">{row}</td>
                {Array.from({ length: 13 }).map((_, idx) => (
                  <td key={idx} className="px-4 py-3">
                    $0.00
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="my-10" />
      <ExpensesLineChart></ExpensesLineChart>
    </div>
  );
}
