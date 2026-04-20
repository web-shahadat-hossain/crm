'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

type LeadStatus =
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'working'
  | 'proposalSent'
  | 'customer';

interface Lead {
  id: number;
  company: string;
  email: string;
  phone: string;
  value?: string;
  tags: string[];
  assigned: string;
  source: string;
  lastContact: string;
  created: string;
  status: LeadStatus;
}

const leadsData: Lead[] = [
  // ---------------- CONTACTED (10) ----------------
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    company: `Contacted Company ${i + 1}`,
    email: `contacted${i + 1}@example.com`,
    phone: '(704) 555-0127',
    tags: ['Follow-up'],
    assigned: 'Marvin McKinney',
    source: 'Facebook',
    lastContact: '2025-03-19',
    created: '2025-03-19',
    status: 'contacted' as const,
  })),

  // ---------------- NEW (10) ----------------
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    company: `New Company ${i + 1}`,
    email: `new${i + 1}@example.com`,
    phone: '(555) 123-4567',
    tags: ['Hot Lead'],
    assigned: 'John Doe',
    source: 'LinkedIn',
    lastContact: '2025-03-18',
    created: '2025-03-18',
    status: 'new' as const,
  })),

  // ---------------- QUALIFIED (10) ----------------
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 21,
    company: `Qualified Company ${i + 1}`,
    email: `qualified${i + 1}@example.com`,
    phone: '(555) 987-6543',
    tags: ['Enterprise'],
    assigned: 'Jane Smith',
    source: 'Website',
    lastContact: '2025-03-17',
    created: '2025-03-17',
    status: 'qualified' as const,
  })),

  // ---------------- WORKING (10) ----------------
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 31,
    company: `Working Company ${i + 1}`,
    email: `working${i + 1}@example.com`,
    phone: '(555) 222-3333',
    tags: ['In Progress'],
    assigned: 'Brooklyn Simmons',
    source: 'Referral',
    lastContact: '2025-03-16',
    created: '2025-03-16',
    status: 'working' as const,
  })),

  // ---------------- PROPOSAL SENT (10) ----------------
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 41,
    company: `Proposal Company ${i + 1}`,
    email: `proposal${i + 1}@example.com`,
    phone: '(555) 444-5555',
    tags: ['Proposal'],
    assigned: 'Theresa Webb',
    source: 'Email Campaign',
    lastContact: '2025-03-15',
    created: '2025-03-15',
    status: 'proposalSent' as const,
  })),

  // ---------------- CUSTOMER (10) ----------------
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 51,
    company: `Customer Company ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    phone: '(555) 666-7777',
    tags: ['Paid'],
    assigned: 'Annette Black',
    source: 'Direct',
    lastContact: '2025-03-14',
    created: '2025-03-14',
    status: 'customer' as const,
  })),
];


const LeadsManagement: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<LeadStatus>('contacted');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);

  const tabs = [
    { key: 'new', label: 'New', count: 20 },
    { key: 'contacted', label: 'Contacted', count: 5 },
    { key: 'qualified', label: 'Qualified', count: 3 },
    { key: 'working', label: 'Working', count: 17 },
    { key: 'proposalSent', label: 'Proposal Sent', count: 200 },
    { key: 'customer', label: 'Customer', count: 200 },
  ];

  const filteredLeads = leadsData.filter(
    (lead) =>
      lead.status === activeTab &&
      (lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.assigned.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleLeadSelection = (id: number) => {
    setSelectedLeads((prev) =>
      prev.includes(id)
        ? prev.filter((leadId) => leadId !== id)
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedLeads.length === filteredLeads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(filteredLeads.map((l) => l.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50  md:p-6">
      <div className="w-full mx-auto">
        <h2 className="text-2xl font-semibold text-[#777777]">
          Leads
        </h2>
        <hr className="my-5" />

        {/* Search + Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <div className="relative md:col-span-2">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Estimate Request"
              className="w-full bg-[#F6F6FB] rounded-md px-3 py-3 text-sm border border-gray-200"
            />
            <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
          </div>

          <div className="flex gap-3 flex-wrap md:justify-end">
            <Link href="/dashboard/NewLead">
              <button className="border bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
                New Leads
              </button>
            </Link>
            <button className="border bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
              Import Leads
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 items-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as LeadStatus)}
              className={`px-4 py-3 text-sm md:text-base font-medium rounded-md ${
                activeTab === tab.key
                  ? 'bg-[#5A5A5A] text-white'
                  : 'text-[#5A5A5A]'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
          <div className="ml-auto bg-[#ffe6e6] text-red-600 px-4 py-2 rounded-md text-sm">
            0 Lost Leads - 0.00%
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border">
          <div className="overflow-x-auto  mx-0">
            <table className="w-full min-w-[1100px]">
              <thead className="bg-[#e6e6e6]">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">
                    <input
                      type="checkbox"
                      onChange={toggleSelectAll}
                      checked={
                        selectedLeads.length ===
                          filteredLeads.length &&
                        filteredLeads.length > 0
                      }
                    />
                  </th>
                  <th className="px-4 py-3 whitespace-nowrap">#</th>
                  <th className="px-4 py-3 whitespace-nowrap">
                    Company
                  </th>
                  <th className="px-4 py-3 whitespace-nowrap">
                    Email
                  </th>
                  <th className="px-4 py-3 whitespace-nowrap">
                    Phone
                  </th>
                  <th className="px-4 py-3 whitespace-nowrap">
                    Value
                  </th>
                  <th className="px-4 py-3 whitespace-nowrap">
                    Tags
                  </th>
                  <th className="px-4 py-3 whitespace-nowrap">
                    Assigned
                  </th>
                  <th className="px-4 py-3 whitespace-nowrap">
                    Source
                  </th>
                  <th className="px-4 py-3 whitespace-nowrap">
                    Source
                  </th>
                  <th className="px-4 py-3 whitespace-nowrap">
                    Last Con...
                  </th>
                  <th className="px-4 py-3 whitespace-nowrap">
                    Created
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredLeads.map((lead, index) => (
                  <tr
                    key={lead.id}
                    className="border-t  hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedLeads.includes(
                          lead.id
                        )}
                        onChange={() =>
                          toggleLeadSelection(lead.id)
                        }
                      />
                    </td>
                    <td className="px-4 py-3">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium">
                        {lead.company}
                      </div>
                      <div className="text-xs text-gray-500">
                        Edit | Delete
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {lead.email}
                    </td>
                    <td className="px-4 py-3">
                      {lead.phone}
                    </td>
                    <td className="px-4 py-3">-</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1 flex-wrap">
                        {lead.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-gray-100 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {lead.assigned}
                    </td>
                    <td className="px-4 py-3">
                      {lead.source}
                    </td>
                    <td className="px-4 py-3">
                      <select className="border rounded text-sm px-2 py-1">
                        <option>Contacted</option>
                        <option>New</option>
                        <option>Qualified</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      {lead.lastContact}
                    </td>
                    <td className="px-4 py-3">
                      {lead.created}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-4 py-3 border-t flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-start md:items-center">
            <span className="text-sm text-gray-600">
              Showing 1 to {filteredLeads.length} of{' '}
              {filteredLeads.length} entries
            </span>
            <div className="flex gap-3">
              <button className="px-3 py-1.5 border rounded">
                Previous
              </button>
              <button className="px-3 py-1.5 bg-black text-white rounded">
                1
              </button>
              <button className="px-3 py-1.5 border rounded">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsManagement;
