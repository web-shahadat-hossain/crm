import { Search } from 'lucide-react';
import React, { useState } from 'react';

const TimeSheets: React.FC = () => {
  const [status, setStatus] = useState('This Month Logged in');
  const [searchQuery, setSearchQuery] = useState('');

  const handleApply = () => {
    console.log('Apply filter:', status);
  };

  const handleImport = () => {
    console.log('Import data');
  };

  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full mx-auto">
        {/* Filter Section */}
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
              onClick={handleImport}
              className="ml-4 border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition"
            >
              Import
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white  overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#E6E6E6] text-gray-600 text-xs">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Task
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Start Time
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    End Time
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Related
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    hourly Rate (Staff)
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Time (h)
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Time (Decimal)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                    No entries Found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSheets;