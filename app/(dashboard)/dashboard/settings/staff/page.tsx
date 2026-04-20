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
      fullName: 'Marvin McKinney',
      email: 'jackson.graham@example.com',
      role: '',
      lastLogin: 'Never',
      active: true,
    },
    {
      id: 2,
      fullName: 'Theresa Webb',
      email: 'willie.jennings@example.com',
      role: '',
      lastLogin: 'Never',
      active: true,
    },
    {
      id: 3,
      fullName: 'Annette Black',
      email: 'tim.jennings@example.com',
      role: '',
      lastLogin: 'Never',
      active: true,
    },
    {
      id: 4,
      fullName: 'Bessie Cooper',
      email: 'nevaeh.simmons@example.com',
      role: '',
      lastLogin: '8 minutes ago',
      active: true,
    },
    {
      id: 5,
      fullName: 'Eleanor Pena',
      email: 'tanya.hill@example.com',
      role: '',
      lastLogin: 'Never',
      active: true,
    },
    {
      id: 6,
      fullName: 'Wade Warren',
      email: 'alma.lawson@example.com',
      role: '',
      lastLogin: '8 minutes ago',
      active: true,
    },
    {
      id: 7,
      fullName: 'Guy Hawkins',
      email: 'curtis.weaver@example.com',
      role: '',
      lastLogin: '8 minutes ago',
      active: true,
    },
    {
      id: 8,
      fullName: 'Darrell Steward',
      email: 'michelle.rivera@example.com',
      role: '',
      lastLogin: 'Never',
      active: true,
    },
    {
      id: 9,
      fullName: 'Leslie Alexander',
      email: 'nathan.roberts@example.com',
      role: '',
      lastLogin: '8 minutes ago',
      active: true,
    },
    {
      id: 10,
      fullName: 'Floyd Miles',
      email: 'michael.mitc@example.com',
      role: '',
      lastLogin: 'Never',
      active: true,
    },
  ]);

  const toggleActive = (id: number) => {
    setStaffData(
      staffData.map((staff) =>
        staff.id === id ? { ...staff, active: !staff.active } : staff
      )
    );
  };

  const filteredStaff = staffData.filter((staff) =>
    staff.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalEntries = 12;
 

  return (
    <div className="min-h-screen bg-white p-4">
    

{/* tt */}

 <h2 className="text-2xl font-semibold text-[#777777] font-inter">
        Staff
      </h2>
      <hr className="my-5" />
      {/* Search + Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 items-start ">
        {/* Search Box */}
        <div className="relative col-span-2">
          <input
              type="text"
            placeholder="Search Staff"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F6F6FB] rounded-md px-3 py-3 text-sm border border-gray-200"
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-start md:justify-end">
      <Link href="/dashboard/settings/staff/AddNewStaff">
          <button className="border bg-black border-gray-300 px-4 py-2 rounded-md text-sm text-white hover:bg-white hover:text-black transition">
            Add New
          </button>
          </Link>

          <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
            Import
          </button>

          
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#e6e6e6] text-gray-600 border text-xs overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Full Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Role</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Last Login</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Active</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStaff.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4">
                  <div className="text-sm text-gray-900">{staff.fullName}</div>
                  <div className="flex gap-2 mt-1">
                   <Link href={`/dashboard/settings/staff/${staff.id}`}  className="text-xs text-gray-400">Edit</Link>
                    <span className="text-xs text-gray-400">|</span>
                    <button className="text-xs text-gray-400">Delete</button>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{staff.email}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{staff.role}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{staff.lastLogin}</td>
                <td className="px-4 py-4">
                  <button
                    onClick={() => toggleActive(staff.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      staff.active ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        staff.active ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </td>
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