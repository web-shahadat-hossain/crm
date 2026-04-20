'use client';
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface ReminderFormData {
  dateToBeNotified: string;
  setReminderTo: string;
  shortDescription: string;
  sendEmail: boolean;
}

export default function SetReminderForm() {
  const [formData, setFormData] = useState<ReminderFormData>({
    dateToBeNotified: '',
    setReminderTo: '@jacob',
    shortDescription: '',
    sendEmail: false
  });

  const handleClose = () => {
    console.log('Close form');
  };

  const handleSave = () => {
    console.log('Save reminder:', formData);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 ">
      <div className="w-full  bg-white rounded-lg shadow-2xl border p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Set Reminder</h2>

        <div className="space-y-5">
          {/* Date to be Notified */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date to be Notified <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Write here..."
                value={formData.dateToBeNotified}
                onChange={(e) => setFormData({...formData, dateToBeNotified: e.target.value})}
                className="w-full px-4 py-2 pr-10 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Set Reminder to */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Set Reminder to
            </label>
            <input
              type="text"
              value={formData.setReminderTo}
              onChange={(e) => setFormData({...formData, setReminderTo: e.target.value})}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Write here..."
              value={formData.shortDescription}
              onChange={(e) => setFormData({...formData, shortDescription: e.target.value})}
              
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none text-sm"
            />
          </div>

          {/* Send Email Checkbox */}
          <div>
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.sendEmail}
                onChange={(e) => setFormData({...formData, sendEmail: e.target.checked})}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
              />
              <span className="ml-2 text-sm text-gray-700">
                Send also an email for this reminder
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleClose}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors text-sm"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors text-sm"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}