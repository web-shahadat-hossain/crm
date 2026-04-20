"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function EstimatesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const statusCards = [
    { label: "Draft", amount: "$00.00", color: "text-orange-500" },
    { label: "Sent", amount: "$170.00", color: "text-blue-500" },
    { label: "Expired", amount: "$00.00", color: "text-yellow-500" },
    { label: "Declined", amount: "$00.00", color: "text-red-500" },
    { label: "Accepted", amount: "$0.00", color: "text-green-500" },
  ];

  const estimates = [
    {
      id: "EST-000013",
      amount: "$4571.00",
      totalTax: "$4571.00",
      project: "Web Development",
      tags: "",
      date: "03-06-2025",
      expiryDate: "03-06-2025",
      status: "Sent",
      statusColor: "bg-blue-100 text-blue-600",
    },
    {
      id: "EST-000013",
      amount: "$4571.00",
      totalTax: "$4571.00",
      project: "Logo Design",
      tags: "",
      date: "03-06-2025",
      expiryDate: "03-06-2025",
      status: "Sent",
      statusColor: "bg-blue-100 text-blue-600",
    },
    {
      id: "EST-000013",
      amount: "$4571.00",
      totalTax: "$4571.00",
      project: "Logo Design",
      tags: "",
      date: "03-06-2025",
      expiryDate: "03-06-2025",
      status: "Declined",
      statusColor: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Estimates
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
          {/* Search and Actions Bar */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Search Input */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search Estimates"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                
                <Link href={`/dashboard/Customer/1/CreateNewEstimate`}> <button className="px-4 py-2 bg-[#737373] text-white rounded-md w-full sm:w-auto">
              Create New Estimates
              </button></Link>
                <button className="px-4 py-2 bg-[#737373] text-white rounded-md w-full sm:w-auto">
                  Zip Estimates
                </button>
              </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
              {statusCards.map((card, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className={`text-sm font-medium ${card.color} mb-1`}>
                    {card.label}
                  </div>
                  <div className="text-lg sm:text-xl font-semibold text-gray-900">
                    {card.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Estimate #
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Total Tax
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Project
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Tags
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Expiry Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {estimates.map((estimate, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">
                          {estimate.id}
                        </div>
                        <div className="flex gap-2 mt-1">
                          <button className="text-xs text-gray-600 hover:text-gray-800">
                            Edit
                          </button>
                          <button className="text-xs text-gray-600 hover:text-gray-800">
                            Delete
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">{estimate.amount}</td>
                      <td className="px-6 py-4">{estimate.totalTax}</td>
                      <td className="px-6 py-4">{estimate.project}</td>
                      <td className="px-6 py-4">{estimate.tags}</td>
                      <td className="px-6 py-4">{estimate.date}</td>
                      <td className="px-6 py-4">{estimate.expiryDate}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-2 rounded-md text-xs font-medium ${estimate.statusColor}`}
                        >
                          {estimate.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-4 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                Showing 1 to 1 of 1 entries
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-md">
                  Previous
                </button>
                <button className="px-4 py-2 text-sm text-white bg-black rounded-md">
                  1
                </button>
                <button className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-md">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
