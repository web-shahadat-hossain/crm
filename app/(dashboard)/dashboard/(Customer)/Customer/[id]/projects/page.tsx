"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setActiveFilter] = useState('all');

  const statusCounts = {
    notStarted: 0,
    inProgress: 1,
    onHold: 0,
    cancelled: 0,
    finished: 0
  };

  const projects = [
    {
      id: 1,
      subject: 'Web Delevepment',
      tags: [],
      startDate: '03-06-2025',
      deadline: '03-06-2025',
      members: ['Cameron Williamson', 'Robert Fox', 'Jacob Jones'],
      status: 'In Progress'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">Projects</h1>
        
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          {/* Search and Button Row */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search Contract"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            
            {/* New Project Button */}
            <Link href={`/dashboard/Customer/1/AddNewProject`}>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium transition-colors whitespace-nowrap">
              New Project
            </button>
            </Link>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
            <button
              onClick={() => setActiveFilter('notStarted')}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-600">{statusCounts.notStarted}</span>
              <span className="ml-2 text-gray-700">Not Started</span>
            </button>
            <button
              onClick={() => setActiveFilter('inProgress')}
              className="px-4 py-2 border border-blue-300 rounded-md text-sm hover:bg-blue-50 transition-colors"
            >
              <span className="font-semibold text-blue-600">{statusCounts.inProgress}</span>
              <span className="ml-2 text-blue-700">In Progress</span>
            </button>
            <button
              onClick={() => setActiveFilter('onHold')}
              className="px-4 py-2 border border-yellow-300 rounded-md text-sm hover:bg-yellow-50 transition-colors"
            >
              <span className="font-semibold text-yellow-600">{statusCounts.onHold}</span>
              <span className="ml-2 text-yellow-700">On Hold</span>
            </button>
            <button
              onClick={() => setActiveFilter('cancelled')}
              className="px-4 py-2 border border-red-300 rounded-md text-sm hover:bg-red-50 transition-colors"
            >
              <span className="font-semibold text-red-600">{statusCounts.cancelled}</span>
              <span className="ml-2 text-red-700">Cancelled</span>
            </button>
            <button
              onClick={() => setActiveFilter('finished')}
              className="px-4 py-2 border border-green-300 rounded-md text-sm hover:bg-green-50 transition-colors"
            >
              <span className="font-semibold text-green-600">{statusCounts.finished}</span>
              <span className="ml-2 text-green-700">Finished</span>
            </button>
          </div>

          {/* Table - Desktop View */}
          <div className=" overflow-x-auto border">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left text-sm font-medium">P #</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Tags</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Start Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Deadline</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Members</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm text-gray-900 font-medium">
                      {project.id}
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm text-gray-900 mb-1">{project.subject}</div>
                      <div className="flex gap-2 text-xs">
                        <button className="text-blue-600 hover:text-blue-800">View</button>
                        <button className="text-blue-600 hover:text-blue-800">Edit</button>
                        <button className="text-blue-600 hover:text-blue-800">Delete</button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900"></td>
                    <td className="px-4 py-4 text-sm text-gray-900">{project.startDate}</td>
                    <td className="px-4 py-4 text-sm text-gray-900">{project.deadline}</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1">
                        {project.members.map((member, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded">
                        {project.status}
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