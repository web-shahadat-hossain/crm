"use client";
import React, { useState } from 'react';
import { Search, } from 'lucide-react';

export default function SubscriptionPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const subscriptions = [
    { id: 'Subs-000002', name: 'Web development', customer: 'Hermann and Sons', project: '', status: 'Inactive', statusColor: 'bg-yellow-100 text-yellow-700' },
    { id: 'Subs-000002', name: 'Web development', customer: 'Cameron Williamson', project: '', status: 'Not Activate', statusColor: 'bg-green-100 text-green-700' },
    { id: 'Subs-000002', name: 'Web development', customer: 'Hermann and Sons', project: '', status: 'Past Due', statusColor: 'bg-red-100 text-red-700' },
    { id: 'Subs-000002', name: 'Web development', customer: 'Hermann and Sons', project: '', status: 'Unpaid', statusColor: 'bg-red-100 text-red-700' },
    { id: 'Subs-000002', name: 'Web development', customer: 'Hermann and Sons', project: '', status: 'Incomplete Expired', statusColor: 'bg-purple-100 text-purple-700' },
    { id: 'Subs-000002', name: 'Web development', customer: 'Hermann and Sons', project: '', status: 'Cancelled', statusColor: 'bg-red-100 text-red-700' },
    { id: 'Subs-000002', name: 'Web development', customer: 'Hermann and Sons', project: '', status: 'Future', statusColor: 'bg-green-100 text-green-600' },
    { id: 'Subs-000002', name: 'Web development', customer: 'Hermann and Sons', project: '', status: 'Not Subscribed', statusColor: 'bg-blue-100 text-blue-600' },
    { id: 'Subs-000002', name: 'Web development', customer: 'Hermann and Sons', project: '', status: 'Not Subscribed', statusColor: 'bg-blue-100 text-blue-600' },
    { id: 'Subs-000002', name: 'Web development', customer: 'Hermann and Sons', project: '', status: 'Incomplete Expired', statusColor: 'bg-purple-100 text-purple-700' },
  ];

  const stats = [
    { label: 'Paid Invoices', amount: '$15,487.00', color: 'bg-green-100 text-green-700' },
    { label: 'Past Due Invoices', amount: '$00.00', color: 'bg-red-100 text-red-700' },
    { label: 'Outstanding Invoices', amount: '$00.00', color: 'bg-yellow-100 text-yellow-700' },
  ];


const statusFilters = [
   { label: 'Not Subscribed', count: 0, color: 'text-blue-600' },
    { label: 'Not Activate', count: 0, color: 'text-green-600' },
    { label: 'Future', count: 0, color: 'text-yellow-600' },
    { label: 'Past Due', count: 0, color: 'text-red-600' },
    { label: 'Unpaid', count: 0, color: 'text-red-600' },
    { label: 'Incomplete', count: 0, color: 'text-yellow-600' },
    { label: 'Cancelled', count: 0, color: 'text-red-600' },
    { label: 'Incomplete Expired', count: 0, color: 'text-purple-600' },
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <h1 className="text-2xl font-semibold text-[#777777] font-inter">Subscription</h1>
          <div className="flex flex-wrap gap-3">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.color} px-4 py-2 rounded-md text-sm font-medium`}>
                {stat.label} <span className="font-semibold">{stat.amount}</span>
              </div>
            ))}
          </div>
        </div>
  <hr className="my-5" />
        {/* Search and Actions */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3 mb-6">
            <div className="relative flex-1 max-w-2xl">
          <input
          type="text"
              placeholder="Search Customer"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F6F6FB] rounded-md px-3 py-3 text-sm border border-gray-200 pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
          <div className="flex gap-2">
            <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
              Create New Subscription
            </button>
            <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
              Export
            </button>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap gap-3 mb-4">
  {statusFilters.map((stat, index) => (
    <div
      key={index}
      className={`${stat.color} px-4 py-2 rounded-md text-sm font-medium bg-gray-100`}
    >
     
      <span className="font-semibold">
        {stat.count}
      </span>
          {" "}  {stat.label}
    </div>
  ))}
</div>


        {/* Table */}
        <div className="bg-white rounded-lg ">
          <div className="overflow-x-auto border">
            <table className="w-full">
              <thead className="bg-[#E6E6E6] text-gray-600 text-xs ">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Invoice #</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Subscription Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Project</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Next Billing Cycle</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date Subscribed</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Last Sent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {subscriptions.map((sub, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{sub.id}</div>
                      <div className="flex gap-2 mt-1">
                        <button className="text-[#777777] hover:underline">Edit</button>
                        <button className="text-[#777777] hover:underline">Delete</button>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{sub.name}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{sub.customer}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{sub.project || '-'}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-3 py-2 inline-flex text-xs leading-5 font-semibold rounded-md ${sub.statusColor}`}>
                        {sub.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">2025-03-19</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">2025-03-19</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">2025-03-19</td>
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