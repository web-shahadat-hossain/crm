"use client";
import { Search } from "lucide-react";
import React from "react";

export default function NotesPage() {
  return (
    <div className="min-h-screen p-3 sm:p-6">
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        {/* Header */}
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-5">
          Notes
        </h1>

        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="Search Notes"
              className="w-full rounded-md border border-gray-200 px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Buttons */}
          <div className="flex w-full md:w-auto gap-3">
            <button className="flex-1 md:flex-none px-4 py-2 rounded-md bg-gray-600 text-white text-sm font-medium hover:bg-gray-700">
              New Note
            </button>
            <button className="flex-1 md:flex-none px-4 py-2 rounded-md bg-gray-600 text-white text-sm font-medium hover:bg-gray-700">
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="border overflow-hidden">
          {/* Table Head (hidden on mobile) */}
          <div className="hidden md:grid grid-cols-12 bg-[#2f2f2f] text-white text-sm font-medium px-4 py-3">
            <div className="col-span-6">Start Date</div>
            <div className="col-span-2">Added form</div>
            <div className="col-span-2">Date Added</div>
            <div className="col-span-2 text-right">Options</div>
          </div>

          {/* Rows */}
          {[1, 2].map((item) => (
            <div
              key={item}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-5 border-t text-sm text-gray-700"
            >
              {/* Note Text */}
              <div className="md:col-span-6 leading-relaxed">
                <p className="md:hidden text-xs font-semibold text-gray-400 mb-1">
                  Note
                </p>
                Just at this moment Alice felt that she was in confusion,
                getting the Dormouse sulkily remarked, “If you do. I’ll set
                Dinah at you!” There was a general clapping of hands at this:
                it was indeed: she was small enough to try the whole thing,
                and.
              </div>

              {/* Added form */}
              <div className="md:col-span-2 flex md:items-center">
                <span className="md:hidden text-xs font-semibold text-gray-400 mr-2">
                  Added by:
                </span>
                Jacques Torphy
              </div>

              {/* Date */}
              <div className="md:col-span-2 flex md:items-center">
                <span className="md:hidden text-xs font-semibold text-gray-400 mr-2">
                  Date:
                </span>
                03-06-2025
              </div>

              {/* Options */}
              <div className="md:col-span-2 flex items-center md:justify-end gap-3 text-gray-500">
                <button className="hover:text-gray-800">Edit</button>
                <span className="hidden md:inline">|</span>
                <button className="hover:text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 text-sm text-gray-500 gap-4">
          <p>Showing 2 to 2 of 2 entries</p>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-md border text-gray-400 cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700">
              1
            </button>
            <button className="px-3 py-1 rounded-md border text-gray-400 cursor-not-allowed">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
