/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";

export default function PaymentsReceived() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const data = [
    {
      payment: 5,
      date: "11/04/2025",
      invoice: "ZZZ-000008/04/2025",
      customer: "Jenny Wilson",
      paymentMode: "Bank",
      transactionId: "Tn797398733",
      note: "Alice joined the procession, wondering very much.",
      amount: "$629.00",
    },
    {
      payment: 4,
      date: "11/04/2025",
      invoice: "ZZZ-000008/04/2025",
      customer: "Albert Flores",
      paymentMode: "Bank",
      transactionId: "Tn797398733",
      note: "D,' she added aloud. Do you mean purpose?",
      amount: "$629.00",
    },
    {
      payment: 3,
      date: "11/04/2025",
      invoice: "ZZZ-000008/04/2025",
      customer: "Cameron Williamson",
      paymentMode: "Bank",
      transactionId: "Tn797398733",
      note: "Alice joined the procession, wondering very much.",
      amount: "$629.00",
    },
    {
      payment: 4,
      date: "11/04/2025",
      invoice: "ZZZ-000008/04/2025",
      customer: "Web Design",
      paymentMode: "Bank",
      transactionId: "Tn797398733",
      note: "Alice joined the procession, wondering very much.",
      amount: "$629.00",
    },
    {
      payment: 3,
      date: "11/04/2025",
      invoice: "ZZZ-000008/04/2025",
      customer: "Robert Fox",
      paymentMode: "Bank",
      transactionId: "Tn797398733",
      note: "Alice joined the procession, wondering very much.",
      amount: "$629.00",
    },
  ];

  // Filter
  const filtered = useMemo(() => {
    return data.filter((row) =>
      row.customer.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginatedData = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Calculate Total Amount (this page)
  const totalAmount = paginatedData.reduce(
    (sum, row) => sum + Number(row.amount.replace(/[$,]/g, "")),
    0
  );

  return (
    <div className="border rounded-xl bg-white p-6 shadow-sm w-full">
      {/* Search */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 items-start">
        <div className="flex flex-col gap-1 col-span-3">
          <div className="relative flex items-center">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search Customer"
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

      {/* Table */}
      <div className="mt-6 overflow-x-auto border">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-[#E6E6E6] text-gray-600 text-xs">
            <tr className="h-6 text-center">
              <th className="px-4 py-3">Payment</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Invoice</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Payment Mode</th>
              <th className="px-4 py-3">Transaction ID</th>
              <th className="px-4 py-3">Note</th>
              <th className="px-4 py-3">Amount</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((row, i) => (
              <tr
                key={i}
                className="border-t h-18 text-sm font-medium text-[#232323] hover:bg-gray-50 text-center"
              >
                <td className="px-4 py-3">{row.payment}</td>
                <td className="px-4 py-3">{row.date}</td>
                <td className="px-4 py-3">{row.invoice}</td>
                <td className="px-4 py-3">{row.customer}</td>
                <td className="px-4 py-3">{row.paymentMode}</td>
                <td className="px-4 py-3">{row.transactionId}</td>
                <td className="px-4 py-3">{row.note}</td>
                <td className="px-4 py-3">{row.amount}</td>
              </tr>
            ))}

            {/* Total Row */}
            <tr className="border-t bg-gray-50 font-semibold text-center">
              <td className="px-4 py-3">Total (Per Page)</td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3">{`$${totalAmount.toFixed(2)}`}</td>
            </tr>

            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-6 text-gray-500">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
