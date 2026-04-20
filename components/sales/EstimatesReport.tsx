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

export default function EstimatesReport() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
 const [statusFilter, setStatusFilter] = useState("All"); // ⭐ NEW
  // Dummy data
  const data = [
    {
      estimate: "EST-00013",
      customer: "Brooklyn Simmons",
      invoice: "INV-0045",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Accepted",
    },
    {
      estimate: "EST-00014",
      customer: "Ralph Edwards",
      invoice: "INV-0046",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Sent",
    },
    {
      estimate: "EST-00015",
      customer: "Devon Lane",
      invoice: "INV-0047",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Open",
    },
    {
      estimate: "EST-00016",
      customer: "Marvin McKinney",
      invoice: "INV-0048",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Revised",
    },
    {
      estimate: "EST-00013",
      customer: "Brooklyn Simmons",
      invoice: "INV-0045",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Accepted",
    },
    {
      estimate: "EST-00014",
      customer: "Ralph Edwards",
      invoice: "INV-0046",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Sent",
    },
    {
      estimate: "EST-00015",
      customer: "Devon Lane",
      invoice: "INV-0047",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Open",
    },
    {
      estimate: "EST-00016",
      customer: "Marvin McKinney",
      invoice: "INV-0048",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Revised",
    },
    {
      estimate: "EST-00013",
      customer: "Brooklyn Simmons",
      invoice: "INV-0045",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Accepted",
    },
    {
      estimate: "EST-00014",
      customer: "Ralph Edwards",
      invoice: "INV-0046",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Sent",
    },
    {
      estimate: "EST-00015",
      customer: "Devon Lane",
      invoice: "INV-0047",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Open",
    },
    {
      estimate: "EST-00016",
      customer: "Marvin McKinney",
      invoice: "INV-0048",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Revised",
    },
    {
      estimate: "EST-00013",
      customer: "Brooklyn Simmons",
      invoice: "INV-0045",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Accepted",
    },
    {
      estimate: "EST-00014",
      customer: "Ralph Edwards",
      invoice: "INV-0046",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Sent",
    },
    {
      estimate: "EST-00015",
      customer: "Devon Lane",
      invoice: "INV-0047",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Open",
    },
    {
      estimate: "EST-00016",
      customer: "Marvin McKinney",
      invoice: "INV-0048",
      date: "7-04-2024",
      expiry: "7-04-2024",
      amount: "$629.00",
      amountWithTax: "$629.00",
      totalTax: "$629.00",
      tax18: "$629.00",
      discount: "$629.00",
      reference: "$629.00",
      adjustment: "$629.00",
      status: "Revised",
    },
  ];

  // Search Filter
 const filtered = useMemo(() => {
    return data.filter((row) => {
      const matchSearch = row.customer.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "All" || row.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  // Pagination Logic
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

      {/* FILTERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Status */}
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

        {/* Agent */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#1F1F1F] font-medium font-inter">Sell Agent</label>
          <Select>
            <SelectTrigger className="w-full h-10 bg-gray-100 rounded-md px-3 py-2 text-sm text-gray-700">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-xl py-6">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Brooklyn Simmons">Brooklyn Simmons</SelectItem>
              <SelectItem value="Jerome Bell">Jerome Bell</SelectItem>
              <SelectItem value="Cameron Williamson">Cameron Williamson</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* SEARCH + EXPORT */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 items-start">
        <div className="flex flex-col gap-1 col-span-3">
          <div className="relative flex items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Customer"
              className="w-full bg-[#F6F6FB] rounded-lg px-3 py-4 md:py-5 text-sm"
            />
            <Search className="absolute right-3 top-4 md:top-6 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="flex justify-start md:justify-end mt-4">
          <button className="border border-gray-300 bg-[#E6E6E6] text-[#5A5A5A] h-10 px-4 py-2 font-semibold rounded-md text-base hover:bg-black hover:text-white transition-all">
            Export
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="mt-6 overflow-x-auto border">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-[#E6E6E6] text-left text-gray-600 text-xs">
            <tr className="h-6">
              <th className="px-4 py-3">Estimate</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Invoice</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Expiry</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Amount w/ Tax</th>
              <th className="px-4 py-3">Total Tax</th>
              <th className="px-4 py-3">Tax 18%</th>
              <th className="px-4 py-3">Discount</th>
              <th className="px-4 py-3">Reference</th>
              <th className="px-4 py-3">Adjustment</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((item, i) => (
              <tr
                key={i}
                className="border-t h-18 text-sm font-medium text-[#232323] hover:bg-gray-50"
              >
                <td className="px-4 py-3">{item.estimate}</td>
                <td className="px-4 py-3">{item.customer}</td>
                <td className="px-4 py-3">{item.invoice}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">{item.expiry}</td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">{item.amountWithTax}</td>
                <td className="px-4 py-3">{item.totalTax}</td>
                <td className="px-4 py-3">{item.tax18}</td>
                <td className="px-4 py-3">{item.discount}</td>
                <td className="px-4 py-3">{item.reference}</td>
                <td className="px-4 py-3">{item.adjustment}</td>

                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-md font-medium
                      ${
                        item.status === "Accepted"
                          ? "bg-green-100 text-green-600"
                          : item.status === "Declined"
                          ? "bg-red-100 text-red-600"
                          : item.status === "Sent"
                          ? "bg-blue-100 text-blue-600"
                          : item.status === "Open"
                          ? "bg-purple-100 text-purple-600"
                          : item.status === "Revised"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-gray-200 text-gray-600"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}

            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={13} className="text-center py-6 text-gray-500">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-4 flex-wrap gap-4">
        <p className="text-base font-semibold text-[#777777]">
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
