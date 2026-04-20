"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function ContractPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const contracts = [
    { id: 1, subscription: 'Alice saldly. "Hand it over here, said the Gryphon, an...', customer: 'Hermann and Sons', contract: 'Void and Voidable Contracts', type: 'Type 1', typeColor: 'bg-yellow-100 text-yellow-700', value: '$123,000', signature: 'Signed', sigColor: 'bg-green-100 text-green-700' },
    { id: 2, subscription: 'Alice saldly. "Hand it over here, said the Gryphon, an...', customer: 'Cameron Williamson', contract: 'Void and Voidable Contracts', type: 'Type 2', typeColor: 'bg-green-100 text-green-700', value: '$123,000', signature: 'Not Signed', sigColor: 'bg-red-100 text-red-700' },
    { id: 3, subscription: 'Alice saldly. "Hand it over here, said the Gryphon, an...', customer: 'Hermann and Sons', contract: 'Unenforceable Contracts', type: 'Type 2', typeColor: 'bg-green-100 text-green-700', value: '$123,000', signature: 'Not Signed', sigColor: 'bg-red-100 text-red-700' },
    { id: 4, subscription: 'Alice saldly. "Hand it over here, said the Gryphon, an...', customer: 'Hermann and Sons', contract: 'Unenforceable Contracts', type: 'Type 2', typeColor: 'bg-green-100 text-green-700', value: '$123,000', signature: 'Not Signed', sigColor: 'bg-red-100 text-red-700' },
    { id: 5, subscription: 'Alice saldly. "Hand it over here, said the Gryphon, an...', customer: 'Hermann and Sons', contract: 'Contracts under Seal', type: 'Type 2', typeColor: 'bg-green-100 text-green-700', value: '$123,000', signature: 'Not Signed', sigColor: 'bg-red-100 text-red-700' },
    { id: 6, subscription: 'Alice saldly. "Hand it over here, said the Gryphon, an...', customer: 'Hermann and Sons', contract: 'Contracts under Seal', type: 'Type 3', typeColor: 'bg-teal-100 text-teal-700', value: '$123,000', signature: 'Not Signed', sigColor: 'bg-red-100 text-red-700' },
    { id: 7, subscription: 'Alice saldly. "Hand it over here, said the Gryphon, an...', customer: 'Hermann and Sons', contract: 'Void and Voidable Contracts', type: 'Type 1', typeColor: 'bg-yellow-100 text-yellow-700', value: '$123,000', signature: 'Signed', sigColor: 'bg-green-100 text-green-700' },
    { id: 8, subscription: 'Alice saldly. "Hand it over here, said the Gryphon, an...', customer: 'Hermann and Sons', contract: 'Unenforceable Contracts', type: 'Type 1', typeColor: 'bg-yellow-100 text-yellow-700', value: '$123,000', signature: 'Signed', sigColor: 'bg-green-100 text-green-700' },
    { id: 9, subscription: 'Alice saldly. "Hand it over here, said the Gryphon, an...', customer: 'Hermann and Sons', contract: 'Void and Voidable Contracts', type: 'Type 1', typeColor: 'bg-yellow-100 text-yellow-700', value: '$123,000', signature: 'Signed', sigColor: 'bg-green-100 text-green-700' },
    { id: 10, subscription: 'Alice saldly. "Hand it over here, said the Gryphon, an...', customer: 'Hermann and Sons', contract: 'Void and Voidable Contracts', type: 'Type 1', typeColor: 'bg-yellow-100 text-yellow-700', value: '$123,000', signature: 'Signed', sigColor: 'bg-green-100 text-green-700' },
  ];

  const statusFilters = [
    { label: 'Active', count: 0, color: 'bg-blue-100 text-blue-700' },
    { label: 'Recently Added', count: 0, color: 'bg-green-100 text-green-700' },
    { label: 'Expired', count: 0, color: 'bg-red-100 text-red-700' },
    { label: 'About to Expire', count: 0, color: 'bg-yellow-100 text-yellow-700' },
    { label: 'Trash', count: 0, color: 'bg-purple-100 text-purple-700' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 ">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-[#777777] font-inter">Contract</h1>
<hr className="my-5" />
        {/* Search and Actions */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3 mb-4">
           <div className="relative flex-1 max-w-md">
          <input
              type="text"
              placeholder="Search Contract"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F6F6FB] rounded-md px-3 py-3 text-sm border border-gray-200 pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
          <div className="flex gap-2">
            <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
              Create New Contract
            </button>
            <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
              Export
            </button>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {statusFilters.map((filter, index) => (
            <div key={index} className={`${filter.color} px-4 py-2 flex-1 text-center rounded-md text-sm font-medium`}>
              {filter.count} {filter.label}
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white  overflow-hidden">
          <div className="border overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#E6E6E6] text-gray-600 text-xs">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase">#</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase">Subscription Name</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase">Customer</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase">Contract</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase">Contract Type</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase">Contract Value</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase">Start Date</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase">End Date</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase">Project</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase">Signature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-gray-50">
                    <td className="px-3 py-3 text-sm text-gray-900">{contract.id}</td>
                    <td className="px-3 py-3">
                      <div className="text-sm text-gray-900 font-medium max-w-xs truncate">{contract.subscription}</div>
                      <div className="flex gap-2 mt-1">
                        <button className="text-[#777777] hover:underline">Edit</button>
                        <span className="text-gray-300">|</span>
                        <button className="text-[#777777] hover:underline">Delete</button>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-sm text-gray-900">{contract.customer}</td>
                    <td className="px-3 py-3 text-sm text-gray-900">{contract.contract}</td>
                    <td className="px-3 py-3">
                      <span className={`px-3 py-2 inline-flex text-xs font-semibold rounded-md ${contract.typeColor}`}>
                        {contract.type}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-sm text-gray-900">{contract.value}</td>
                    <td className="px-3 py-3 text-sm text-gray-900">2025-03-19</td>
                    <td className="px-3 py-3 text-sm text-gray-900">2025-03-19</td>
                    <td className="px-3 py-3 text-sm text-gray-500">-</td>
                    <td className="px-3 py-3">
                      <span className={`px-3 py-2 inline-flex text-xs font-semibold rounded-md ${contract.sigColor}`}>
                        {contract.signature}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 border-t border-gray-200 gap-3">
            <div className="text-sm text-gray-600">
              Showing 1 to 10 of 12 entries
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 text-sm text-white bg-black rounded-md">
                1
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}