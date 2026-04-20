"use client";

import Link from "next/link";

export default function InvoicesPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Invoices</h1>

      {/* Top Bar */}
      <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search Invoice"
              className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 justify-end">
           
             <Link href={`/dashboard/Customer/1/CreateNewInvoice`}> <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm">
               Create New Invoice
              </button></Link>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm">
              Zip Invoices
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm">
              Export
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="border rounded-lg p-4">
            <p className="text-orange-500 font-medium text-sm">
              Outstanding Invoices
            </p>
            <p className="text-lg font-semibold mt-1">$102,351.20</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-red-500 font-medium text-sm">
              Past Due Invoices
            </p>
            <p className="text-lg font-semibold mt-1">$0.00</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-green-500 font-medium text-sm">
              Paid Invoices
            </p>
            <p className="text-lg font-semibold mt-1">$219,444.40</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6 border ">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-3 text-left">Invoice #</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Total Tax</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Project</th>
                <th className="px-4 py-3 text-left">Tags</th>
                <th className="px-4 py-3 text-left">Due Date</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr className="border-t">
                <td className="px-4 py-3">
                  <p className="font-medium">INV-000013</p>
                  <p className="text-xs text-gray-500">Edit | Delete</p>
                </td>
                <td className="px-4 py-3">$4571.00</td>
                <td className="px-4 py-3">$4571.00</td>
                <td className="px-4 py-3">03-06-2025</td>
                <td className="px-4 py-3">Web Development</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3">03-06-2025</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-medium">
                    Paid
                  </span>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-t">
                <td className="px-4 py-3">
                  <p className="font-medium">INV-000013</p>
                  <p className="text-xs text-gray-500">Edit | Delete</p>
                </td>
                <td className="px-4 py-3">$4571.00</td>
                <td className="px-4 py-3">$4571.00</td>
                <td className="px-4 py-3">03-06-2025</td>
                <td className="px-4 py-3">Logo Design</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3">03-06-2025</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-medium">
                    Paid
                  </span>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-t">
                <td className="px-4 py-3">
                  <p className="font-medium">INV-000013</p>
                  <p className="text-xs text-gray-500">Edit | Delete</p>
                </td>
                <td className="px-4 py-3">$4571.00</td>
                <td className="px-4 py-3">$4571.00</td>
                <td className="px-4 py-3">03-06-2025</td>
                <td className="px-4 py-3">Logo Design</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3">03-06-2025</td>
                <td className="px-4 py-3">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-md text-xs font-medium">
                    Unpaid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-5 text-sm text-gray-500">
          <p>Showing 2 to 2 of 2 entries</p>
          <div className="flex items-center gap-2 mt-3 sm:mt-0">
            <button className="px-3 py-1 border rounded-md text-gray-400">
              Previous
            </button>
            <button className="px-3 py-1 bg-gray-100 rounded-md">1</button>
            <button className="px-3 py-1 border rounded-md text-gray-400">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
