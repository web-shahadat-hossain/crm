"use client";

import React from "react";
import { Download } from "lucide-react";

const InvoiceDetail = () => {
  const items = [
    {
      id: 1,
      name: "Web Design",
      description:
        "White Rabbit hurried by—the frightened Mouse splashed his way through the doorway; 'and even if.",
      qty: 2,
      rate: "$1289.00",
      tax: "0%",
      amount: "$1289.00",
    },
    {
      id: 2,
      name: "Web Design",
      description:
        "White Rabbit hurried by—the frightened Mouse splashed his way through the doorway; 'and even if.",
      qty: 2,
      rate: "$1289.00",
      tax: "0%",
      amount: "$1289.00",
    },
    {
      id: 2,
      name: "Web Design",
      description:
        "White Rabbit hurried by—the frightened Mouse splashed his way through the doorway; 'and even if.",
      qty: 2,
      rate: "$1289.00",
      tax: "0%",
      amount: "$1289.00",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6 max-w-4xl mx-auto border rounded-md shadow">
      {/* Top Action Buttons */}
      <div className="flex justify-end gap-2 mb-6 ">
        <button className="flex items-center gap-1.5 bg-gray-600 hover:bg-gray-700 text-white px-4 py-1.5 rounded text-sm transition">
          <Download className="w-3.5 h-3.5" />
          Downloads
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded text-sm transition">
          Decline
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded text-sm transition">
          Accept
        </button>
      </div>

      {/* EST Number + Bill To */}
      <div className="flex justify-between items-start mb-1">
        <h1 className="text-lg font-bold text-gray-800">EST-000008</h1>
        <span className="text-base font-semibold text-gray-700">Bill To</span>
      </div>

      {/* From / Bill To */}
      <div className="flex justify-between mb-2">
        {/* From */}
        <div>
          <p className="text-red-500 font-semibold text-base mb-1">Webnex IT</p>
          <p className="text-sm text-gray-600">172 Ivy Club Gottliebfurt</p>
          <p className="text-sm text-gray-600">New Heaven</p>
          <p className="text-sm text-gray-600">Canada [CA] 2364</p>
        </div>

        {/* Bill To */}
        <div className="text-right">
          <p className="text-sm text-gray-700">Kiehn, O`Connell and Gorczany</p>
          <p className="text-sm text-gray-600">3745 Kub Gardens</p>
          <p className="text-sm text-gray-600">Port Rahsaan Utah</p>
          <p className="text-sm text-gray-600">BM 09383</p>
        </div>
      </div>

      {/* Ship To */}
      <div className="flex justify-end mb-2">
        <div className="text-right">
          <p className="text-base font-semibold text-gray-700 mb-1">Ship To</p>
          <p className="text-sm text-gray-700">Kiehn, O`Connell and Gorczany</p>
          <p className="text-sm text-gray-600">3745 Kub Gardens</p>
          <p className="text-sm text-gray-600">Port Rahsaan Utah</p>
          <p className="text-sm text-gray-600">BM 09383</p>
        </div>
      </div>

      {/* Invoice Meta */}
      <div className="flex justify-end mb-6 text-sm text-gray-600 space-y-0.5">
        <div className="text-right space-y-0.5">
          <p>
            <span className="text-gray-500">Invoice Date: </span>2025-03-19
          </p>
          <p>
            <span className="text-gray-500">Due Date: </span>2025-03-19
          </p>
          <p>
            <span className="text-gray-500">Sale Agent: </span>Earnest Rohan
          </p>
        </div>
      </div>

      {/* Items Table */}
      <div className="border border-gray-200 overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-3 py-2.5 text-left font-medium text-gray-600 w-8">#</th>
              <th className="px-3 py-2.5 text-left font-medium text-gray-600">Item</th>
              <th className="px-3 py-2.5 text-center font-medium text-gray-600 w-12">QTY</th>
              <th className="px-3 py-2.5 text-center font-medium text-gray-600 w-20">Rate</th>
              <th className="px-3 py-2.5 text-center font-medium text-gray-600 w-14">Tax</th>
              <th className="px-3 py-2.5 text-right font-medium text-gray-600 w-20">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {items.map((item, index) => (
              <tr key={index}>
                <td className="px-3 py-3 text-sm text-gray-600 align-top">{item.id}</td>
                <td className="px-3 py-3 align-top">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                </td>
                <td className="px-3 py-3 text-sm text-gray-700 text-center align-top">{item.qty}</td>
                <td className="px-3 py-3 text-sm text-gray-700 text-center align-top">{item.rate}</td>
                <td className="px-3 py-3 text-sm text-gray-700 text-center align-top">{item.tax}</td>
                <td className="px-3 py-3 text-sm text-gray-700 text-right align-top">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="flex flex-col items-end gap-2 mb-8 text-sm">
        <div className="flex justify-between w-64">
          <span className="text-gray-500">Sub Total</span>
          <span className="text-gray-800 font-medium">$1289.00</span>
        </div>
        <div className="flex justify-between w-64">
          <span className="text-gray-500">Tax</span>
          <span className="text-gray-800 font-medium">18</span>
        </div>
        <div className="flex justify-between w-64">
          <span className="text-gray-500">Total</span>
          <span className="text-gray-800 font-medium">$825.00</span>
        </div>
        <div className="flex justify-between w-64">
          <span className="text-gray-500">Total Paid</span>
          <span className="text-gray-800 font-medium">$-725.00</span>
        </div>
        <div className="flex justify-between w-64 pt-1">
          <span className="text-red-500 font-semibold">Amount Due</span>
          <span className="text-gray-800 font-semibold">$102.00</span>
        </div>
      </div>

      <hr className="border-gray-200 mb-5" />

      {/* Terms & Conditions */}
      <div>
        <h2 className="text-base font-semibold text-gray-800 mb-2">Terms & Conditions</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          The Dormouse slowly opened his eyes. He looked anxiously over his shoulder with some surprise that
          the Gryphon remarked: because they lessen from day to day. This was such a noise inside, no one to
          listen to her, one on each side to guard him; and near the centre of the sense, and the others all.
        </p>
      </div>
    </div>
  );
};

export default InvoiceDetail;