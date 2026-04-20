"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  startDate: string;
  deadline: string;
  status: string;
}

const Projects: React.FC = () => {
  const [status, setStatus] = useState('This Month Logged in');
  const [searchQuery, setSearchQuery] = useState('');

  const projects: Project[] = [
    { id: 1, name: 'Website Redesign', startDate: '2025-04-14', deadline: '2025-04-14', status: 'In Progress' },
    { id: 2, name: 'Website Redesign', startDate: '2025-04-14', deadline: '2025-04-14', status: 'In Progress' },
    { id: 3, name: 'Website Redesign', startDate: '2025-04-14', deadline: '2025-04-14', status: 'In Progress' },
    { id: 4, name: 'Website Redesign', startDate: '2025-04-14', deadline: '2025-04-14', status: 'In Progress' }
  ];

  const handleApply = () => {
    console.log('Apply filter:', status);
  };

  const handleExport = () => {
    console.log('Export data');
  };

  return (
    <div className="min-h-screen ">
      <div className="w-full mx-auto">
      
{/* fff */}
 <div className="mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex flex-col  gap-4">
              <label className="text-sm font-medium text-gray-700">
                Status
              </label>
             <div className='flex flex-col md:flex-row gap-5 md:gap-20'> <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-64 px-4 py-2 bg-gray-100 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>This Month Logged in</option>
                <option>Last Month Logged in</option>
                <option>This Week Logged in</option>
                <option>All Time</option>
              </select>
               <button
              onClick={handleApply}
              className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition"
            >
              Apply
            </button></div>
            </div>
           
          </div>

          {/* Search and Import Section */}
          <div className="flex items-center justify-between">
         

   <div className="relative max-w-2xl w-full ">
          <input
           type="text"
                placeholder="Search Staff"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F6F6FB] rounded-md px-3 py-3 text-sm border border-gray-200"
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>






            <button
              onClick={handleExport}
              className="ml-4 border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition"
            >
              Export
            </button>
          </div>
        </div>



        {/* Table Section */}
        <div className="bg-white overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#E6E6E6] text-gray-600 text-xs">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Project Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Start Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Deadline
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Statuus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 font-medium">
                        {project.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {project.startDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {project.deadline}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200 bg-white">
            <div className="text-sm text-gray-700">
              Showing 1 to 10 of 12 entries
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="px-3 py-1 text-sm text-white bg-black">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;