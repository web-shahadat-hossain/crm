"use client"
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function CreateProposalPage() {
  const [items] = useState([
    { id: 1, item: '', description: '', quantity: '', rate: '', tax: '', amount: '', done: false },
    { id: 2, item: '', description: '', quantity: '', rate: '', tax: '', amount: '', done: false }
  ]);

  const [formData, setFormData] = useState({
    subject: '',
    status: '',
    assigned: '',
    related: '',
    to: '',
    customer: '',
    address: '',
    date: '',
    openTill: '',
    city: '',
    state: '',
    currency: '',
    discountType: '',
    country: '',
    zipCode: '',
    tags: '#contact, #payment',
    email: '',
    phoneNumber: '',
    allowComments: false,
    discount: '',
    adjustment: ''
  });

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Create New Proposal</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
          {/* Left Column */}
          <div className="space-y-5">
            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                placeholder="Write Here..."
                className="w-full px-3 py-2 border border-gray-300 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
              />
            </div>

            {/* Related */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Related
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                <option>Select One</option>
              </select>
            </div>

            {/* Customer */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                <option>Select One</option>
              </select>
            </div>

            {/* Date and Open Till */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-sm pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Open Till
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-sm pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Currency and Discount Type */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                  <option>Select One</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discount Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                  <option>Select One</option>
                </select>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({...formData, tags: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
              />
            </div>

            {/* Allow Comments Checkbox */}
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.allowComments}
                  onChange={(e) => setFormData({...formData, allowComments: e.target.checked})}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Allow Comments</span>
              </label>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                <option>Select One</option>
              </select>
            </div>

            {/* Assigned */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Assigned
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                <option>Select One</option>
              </select>
            </div>

            {/* To */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To *
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                <option>Select One</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                placeholder="Write here..."
                className="w-full px-3 py-2 border border-gray-300 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
              />
            </div>

            {/* City and State */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Write Here..."
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <input
                  type="text"
                  placeholder="Write Here..."
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                />
              </div>
            </div>

            {/* Country and Zip Code */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                  <option>Select one</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder="Write Here..."
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                />
              </div>
            </div>

            {/* Email and Phone Number */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Write Here..."
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="Write Here..."
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mt-8 overflow-x-auto bg-white rounded-lg border border-gray-300">
          <table className="w-full min-w-[900px]">
            <thead className="bg-[#E5E5E5]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Item</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Description</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Quantity</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Rate</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Tax</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Done</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="px-4 py-3">
                    <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded text-sm bg-white" />
                  </td>
                  <td className="px-4 py-3">
                    <textarea className="w-full px-2 py-1 border border-gray-300 rounded text-sm resize-none bg-white" ></textarea>
                  </td>
                  <td className="px-4 py-3">
                    <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded text-sm bg-white" />
                  </td>
                  <td className="px-4 py-3">
                    <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded text-sm bg-white" />
                  </td>
                  <td className="px-4 py-3">
                    <select className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-gray-500 bg-white">
                      <option>Select One</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded text-sm bg-white" />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Account Summary */}
        <div className="mt-8 bg-white rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-gray-900">Account Summary</h3>
            <span className="text-sm text-gray-600">2025-03-06 To 2025-03-12</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Sub Total :</span>
              <span className="text-sm font-medium text-gray-900">$0.00</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Discount</span>
                <select className="px-2 py-1 border border-gray-300 rounded text-xs text-gray-500 bg-white">
                  <option>Select One</option>
                </select>
              </div>
              <span className="text-sm font-medium text-gray-900">$3690.00</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Adjustment</span>
                <select className="px-2 py-1 border border-gray-300 rounded text-xs text-gray-500 bg-white">
                  <option>Select One</option>
                </select>
              </div>
              <span className="text-sm font-medium text-gray-900">$3690.00</span>
            </div>
            
            <div className="flex justify-between items-center pt-3 border-t border-gray-200">
              <span className="text-sm font-semibold text-gray-900">Total:</span>
              <span className="text-sm font-semibold text-gray-900">$0.00</span>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 text-sm text-gray-600">
          Include proposal items with merge field anywhere in proposal content as {'{'}proposal_items{'}'}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="px-6 py-2 bg-[#737373] text-white rounded hover:bg-gray-700 transition-colors text-sm font-medium">
            Save
          </button>
          <button className="px-6 py-2 bg-[#737373] text-white rounded hover:bg-gray-700 transition-colors text-sm font-medium">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}