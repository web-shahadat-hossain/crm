/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";

export default function AddNewContactForm() {
  const [formData, setFormData] = useState({
    firstName: "Diana",
    lastName: "Edwards",
    position: "Manager",
    email: "nathan.roberts@example.com",
    direction: "RTL",
    password: "dianarichardson45",
    primaryContact: false,
    doNotSendWelcome: false,
    sendSetPassword: false,
    primaryContactTypes: {
      invoices: false,
      estimates: false,
      contracts: false,
      proposals: false,
      support: false,
      projects: false,
    },
    emailNotifications: {
      invoices: false,
      creditNote: false,
      tickets: false,
      task: false,
      estimate: false,
      project: false,
      contract: false,
    },
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: any) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleNestedCheckboxChange = (
    category: string,
    name: string,
    checked: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [category]: {
        ...(prev as any)[category],
        [name]: checked,
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
       
      <div className="w-full mx-auto">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
          Add new Contact
        </h1>

        <div className="space-y-5 border rounded-md p-4">
          {/* Profile Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image
            </label>
            <input
              type="file"
              className="w-full px-3 py-2 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Position
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
          </div>

          {/* Direction */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Direction
            </label>
            <select
              name="direction"
              value={formData.direction}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            >
              <option value="RTL">RTL</option>
              <option value="LTR">LTR</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 pt-2">
            {[
              { name: "primaryContact", label: "Primary Contact" },
              {
                name: "doNotSendWelcome",
                label: "Do not send welcome email",
              },
              {
                name: "sendSetPassword",
                label: "Send SET password email",
              },
            ].map((item) => (
              <label key={item.name} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={item.name}
                  checked={(formData as any)[item.name]}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4"
                />
                <span className="text-sm">{item.label}</span>
              </label>
            ))}
          </div>

          {/* Primary Contact */}
          <div className="pt-4">
            <h2 className="font-semibold mb-3">Primary Contact</h2>
            {Object.entries(formData.primaryContactTypes).map(
              ([key, value]) => (
                <label key={key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) =>
                      handleNestedCheckboxChange(
                        "primaryContactTypes",
                        key,
                        e.target.checked
                      )
                    }
                  />
                  <span className="text-sm capitalize">{key}</span>
                </label>
              )
            )}
          </div>

          {/* Email Notifications */}
          <div className="pt-4">
            <h2 className="font-semibold mb-3">Email Notifications</h2>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(formData.emailNotifications).map(
                ([key, value]) => (
                  <label key={key} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) =>
                        handleNestedCheckboxChange(
                          "emailNotifications",
                          key,
                          e.target.checked
                        )
                      }
                    />
                    <span className="text-sm capitalize">{key}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Save */}
          <div className="pt-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-gray-300 rounded text-sm font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
