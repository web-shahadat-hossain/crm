"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

type StatusType = "Accepted" | "Sent" | "Expired" | "Declined" | "Draft";

interface Estimate {
  id: number;
  estimateNumber: string;
  amount: string;
  totalTax: string;
  customer: string;
  tags: string;
  project: string;
  date: string;
  expiryDate: string;
  referenceNumber: string;
  status: StatusType;
}

const statusStyles: Record<StatusType, string> = {
  Accepted: "bg-green-100 text-green-600",
  Sent:     "bg-blue-100 text-blue-500",
  Expired:  "bg-yellow-100 text-yellow-600",
  Declined: "bg-red-100 text-red-500",
  Draft:    "bg-orange-100 text-orange-500",
};

const summaryCards: { label: StatusType; amount: string; color: string }[] = [
  { label: "Draft",    amount: "$00.00",   color: "text-yellow-500" },
  { label: "Sent",     amount: "$170.00",  color: "text-blue-500" },
  { label: "Expired",  amount: "$00.00",   color: "text-orange-400" },
  { label: "Declined", amount: "$00.00",   color: "text-red-500" },
  { label: "Accepted", amount: "$0.00",    color: "text-green-500" },
];

const Estimates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [estimates] = useState<Estimate[]>([
    {
      id: 1,
      estimateNumber: "EST-000015",
      amount: "$256.00",
      totalTax: "$256.00",
      customer: "Sipes LLC",
      tags: "",
      project: "",
      date: "2025-03-19",
      expiryDate: "2025-03-19",
      referenceNumber: "",
      status: "Accepted",
    },
    {
      id: 2,
      estimateNumber: "EST-000015",
      amount: "$256.00",
      totalTax: "$256.00",
      customer: "Sipes LLC",
      tags: "",
      project: "",
      date: "2025-03-19",
      expiryDate: "2025-03-19",
      referenceNumber: "",
      status: "Sent",
    },
    {
      id: 3,
      estimateNumber: "EST-000015",
      amount: "$256.00",
      totalTax: "$256.00",
      customer: "Sipes LLC",
      tags: "",
      project: "",
      date: "2025-03-19",
      expiryDate: "2025-03-19",
      referenceNumber: "",
      status: "Expired",
    },
    {
      id: 4,
      estimateNumber: "EST-000015",
      amount: "$256.00",
      totalTax: "$256.00",
      customer: "Sipes LLC",
      tags: "",
      project: "",
      date: "2025-03-19",
      expiryDate: "2025-03-19",
      referenceNumber: "",
      status: "Declined",
    },
    {
      id: 5,
      estimateNumber: "EST-000015",
      amount: "$256.00",
      totalTax: "$256.00",
      customer: "Sipes LLC",
      tags: "",
      project: "",
      date: "2025-03-19",
      expiryDate: "2025-03-19",
      referenceNumber: "",
      status: "Draft",
    },
  ]);

  const filtered = estimates.filter(
    (e) =>
      e.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.estimateNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
    
  {/* Header */}
      <div className="flex md:flex-row flex-col md:justify-between">
        <h2 className="text-2xl font-semibold text-[#777777] font-inter">
          Estimates
        </h2>
        <div className="flex gap-3 justify-start md:justify-end">
          <Link href="/dashboard/Sales/proposals">
            <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
            Create New Estimates
            </button>
          </Link>
          <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
                 Export
          </button>
        </div>
      </div>

      <hr className="my-5" />
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

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="border border-gray-200 rounded-lg px-4 py-4 bg-white"
          >
            <p className={`text-base font-semibold ${card.color}`}>{card.label}</p>
            <p className="text-lg font-semibold text-gray-800 mt-1">{card.amount}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-4 py-3 text-left font-medium text-gray-700">Estimate#</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Amount</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Total Tax</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Customer</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Tags</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Project</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Date</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Expiry Date</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Reference #</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filtered.map((estimate) => (
              <tr key={estimate.id} className="hover:bg-gray-50 transition-colors">
                {/* Estimate# */}
                <td className="px-4 py-4">
                  <div className="text-sm text-gray-900">{estimate.estimateNumber}</div>
                  <div className="flex gap-2 mt-1">
                    <Link
                      href={`/dashboard/Sales/estimates/${estimate.id}`}
                      className="text-xs text-gray-400 hover:text-gray-600"
                    >
                      Edit
                    </Link>
                    <span className="text-xs text-gray-400">·</span>
                    <button className="text-xs text-gray-400 hover:text-red-500">
                      Delete
                    </button>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{estimate.amount}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{estimate.totalTax}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{estimate.customer}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{estimate.tags}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{estimate.project}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{estimate.date}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{estimate.expiryDate}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{estimate.referenceNumber}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[estimate.status]}`}
                  >
                    {estimate.status}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={10} className="px-4 py-8 text-center text-sm text-gray-400">
                  No estimates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          Showing 1 to {filtered.length} of {filtered.length} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button className="px-3 py-1 text-sm bg-black text-white rounded">1</button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Estimates;