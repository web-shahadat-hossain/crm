"use client";

import React from "react";
import { Download } from "lucide-react";

const EstimateDetail = () => {
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
  ];

  const subTotal = "$1289.00";
  const total = "$1289.00";

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Top Action Buttons */}
      <div className="flex justify-end gap-2 mb-6">
        <button className="flex items-center gap-1.5 bg-gray-700 hover:bg-gray-800 text-white px-4 py-1.5 rounded text-sm transition">
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

      {/* Main Card */}
      <div className="border border-gray-200 rounded-lg p-6">
        {/* EST Number + To header */}
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-xl font-bold text-gray-800">EST-000008</h1>
          <span className="text-lg font-semibold text-gray-700">To</span>
        </div>

        {/* From / To Info */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* From */}
          <div>
            <p className="text-red-500 font-semibold text-base mb-1">Webnex IT</p>
            <p className="text-sm text-gray-600">172 Ivy Club Gottliebfurt</p>
            <p className="text-sm text-gray-600">New Heaven</p>
            <p className="text-sm text-gray-600">Canada [CA] 2364</p>
          </div>

          {/* To */}
          <div className="mt-4 md:mt-0 text-left md:text-right space-y-0.5">
            <p className="text-sm text-gray-700 font-medium">Kiehn, O`Connell and Gorczany</p>
            <p className="text-sm text-gray-600">3745 Kub Gardens</p>
            <p className="text-sm text-gray-600">Port Rahsaan Utah</p>
            <p className="text-sm text-gray-600">BM 09383</p>
            <div className="mt-2 space-y-0.5">
              <p className="text-sm text-gray-600">
                <span className="text-gray-500">Estimate Date: </span>2025-03-19
              </p>
              <p className="text-sm text-gray-600">
                <span className="text-gray-500">Expiry Date: </span>2025-03-19
              </p>
              <p className="text-sm text-gray-600">
                <span className="text-gray-500">Sale Agent: </span>Earnest Rohan
              </p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="border border-gray-200 overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-4 py-3 text-left font-medium text-gray-600 w-8">#</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Item</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600 w-16">QTY</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600 w-24">Rate</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600 w-16">Tax</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600 w-24">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-4 text-sm text-gray-600 align-top">{item.id}</td>
                  <td className="px-4 py-4 align-top">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 align-top">{item.qty}</td>
                  <td className="px-4 py-4 text-sm text-gray-700 align-top">{item.rate}</td>
                  <td className="px-4 py-4 text-sm text-gray-700 align-top">{item.tax}</td>
                  <td className="px-4 py-4 text-sm text-gray-700 align-top">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex flex-col items-end gap-2 mb-6 pr-1">
          <div className="flex gap-4 text-sm text-gray-700">
            <span className="font-medium text-gray-500">Sub Total:</span>
            <span className="font-semibold text-gray-800">{subTotal}</span>
          </div>
          <hr className="w-48 border-gray-200" />
          <div className="flex gap-4 text-sm text-gray-700">
            <span className="font-semibold text-gray-700">Total:</span>
            <span className="font-semibold text-gray-800">{total}</span>
          </div>
        </div>

        <hr className="border-gray-200 mb-6" />

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
    </div>
  );
};

export default EstimateDetail;