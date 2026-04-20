"use client";

import React, { useState } from "react";
import { Mail, Calendar } from "lucide-react";

type TabType = "receipt" | "payment";

const PaymentForInvoice = () => {
  const [activeTab, setActiveTab] = useState<TabType>("receipt");
  const [showMailModal, setShowMailModal] = useState(false);
  const [emailTo, setEmailTo] = useState("@tasfiatabassum@gmail.com");
  const [formData, setFormData] = useState({
    amountReceived: "$1768.00",
    paymentDate: "",
    paymentMode: "Bank",
    paymentMethod: "",
    transactionId: "",
    note: "",
  });

  return (
    <div className=" bg-white p-6 max-w-5xl border rounded-md mx-auto">
      {/* Page Title */}
      <h1 className="text-blue-500 font-semibold text-base mb-4">
        Payment for Invoice INV-000012
      </h1>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("receipt")}
          className={`px-4 py-2 text-sm rounded-t font-medium transition ${
            activeTab === "receipt"
              ? "bg-gray-200 text-gray-800"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Payment Receipt
        </button>
        <button
          onClick={() => setActiveTab("payment")}
          className={`px-4 py-2 text-sm rounded-t font-medium transition ${
            activeTab === "payment"
              ? "bg-gray-700 text-white"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Payment
        </button>
      </div>

      {/* TAB 1: Payment Receipt */}
      {activeTab === "receipt" && (
        <div>
          {/* Action buttons */}
          <div className="flex justify-end gap-2 mb-4">
            <button
              onClick={() => setShowMailModal(true)}
              className="p-1.5 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              <Mail className="w-4 h-4 text-gray-500" />
            </button>
            <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-1.5 rounded text-sm transition">
              Export
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded text-sm transition">
              Delete
            </button>
          </div>

          {/* From / To */}
          <div className="flex justify-between mb-6">
            <div>
              <p className="text-red-500 font-semibold text-base mb-1">Webnex IT</p>
              <p className="text-sm text-gray-600">172 Ivy Club Gottliebfurt</p>
              <p className="text-sm text-gray-600">New Heaven</p>
              <p className="text-sm text-gray-600">Canada [CA] 2364</p>
            </div>
            <div className="text-right">
              <p className="text-blue-500 font-semibold text-base mb-1">Hane LLC</p>
              <p className="text-sm text-gray-600">2644 Alexandrea Radial</p>
              <p className="text-sm text-gray-600">Stiedemannton Connecticut</p>
              <p className="text-sm text-gray-600">PG 28220</p>
              <p className="text-sm text-gray-600">VAT Number: AT U77534590</p>
            </div>
          </div>

          <p className="text-blue-500 font-semibold text-sm tracking-wide mb-4">PAYMENT RECEIPT</p>

          <div className="space-y-3 mb-5">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">Payment Date</span>
              <span className="text-gray-700">08-07-2024</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">Payment Mode</span>
              <span className="text-gray-700">Bank</span>
            </div>
          </div>

          <div className="bg-gray-100 rounded-md px-4 py-4 mb-6 w-64">
            <p className="text-sm font-semibold text-gray-700">Total Amount</p>
            <p className="text-lg font-semibold text-gray-800 mt-1">$90.00</p>
          </div>

          <p className="text-blue-500 font-semibold text-sm tracking-wide mb-3">PAYMENT FOR</p>

          <div className="border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-2.5 text-center font-medium text-gray-600">Invoice Number</th>
                  <th className="px-4 py-2.5 text-center font-medium text-gray-600">Invoice Date</th>
                  <th className="px-4 py-2.5 text-center font-medium text-gray-600">Invoice Amount</th>
                  <th className="px-4 py-2.5 text-center font-medium text-gray-600">Payment Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-4 py-4 text-sm text-gray-700 text-center">INV-000012</td>
                  <td className="px-4 py-4 text-sm text-gray-700 text-center">08-07-2021</td>
                  <td className="px-4 py-4 text-sm text-gray-700 text-center">$1289.00</td>
                  <td className="px-4 py-4 text-sm text-gray-700 text-center">$1289.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Payment */}
      {activeTab === "payment" && (
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Amount Recieved <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.amountReceived}
              onChange={(e) => setFormData({ ...formData, amountReceived: e.target.value })}
              className="w-full bg-gray-100 border-0 rounded-md px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Payment Date</label>
            <div className="relative">
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                value={formData.paymentDate}
                onChange={(e) => setFormData({ ...formData, paymentDate: e.target.value })}
                className="w-full bg-gray-100 border-0 rounded-md px-3 py-2.5 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 pr-10"
              />
              <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Payment Mode</label>
            <div className="relative">
              <select
                value={formData.paymentMode}
                onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
                className="w-full bg-gray-100 border-0 rounded-md px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300 appearance-none pr-10"
              >
                <option value="Bank">Bank</option>
                <option value="Stripe Checkout">Stripe Checkout</option>
                <option value="Cash">Cash</option>
                <option value="PayPal">PayPal</option>
              </select>
              <div className="absolute right-3 top-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Payment Method</label>
            <input
              type="text"
              placeholder="Write Here"
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
              className="w-full bg-gray-100 border-0 rounded-md px-3 py-2.5 text-sm text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Transaction ID</label>
            <input
              type="text"
              placeholder="Write Here"
              value={formData.transactionId}
              onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
              className="w-full bg-gray-100 border-0 rounded-md px-3 py-2.5 text-sm text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Note</label>
            <textarea
              placeholder="Write Here..."
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              rows={4}
              className="w-full bg-gray-100 border-0 rounded-md px-3 py-2.5 text-sm text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
            />
          </div>
          <div>
            <button className="border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-md text-sm transition">
              Save
            </button>
          </div>
        </div>
      )}

      {/* ── Mail Modal ── */}
      {showMailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setShowMailModal(false)}
          />

          {/* Modal Box */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Send Payment Receipt To Client
            </h2>

            {/* Email To */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email to</label>
              <input
                type="email"
                value={emailTo}
                onChange={(e) => setEmailTo(e.target.value)}
                className="w-full bg-gray-100 border-0 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>

            {/* Preview Email Template */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Preview Email Template
              </label>
              <div className="bg-gray-100 rounded-md px-4 py-4 text-sm text-gray-600 leading-relaxed space-y-3">
                <p>Hello &#123;contact_firstname&#125; &#123;contact_lastname&#125;</p>
                <p>Thank you for the payment. Find the payment details below:</p>
                <p className="text-gray-400 text-xs">------------------------------------------------</p>
                <div className="space-y-0.5">
                  <p>Amount: &#123;payment_total&#125;</p>
                  <p>Date: &#123;payment_date&#125;</p>
                  <p>Invoice number: # &#123;invoice_number&#125;</p>
                </div>
                <p className="text-gray-400 text-xs">------------------------------------------------</p>
                <p>
                  You can always view the invoice for this payment at the following link:{" "}
                  &#123;invoice_number&#125;
                </p>
                <p>We are looking forward working with you.</p>
                <div>
                  <p>Kind Regards,</p>
                  <p>&#123;email_signature&#125;</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowMailModal(false)}
                className="flex-1 border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-md text-sm font-medium transition"
              >
                Close
              </button>
              <button
                onClick={() => setShowMailModal(false)}
                className="flex-1 border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-md text-sm font-medium transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForInvoice;