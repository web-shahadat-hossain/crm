"use client";
import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface Task {
  id: number;
  subject: string;
  status: string;
  tags: string[];
  startDate: string;
  deadline: string;
  assignedTo: string[];
  priority: string;
}

type TabType = 'customer' | 'projects' | 'invoices' | 'estimates' | 'contracts' | 'tickets' | 'expenses' | 'proposal';

export default function TasksPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<TabType>('customer');

  const tasks: Task[] = [
    {
      id: 1,
      subject: 'Web Delevepment',
      status: 'Not Started',
      tags: [],
      startDate: '03-06-2025',
      deadline: '03-06-2025',
      assignedTo: ['Cameron Williamson', 'Cameron Williamson'],
      priority: 'Medium'
    }
  ];

  const tabs: { id: TabType; label: string }[] = [
    { id: 'customer', label: 'Customer' },
    { id: 'projects', label: 'Projects' },
    { id: 'invoices', label: 'Invoices' },
    { id: 'estimates', label: 'Estimates' },
    { id: 'contracts', label: 'Contracts' },
    { id: 'tickets', label: 'Tickets' },
    { id: 'expenses', label: 'Expenses' },
    { id: 'proposal', label: 'Proposal' }
  ];

  const getPriorityColor = (priority: string): string => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-blue-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">Tasks</h1>
        
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          {/* Search and Button Row */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search Contract"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            
            {/* New Task Button */}
           <Link href="/dashboard/Customer/1/AddNewTask" >
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium transition-colors whitespace-nowrap">
              New Task
            </button>
            </Link>
          </div>

          {/* Related to Tabs */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Related to:</h3>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gray-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Table - Desktop View */}
          <div className=" overflow-x-auto border">
            <table className="w-full">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-left text-sm font-medium">#</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Tags</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Start Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Deadline</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Assign to</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Tags</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Priority</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm text-gray-900 font-medium">
                      {task.id}
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm text-gray-900 mb-1">{task.subject}</div>
                      <div className="flex gap-2 text-xs">
                        <button className="text-blue-600 hover:text-blue-800">View</button>
                        <button className="text-blue-600 hover:text-blue-800">Edit</button>
                        <button className="text-blue-600 hover:text-blue-800">Delete</button>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                          {task.status}
                        </span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">{task.startDate}</td>
                    <td className="px-4 py-4 text-sm text-gray-900">{task.deadline}</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-col gap-1">
                        {task.assignedTo.map((person, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded w-fit"
                          >
                            {person}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4"></td>
                    <td className="px-4 py-4">
                      <span className={`text-sm font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
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
              Showing 1 to 1 of 1 entries
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