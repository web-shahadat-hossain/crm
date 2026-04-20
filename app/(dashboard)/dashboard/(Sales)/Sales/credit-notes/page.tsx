"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const CreditNote = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Credit Note</h1>
        <div className="flex gap-2">
          <Link href="/dashboard/credit-notes/create">
            <button className="border border-gray-300 bg-[#E6E6E6] px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition">
              Create New Credit Note
            </button>
          </Link>
          <button className="border border-gray-300 bg-[#E6E6E6] px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition">
            Export
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative w-full max-w-xs mb-6">
        <input
          type="text"
          placeholder="Search Customer"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#F6F6FB] rounded-md px-3 py-2.5 text-sm border border-gray-200 pr-9"
        />
        <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>

      {/* Table */}
      <div className="border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left font-medium text-gray-600">Credit Note#</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Credit Note Date</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Customer</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Status</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Project</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Reference</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Amount</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Remaining Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td
                colSpan={8}
                className="px-4 py-6 text-sm text-gray-500"
              >
                No entries found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreditNote;