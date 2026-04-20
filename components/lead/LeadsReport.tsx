"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LeadsReport() {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Dummy data - extended to show pagination
  const data = Array.from({ length: 25 }).map((_, i) => ({
    date: `${String(i + 1).padStart(2, "0")}-01-2025`,
    totalCreateLeads: 33,
    lostLeads: 33,
    totalConvertedLeads: 33,
    untouchedLeads: 33,
  }));

  // Filtered data
  const filtered = useMemo(() => {
    return data.filter((item) =>
      item.date.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginatedData = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="bg-white p-6 w-full  mx-auto">
      {/* Month Selector */}
      <div className="mb-6 w-xl">
        <label className="text-sm text-[#1F1F1F] font-medium font-inter mb-2 block">
          Month
        </label>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-full bg-[#E6E6E6] border-0 rounded-md px-3 py-4 text-sm text-gray-700">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent className="bg-white shadow-xl">
            <SelectItem value="January">January</SelectItem>
            <SelectItem value="February">February</SelectItem>
            <SelectItem value="March">March</SelectItem>
            <SelectItem value="April">April</SelectItem>
            <SelectItem value="May">May</SelectItem>
            <SelectItem value="June">June</SelectItem>
            <SelectItem value="July">July</SelectItem>
            <SelectItem value="August">August</SelectItem>
            <SelectItem value="September">September</SelectItem>
            <SelectItem value="October">October</SelectItem>
            <SelectItem value="November">November</SelectItem>
            <SelectItem value="December">December</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Search and Export Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 items-end">
        {/* Search */}
        <div className="col-span-3">
          <div className="relative flex items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Knowledge Base"
              className="w-full bg-[#F6F6FB] border-0 rounded-lg px-4 py-3 text-sm pr-10"
            />
            <Search className="absolute right-3 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Export Button */}
        <div className="flex justify-start md:justify-end">
          <button className="border border-gray-300 bg-[#E6E6E6] text-[#5A5A5A] h-10 px-6 font-semibold rounded-md text-sm font-inter hover:bg-black hover:text-white transition-all">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border ">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-[#E6E6E6] text-left text-gray-600">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold font-inter">Date</th>
              <th className="px-4 py-3 text-sm font-semibold font-inter">Total Create Leads</th>
              <th className="px-4 py-3 text-sm font-semibold font-inter">Lost Leads</th>
              <th className="px-4 py-3 text-sm font-semibold font-inter">Total Converted Leads</th>
              <th className="px-4 py-3 text-sm font-semibold font-inter">Untouched Leads</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((item, i) => (
              <tr key={i} className="border-t text-sm font-medium font-inter text-[#232323] hover:bg-gray-50">
                <td className="px-4 py-4">{item.date}</td>
                <td className="px-4 py-4">{item.totalCreateLeads}</td>
                <td className="px-4 py-4">{item.lostLeads}</td>
                <td className="px-4 py-4">{item.totalConvertedLeads}</td>
                <td className="px-4 py-4">{item.untouchedLeads}</td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-4 flex-wrap gap-4">
        {/* Left side text */}
        <p className="text-base font-semibold font-inter text-[#777777]">
          Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
          {Math.min(currentPage * rowsPerPage, filtered.length)} of{" "}
          {filtered.length} entries
        </p>

        {/* Pagination Controls */}
        <div className="flex items-center gap-3">
          {/* Previous */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-1 border rounded-md ${
              currentPage === 1 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>

          {/* Page Indicator */}
          <span className="px-3 py-1 border rounded-md bg-gray-50">
            {currentPage}
          </span>

          {/* Next */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-1 border rounded-md bg-black text-white ${
              currentPage === totalPages ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}