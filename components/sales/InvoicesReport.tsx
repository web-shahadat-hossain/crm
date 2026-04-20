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
export default function InvoicesReport() {
  
 
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Dummy data (20 rows for example)
  const data = Array.from({ length: 40 }).map((_, i) => ({
    invoice: `INV-000${24 + i}`,
    customer: [
      "Brooklyn Simmons",
      "Tarek",
      "Devon Lane",
      "Marvin McKinney",
      "Theresa Webb",
      "Jerome Bell",
      "Kristin Watson",
      "Arlene McCoy",
      "Esther Howard",
      "Jacob Jones",
      "Savannah Nguyen",
    ][i % 11],
    date: "7-04-2024",
    due: "7-04-2024",
    amount: "$629.00",
  }));

  // Filtered data
  const filtered = useMemo(() => {
    return data.filter((item) =>
      item.customer.toLowerCase().includes(search.toLowerCase())
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
    <div className="border rounded-xl bg-white p-6 shadow-sm w-full">
      {/* ---------------- Filters ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       <div className="flex flex-col gap-1">
      <label className="text-sm text-[#1F1F1F] font-medium font-inter">status</label>

      <Select >
        <SelectTrigger className="w-full h-10!  bg-gray-100 rounded-md px-3 py-2 text-sm text-gray-700">
          <SelectValue  placeholder="All" />
        </SelectTrigger>

        <SelectContent className="bg-white shadow-xl py-6">
          <div className="flex flex-col items-center gap-6">
              <SelectItem value="All" className="text-center text-gray-600">
            All
            </SelectItem>
            <SelectItem value="unpaid" className="text-center text-gray-600">
              Unpaid
            </SelectItem>

            <SelectItem value="paid" className="text-center text-gray-600">
              Paid
            </SelectItem>

            <SelectItem value="overdue" className="text-center text-gray-600">
              Overdue
            </SelectItem>

            <SelectItem value="partial" className="text-center text-gray-600">
              Partially Paid
            </SelectItem>

            <SelectItem value="draft" className="text-center text-gray-600">
              Draft
            </SelectItem>
            <SelectItem value="Open" className="text-center text-gray-600">
              Open
            </SelectItem>
            <SelectItem value=" Close" className="text-center text-gray-600">
            Close
            </SelectItem>
            <SelectItem value="Void" className="text-center text-gray-600">
           Void
            </SelectItem>

                     
          </div>
        </SelectContent>
      </Select>
    </div>

        {/* Agent */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#1F1F1F] font-medium font-inter">Sell Agent</label>
            <Select>
        <SelectTrigger className="w-full h-10! bg-gray-100 rounded-md px-3 py-2 text-sm text-gray-700">
          <SelectValue placeholder="All" />
        </SelectTrigger>

        <SelectContent className="bg-white shadow-xl py-6">
          <div className="flex flex-col items-center gap-6">
            <SelectItem value="All" className="text-center text-gray-600">
            All
            </SelectItem>
            <SelectItem value="Brooklyn" className="text-center text-gray-600">
            Brooklyn Simmons
            </SelectItem>
            <SelectItem value="Brooklyn" className="text-center text-gray-600">
            Brooklyn Simmons
            </SelectItem>

            <SelectItem value="Darrell" className="text-center text-gray-600">
             Darrell Steward
            </SelectItem>

            <SelectItem value="Jerome" className="text-center text-gray-600">
         Jerome Bell
            </SelectItem>

            <SelectItem value="Cameron" className="text-center text-gray-600">
              Cameron Williamson
            </SelectItem>

           
          </div>
        </SelectContent>
      </Select>
        </div>

        
      </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 items-start">
  {/* Search */}
        <div className="flex flex-col gap-1 col-span-3">
          
          <div className="relative flex items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Knowledge Base"
              className="w-full bg-[#F6F6FB]  rounded-lg px-3 py-4 md:py-5 text-sm"
            />
            <Search className="absolute right-3 top-4 md:top-6 h-4 w-4 text-gray-400" />
          </div>
        </div>
      {/* Export */}
      <div className="flex justify-start md:justify-end mt-4 ">
        <button className="border border-gray-300 bg-[#E6E6E6] text-[#5A5A5A] h-10 px-4 py-2 font-semibold rounded-md text-base font-inter hover:bg-black hover:text-white transition-all ease-in-out">
          Export
        </button>
      </div>
</div>

      {/* ---------------- Table ---------------- */}
      <div className="mt-6 overflow-x-auto  border">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-[#E6E6E6]  text-left text-gray-600 text-xs">
            <tr className="h-6">
              <th className="px-4 py-3 text-sm  font-semibold font-inter">Invoice</th>
              <th className="px-4 py-3 text-sm  font-semibold font-inter">Customer</th>
              <th className="px-4 py-3 text-sm  font-semibold font-inter">Date</th>
              <th className="px-4 py-3 text-sm  font-semibold font-inter">Due Date</th>
              <th className="px-4 py-3 text-sm  font-semibold font-inter">Amount</th>
              <th className="px-4 py-3 text-sm  font-semibold font-inter">Amount with Tax</th>
              <th className="px-4 py-3 text-sm  font-semibold font-inter">Total Tax</th>
              <th className="px-4 py-3 text-sm  font-semibold font-inter">Tax 18%</th>
              <th className="px-4 py-3 text-sm  font-semibold font-inter">Tax 10%</th>
              <th className="px-4 py-3 text-sm  font-semibold font-inter">Tax 5%</th>
              <th className="px-4 py-3 text-sm  font-semibold font-inter">Discount</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((item, i) => (
              <tr key={i} className="border-t h-18 text-sm font-medium font-inter text-[#232323] hover:bg-gray-50">
                <td className="px-4 py-3">{item.invoice}</td>
                <td className="px-4 py-3">{item.customer}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">{item.due}</td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">{item.amount}</td>
              </tr>
            ))}

            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={11} className="text-center py-6 text-gray-500">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

{/* ---------------- Pagination ---------------- */}
<div className="flex justify-between items-center text-sm text-gray-600 mt-4 flex-wrap gap-4">

  {/* Left side text */}
  <p className="text-base font-semibold font-inter text-[#777777]">
    Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
    {Math.min(currentPage * rowsPerPage, filtered.length)} of{" "}
    {filtered.length} entries
  </p>

  {/* Simple Pagination */}
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
