"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function ProposalPage() {
  const [proposals] = useState([
    {
      id: 1,
      pNumber: '1',
      subject: 'Enhancing Sales Efficiency with a Tailored CRM Solution',
      total: '1',
      date: '03-06-2025',
      openTill: '03-06-2025',
      tags: '',
      dateCreated: '03-06-2025',
      status: ''
    },
    {
      id: 2,
      pNumber: '1',
      subject: 'Streamlining Customer Management for Business Growth',
      total: '3',
      date: '03-06-2025',
      openTill: '03-06-2025',
      tags: '',
      dateCreated: '03-06-2025',
      status: ''
    },
    {
      id: 3,
      pNumber: '1',
      subject: 'A Smart CRM Solution for Improved Customer Retention',
      total: '5',
      date: '03-06-2025',
      openTill: '03-06-2025',
      tags: '',
      dateCreated: '03-06-2025',
      status: ''
    }
  ]);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Proposal</h1>
        
        <div className="border border-gray-300 rounded-md p-4">
          {/* Search and Actions Bar */}
          <div className=" py-6 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Proposal"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded bg-[#FAFAFA] focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
              />
            </div>
            
            <div className="flex gap-3">
             

              <Link href={`/dashboard/Customer/1/CreateNewProposal`}> <button className="flex-1 sm:flex-none px-5 py-2 bg-[#737373] text-white rounded hover:bg-gray-700 transition-colors text-sm">
                 New Proposal
              </button></Link>
              <button className="flex-1 sm:flex-none px-5 py-2 bg-[#737373] text-white rounded hover:bg-gray-700 transition-colors text-sm">
                Export
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="bg-[#2D2D2D] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">P #</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Subject</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Total</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Open Till</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Tags</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date Created</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {proposals.map((proposal) => (
                  <tr key={proposal.id} className="hover:bg-gray-50">
                    <td className="px-6 py-5 text-sm text-gray-900">{proposal.pNumber}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{proposal.subject}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{proposal.total}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{proposal.date}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{proposal.openTill}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{proposal.tags}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{proposal.dateCreated}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{proposal.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-4 sm:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              Showing 3 to 3 of 3 entries
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 text-sm bg-gray-200 text-gray-900 border border-gray-300 rounded">
                1
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}