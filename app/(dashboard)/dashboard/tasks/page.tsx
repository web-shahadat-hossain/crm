"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

export default function Task() {
  const [searchTerm, setSearchTerm] = useState("");

  /* =======================
     STATUS SUMMARY (TOP)
  ======================= */
  const statusFilters = [
    { label: "Not Started", count: 12, color: "bg-yellow-100 text-yellow-700" },
    { label: "Testing", count: 13, color: "bg-blue-100 text-blue-700" },
    { label: "Complete", count: 5, color: "bg-green-100 text-green-700" },
    {
      label: "Awaiting Feedback",
      count: 12,
      color: "bg-purple-100 text-purple-700",
    },
  ];

  /* =======================
     TASK DATA (TABLE)
  ======================= */
  const tasks = [
    {
      id: 1,
      name: "King added in a languid, sleepy voice.",
      status: "Not Started",
      statusColor: "bg-yellow-100 text-yellow-700",
      startDate: "2025-03-19",
      dueDate: "2025-03-19",
      assignedTo: ["Cameron Williamson", "Floyd Miles", "Savannah Nguyen", "Cody Fisher"],
      tag: "WordPress",
      priority: "Medium",
      priorityColor: "text-blue-600",
    },
    {
      id: 2,
      name: "King added in a languid, sleepy voice.",
      status: "Awaiting Feedback",
      statusColor: "bg-purple-100 text-purple-700",
      startDate: "2025-03-19",
      dueDate: "2025-03-19",
      assignedTo: ["Cameron Williamson", "Theresa Webb", "Robert Fox"],
      tag: "WordPress",
      priority: "Medium",
      priorityColor: "text-blue-600",
    },
    {
      id: 3,
      name: "King added in a languid, sleepy voice.",
      status: "Testing",
      statusColor: "bg-blue-100 text-blue-700",
      startDate: "2025-03-19",
      dueDate: "2025-03-19",
      assignedTo: ["Cameron Williamson", "Floyd Miles", "Savannah Nguyen", "Cody Fisher"],
      tag: "WordPress",
      priority: "High",
      priorityColor: "text-orange-600",
    },
    {
      id: 4,
      name: "King added in a languid, sleepy voice.",
      status: "Testing",
      statusColor: "bg-blue-100 text-blue-700",
      startDate: "2025-03-19",
      dueDate: "2025-03-19",
      assignedTo: ["Robert Fox", "Floyd Miles", "Savannah Nguyen"],
      tag: "WordPress",
      priority: "High",
      priorityColor: "text-orange-600",
    },
    {
      id: 5,
      name: "King added in a languid, sleepy voice.",
      status: "Awaiting Feedback",
      statusColor: "bg-purple-100 text-purple-700",
      startDate: "2025-03-19",
      dueDate: "2025-03-19",
      assignedTo: ["Floyd Miles", "Savannah Nguyen", "Cody Fisher"],
      tag: "WordPress",
      priority: "High",
      priorityColor: "text-orange-600",
    },
    {
      id: 6,
      name: "King added in a languid, sleepy voice.",
      status: "Not Started",
      statusColor: "bg-yellow-100 text-yellow-700",
      startDate: "2025-03-19",
      dueDate: "2025-03-19",
      assignedTo: ["Floyd Miles", "Savannah Nguyen", "Cody Fisher"],
      tag: "WordPress",
      priority: "Urgent",
      priorityColor: "text-red-600",
    },
    {
      id: 7,
      name: "King added in a languid, sleepy voice.",
      status: "Awaiting Feedback",
      statusColor: "bg-purple-100 text-purple-700",
      startDate: "2025-03-19",
      dueDate: "2025-03-19",
      assignedTo: ["Floyd Miles", "Savannah Nguyen", "Cody Fisher"],
      tag: "WordPress",
      priority: "Urgent",
      priorityColor: "text-red-600",
    },
    {
      id: 8,
      name: "King added in a languid, sleepy voice.",
      status: "Testing",
      statusColor: "bg-blue-100 text-blue-700",
      startDate: "2025-03-19",
      dueDate: "2025-03-19",
      assignedTo: ["Floyd Miles", "Savannah Nguyen", "Cody Fisher"],
      tag: "WordPress",
      priority: "Low",
      priorityColor: "text-gray-500",
    },
    {
      id: 9,
      name: "King added in a languid, sleepy voice.",
      status: "Complete",
      statusColor: "bg-green-100 text-green-700",
      startDate: "2025-03-19",
      dueDate: "2025-03-19",
      assignedTo: ["Floyd Miles", "Savannah Nguyen", "Cody Fisher"],
      tag: "WordPress",
      priority: "Low",
      priorityColor: "text-gray-500",
    },
    {
      id: 10,
      name: "King added in a languid, sleepy voice.",
      status: "Complete",
      statusColor: "bg-green-100 text-green-700",
      startDate: "2025-03-19",
      dueDate: "2025-03-19",
      assignedTo: ["Floyd Miles", "Savannah Nguyen", "Cody Fisher"],
      tag: "WordPress",
      priority: "Low",
      priorityColor: "text-gray-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-[#777777]">Task</h1>
        <hr className="my-5" />

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
              Create New Task
            </button>
            <button className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
              Export
            </button>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
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
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Name</th>
                <th className="px-3 py-3 text-left">Status</th>
                <th className="px-3 py-3 text-left">Start Date</th>
                <th className="px-3 py-3 text-left">Due Date</th>
                <th className="px-3 py-3 text-left">Assigned To</th>
                <th className="px-3 py-3 text-left">Tags</th>
                <th className="px-3 py-3 text-left">Priority</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-3 py-3">{task.id}</td>

                  <td className="px-3 py-3">
                    <p className="font-medium text-gray-900 truncate max-w-xs">
                      {task.name}
                    </p>
                    <div className="text-xs text-gray-400 mt-1">
                      Edit | Delete
                    </div>
                  </td>

                  <td className="px-3 py-3">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-medium ${task.statusColor}`}
                    >
                      {task.status}
                    </span>
                  </td>

                  <td className="px-3 py-3">{task.startDate}</td>
                  <td className="px-3 py-3">{task.dueDate}</td>

                  <td className="px-3 py-3">
                    <div className="flex flex-wrap gap-1">
                      {task.assignedTo.map((p, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 px-2 py-1 rounded text-xs"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="px-3 py-3">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      {task.tag}
                    </span>
                  </td>

                  <td className={`px-3 py-3 font-medium ${task.priorityColor}`}>
                    {task.priority}
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
    </div>
  );
}
