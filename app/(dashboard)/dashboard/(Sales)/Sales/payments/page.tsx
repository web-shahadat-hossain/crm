"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

interface Payment {
  id: number;
  paymentNumber: number;
  invoiceNumber: string;
  paymentMode: string;
  customer: string;
  transactionId: string;
  amount: string;
  date: string;
}

const paymentsData: Payment[] = [
  { id: 1,  paymentNumber: 10, invoiceNumber: "INV-000002", paymentMode: "Bank",            customer: "Hermann and Sons",   transactionId: "TN78723729", amount: "$256.00", date: "08.07.2025" },
  { id: 2,  paymentNumber: 10, invoiceNumber: "INV-000002", paymentMode: "Stripe Checkout", customer: "Cameron Williamson", transactionId: "TN78723729", amount: "$256.00", date: "08.07.2025" },
  { id: 3,  paymentNumber: 10, invoiceNumber: "INV-000002", paymentMode: "Bank",            customer: "Hermann and Sons",   transactionId: "TN78723729", amount: "$256.00", date: "08.07.2025" },
  { id: 4,  paymentNumber: 10, invoiceNumber: "INV-000002", paymentMode: "Stripe Checkout", customer: "Hermann and Sons",   transactionId: "TN78723729", amount: "$256.00", date: "08.07.2025" },
  { id: 5,  paymentNumber: 10, invoiceNumber: "INV-000002", paymentMode: "Bank",            customer: "Hermann and Sons",   transactionId: "TN78723729", amount: "$256.00", date: "08.07.2025" },
  { id: 6,  paymentNumber: 10, invoiceNumber: "INV-000002", paymentMode: "Bank",            customer: "Hermann and Sons",   transactionId: "TN78723729", amount: "$256.00", date: "08.07.2025" },
  { id: 7,  paymentNumber: 10, invoiceNumber: "INV-000002", paymentMode: "Bank",            customer: "Hermann and Sons",   transactionId: "TN78723729", amount: "$256.00", date: "08.07.2025" },
  { id: 8,  paymentNumber: 10, invoiceNumber: "INV-000002", paymentMode: "Bank",            customer: "Hermann and Sons",   transactionId: "TN78723729", amount: "$256.00", date: "08.07.2025" },
  { id: 9,  paymentNumber: 10, invoiceNumber: "INV-000002", paymentMode: "Bank",            customer: "Hermann and Sons",   transactionId: "TN78723729", amount: "$256.00", date: "08.07.2025" },
  { id: 10, paymentNumber: 10, invoiceNumber: "INV-000002", paymentMode: "Bank",            customer: "Hermann and Sons",   transactionId: "TN78723729", amount: "$256.00", date: "08.07.2025" },
];

const Payments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = paymentsData.filter(
    (p) =>
      p.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalEntries = 12;

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Payments</h1>
      <hr className="mb-5" />

      {/* Search */}
      <div className="relative w-full max-w-xs mb-6">
        <input
          type="text"
          placeholder="Search Payment"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#F6F6FB] rounded-md px-3 py-2.5 text-sm border border-gray-200 pr-9"
        />
        <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>

      {/* Table */}
      <div className="border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left font-medium text-gray-600">Payments #</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">Invoice #</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">Payment Mode</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">Customer</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">Transaction ID</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">Amount</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filtered.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                {/* Payments # */}
                <td className="px-4 py-4">
                  <div className="text-sm text-gray-800">{payment.paymentNumber}</div>
                  <div className="flex gap-2 mt-0.5">
                    <Link
                      href={`/dashboard/Sales/payments/${payment.id}`}
                      className="text-xs text-gray-400 hover:text-gray-600"
                    >
                      Edit
                    </Link>
                    <span className="text-xs text-gray-300">·</span>
                    <button className="text-xs text-gray-400 hover:text-red-500">Delete</button>
                  </div>
                </td>

                {/* Invoice # */}
                <td className="px-4 py-4 text-sm text-gray-700 text-center">{payment.invoiceNumber}</td>

                {/* Payment Mode */}
                <td className="px-4 py-4 text-sm text-gray-700 text-center">{payment.paymentMode}</td>

                {/* Customer */}
                <td className="px-4 py-4 text-sm text-gray-700 text-center">{payment.customer}</td>

                {/* Transaction ID */}
                <td className="px-4 py-4 text-sm text-gray-700 text-center">{payment.transactionId}</td>

                {/* Amount */}
                <td className="px-4 py-4 text-sm text-gray-700 text-center">{payment.amount}</td>

                {/* Date */}
                <td className="px-4 py-4 text-sm text-gray-700 text-center">{payment.date}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-sm text-gray-400">
                  No payments found.
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

export default Payments;