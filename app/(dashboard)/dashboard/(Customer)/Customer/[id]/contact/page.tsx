"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function ContactsPage() {
  const [contacts] = useState([
    {
      id: 1,
      name: 'Cameron Williamson',
      email: 'debra.holt@example.com',
      phone: '(208) 555-0112',
      active: true,
      lastLogin: '03-06-2025'
    },
    {
      id: 2,
      name: 'Cameron Williamson',
      email: 'debra.holt@example.com',
      phone: '(+33)6 55 59 32 88',
      active: true,
      lastLogin: '03-06-2025'
    }
  ]);

  return (
    <div className="p-4 sm:p-8">
      <div className="w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
          Contacts
        </h1>

        <div className="border border-gray-300 rounded-xl overflow-hidden p-4">
          {/* Search and Actions Bar */}
          <div className=" py-6 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center">
            <div className="relative w-full sm:flex-1 sm:max-w-md">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Contract"
                className="w-full pl-2 pr-10 py-2 border bg-[#FAFAFA] border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
             <Link href={`/dashboard/Customer/1/AddnewContact`}> <button className="w-full sm:w-auto px-5 py-2 bg-[#737373] text-white rounded-lg hover:bg-gray-700 transition-colors">
                Add new Contact
              </button></Link>
              <button className="w-full sm:w-auto px-5 py-2 bg-[#737373] text-white rounded-lg hover:bg-gray-700 transition-colors">
                Export
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border">
              <thead>
                <tr className="bg-[#2D2D2D] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold font-inter">#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold font-inter">Start Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold font-inter">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold font-inter">Phone Number</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold font-inter">Active</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold font-inter">Last Login</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50">
                    <td className="px-6 py-5 text-sm font-medium font-inter text-[#232323]">
                      {contact.id}
                    </td>

                    <td className="px-6 py-5">
                      <div className="text-sm font-medium font-inter text-[#232323]">
                        {contact.name}
                      </div>
                      <div className="flex gap-3 mt-1">
                        <button className="text-sm text-gray-600 hover:text-gray-900">
                          Edit
                        </button>
                        <span className="text-gray-300">|</span>
                        <button className="text-sm text-gray-600 hover:text-red-600">
                          Delete
                        </button>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm font-medium font-inter text-[#232323]">
                      {contact.email}
                    </td>
                    <td className="px-6 py-5 text-sm font-medium font-inter text-[#232323]">
                      {contact.phone}
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex px-3 py-2 text-sm font-medium bg-green-100 text-green-700 rounded-md">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm font-medium font-inter text-[#232323]">
                      {contact.lastLogin}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-4 sm:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center">
            <div className="text-sm text-gray-600">
              Showing 2 to 2 of 2 entries
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 text-sm bg-gray-200 text-gray-900 border border-gray-300 rounded">
                1
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
