"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

interface Item {
  id: number;
  description: string;
  longDescription: string;
  rate: string;
  tax1: string;
  tax2: string;
  unit: number;
  groupName: string;
}

const itemsData: Item[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  description: "Consultant Services",
  longDescription:
    "Caterpillar: 'I'm afraid I don't believe you do lessons?' said Alice, seriously, 'I'll have.",
  rate: "$256.00",
  tax1: "5.00%",
  tax2: "5.00%",
  unit: 10,
  groupName: i % 2 === 0 ? "Products" : "Services",
}));

const Items = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);

  const filtered = itemsData.filter(
    (item) =>
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.groupName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-5">Items</h1>
      <hr className="mb-5" />

      {/* Search + Buttons */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search Customer"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F6F6FB] rounded-md px-3 py-2.5 text-sm border border-gray-200 pr-9"
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
        <div className="flex gap-2">
          <button className="border border-gray-300 bg-[#E6E6E6] px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition">
            Create New Item
          </button>
          <button className="border border-gray-300 bg-[#E6E6E6] px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition">
            Import Items
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 w-10 text-left font-medium text-gray-600">#</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Description</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Long Description</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Rate</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Tax 1</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Tax 2</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Unit</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Group Name</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                {/* Checkbox */}
                <td className="px-4 py-4 align-top">
                  <input
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                    className="w-4 h-4 rounded border-gray-300 accent-gray-600"
                  />
                </td>

                {/* Description */}
                <td className="px-4 py-4 align-top">
                  <p className="font-medium text-gray-800 text-sm">{item.description}</p>
                  <div className="flex gap-2 mt-1">
                    <Link
                      href={`/dashboard/items/${item.id}`}
                      className="text-xs text-gray-400 hover:text-gray-600"
                    >
                      Edit
                    </Link>
                    <span className="text-xs text-gray-300">·</span>
                    <button className="text-xs text-gray-400 hover:text-red-500">Delete</button>
                  </div>
                </td>

                {/* Long Description */}
                <td className="px-4 py-4 text-sm text-gray-600 align-top max-w-xs">
                  {item.longDescription}
                </td>

                {/* Rate */}
                <td className="px-4 py-4 text-sm text-gray-700 align-top">{item.rate}</td>

                {/* Tax 1 */}
                <td className="px-4 py-4 text-sm text-gray-700 align-top">{item.tax1}</td>

                {/* Tax 2 */}
                <td className="px-4 py-4 text-sm text-gray-700 align-top">{item.tax2}</td>

                {/* Unit */}
                <td className="px-4 py-4 text-sm text-gray-700 align-top">{item.unit}</td>

                {/* Group Name */}
                <td className="px-4 py-4 text-sm text-gray-700 align-top">{item.groupName}</td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-sm text-gray-400">
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          Showing 1 to {filtered.length} of 12 entries
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

export default Items;