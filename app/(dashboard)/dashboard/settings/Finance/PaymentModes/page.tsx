
"use client";

import React, { useState } from "react";
import { Edit, Search, Trash2 } from "lucide-react";

type PaymentMode = {
  id: number;
  name: string;
  description: string;
  active: boolean;
};

const PaymentModes = () => {
  const [searchQuery, setSearchQuery] = useState("");
 

  const [data, setData] = useState<PaymentMode[]>([
    {
      id: 1,
      name: "Bank",
      description: "",
      active: true,
    },
  ]);

  /* ---------------- Modal State ---------------- */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    active: true,
  });

  /* ---------------- Handlers ---------------- */
  const toggleActive = (id: number) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const handleAdd = () => {
    setModalMode("add");
    setFormData({ name: "", description: "", active: true });
    setIsModalOpen(true);
  };

  const handleEdit = (item: PaymentMode) => {
    setModalMode("edit");
    setSelectedId(item.id);
    setFormData({
      name: item.name,
      description: item.description,
      active: item.active,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSave = () => {
    if (!formData.name.trim()) return;

    if (modalMode === "add") {
      setData((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: formData.name,
          description: formData.description,
          active: formData.active,
        },
      ]);
    } else {
      setData((prev) =>
        prev.map((item) =>
          item.id === selectedId ? { ...item, ...formData } : item
        )
      );
    }

    setIsModalOpen(false);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

    const handleClose = () => {
      setIsModalOpen(false);
    };

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-white p-4">
      <h2 className="text-2xl font-semibold text-gray-700">Payment Modes</h2>
      <hr className="my-5" />

      {/* Search & Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="relative md:col-span-2">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Payment Mode"
            className="w-full rounded-md bg-gray-100 px-3 py-3 text-sm"
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex gap-3 md:justify-end">
          <button
            onClick={handleAdd}
            className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
          >
            Add New Payment Mode
          </button>
          <button
            onClick={handleAdd}
            className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
          >
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Payment Mode Name</th>
              <th className="px-4 py-3 text-left">Bank Accounts/ description</th>
              <th className="px-4 py-3">Active</th>
              <th className="px-4 py-3">Options</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.description}</td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => toggleActive(item.id)}
                    className={`h-6 w-11 rounded-full ${
                      item.active ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`block h-4 w-4 rounded-full bg-white transition ${
                        item.active ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-3">
                    <button onClick={() => handleEdit(item)}>
                      <Edit className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     {/* Currency Modal */}
{/* Add Payment Mode Modal */}
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
    <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl">

      {/* Header */}
      <div className="px-8 pt-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Add New Payment Mode
        </h2>
      </div>

      {/* Body */}
      <div className="px-8 py-6 space-y-6">

        {/* Payment Mode Name */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Payment Mode Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Write here..."
            className="w-full rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Bank Accounts / Description */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Bank Accounts / Description
          </label>
          <textarea
            rows={5}
            placeholder="Write here..."
            className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-3">
          {[
            "Active",
            "Show Bank Accounts / Description on Invoice PDF",
            "Selected by default on invoice",
          ].map((item) => (
            <label key={item} className="flex items-center gap-3 text-sm text-gray-800">
              <input type="checkbox" className="h-4 w-4" />
              {item}
            </label>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Invoice / Expense Options */}
        <div className="space-y-3">
          {["Invoices Only", "Expenses Only"].map((item) => (
            <label key={item} className="flex items-center gap-3 text-sm text-gray-800">
              <input type="checkbox" className="h-4 w-4" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-4 px-8 pb-8">
        <button
          onClick={handleClose}
          className="min-w-[120px] rounded-md bg-gray-200 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
        >
          Close
        </button>
        <button
          onClick={handleSave}
          className="min-w-[120px] rounded-md bg-gray-200 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default PaymentModes;
