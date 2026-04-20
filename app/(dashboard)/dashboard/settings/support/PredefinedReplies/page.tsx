"use client";
import React, { useState } from "react";
import { Search, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

interface CustomerGroup {
  id: number;
  name: string;
  staffMember: string;
}

const PredefinedReplies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const customerGroups: CustomerGroup[] = [
    { id: 1, name: "New Predefined Reply", staffMember: "" },
    { id: 2, name: "Predefined Reply Name", staffMember: "" },
    {
      id: 3,
      name: "Alice ventured to taste it, and burning.",
      staffMember: "",
    },
  ];

  const handleDelete = (id: number) => {
    console.log("Delete group:", id);
  };

  return (
    <div className="min-h-screen  ">
      <div className="w-full mx-auto">
        {/* Header */}

        {/* ffff */}
        <h1 className="text-2xl font-semibold text-gray-700">
          Predefined Replies
        </h1>
        <hr className="my-4" />

        {/* Search & Actions */}
        <div className="flex flex-col md:flex-row justify-between gap-3  mb-6">
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Search Predefined Replies"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F6F6FB] px-4 py-3 rounded-md text-sm border pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="flex gap-2">
           <Link href="/dashboard/settings/support/PredefinedReplies/AddNewPredefinedReply">
              <button className="bg-black px-4 py-2 rounded-md text-sm text-white hover:bg-white hover:text-black border border-black">
                Add New Predefined Reply
              </button>
            </Link>

            <button className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border overflow-y-auto border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E6E6E6] text-gray-600 text-xs">
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">
                  Predefined Reply Name
                </th>
                <th className="px-6 py-3  text-sm font-medium text-gray-700">
                  Options
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {customerGroups.map((group) => (
                <tr key={group.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm text-left text-gray-900">
                      {group.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button className="p-1 text-black hover:text-blue-600 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(group.id)}
                        className="p-1 text-black hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
        </div>
        <div className="px-6 py-4 flex items-center justify-between  bg-white">
          <div className="text-sm text-gray-700">
            Showing 1 to 4 of 4 entries
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-1 text-sm text-white bg-black">1</button>
            <button className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredefinedReplies;
