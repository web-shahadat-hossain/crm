"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function EstimateRequest() {
  const [searchTerm, setSearchTerm] = useState("");

  /* =======================
     STATUS SUMMARY
  ======================= */
  const statusFilters = [
    { label: "Cancelled", count: 1, color: "bg-red-100 text-red-600" },
    { label: "Completed", count: 5, color: "bg-green-100 text-green-600" },
    { label: "Processing", count: 1, color: "bg-blue-100 text-blue-600" },
  ];

  /* =======================
     ESTIMATE REQUEST DATA
  ======================= */
  const estimates = [
    {
      id: 1,
      email: "tim.jennings@example.com",
      tags: ["WordPress", "Java"],
      assignedTo: [
        "Cameron Williamson",
        "Floyd Miles",
        "Savannah Nguyen",
        "Cody Fisher",
      ],
      status: "Processing",
      statusColor: "bg-blue-100 text-blue-600",
      created: "2025-03-19",
    },
    {
      id: 2,
      email: "tim.jennings@example.com",
      tags: ["WordPress"],
      assignedTo: [
        "Cameron Williamson",
        "Theresa Webb",
        "Robert Fox",
      ],
      status: "Processing",
      statusColor: "bg-blue-100 text-blue-600",
      created: "2025-03-19",
    },
    {
      id: 3,
      email: "tim.jennings@example.com",
      tags: ["WordPress"],
      assignedTo: [
        "Cameron Williamson",
        "Floyd Miles",
        "Savannah Nguyen",
        "Cody Fisher",
        "Robert Fox",
      ],
      status: "Processing",
      statusColor: "bg-blue-100 text-blue-600",
      created: "2025-03-19",
    },
    {
      id: 4,
      email: "tim.jennings@example.com",
      tags: ["WordPress"],
      assignedTo: [
        "Cameron Williamson",
        "Floyd Miles",
        "Savannah Nguyen",
      ],
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-600",
      created: "2025-03-19",
    },
    {
      id: 5,
      email: "tim.jennings@example.com",
      tags: ["WordPress"],
      assignedTo: [
        "Floyd Miles",
        "Savannah Nguyen",
        "Cody Fisher",
      ],
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-600",
      created: "2025-03-19",
    },
    {
      id: 6,
      email: "tim.jennings@example.com",
      tags: ["WordPress"],
      assignedTo: [
        "Floyd Miles",
        "Savannah Nguyen",
        "Cody Fisher",
      ],
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-600",
      created: "2025-03-19",
    },
    {
      id: 7,
      email: "tim.jennings@example.com",
      tags: ["WordPress"],
      assignedTo: [
        "Cameron Williamson",
        "Floyd Miles",
        "Savannah Nguyen",
      ],
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-600",
      created: "2025-03-19",
    },
    {
      id: 8,
      email: "tim.jennings@example.com",
      tags: ["WordPress"],
      assignedTo: [
        "Cameron Williamson",
        "Floyd Miles",
        "Savannah Nguyen",
      ],
      status: "Completed",
      statusColor: "bg-green-100 text-green-600",
      created: "2025-03-19",
    },
    {
      id: 9,
      email: "tim.jennings@example.com",
      tags: ["WordPress"],
      assignedTo: [
        "Cameron Williamson",
        "Floyd Miles",
        "Savannah Nguyen",
      ],
      status: "Completed",
      statusColor: "bg-green-100 text-green-600",
      created: "2025-03-19",
    },
    {
      id: 10,
      email: "tim.jennings@example.com",
      tags: ["WordPress"],
      assignedTo: [
        "Cameron Williamson",
        "Floyd Miles",
        "Savannah Nguyen",
      ],
      status: "Completed",
      statusColor: "bg-green-100 text-green-600",
      created: "2025-03-19",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-semibold text-gray-700">
        Estimate Request
      </h1>
      <hr className="my-4" />

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
        <div className="relative max-w-md w-full">
          <input
            placeholder="Search Estimate Request"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F6F6FB] px-4 py-3 rounded-md text-sm border pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex gap-2">
          <Link href="/dashboard/estimate-request/NewForm">
            <button className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
              New Form
            </button>
          </Link>
          <button className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
            Export
          </button>
        </div>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
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
              <th className="px-3 py-3 text-left">Email</th>
              <th className="px-3 py-3">Tags</th>
              <th className="px-3 py-3">Assigned To</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3">Created</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {estimates.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50">
                <td className="px-3 py-3">
                  <input type="checkbox" />
                </td>

                <td className="px-3 py-3">{e.email}</td>

                <td className="px-3 py-3">
                  <div className="flex flex-wrap gap-1">
                    {e.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="px-3 py-3">
                  <div className="flex flex-wrap gap-1">
                    {e.assignedTo.map((p, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 px-2 py-1 rounded text-xs"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="px-3 py-3">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-medium ${e.statusColor}`}
                  >
                    {e.status}
                  </span>
                </td>

                <td className="px-3 py-3">{e.created}</td>
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
