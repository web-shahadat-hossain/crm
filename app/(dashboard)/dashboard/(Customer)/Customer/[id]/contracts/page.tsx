"use client";
import React, { useState } from "react";
import { Search, Calendar } from "lucide-react";
import Link from "next/link";

export default function ContractsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const contracts = [
    {
      id: 1,
      subject: "Web Development Agreement: Terms & Co...",
      contractType: "Contracts under seal",
      value: "$00.00",
      startDate: "03-06-2025",
      endDate: "03-06-2025",
      project: "",
      signature: "Not Signed",
    },
    {
      id: 2,
      subject: 'This Web Development Agreement ("Agreemen...',
      contractType: "Adhesion Contracts",
      value: "$136.00",
      startDate: "03-06-2025",
      endDate: "03-06-2025",
      project: "",
      signature: "Not Signed",
    },
    {
      id: 3,
      subject: 'This Web Development Agreement ("Agreemen...',
      contractType: "Void and Voidable Contracts",
      value: "$136.00",
      startDate: "03-06-2025",
      endDate: "03-06-2025",
      project: "",
      signature: "Not Signed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">
          Contracts
        </h1>

        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          {/* Search and Button Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search Projects"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* New Contract Button */}
           
            <Link href={`/dashboard/Customer/1/AddNewContracts`}>  <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium transition-colors w-full md:w-auto">
              New Contract
            </button> </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    P #
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Subject
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Contract Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Value
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Start Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    End Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Project
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Signature
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {contracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">
                      {contract.id}
                    </td>

                    <td className="px-4 py-4">
                      <div className="text-sm text-gray-900 mb-1">
                        {contract.subject}
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <button className="text-blue-600 hover:text-blue-800">
                          View
                        </button>
                       <Link href={`/dashboard/Customer/${contract.id}/EditContracts`}>
  <button className="text-blue-600 hover:text-blue-800">
    Edit
  </button>
</Link>

                        <button className="text-blue-600 hover:text-blue-800">
                          Delete
                        </button>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-900">
                      {contract.contractType}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-900">
                      {contract.value}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-900">
                      {contract.startDate}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-900">
                      {contract.endDate}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-900">
                      {contract.project}
                    </td>

                    <td className="px-4 py-4">
                      <span className="inline-block px-3 py-1 text-sm font-medium text-red-600 bg-red-50 rounded">
                        {contract.signature}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            <div className="text-sm text-gray-600">
              Showing 3 to 3 of 3 entries
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md font-medium text-sm">
                  1
                </button>
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                  disabled
                >
                  Next
                </button>
              </div>

              <Calendar className="w-7 h-7 text-gray-400 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
