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

export default function ProposalsReport() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All"); // ⭐ NEW
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const data = [
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Bessie Cooper", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 628, status: "Accepted" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Dianne Russell", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Declined" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Devon Lane", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Sent" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Wade Warren", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Open" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Jane Cooper", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Revised" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Theresa Webb", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Draft" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Bessie Cooper", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 628, status: "Accepted" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Dianne Russell", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Declined" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Devon Lane", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Sent" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Wade Warren", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Open" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Jane Cooper", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Revised" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Theresa Webb", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Draft" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Bessie Cooper", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 628, status: "Accepted" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Dianne Russell", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Declined" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Devon Lane", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Sent" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Wade Warren", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Open" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Jane Cooper", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Revised" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Theresa Webb", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Draft" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Bessie Cooper", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 628, status: "Accepted" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Dianne Russell", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Declined" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Devon Lane", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Sent" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Wade Warren", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Open" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Jane Cooper", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Revised" },
    { proposal: "PRO-000002", subject: "Web Design Proposal", to: "Theresa Webb", date: "7-04-2024", amount: 629, amountWithTax: 629, totalTax: 629, tax20: 629, discount: 629, adjustment: 629, status: "Draft" },
  ];

  // -------------------------
  // FILTER + STATUS FILTER + PAGINATION
  // -------------------------
  const filtered = useMemo(() => {
    return data.filter((row) => {
      const matchSearch = row.subject.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "All" || row.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);

  const paginatedData = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const goToPage = (page:number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // -------------------------
  // TOTAL (PAGE LEVEL)
  // -------------------------
  const totalAmount = paginatedData.reduce((acc, item) => acc + item.amount, 0);
  const totalAmountWithTax = paginatedData.reduce((acc, item) => acc + item.amountWithTax, 0);
  const totalTax = paginatedData.reduce((acc, item) => acc + item.totalTax, 0);
  const totalTax20 = paginatedData.reduce((acc, item) => acc + item.tax20, 0);
  const totalDiscount = paginatedData.reduce((acc, item) => acc + item.discount, 0);
  const totalAdjustment = paginatedData.reduce((acc, item) => acc + item.adjustment, 0);

  return (
    <div className="border rounded-xl bg-white p-6 shadow-sm w-full">
      {/* Status Filter */}
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
              placeholder="Search Knowledge Base"
              className="w-full bg-[#F6F6FB] rounded-lg px-3 py-4 md:py-5 text-sm"
            />
            <Search className="absolute right-3 top-4 md:top-6 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="flex justify-start md:justify-end mt-4">
          <button className="border border-gray-300 bg-[#E6E6E6] text-[#5A5A5A] h-10 px-4 py-2 font-semibold rounded-md">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto border">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-[#E6E6E6] text-left text-gray-600 text-xs">
            <tr>
              <th className="px-4 py-3">Proposal #</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">To</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Amount with Tax</th>
              <th className="px-4 py-3">Total Tax</th>
              <th className="px-4 py-3">Tax 20%</th>
              <th className="px-4 py-3">Discount</th>
              <th className="px-4 py-3">Adjustment</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((row, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{row.proposal}</td>
                <td className="px-4 py-3">{row.subject}</td>
                <td className="px-4 py-3">{row.to}</td>
                <td className="px-4 py-3">{row.date}</td>
                <td className="px-4 py-3">${row.amount}</td>
                <td className="px-4 py-3">${row.amountWithTax}</td>
                <td className="px-4 py-3">${row.totalTax}</td>
                <td className="px-4 py-3">${row.tax20}</td>
                <td className="px-4 py-3">${row.discount}</td>
                <td className="px-4 py-3">${row.adjustment}</td>

                <td className="px-4 py-3">
                  <span
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
                  </span>
                </td>
              </tr>
            ))}

            {/* Total Row */}
            <tr className="border-t bg-gray-50 font-semibold">
              <td colSpan={4} className="px-4 py-3 text-right">
                Total (Per Page)
              </td>
              <td className="px-4 py-3">${totalAmount}</td>
              <td className="px-4 py-3">${totalAmountWithTax}</td>
              <td className="px-4 py-3">${totalTax}</td>
              <td className="px-4 py-3">${totalTax20}</td>
              <td className="px-4 py-3">${totalDiscount}</td>
              <td className="px-4 py-3">${totalAdjustment}</td>
              <td></td>
            </tr>

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

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <p>
          Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
          {Math.min(currentPage * rowsPerPage, filtered.length)} of {filtered.length} entries
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-1 border rounded-md"
          >
            Previous
          </button>

          <span className="px-3 py-1 border rounded-md bg-gray-50">
            {currentPage}
          </span>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-1 border rounded-md bg-black text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
