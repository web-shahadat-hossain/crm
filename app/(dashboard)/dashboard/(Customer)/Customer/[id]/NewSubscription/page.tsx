"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
interface SubscriptionFormData {
  billingPlan: string[];
  quantity: string;
  subscriptionName: string;
  description: string;
  includeDescription: boolean;
  customer: string;
  project: string;
  tax1: string;
  tax2: string;
  currency: string;
}
export default function NewSubscriptionForm() {
  const [formData, setFormData] = useState<SubscriptionFormData>({
    billingPlan: [],
    quantity: '',
    subscriptionName: '',
    description: '',
    includeDescription: false,
    customer: '',
    project: 'RTL',
    tax1: '',
    tax2: '',
    currency: 'USD $'
  });

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      billingPlan: prev.billingPlan.includes(value)
        ? prev.billingPlan.filter(item => item !== value)
        : [...prev.billingPlan, value]
    }));
  };

  const handleSave = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">New Subscription</h1>
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Billing Plan <span className='text-red-500'>*</span></h1>
        <div>
          {/* Billing Plan */}
          <div className="mb-6">
            
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.billingPlan.includes('weekly')}
                  onChange={() => handleCheckboxChange('weekly')}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Weekly service $10.00</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.billingPlan.includes('hosting')}
                  onChange={() => handleCheckboxChange('hosting')}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Hosting Monthly $20.00</span>
              </label>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Claire"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          {/* Subscription Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subscription Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Claire"
              value={formData.subscriptionName}
              onChange={(e) => setFormData({...formData, subscriptionName: e.target.value})}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              placeholder="Write Here..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
             
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
            />
          </div>

          {/* Include description checkbox */}
          <div className="mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.includeDescription}
                onChange={(e) => setFormData({...formData, includeDescription: e.target.checked})}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Include description in invoice item</span>
            </label>
          </div>

          {/* Customer */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Customer <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Claire"
              value={formData.customer}
              onChange={(e) => setFormData({...formData, customer: e.target.value})}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          {/* Project */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project
            </label>
            <div className="relative">
              <select
                value={formData.project}
                onChange={(e) => setFormData({...formData, project: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none cursor-pointer"
              >
                <option value="RTL">RTL</option>
                <option value="Project 1">Project 1</option>
                <option value="Project 2">Project 2</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Tax 1 and Tax 2 */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax 1
              </label>
              <div className="relative">
                <select
                  value={formData.tax1}
                  onChange={(e) => setFormData({...formData, tax1: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none text-gray-500 cursor-pointer"
                >
                  <option value="">Select one</option>
                  <option value="tax1">Tax Option 1</option>
                  <option value="tax2">Tax Option 2</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax 2
              </label>
              <div className="relative">
                <select
                  value={formData.tax2}
                  onChange={(e) => setFormData({...formData, tax2: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none text-gray-500 cursor-pointer"
                >
                  <option value="">Select one</option>
                  <option value="tax1">Tax Option 1</option>
                  <option value="tax2">Tax Option 2</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Currency */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currency
            </label>
            <div className="relative">
              <select
                value={formData.currency}
                onChange={(e) => setFormData({...formData, currency: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none cursor-pointer"
              >
                <option value="USD $">USD $</option>
                <option value="EUR €">EUR €</option>
                <option value="GBP £">GBP £</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Terms and Condition */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Terms and Condition
            </label>
            <div className="bg-gray-100 border border-gray-300 rounded-md p-4 text-sm text-gray-600 leading-relaxed">
              So she stood still where she was losing her temper. `Are you content now? said the King.` The White Rabbit put on his `flappers,`--`Mystery, ancient and modern, with Seaography; then Drawling--the Drawling-master was an old Crab took the hookah out of the bread-and-butter. Just at this moment, Alice.
            </div>
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