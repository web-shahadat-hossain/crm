"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

export default function Support() {
  const [searchTerm, setSearchTerm] = useState("");

  /* =======================
     STATUS SUMMARY
  ======================= */
  const statusFilters = [
    { label: "Open", count: 1, color: "bg-red-100 text-red-600" },
    { label: "In Progress", count: 5, color: "bg-green-100 text-green-600" },
    { label: "Answered", count: 1, color: "bg-blue-100 text-blue-600" },
    { label: "On Hold", count: 12, color: "bg-yellow-100 text-yellow-600" },
    { label: "Closed", count: 1, color: "bg-purple-100 text-purple-600" },
  ];

  /* =======================
     SUPPORT TICKETS DATA
  ======================= */
  const tickets = [
    {
      id: 1,
      name: "King added in a languid, sleepy voice.",
      tag: "WordPress",
      department: "Abuse",
      service: "Bilateral and Unilateral Contracts",
      lastReply: "No Reply Yet",
      created: "2025-03-19",
      priority: "Medium",
      priorityColor: "text-blue-600",
      status: "Answered",
      statusColor: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      name: "King added in a languid, sleepy voice.",
      tag: "WordPress",
      department: "Abuse",
      service: "Void and Voidable Contracts",
      lastReply: "No Reply Yet",
      created: "2025-03-19",
      priority: "Medium",
      priorityColor: "text-blue-600",
      status: "In Progress",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      name: "King added in a languid, sleepy voice.",
      tag: "WordPress",
      department: "Abuse",
      service: "Unconscionable Contracts",
      lastReply: "No Reply Yet",
      created: "2025-03-19",
      priority: "High",
      priorityColor: "text-orange-600",
      status: "Open",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      id: 4,
      name: "King added in a languid, sleepy voice.",
      tag: "WordPress",
      department: "Abuse",
      service: "Unconscionable Contracts",
      lastReply: "No Reply Yet",
      created: "2025-03-19",
      priority: "High",
      priorityColor: "text-orange-600",
      status: "On Hold",
      statusColor: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 5,
      name: "King added in a languid, sleepy voice.",
      tag: "WordPress",
      department: "Marketing",
      service: "Contracts under Seal",
      lastReply: "No Reply Yet",
      created: "2025-03-19",
      priority: "High",
      priorityColor: "text-orange-600",
      status: "Closed",
      statusColor: "bg-purple-100 text-purple-600",
    },
    {
      id: 6,
      name: "King added in a languid, sleepy voice.",
      tag: "WordPress",
      department: "Marketing",
      service: "Contracts under Seal",
      lastReply: "No Reply Yet",
      created: "2025-03-19",
      priority: "Urgent",
      priorityColor: "text-red-600",
      status: "Answered",
      statusColor: "bg-blue-100 text-blue-600",
    },
    {
      id: 7,
      name: "King added in a languid, sleepy voice.",
      tag: "WordPress",
      department: "Development",
      service: "Void and Voidable Contracts",
      lastReply: "No Reply Yet",
      created: "2025-03-19",
      priority: "Urgent",
      priorityColor: "text-red-600",
      status: "In Progress",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: 8,
      name: "King added in a languid, sleepy voice.",
      tag: "WordPress",
      department: "Design",
      service: "Unconscionable Contracts",
      lastReply: "No Reply Yet",
      created: "2025-03-19",
      priority: "Low",
      priorityColor: "text-purple-500",
      status: "Open",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      id: 9,
      name: "King added in a languid, sleepy voice.",
      tag: "WordPress",
      department: "Design",
      service: "Void and Voidable Contracts",
      lastReply: "No Reply Yet",
      created: "2025-03-19",
      priority: "Low",
      priorityColor: "text-purple-500",
      status: "On Hold",
      statusColor: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 10,
      name: "King added in a languid, sleepy voice.",
      tag: "WordPress",
      department: "Design",
      service: "Void and Voidable Contracts",
      lastReply: "No Reply Yet",
      created: "2025-03-19",
      priority: "Low",
      priorityColor: "text-purple-500",
      status: "Closed",
      statusColor: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-semibold text-gray-700">Support</h1>
      <hr className="my-4" />

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
        <div className="relative max-w-md w-full">
          <input
            placeholder="Search Task"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F6F6FB] px-4 py-3 rounded-md text-sm border pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex gap-2">
          <button className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
            Create New Ticket
          </button>
          <button className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
            Export
          </button>
        </div>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
        {statusFilters.map((s, i) => (
          <div
            key={i}
            className={`${s.color} text-center py-3 rounded-md text-sm font-medium`}
          >
            {s.count} {s.label}
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-3 py-3">#</th>
              <th className="px-3 py-3 text-left">Name</th>
              <th className="px-3 py-3">Tags</th>
              <th className="px-3 py-3">Department</th>
              <th className="px-3 py-3">Service</th>
              <th className="px-3 py-3">Last Reply</th>
              <th className="px-3 py-3">Created</th>
              <th className="px-3 py-3">Priority</th>
              <th className="px-3 py-3">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {tickets.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50">
                <td className="px-3 py-3">{t.id}</td>

                <td className="px-3 py-3">
                  <p className="font-medium truncate max-w-xs">{t.name}</p>
                  <span className="text-xs text-gray-400">Edit | Delete</span>
                </td>

                <td className="px-3 py-3">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {t.tag}
                  </span>
                </td>

                <td className="px-3 py-3">{t.department}</td>
                <td className="px-3 py-3">{t.service}</td>
                <td className="px-3 py-3">{t.lastReply}</td>
                <td className="px-3 py-3">{t.created}</td>

                <td className={`px-3 py-3 font-medium ${t.priorityColor}`}>
                  {t.priority}
                </td>

                <td className="px-3 py-3">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-medium ${t.statusColor}`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 text-sm">
          <span className="text-gray-600">
            Showing 1 to 10 of 42 entries
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded">Previous</button>
            <button className="px-3 py-1 bg-black text-white rounded">
              1
            </button>
            <button className="px-3 py-1 border rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
