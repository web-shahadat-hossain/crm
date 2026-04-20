/* eslint-disable @typescript-eslint/no-unused-vars */
import { SetStateAction, useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
 const [editingCustomer, setEditingCustomer] = useState(null);
  const customers = [
    {
      id: 1,
      company: 'Big Kahuna Burger Ltd.',
      contact: 'Leslie Alexander',
      email: 'kenzi.lawson@example.com',
      phone: '(+33)6 55 52 17 33',
      status: 'Active',
      groups: ['High Budget', 'Wholesaler'],
      date: '26th April, 2025 at 12:30 AM'
    },
    {
      id: 2,
      company: 'eBay',
      contact: 'Cameron Williamson',
      email: 'willie.jennings@example.com',
      phone: '(+33)6 55 55 2618',
      status: 'Active',
      groups: ['High Budget', 'Low Budget'],
      date: '26th April, 2025 at 12:30 AM'
    },
    {
      id: 3,
      company: 'Nintendo',
      contact: 'Bessie Cooper',
      email: 'dolores.chambers@example.com',
      phone: '(+33)7 00 55 54 79',
      status: 'Active',
      groups: ['High Budget', 'Wholesaler', 'VIP'],
      date: '26th April, 2025 at 12:30 AM'
    },
    {
      id: 4,
      company: 'General Electric',
      contact: 'Ralph Edwards',
      email: 'nevaeh.simmons@example.com',
      phone: '(+33)7 00 55 59 27',
      status: 'Inactive',
      groups: ['Wholesaler', 'VIP'],
      date: '26th April, 2025 at 12:30 AM'
    },
    {
      id: 5,
      company: 'Starbucks',
      contact: 'Leslie Alexander',
      email: 'debra.holt@example.com',
      phone: '(+33)6 55 59 32 88',
      status: 'Active',
      groups: ['High Budget', 'Wholesaler'],
      date: '26th April, 2025 at 12:30 AM'
    },
    {
      id: 6,
      company: 'Bank of America',
      contact: 'Robert Fox',
      email: 'debbie.baker@example.com',
      phone: '(+33)6 55 56 56 33',
      status: 'Active',
      groups: ['High Budget', 'Low Budget'],
      date: '26th April, 2025 at 12:30 AM'
    },
    {
      id: 7,
      company: 'Louis Vuitton',
      contact: 'Dianne Russell',
      email: 'michelle.rivera@example.com',
      phone: '(+33)7 00 55 57 60',
      status: 'Inactive',
      groups: ['High Budget', 'Wholesaler', 'VIP'],
      date: '26th April, 2025 at 12:30 AM'
    },
    {
      id: 8,
      company: 'IBM',
      contact: 'Jane Cooper',
      email: 'deanna.curtis@example.com',
      phone: '(+33)7 35 55 50 46',
      status: 'Active',
      groups: ['Wholesaler', 'VIP'],
      date: '26th April, 2025 at 12:30 AM'
    },
    {
      id: 9,
      company: 'The Walt Disney Com...',
      contact: 'Albert Flores',
      email: 'alma.lawson@example.com',
      phone: '(+33)7 75 55 87 24',
      status: 'Active',
      groups: ['High Budget', 'Low Budget'],
      date: '26th April, 2025 at 12:30 AM'
    },
    {
      id: 10,
      company: 'Apple',
      contact: 'Jenny Wilson',
      email: 'jackson.graham@example.com',
      phone: '(+33)7 65 55 72 67',
      status: 'Active',
      groups: ['High Budget', 'Low Budget', 'VIP'],
      date: '26th April, 2025 at 12:30 AM'
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const getGroupColor = (group: string) => {
    switch (group) {
      case 'High Budget':
        return 'bg-yellow-100 text-yellow-700';
      case 'Low Budget':
        return 'bg-green-100 text-green-700';
      case 'Wholesaler':
        return 'bg-purple-100 text-purple-700';
      case 'VIP':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen ">
 

  
        



          <div className="flex flex-col gap-1 w-1/3 mb-10">
          <div className="relative flex items-center">
            <input
            type="text"
               value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Customer"
              className="w-full bg-[#F6F6FB] rounded-lg px-3 py-4 md:py-5 text-sm"
            />
            <Search className="absolute right-3 top-4 md:top-6 h-4 w-4 text-gray-400" />
          </div>
        </div>
   
   

      {/* Table */}
      <div className="px-">
        <div className="bg-white border  overflow-y-auto ">
          <table className="w-full">
            <thead className="bg-[#e6e6e6] border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-inter font-semibold text-[#5A5A5A] uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-sm font-inter font-semibold text-[#5A5A5A] uppercase tracking-wider">Company Name</th>
                <th className="px-6 py-3 text-left text-sm font-inter font-semibold text-[#5A5A5A] uppercase tracking-wider">Primary Contact</th>
                <th className="px-6 py-3 text-left text-sm font-inter font-semibold text-[#5A5A5A] uppercase tracking-wider">Primary Email</th>
                <th className="px-6 py-3 text-left text-sm font-inter font-semibold text-[#5A5A5A] uppercase tracking-wider">Primary Contact</th>
                <th className="px-6 py-3 text-left text-sm font-inter font-semibold text-[#5A5A5A] uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-sm font-inter font-semibold text-[#5A5A5A] uppercase tracking-wider">Groups</th>
                <th className="px-6 py-3 text-left text-sm font-inter font-semibold text-[#5A5A5A] uppercase tracking-wider">Date Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#1F1F1F] font-inter">{customer.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-[#1F1F1F] font-inter">{customer.company}</div>
                    <div className="text-xs text-gray-500 space-x-2">
                      <Link 
                        href={`Customer/${customer.id}`}
                        className="text-[#777777] hover:text-blue-800"
                      >
                        Edit
                      </Link>
                      <button className="text-[#777777] hover:text-red-800">Delete</button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#1F1F1F] font-inter">{customer.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#1F1F1F] font-inter">{customer.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#1F1F1F] font-inter">{customer.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-[5px] ${
                      customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {customer.groups.map((group, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-2 text-xs rounded ${getGroupColor(group)}`}
                        >
                          {group}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#1F1F1F] font-inter">{customer.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 pb-6">
          <div className="text-sm text-gray-600">
            Showing 1 to 10 of 20 entries
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 text-sm bg-[#777777] text-white rounded-md">
              1
            </button>
            <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}