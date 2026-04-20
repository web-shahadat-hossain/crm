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
import Link from "next/link";

export default function TimesheetsOverview() {
  const [search, setSearch] = useState("");
  const [groupByTask, setGroupByTask] = useState(false);

  return (
    <div className="bg-white p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-inter  font-medium text-[#777777]">Timesheets Overview</h1>
      <Link href="/dashboard/Reports/TimesheetsSummary">  <button className="border  text-base font-medium font-inter  text-[#5A5A5A]  border-[#5A5A5A] bg-[#E6E6E6]  px-4 py-2 rounded-md  hover:bg-gray-200 transition-all">
          My Time Sheets
        </button></Link>
      </div>

      {/* Chart Area */}
      <div className="border rounded-lg p-6 mb-6 bg-white relative" style={{ height: "420px" }}>
        {/* Y-axis labels */}
        <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-6 z-10">
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
          <SelectTrigger className="w-full bg-[#F1F1F1] border h-10 border-gray-300 rounded-md px-3 py-4 text-sm text-gray-700">
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
        <div className="relative flex-1 max-w-3xl flex items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Knowledge Base"
            className="w-full bg-[#F6F6FB] border border-gray-300 rounded-md px-4 py-6 text-sm pr-10"
          />
          <Search className="absolute right-3 top-6 h-4 w-4 text-gray-400" />
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
      <div className="overflow-x-auto border ">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-left text-gray-600 border-b">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold">Staff Member</th>
              <th className="px-4 py-3 text-sm font-semibold">Task</th>
              <th className="px-4 py-3 text-sm font-semibold">Time Sheets Tags</th>
              <th className="px-4 py-3 text-sm font-semibold">Start Time</th>
              <th className="px-4 py-3 text-sm font-semibold">End Time</th>
              <th className="px-4 py-3 text-sm font-semibold">Note</th>
              <th className="px-4 py-3 text-sm font-semibold">Related</th>
              <th className="px-4 py-3 text-sm font-semibold">Time (h)</th>
              <th className="px-4 py-3 text-sm font-semibold">Time (Decimal)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={9} className="text-center py-8 text-gray-500">
                No Entries Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}