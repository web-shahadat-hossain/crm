"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function ExpensesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const summaryCards = [
    { label: "Total", amount: "$00.00", color: "text-yellow-600" },
    { label: "Billable", amount: "$0.00", color: "text-green-600" },
    { label: "Non Billable", amount: "$00.00", color: "text-yellow-600" },
    { label: "Not Invoiced", amount: "$00.00", color: "text-red-600" },
    { label: "Billed", amount: "$170.00", color: "text-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">
          Expenses
        </h1>

        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          {/* Search and Button Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search Expenses"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Record Expenses Button */}
          
              <Link href={`/dashboard/Customer/1/AddNewExpense`}> <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium transition-colors w-full md:w-auto">
               Record Expenses
              </button></Link>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {summaryCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <div className={`text-sm font-medium mb-1 ${card.color}`}>
                  {card.label}
                </div>
                <div className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {card.amount}
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-left text-sm font-medium">#</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Receipt
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Invoice
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Reference
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Payment Mode
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td
                    colSpan={9}
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    No entries found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 text-sm text-gray-600">
            <div>Showing 1 to 1 of 1 entries</div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Previous
              </button>
              <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md font-medium">
                1
              </button>
              <button
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
