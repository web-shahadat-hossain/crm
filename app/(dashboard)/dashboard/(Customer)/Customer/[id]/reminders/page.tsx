'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

interface Reminder {
  id: number;
  subject: string;
  startDate: string;
  remindPerson: string;
  signature: 'Yes' | 'No';
}

export default function RemindersPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const reminders: Reminder[] = [
    {
      id: 1,
      subject: "Check in with potential clients who haven't responded yet. A follow-up email or call could turn them into a customer!",
      startDate: '03-06-2025',
      remindPerson: 'Cameron Williamson',
      signature: 'Yes'
    },
    {
      id: 2,
      subject: "Check in with potential clients who haven't responded yet. A follow-up email or call could turn them into a customer!",
      startDate: '03-06-2025',
      remindPerson: 'Cameron Williamson',
      signature: 'No'
    }
  ];

  const handleSetReminders = () => {
    console.log('Set Reminders');
  };

  const handleExport = () => {
    console.log('Export reminders');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">Reminders</h1>
        
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          {/* Search and Buttons Row */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search Reminders"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            
            {/* Buttons */}
            <div className="flex gap-2">
              
              <Link href="/dashboard/Customer/1/AddNewReminders" > <button 
                onClick={handleSetReminders}
                className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-md font-medium transition-colors whitespace-nowrap text-sm"
              >
                Set Reminders
              </button></Link>
              <button 
                onClick={handleExport}
                className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-md font-medium transition-colors whitespace-nowrap text-sm"
              >
                Export
              </button>
            </div>
          </div>

          {/* Table - Desktop View */}
          <div className=" overflow-x-auto border">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left text-sm font-medium">Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Start Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Remind</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Signature</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reminders.map((reminder) => (
                  <tr key={reminder.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <div className="text-sm text-gray-900 mb-2">{reminder.subject}</div>
                      <div className="flex gap-2 text-xs">
                        <button className="text-blue-600 hover:text-blue-800">View</button>
                        <button className="text-blue-600 hover:text-blue-800">Edit</button>
                        <button className="text-blue-600 hover:text-blue-800">Delete</button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {reminder.startDate}
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded">
                        {reminder.remindPerson}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-block px-3 py-1 text-sm font-medium rounded ${
                        reminder.signature === 'Yes' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {reminder.signature}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 text-sm text-gray-600">
            <div className="order-2 sm:order-1">
              Showing 2 to 2 of 2 entries
            </div>
            <div className="flex gap-2 order-1 sm:order-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Previous
              </button>
              <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md font-medium">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}