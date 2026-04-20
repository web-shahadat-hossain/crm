/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from 'react';
import { Search, } from 'lucide-react';
import Link from 'next/link';

const StaffPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [staffData, setStaffData] = useState([
    {
      id: 1,
      ArticleName: 'tarek McKinney',
      Group: 'Sales',
      Date: '2025-03-24 05:00:07',

    },
    {
      id: 2,
      ArticleName: 'Marvin McKinney',
      Group: 'Info',
      Date: '2025-03-24 05:00:07',

    },
    {
      id: 3,
      ArticleName: 'Marvin McKinney',
      Group: 'Abuse',
      Date: '2025-03-24 05:00:07',

    },
    {
      id: 4,
      ArticleName: 'Marvin McKinney',
      Group: 'Sales',
      Date: '2025-03-24 05:00:07',

    },
    {
      id: 5,
      ArticleName: 'Marvin McKinney',
      Group: 'Info',
      Date: '2025-03-24 05:00:07',

    },

  ]);



  const filteredStaff = staffData.filter((staff) =>
    staff.ArticleName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalEntries = 12;
 

  return (
    <div className="min-h-screen bg-white p-4">
    

{/* tt */}

 <h2 className="text-2xl font-semibold text-[#777777] font-inter">
       Knowledge Base
      </h2>
      <hr className="my-5" />
      {/* Search + Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 items-start ">
        {/* Search Box */}
        <div className="relative col-span-2">
          <input
              type="text"
            placeholder="Search Knowledge Base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F6F6FB] rounded-md px-3 py-3 text-sm border border-gray-200"
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-start md:justify-end">
      <Link href="/dashboard/knowledge-base/AddNewArticle">
          <button className="border  border-gray-300 px-4 py-2 rounded-md text-sm bg-[#E6E6E6]  hover:text-black transition">
            New Article
          </button>
          </Link>

          <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
           Export
          </button>

          
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#e6e6e6] text-gray-600 border text-xs overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#E6E6E6] ">
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Article Name</th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Group</th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Date Published</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStaff.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4">
                  <div className="text-sm  text-gray-900">{staff.ArticleName}</div>
                  <div className="flex gap-2 mt-1">
                   <Link href={`/dashboard/knowledge-base/AddNewArticle/${staff.id}`}  className="text-xs text-gray-400">Edit</Link>
                    <span className="text-xs text-gray-400">|</span>
                    <button className="text-xs text-gray-400">Delete</button>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 text-center">{staff.Group}</td>
                <td className="px-4 py-4 text-sm text-center text-gray-700">{staff.Date}</td>
               
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          Showing 1 to 10 of {totalEntries} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button className="px-3 py-1 text-sm bg-black text-white rounded">
            1
          </button>
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

export default StaffPage;