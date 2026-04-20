import React, { useState } from 'react';
import { Upload } from 'lucide-react';

export default function AdvanceOptions() {
  const [formData, setFormData] = useState({
    currency: 'USD$',
    tax1: '',
    tax2: '',
    paymentMode: 'Web development',
    repeatEvery: 'week'
  });

  const handleSave = () => {
    console.log('Form saved:', formData);
    alert('Form saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
        <div className="space-y-6">
          {/* Attach Receipt */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-gray-500 text-sm">Attach Receipt</p>
          </div>

          {/* Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currency
            </label>
            <select
              value={formData.currency}
              onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-700 focus:ring-2 focus:ring-gray-300 outline-none"
            >
              <option value="USD$">USD$</option>
              <option value="EUR€">EUR€</option>
              <option value="GBP£">GBP£</option>
              <option value="BDT৳">BDT৳</option>
            </select>
          </div>

          {/* Tax 1 and Tax 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax 1
              </label>
              <select
                value={formData.tax1}
                onChange={(e) => setFormData({ ...formData, tax1: e.target.value })}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-500 focus:ring-2 focus:ring-gray-300 outline-none"
              >
                <option value="">Select one</option>
                <option value="vat">VAT</option>
                <option value="gst">GST</option>
                <option value="sales-tax">Sales Tax</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax 2
              </label>
              <select
                value={formData.tax2}
                onChange={(e) => setFormData({ ...formData, tax2: e.target.value })}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-500 focus:ring-2 focus:ring-gray-300 outline-none"
              >
                <option value="">Select one</option>
                <option value="vat">VAT</option>
                <option value="gst">GST</option>
                <option value="sales-tax">Sales Tax</option>
              </select>
            </div>
          </div>

          {/* Payment Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Mode
            </label>
            <select
              value={formData.paymentMode}
              onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-700 focus:ring-2 focus:ring-gray-300 outline-none"
            >
              <option value="Web development">Web development</option>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          {/* Repeat Every */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Repeat Every
            </label>
            <select
              value={formData.repeatEvery}
              onChange={(e) => setFormData({ ...formData, repeatEvery: e.target.value })}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-700 focus:ring-2 focus:ring-gray-300 outline-none"
            >
              <option value="week">2 Weeks</option>
              <option value="month1">1 Months</option>
              <option value="month2">2 Months</option>
              <option value="month3">3 Months</option>
              <option value="month4">4 Months</option>
              <option value="month5">5 Months</option>
              <option value="month6">6 Months</option>
            </select>
          </div>

          {/* Save Button */}
          <div>
            <button
              onClick={handleSave}
              className="px-8 py-2.5 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}