"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

type StatusType = 'Sent' | 'Open' 

interface Proposal {
  id: number;
  proposalNumber: string;
  subject: string;
  to: string;
  total: string;
  date: string;
  openTill: string;
  tags: string;
  project: string;
  dateCreated: string;
  status: StatusType;
}

const statusStyles: Record<StatusType, string> = {
  Sent: 'bg-[#0AA90F1A] text-[#0AA90F]',
  Open: 'bg-[#4A90E21A] text-[#4A90E2]'

};

const Proposals = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [proposalData] = useState<Proposal[]>([
    {
      id: 1,
      proposalNumber: 'PRO-000002',
      subject: 'Web Design Proposal',
      to: 'Leslie Alexander',
      total: '$256.00',
      date: '2025-03-19',
      openTill: '2025-03-19',
      tags: '',
      project: '',
      dateCreated: '26th April, 2025 at 12:30 AM',
      status: 'Sent',
    },
    {
      id: 2,
      proposalNumber: 'PRO-000002',
      subject: 'SEO Proposal',
      to: 'Cameron Williamson',
      total: '$256.00',
      date: '2025-03-19',
      openTill: '2025-03-19',
      tags: '',
      project: '',
      dateCreated: '26th April, 2025 at 12:30 AM',
      status: 'Open',
    },
  ]);

  const filteredProposals = proposalData.filter(
    (p) =>
      p.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.proposalNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalEntries = filteredProposals.length;

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="flex md:flex-row flex-col md:justify-between">
        <h2 className="text-2xl font-semibold text-[#777777] font-inter">
          New Proposal
        </h2>
        <div className="flex gap-3 justify-start md:justify-end">
          <Link href="/dashboard/Sales/proposals">
            <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
              Add New Proposal
            </button>
          </Link>
          <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
            Import
          </button>
        </div>
      </div>

      <hr className="my-5" />

      {/* Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 items-start">
        <div className="relative col-span-2">
          <input
            type="text"
            placeholder="Search Customer"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F6F6FB] rounded-md px-3 py-3 text-sm border border-gray-200"
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">P#</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Subject</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">To</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Total</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Open Till</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Tags</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Project</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date Created</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProposals.map((proposal) => (
              <tr key={proposal.id} className="hover:bg-gray-50 transition-colors">
                {/* P# */}
                <td className="px-4 py-4">
                  <div className="text-sm text-gray-900">{proposal.proposalNumber}</div>
                  <div className="flex gap-2 mt-1">
                    <Link
                      href={`/dashboard/Sales/proposals/${proposal.id}`}
                      className="text-xs text-gray-400 hover:text-gray-600"
                    >
                      Edit
                    </Link>
                    <span className="text-xs text-gray-400">|</span>
                    <button className="text-xs text-gray-400 hover:text-red-500">Delete</button>
                  </div>
                </td>

                {/* Subject */}
                <td className="px-4 py-4 text-sm text-gray-700">{proposal.subject}</td>

                {/* To */}
                <td className="px-4 py-4 text-sm text-gray-700">{proposal.to}</td>

                {/* Total */}
                <td className="px-4 py-4 text-sm text-gray-700">{proposal.total}</td>

                {/* Date */}
                <td className="px-4 py-4 text-sm text-gray-700">{proposal.date}</td>

                {/* Open Till */}
                <td className="px-4 py-4 text-sm text-gray-700">{proposal.openTill}</td>

                {/* Tags */}
                <td className="px-4 py-4 text-sm text-gray-700">{proposal.tags}</td>

                {/* Project */}
                <td className="px-4 py-4 text-sm text-gray-700">{proposal.project}</td>

                {/* Date Created */}
                <td className="px-4 py-4 text-sm text-gray-700 whitespace-pre-line">
                  {proposal.dateCreated}
                </td>

                {/* Status */}
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center px-3 py-2 rounded-xl text-xs font-medium ${statusStyles[proposal.status]}`}
                  >
                    {proposal.status}
                  </span>
                </td>
              </tr>
            ))}

            {filteredProposals.length === 0 && (
              <tr>
                <td colSpan={10} className="px-4 py-8 text-center text-sm text-gray-400">
                  No proposals found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          Showing 1 to {totalEntries} of {totalEntries} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button className="px-3 py-1 text-sm bg-black text-white rounded">1</button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proposals;