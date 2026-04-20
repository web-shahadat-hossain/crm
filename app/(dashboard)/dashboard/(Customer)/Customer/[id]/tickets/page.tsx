'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

interface Ticket {
  id: number;
  subject: string;
  tags: string[];
  department: string;
  service: string;
  contact: string;
  status: string;
  priority: string;
  lastReply: string;
  created: string;
}

export default function TicketsPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Empty tickets array - shows "No entries found"
  const tickets: Ticket[] = [];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">Tickets</h1>
        
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          {/* Search and Button Row */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search Reminder"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            
            {/* New Ticket Button */}
            <Link href="/dashboard/Customer/1/AddNewTicket" >
             <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium transition-colors whitespace-nowrap">
              New Ticket
            </button>
            </Link>
          </div>

          {/* Table - Desktop View */}
          <div className=" overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left text-sm font-medium">#</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Tags</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Department</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Service</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Contact</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Priority</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Last Reply</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Created</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {tickets.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="px-4 py-8 text-left text-gray-900">
                      No entries found
                    </td>
                  </tr>
                ) : (
                  tickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-gray-50 border-b border-gray-200">
                      <td className="px-4 py-4 text-sm text-gray-900">{ticket.id}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{ticket.subject}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {ticket.tags.map((tag, idx) => (
                          <span key={idx} className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded mr-1">
                            {tag}
                          </span>
                        ))}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{ticket.department}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{ticket.service}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{ticket.contact}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{ticket.status}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{ticket.priority}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{ticket.lastReply}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{ticket.created}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

         

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 text-sm text-gray-600">
            <div className="order-2 sm:order-1">
              Showing 0 to 0 of 0 entries
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