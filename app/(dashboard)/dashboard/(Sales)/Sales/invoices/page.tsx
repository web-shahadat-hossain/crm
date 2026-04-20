"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

type StatusType = "Partially Paid" | "Paid" | "Unpaid" | "Overdue" | "Draft";

interface Invoice {
  id: number;
  invoiceNumber: string;
  amount: string;
  totalTax: string;
  date: string;
  customer: string;
  tags: string;
  project: string;
  dueDate: string;
  status: StatusType;
}

const statusStyles: Record<StatusType, string> = {
  "Partially Paid": "bg-purple-100 text-purple-500",
  Paid:             "bg-green-100 text-green-600",
  Unpaid:           "bg-red-100 text-red-500",
  Overdue:          "bg-orange-100 text-orange-500",
  Draft:            "bg-pink-100 text-pink-400",
};

const summaryCards: { label: string; value: string; count: string; color: string }[] = [
  { label: "Unpaid",         value: "41.65%", count: "5/12", color: "text-red-500" },
  { label: "Paid",           value: "41.65%", count: "5/12", color: "text-green-500" },
  { label: "Partially Paid", value: "41.65%", count: "5/12", color: "text-yellow-500" },
  { label: "Overdue",        value: "41.65%", count: "5/12", color: "text-orange-500" },
  { label: "Draft",          value: "41.65%", count: "5/12", color: "text-purple-500" },
];

const invoicesData: Invoice[] = [
  { id: 1,  invoiceNumber: "INV-000002", amount: "$256.00", totalTax: "$256.00", date: "2025-03-19", customer: "Hermann and Sons",   tags: "", project: "", dueDate: "2025-03-19", status: "Partially Paid" },
  { id: 2,  invoiceNumber: "INV-000002", amount: "$256.00", totalTax: "$256.00", date: "2025-03-19", customer: "Cameron Williamson", tags: "", project: "", dueDate: "2025-03-19", status: "Paid" },
  { id: 3,  invoiceNumber: "INV-000002", amount: "$256.00", totalTax: "$256.00", date: "2025-03-19", customer: "Hermann and Sons",   tags: "", project: "", dueDate: "2025-03-19", status: "Unpaid" },
  { id: 4,  invoiceNumber: "INV-000002", amount: "$256.00", totalTax: "$256.00", date: "2025-03-19", customer: "Hermann and Sons",   tags: "", project: "", dueDate: "2025-03-19", status: "Overdue" },
  { id: 5,  invoiceNumber: "INV-000002", amount: "$256.00", totalTax: "$256.00", date: "2025-03-19", customer: "Hermann and Sons",   tags: "", project: "", dueDate: "2025-03-19", status: "Draft" },
  { id: 6,  invoiceNumber: "INV-000002", amount: "$256.00", totalTax: "$256.00", date: "2025-03-19", customer: "Hermann and Sons",   tags: "", project: "", dueDate: "2025-03-19", status: "Partially Paid" },
  { id: 7,  invoiceNumber: "INV-000002", amount: "$256.00", totalTax: "$256.00", date: "2025-03-19", customer: "Hermann and Sons",   tags: "", project: "", dueDate: "2025-03-19", status: "Paid" },
  { id: 8,  invoiceNumber: "INV-000002", amount: "$256.00", totalTax: "$256.00", date: "2025-03-19", customer: "Hermann and Sons",   tags: "", project: "", dueDate: "2025-03-19", status: "Unpaid" },
  { id: 9,  invoiceNumber: "INV-000002", amount: "$256.00", totalTax: "$256.00", date: "2025-03-19", customer: "Hermann and Sons",   tags: "", project: "", dueDate: "2025-03-19", status: "Overdue" },
  { id: 10, invoiceNumber: "INV-000002", amount: "$256.00", totalTax: "$256.00", date: "2025-03-19", customer: "Hermann and Sons",   tags: "", project: "", dueDate: "2025-03-19", status: "Draft" },
];

const Invoices = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = invoicesData.filter(
    (inv) =>
      inv.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalEntries = 12;

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        <h1 className="text-2xl font-semibold text-gray-700">Invoices</h1>
        {/* Top stats */}
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="bg-[#0AA90F1A] text-white text-xs px-2 py-2.5 rounded font-semibold">
            <span className="text-[#0AA90F] text-sm font-inter font-semibold">Paid Invoices </span>
            <span className=" text-[#2D2D2D] text-sm   font-semibold">$15,487.00</span>
          </span>
          <span className="bg-[#FF00001A] text-white text-xs px-2 py-2.5 rounded font-semibold">
            <span className="text-[#FF0000] text-sm font-inter font-semibold">Past Due Invoices </span>
            <span className=" text-[#2D2D2D] text-sm   font-semibold">$00.00</span>
          </span>
          <span className="bg-[#FFB2001A] text-white text-xs px-2 py-2.5 rounded font-semibold">
            <span className="text-[#FFB200] text-sm font-inter font-semibold">Outstanding Invoices</span>
            <span className=" text-[#2D2D2D] text-sm   font-semibold">$00.00</span>
          </span>
        </div>
      </div>

      {/* Search + Buttons row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        <div className="relative w-full max-w-2xl ">
          <input
            type="text"
            placeholder="Search Customer"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F6F6FB] rounded-md px-3 py-2.5 text-sm border border-gray-200 pr-9"
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
        <div className="flex gap-2">
         <Link href={"/dashboard/Sales/invoices/CreateNewInvoice"}>
          <button className="border border-gray-300 bg-[#E6E6E6] px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition">
            Create New Invoices
          </button></Link>

          <button className="border border-gray-300 bg-[#E6E6E6] px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition">
            Batch Payments
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {summaryCards.map((card) => (
          <div key={card.label} className="border border-gray-200 rounded-lg px-4 py-4 bg-white">
            <p className={`text-sm font-semibold ${card.color}`}>
              {card.label}{" "}
              <span className="text-gray-400 font-normal text-xs">({card.value})</span>
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-1">{card.count}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#E6E6E6] border-b border-gray-200">
              <th className="px-4 py-3 text-left font-medium text-gray-600">Invoice #</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Amount</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Total Tax</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Date</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Customer</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Tags</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Project</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Due Date</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filtered.map((inv) => (
              <tr key={inv.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="text-sm text-gray-800">{inv.invoiceNumber}</div>
                  <div className="flex gap-2 mt-0.5">
                    <Link href={`/dashboard/Sales/invoices/editInvoices`} className="text-xs text-gray-400 hover:text-gray-600">
                      Edit
                    </Link>
                    <span className="text-xs text-gray-300">·</span>
                    <button className="text-xs text-gray-400 hover:text-red-500">Delete</button>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{inv.amount}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{inv.totalTax}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{inv.date}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{inv.customer}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{inv.tags}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{inv.project}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{inv.dueDate}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium ${statusStyles[inv.status]}`}>
                    {inv.status}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={9} className="px-4 py-8 text-center text-sm text-gray-400">
                  No invoices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          Showing 1 to {filtered.length} of {totalEntries} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button className="px-3 py-1 text-sm bg-black text-white rounded">1</button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoices;