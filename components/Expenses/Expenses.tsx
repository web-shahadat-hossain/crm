"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

export default function ExpenseForm() {
  const [formData, setFormData] = useState({
    name: "Claire",
    note: "",
    category: "RTL",
    date: "",
    amount: "$258.00",
    billable: false,
    customer: "@mafia",
    project: "Web development",
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm p-6">
        {/* Attach Receipt */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 mb-6 text-center">
          <p className="text-gray-500 text-sm">Attach Receipt</p>
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Note Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Note
          </label>
          <textarea
            value={formData.note}
            onChange={(e) =>
              setFormData({ ...formData, note: e.target.value })
            }
            placeholder="Write Here..."
            rows={4}
            className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
          />
        </div>

        {/* Expenses Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expenses category
          </label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option>RTL</option>
            <option>Automobile Expense</option>
            <option>Telephone Expense</option>
            <option>Travel Expenses</option>
          </select>
        </div>

        {/* Expense Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expense Date
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              placeholder="DD/MM/YYYY"
              className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 pr-10"
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <input
            type="text"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Billable Checkbox */}
        <div className="mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.billable}
              onChange={(e) =>
                setFormData({ ...formData, billable: e.target.checked })
              }
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">Billable</span>
          </label>
        </div>

        {/* Customer */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customer
          </label>
          <select
            value={formData.customer}
            onChange={(e) =>
              setFormData({ ...formData, customer: e.target.value })
            }
            className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option>@mafia</option>
            <option>@company1</option>
            <option>@company2</option>
          </select>
        </div>

        {/* Project */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project
          </label>
          <select
            value={formData.project}
            onChange={(e) =>
              setFormData({ ...formData, project: e.target.value })
            }
            className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option>Web development</option>
            <option>Mobile App</option>
            <option>Design Project</option>
          </select>
        </div>

        {/* Save Button */}
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-8 py-3 rounded-md text-sm transition">
          Save
        </button>
      </div>
    </div>
  );
}