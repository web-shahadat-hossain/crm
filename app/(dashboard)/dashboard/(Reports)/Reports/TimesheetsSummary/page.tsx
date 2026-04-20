"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TimesheetsSummary() {
  const [search, setSearch] = useState("");
  const [groupByTask, setGroupByTask] = useState(false);

  return (
    <div className="bg-gray-50 p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-inter  font-medium text-[#777777]">Timesheets Summary</h1>
        <button className="border border-gray-300 bg-gray-100 text-gray-600 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition-all">
          View All Time Sheets
        </button>
      </div>

      {/* Time Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-xs text-gray-600 mb-1">Total Logged Time</div>
          <div className="text-sm font-medium text-gray-800">00:00</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-xs text-gray-600 mb-1">Last Month Logged Time</div>
          <div className="text-sm font-medium text-gray-800">00:00</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-xs text-blue-600 mb-1">This Month Logged Time</div>
          <div className="text-sm font-medium text-gray-800">00:00</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-xs text-gray-600 mb-1">Last Week Logged Time</div>
          <div className="text-sm font-medium text-gray-800">00:00</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-xs text-gray-600 mb-1">This Week Logged Time</div>
          <div className="text-sm font-medium text-gray-800">00:00</div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 relative" style={{ height: "420px" }}>
        {/* Y-axis labels */}
        <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 py-6 z-10">
          <span>01.00</span>
          <span>00.54</span>
          <span>00.48</span>
          <span>00.42</span>
          <span>00.36</span>
          <span>00.30</span>
          <span>00.24</span>
          <span>00.18</span>
          <span>00.12</span>
          <span>00.06</span>
          <span>00.00</span>
        </div>

        {/* Horizontal gridlines */}
        <div className="absolute left-12 right-6 top-6 bottom-12 flex flex-col justify-between">
          {[...Array(11)].map((_, i) => (
            <div key={i} className="w-full border-t border-gray-200"></div>
          ))}
        </div>

        {/* Chart content */}
        <div className="ml-12 h-full flex flex-col justify-end relative">
          {/* Gradient bar representing data */}
          <div className="w-full rounded-t-lg" style={{
            height: "60%",
            background: "linear-gradient(to top, #60A5FA 0%, #BFDBFE 50%, #EFF6FF 100%)"
          }}></div>
          
          {/* X-axis label */}
          <div className="text-center text-sm text-gray-700 font-medium mt-4">
            Today
          </div>
        </div>
      </div>

    <div className="flex flex-col md:flex-row gap-4">
          {/* Filters Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 flex-1">
        <Select>
          <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700">
            <SelectValue placeholder="This Month Logged In" />
          </SelectTrigger>
          <SelectContent className="bg-white shadow-xl">
            <SelectItem value="this-month">This Month Logged In</SelectItem>
            <SelectItem value="last-month">Last Month Logged In</SelectItem>
            <SelectItem value="this-week">This Week Logged In</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700">
            <SelectValue placeholder="Tarifa Teletasum" />
          </SelectTrigger>
          <SelectContent className="bg-white shadow-xl">
            <SelectItem value="tarifa">Tarifa Teletasum</SelectItem>
            <SelectItem value="other">Other Project</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700">
            <SelectValue placeholder="Customer" />
          </SelectTrigger>
          <SelectContent className="bg-white shadow-xl">
            <SelectItem value="all">All Customers</SelectItem>
            <SelectItem value="customer1">Customer 1</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700">
            <SelectValue placeholder="project" />
          </SelectTrigger>
          <SelectContent className="bg-white shadow-xl">
            <SelectItem value="all">All Projects</SelectItem>
            <SelectItem value="project1">Project 1</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Apply Button Row */}
      <div className="flex justify-end mb-4">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition-all">
          Apply
        </button>
      </div>
    </div>

      {/* Search and Actions Row */}
      <div className="flex justify-between items-center gap-4 mb-4">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Knowledge Base"
            className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm pr-10"
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>

        {/* Group By Task Toggle and Export */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={groupByTask}
                onChange={(e) => setGroupByTask(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span className="text-sm text-gray-700">Group By Task</span>
          </div>

          <button className="border border-gray-300 bg-gray-100 text-gray-600 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-all">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-50 text-left text-gray-600 border-b">
            <tr>
              <th className="px-4 py-3 text-sm font-medium">Staff Member</th>
              <th className="px-4 py-3 text-sm font-medium">Task</th>
              <th className="px-4 py-3 text-sm font-medium">Time Sheets Tags</th>
              <th className="px-4 py-3 text-sm font-medium">Start Time</th>
              <th className="px-4 py-3 text-sm font-medium">End Time</th>
              <th className="px-4 py-3 text-sm font-medium">Note</th>
              <th className="px-4 py-3 text-sm font-medium">Related</th>
              <th className="px-4 py-3 text-sm font-medium">Time (h)</th>
              <th className="px-4 py-3 text-sm font-medium">Time (Decimal)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={9} className="text-left px-4 py-8 text-gray-600 text-sm">
                No Entries Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}