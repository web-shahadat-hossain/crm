"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function PaymentsPage() {
  const [payments] = useState([
    {
      id: 1,
      paymentNumber: 'Pay-000013',
      invoiceNumber: 'INV-000013',
      paymentMode: '',
      transactionId: 'TN87227382379',
      amount: '$4571.00',
      date: '03-06-2025'
    },
    {
      id: 2,
      paymentNumber: 'Pay-000013',
      invoiceNumber: 'INV-000013',
      paymentMode: '',
      transactionId: 'TN87227382379',
      amount: '$4571.00',
      date: '03-06-2025'
    },
    {
      id: 3,
      paymentNumber: 'Pay-000013',
      invoiceNumber: 'INV-000013',
      paymentMode: '',
      transactionId: 'TN87227382379',
      amount: '$4571.00',
      date: '03-06-2025'
    }
  ]);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Payments</h1>
        
        <div className="border-t border-gray-300 pt-6">
          {/* Search and Actions Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Payments"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
              />
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 sm:flex-none px-5 py-2 bg-[#737373] text-white rounded hover:bg-gray-700 transition-colors text-sm">
                Zip Payments
              </button>
              <button className="flex-1 sm:flex-none px-5 py-2 bg-[#737373] text-white rounded hover:bg-gray-700 transition-colors text-sm">
                Export
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white  border border-gray-300">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-[#2D2D2D] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Payments #</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Invoice #</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Payment Mode</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Transaction ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-5 text-sm text-gray-900">{payment.paymentNumber}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{payment.invoiceNumber}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{payment.paymentMode}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{payment.transactionId}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{payment.amount}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              Showing 3 to 3 of 3 entries
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 text-sm bg-gray-200 text-gray-900 border border-gray-300 rounded">
                1
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}