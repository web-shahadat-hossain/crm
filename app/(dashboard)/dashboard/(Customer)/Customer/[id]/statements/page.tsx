"use client";
import React from "react";

export default function CustomerStatement() {
  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm p-5 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-5">
          Customer Statement
        </h1>

        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <select className="w-full sm:w-56 rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400">
            <option>Period</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>

          <div className="flex items-center gap-2 justify-end">
            {["🖨️", "PDF", "✉️"].map((item, i) => (
              <button
                key={i}
                className="w-9 h-9 flex items-center justify-center border rounded-md text-sm text-gray-600 hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
          <div className="text-sm text-gray-700 space-y-1">
            <p className="font-medium">To:</p>
            <p>Big Kahuna Burger Ltd.</p>
            <p>6485 Oberbrunner Harbors Suite 147</p>
            <p>North Providencetown Virginia</p>
            <p>CD 41716</p>
            <p>VAT Number: AT U88013903</p>
          </div>

          <div className="text-sm text-gray-700 space-y-1 text-right">
            <p className="font-semibold text-red-600">Webnex IT</p>
            <p>53, Noyapara, Donia College Road</p>
            <p>Jatrabari, Dhaka 1236</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>

        <hr className="my-6" />

        {/* Account Summary */}
        <div className="flex justify-end mb-6">
          <div className="text-sm text-gray-700 space-y-2">
            <p className="font-medium text-gray-900">Account Summary</p>
            <p className="text-gray-500">2025-03-12 To 2025-03-12</p>

            <div className="space-y-1">
              <div className="flex justify-between gap-10">
                <span>Beginning Balance:</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between gap-10">
                <span>Invoiced Amount:</span>
                <span>$3690.00</span>
              </div>
              <div className="flex justify-between gap-10">
                <span>Amount Paid:</span>
                <span>$3690.00</span>
              </div>
              <div className="flex justify-between gap-10 font-medium">
                <span>Balance Due:</span>
                <span>$0.00</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm font-medium text-gray-700 mb-3">
          Showing all invoices and payments between{" "}
          <span className="font-semibold">2025-03-12</span> and{" "}
          <span className="font-semibold">2025-03-12</span>
        </p>

        {/* Responsive Table */}
        <div className="overflow-x-auto border ">
          <table className="min-w-[700px] w-full text-sm text-gray-700 border-collapse">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Date</th>
                <th className="px-4 py-2 text-left font-medium">Details</th>
                <th className="px-4 py-2 text-left font-medium">Amount</th>
                <th className="px-4 py-2 text-left font-medium">Payments</th>
                <th className="px-4 py-2 text-left font-medium">Balance</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3">2025-03-12</td>
                  <td className="px-4 py-3">Beginning Balance</td>
                  <td className="px-4 py-3">
                    {i === 1 ? "0.00" : i * 1290}.00
                  </td>
                  <td className="px-4 py-3">
                    {i === 1 ? "0.00" : i * 1290}.00
                  </td>
                  <td className="px-4 py-3">
                    {i === 1 ? "0.00" : i * 1290}.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-5 text-sm text-gray-500">
          <p>Showing 1 to 5 of 5 entries</p>

          <div className="flex items-center gap-2 mt-3 sm:mt-0">
            <button className="px-3 py-1 rounded-md border text-gray-400 cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700">
              1
            </button>
            <button className="px-3 py-1 rounded-md border text-gray-400 cursor-not-allowed">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
