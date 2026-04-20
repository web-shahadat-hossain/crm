/* eslint-disable react-hooks/exhaustive-deps */
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

export default function CreditNotesReport() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
    const [statusFilter, setStatusFilter] = useState("All");

  // ------------------ UPDATED DATA (MATCHING YOUR SCREENSHOT) ------------------
  const data = [
  {
    creditNote: "CN-000001",
    date: "7-04-2024",
    customer: "Brooklyn Simmons",
    reference: "-",
    amount: "$629.00",
    amountWithTax: "$629.00",
    totalTax: "$629.00",
    discount: "$629.00",
    adjustment: "$629.00",
    remaining: "$629.00",
    status: "Open",
  },
  {
    creditNote: "CN-000002",
    date: "7-04-2024",
    customer: "Brooklyn Simmons",
    reference: "-",
    amount: "$629.00",
    amountWithTax: "$629.00",
    totalTax: "$629.00",
    discount: "$629.00",
    adjustment: "$629.00",
    remaining: "$629.00",
    status: "Draft",
  },
  {
    creditNote: "CN-000003",
    date: "7-04-2024",
    customer: "Brooklyn Simmons",
    reference: "-",
    amount: "$629.00",
    amountWithTax: "$629.00",
    totalTax: "$629.00",
    discount: "$629.00",
    adjustment: "$629.00",
    remaining: "$629.00",
    status: "Sent",
  },
];


  // ------------------ FILTER + PAGINATION ------------------
  const filtered = useMemo(() => {
    return data.filter((row) => {
      const matchSearch = row.customer.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "All" || row.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

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
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div className="flex flex-col gap-1">
          <label className="text-sm text-[#1F1F1F] font-medium font-inter">Status</label>

          <Select
            value={statusFilter}
            onValueChange={(value) => {
              setStatusFilter(value);
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-full h-10 bg-gray-100 rounded-md px-3 py-2 text-sm text-gray-700">
              <SelectValue placeholder="All" />
            </SelectTrigger>

            <SelectContent className="bg-white shadow-xl py-6">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="Draft">Draft</SelectItem>
              <SelectItem value="Sent">Sent</SelectItem>
              <SelectItem value="Revised">Revised</SelectItem>
              <SelectItem value="Declined">Declined</SelectItem>
              <SelectItem value="Accepted">Accepted</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Search + Export */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 items-start">
        <div className="flex flex-col gap-1 col-span-3">
          <div className="relative flex items-center">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search Knowledge Base"
              className="w-full bg-[#F6F6FB] rounded-lg px-3 py-4 md:py-5 text-sm"
            />
            <Search className="absolute right-3 top-4 md:top-6 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="flex justify-start md:justify-end mt-4">
          <button className="border border-gray-300 bg-[#E6E6E6] text-[#5A5A5A] h-10 px-4 py-2 font-semibold rounded-md text-base font-inter hover:bg-black hover:text-white transition-all ease-in-out">
            Export
          </button>
        </div>
      </div>

      {/* ------------------ TABLE START ------------------ */}
      <div className="mt-6 overflow-x-auto border">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-[#E6E6E6] text-left text-gray-600 text-xs">
            <tr className="h-6">
              <th className="px-4 py-3 text-center">Credit Note</th>
              <th className="px-4 py-3 text-center">Credit Note Date</th>
              <th className="px-4 py-3 text-center">Customer</th>
              <th className="px-4 py-3 text-center">Reference</th>
              <th className="px-4 py-3 text-center">Amount</th>
              <th className="px-4 py-3 text-center">Amount with Tax</th>
              <th className="px-4 py-3 text-center">Total Tax</th>
              <th className="px-4 py-3 text-center">Discount</th>
              <th className="px-4 py-3 text-center">Adjustment</th>
              <th className="px-4 py-3 text-center">Remaining Amount</th>
              <th className="px-4 py-3 text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((row, i) => (
              <tr
                key={i}
                className="border-t h-18 text-sm font-medium font-inter text-[#232323] hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-center">{row.creditNote}</td>
                <td className="px-4 py-3 text-center">{row.date}</td>
                <td className="px-4 py-3 text-center">{row.customer}</td>
                <td className="px-4 py-3 text-center">{row.reference}</td>
                <td className="px-4 py-3 text-center">{row.amount}</td>
                <td className="px-4 py-3 text-center">{row.amountWithTax}</td>
                <td className="px-4 py-3 text-center">{row.totalTax}</td>
                <td className="px-4 py-3 text-center">{row.discount}</td>
                <td className="px-4 py-3 text-center">{row.adjustment}</td>
                <td className="px-4 py-3 text-center">{row.remaining}</td>
                <td className="px-4 py-3 text-center">  <span
                    className={`px-3 py-1 text-xs rounded-md font-medium ${
                      row.status === "Accepted"
                        ? "bg-green-100 text-green-600"
                        : row.status === "Declined"
                        ? "bg-red-100 text-red-600"
                        : row.status === "Sent"
                        ? "bg-blue-100 text-blue-600"
                        : row.status === "Open"
                        ? "bg-purple-100 text-purple-600"
                        : row.status === "Revised"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {row.status}
                  </span></td>
              </tr>
            ))}

            {/* TOTAL ROW (PER PAGE) */}
            <tr className="border-t bg-gray-50 font-semibold">
              <td className="px-4 py-3 text-center">Total (Per Page)</td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>

              {/* SUM OF AMOUNT */}
              <td className="px-4 py-3 text-center">
                {`$${paginatedData
                  .reduce(
                    (sum, r) => sum + Number(r.amount.replace(/[$,]/g, "")),
                    0
                  )
                  .toFixed(2)}`}
              </td>

              {/* Amount With Tax */}
              <td className="px-4 py-3 text-center">
                {`$${paginatedData
                  .reduce(
                    (sum, r) =>
                      sum + Number(r.amountWithTax.replace(/[$,]/g, "")),
                    0
                  )
                  .toFixed(2)}`}
              </td>

              {/* Total Tax */}
              <td className="px-4 py-3 text-center">
                {`$${paginatedData
                  .reduce(
                    (sum, r) => sum + Number(r.totalTax.replace(/[$,]/g, "")),
                    0
                  )
                  .toFixed(2)}`}
              </td>

              {/* Discount */}
              <td className="px-4 py-3 text-center">
                {`$${paginatedData
                  .reduce(
                    (sum, r) => sum + Number(r.discount.replace(/[$,]/g, "")),
                    0
                  )
                  .toFixed(2)}`}
              </td>

              {/* Adjustment */}
              <td className="px-4 py-3 text-center">
                {`$${paginatedData
                  .reduce(
                    (sum, r) =>
                      sum + Number(r.adjustment.replace(/[$,]/g, "")),
                    0
                  )
                  .toFixed(2)}`}
              </td>

              {/* Remaining */}
              <td className="px-4 py-3 text-center">
                {`$${paginatedData
                  .reduce(
                    (sum, r) => sum + Number(r.remaining.replace(/[$,]/g, "")),
                    0
                  )
                  .toFixed(2)}`}
              </td>
            </tr>

            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={10} className="text-center py-6 text-gray-500">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-4 flex-wrap gap-4">
        <p className="text-base font-semibold font-inter text-[#777777]">
          Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
          {Math.min(currentPage * rowsPerPage, filtered.length)} of{" "}
          {filtered.length} entries
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-1 border rounded-md ${
              currentPage === 1 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>

          <span className="px-3 py-1 border rounded-md bg-gray-50">
            {currentPage}
          </span>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`px-4 py-1 border rounded-md bg-black text-white ${
              currentPage === totalPages || totalPages === 0
                ? "opacity-40 cursor-not-allowed"
                : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
