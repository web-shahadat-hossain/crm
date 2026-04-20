"use client";
import React, { useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';

export default function ContactInformationForm() {
  const [formData, setFormData] = useState({
    trash: false,
    hideFromCustomer: false,
    customer: '@rasfia',
    subject: 'Claire',
    contractValue: '$256.00',
    contractType: 'RTL',
    note: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleSave = () => {
    console.log('Form data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Contact Information</h1>
        
        <div>
          {/* Checkboxes */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.trash}
                onChange={(e) => setFormData({...formData, trash: e.target.checked})}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Trash</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hideFromCustomer}
                onChange={(e) => setFormData({...formData, hideFromCustomer: e.target.checked})}
                className="w-4 h-4 text-blue-600  rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Hide from customer</span>
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
                onChange={(e) => setFormData({...formData, customer: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none cursor-pointer"
              >
                <option value="@rasfia">@rasfia</option>
                <option value="@john">@john</option>
                <option value="@sarah">@sarah</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full px-4 py-2 bg-gray-100 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          {/* Contract Value */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contract Value
            </label>
            <input
              type="text"
              value={formData.contractValue}
              onChange={(e) => setFormData({...formData, contractValue: e.target.value})}
              className="w-full px-4 py-2 bg-gray-100 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          {/* Contract Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contract Type
            </label>
            <div className="relative">
              <select
                value={formData.contractType}
                onChange={(e) => setFormData({...formData, contractType: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none cursor-pointer"
              >
                <option value="RTL">RTL</option>
                <option value="Fixed Price">Fixed Price</option>
                <option value="Hourly">Hourly</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Note */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Note
            </label>
            <textarea
              placeholder="Write Here..."
              value={formData.note}
              onChange={(e) => setFormData({...formData, note: e.target.value})}
          
              className="w-full px-4 py-3 bg-gray-100 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
            />
          </div>

          {/* Start Date and End Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-100 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  value={formData.endDate}
                  onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-100 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              placeholder="Write here..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
             
              className="w-full px-4 py-3 bg-gray-100 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-8 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md font-medium transition-colors cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}