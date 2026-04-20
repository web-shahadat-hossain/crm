"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { ChevronDown, Calendar, Upload } from "lucide-react";

interface NewExpenseFormData {
  name: string;
  note: string;
  expenseCategory: string;
  expenseDate: string;
  amount: string;
  billable: boolean;
  customer: string;
  project: string;
  receipt: File | null;
}

export default function NewExpenseForm() {
  const [formData, setFormData] = useState<NewExpenseFormData>({
    name: "Claire",
    note: "",
    expenseCategory: "RTL",
    expenseDate: "",
    amount: "$259.00",
    billable: false,
    customer: "@rasfia",
    project: "Web development",
    receipt: null,
  });

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, receipt: file });
    }
  };

  const handleSave = () => {
    console.log("Form data:", formData);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 lg:p-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
          New Subscription
        </h1>

        {/* Attach Receipt */}
        <div className="mb-6">
          <label htmlFor="receipt-upload">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-10 text-center cursor-pointer hover:border-gray-400 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <span className="text-sm text-gray-500">Attach Receipt</span>
              <input
                id="receipt-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*,.pdf"
              />
            </div>
          </label>
          {formData.receipt && (
            <p className="text-sm text-gray-600 mt-2 break-all">
              Selected: {formData.receipt.name}
            </p>
          )}
        </div>

        {/* Form Box */}
        <div className="border p-4 sm:p-6 rounded-lg">
          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          {/* Note */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Note
            </label>
            <textarea
              placeholder="Write Here..."
              value={formData.note}
              onChange={(e) =>
                setFormData({ ...formData, note: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
            />
          </div>

          {/* Expense Category */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expenses category
            </label>
            <div className="relative">
              <select
                value={formData.expenseCategory}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    expenseCategory: e.target.value,
                  })
                }
                className="w-full px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="RTL">RTL</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Office Supplies">Office Supplies</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Expense Date */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expense Date
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                value={formData.expenseDate}
                onChange={(e) =>
                  setFormData({ ...formData, expenseDate: e.target.value })
                }
                className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Amount */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <input
              type="text"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Billable */}
          <div className="mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.billable}
                onChange={(e) =>
                  setFormData({ ...formData, billable: e.target.checked })
                }
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Billable</span>
            </label>
          </div>

          {/* Customer */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Customer
            </label>
            <div className="relative">
              <select
                value={formData.customer}
                onChange={(e) =>
                  setFormData({ ...formData, customer: e.target.value })
                }
                className="w-full px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="@rasfia">@rasfia</option>
                <option value="@john">@john</option>
                <option value="@sarah">@sarah</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Project */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project
            </label>
            <div className="relative">
              <select
                value={formData.project}
                onChange={(e) =>
                  setFormData({ ...formData, project: e.target.value })
                }
                className="w-full px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Web development">Web development</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Marketing Campaign">Marketing Campaign</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Save */}
          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-8 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md font-medium transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
