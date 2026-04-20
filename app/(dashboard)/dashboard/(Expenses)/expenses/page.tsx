"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const expensesData = [
  {
    id: 1,
    category: "Telephone Expense",
    name: "The only thing in the kitchen that.",
    date: "08-07-2025",
    project: "Jankaldal and Sons",
    reference: "321",
    paymentMethod: "Bank",
  },
  {
    id: 2,
    category: "Automobile Expense",
    name: "The only thing in the kitchen that.",
    date: "08-07-2025",
    project: "Jankaldal and Sons",
    reference: "321",
    paymentMethod: "Bank",
  },
  {
    id: 3,
    category: "Telephone Expense",
    name: "The only thing in the kitchen that.",
    date: "08-07-2025",
    project: "Jankaldal and Sons",
    reference: "321",
    paymentMethod: "Bank",
  },
  {
    id: 4,
    category: "Automobile Expense",
    name: "The only thing in the kitchen that.",
    date: "08-07-2025",
    project: "Jankaldal and Sons",
    reference: "321",
    paymentMethod: "Bank",
  },
  {
    id: 5,
    category: "Telephone Expense",
    name: "The only thing in the kitchen that.",
    date: "08-07-2025",
    project: "Jankaldal and Sons",
    reference: "321",
    paymentMethod: "Bank",
  },
  {
    id: 6,
    category: "Telephone Expense",
    name: "The only thing in the kitchen that.",
    date: "08-07-2025",
    project: "Jankaldal and Sons",
    reference: "321",
    paymentMethod: "Bank",
  },
  {
    id: 7,
    category: "Telephone Expense",
    name: "The only thing in the kitchen that.",
    date: "08-07-2025",
    project: "Jankaldal and Sons",
    reference: "321",
    paymentMethod: "Bank",
  },
  {
    id: 8,
    category: "Telephone Expense",
    name: "The only thing in the kitchen that.",
    date: "08-07-2025",
    project: "Jankaldal and Sons",
    reference: "321",
    paymentMethod: "Bank",
  },
  {
    id: 9,
    category: "Telephone Expense",
    name: "The only thing in the kitchen that.",
    date: "08-07-2025",
    project: "Jankaldal and Sons",
    reference: "321",
    paymentMethod: "Bank",
  },
  {
    id: 10,
    category: "Telephone Expense",
    name: "The only thing in the kitchen that.",
    date: "08-07-2025",
    project: "Jankaldal and Sons",
    reference: "321",
    paymentMethod: "Bank",
  },
];

export default function ExpensesReport() {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white  w-full">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#777777] font-inter">
        Expenses
      </h2>
      <hr className="my-5" />

      {/* Search + Buttons */}
      <div className="flex flex-col md:flex-row gap-3 mt-6">
        {/* Search Box */}
        <div className="relative flex-1">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Customer"
            className="w-full bg-[#F6F6FB] rounded-md px-3 py-3 text-sm border border-gray-200 pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        {/* Buttons */}
        <Link href="/dashboard/expenses/AddNewExpense">
          <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
            Record Expenses
          </button>
        </Link>

        <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
          Import Items
        </button>
      </div>

      {/* TABLE */}
      <div className="mt-6 overflow-x-auto border ">
        <table className="min-w-full w-full text-sm">
          {/* HEADER */}
          <thead className="bg-[#E6E6E6] text-gray-600 text-xs">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 w-12">
                #
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Receipt
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Project
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Invoice
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Reference
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Payment Method
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {expensesData.map((expense) => (
              <tr
                key={expense.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(expense.id)}
                    onChange={() => handleSelectRow(expense.id)}
                    className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium text-sm text-gray-900">
                    {expense.category}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    <a href="#" className="text-[#777777] hover:underline">
                      Edit
                    </a>
                    <span className="mx-1">-</span>
                    <a href="#" className="text-[#777777] hover:underline">
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {expense.name}
                </td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {expense.date}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {expense.project}
                </td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {expense.reference}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {expense.paymentMethod}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-4 text-sm text-gray-600">
        <div>Showing 1 to 10 of 12 entries</div>
        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>
          <button className="bg-black text-white border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
            1
          </button>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}