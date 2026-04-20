"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function EstimatesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const subscriptions = [
    {
      id: "Sub-727",
      name: "Graphics Subscription",
      project: "Logo Design",
      status: "Unexpired",
      nextBillingCycle: "03-06-2025",
      dateSubscribed: "03-06-2025",
      lastSent: "03-06-2025",
    },
  ];

  const filteredSubscriptions = subscriptions.filter(
    (sub) =>
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">
          Subscription
        </h1>

        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          {/* Search and Button Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search Subscription"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

           
            <Link href={`/dashboard/Customer/1/NewSubscription`}> <button className="bg-[#737373] hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium transition-colors w-full md:w-auto">
                 NewSubscription
              </button></Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    S#
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Subscription Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Next Billing Cycle
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Date Subscribed
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Last Sent
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSubscriptions.map((subscription, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {subscription.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {subscription.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {subscription.project}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium bg-blue-100 text-blue-700">
                        {subscription.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {subscription.nextBillingCycle}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {subscription.dateSubscribed}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {subscription.lastSent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 text-sm text-gray-600">
            <div>
              Showing 1 to {filteredSubscriptions.length} of{" "}
              {filteredSubscriptions.length} entries
            </div>
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
