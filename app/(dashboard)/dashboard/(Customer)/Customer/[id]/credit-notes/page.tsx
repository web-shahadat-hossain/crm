"use client"
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CreditNotePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const creditNotes = [
    {
      id: 1,
      subject: 'Enhancing Sales Efficiency\nwith a Tailored CRM Solution',
      status: 'Active',
      project: '',
      date: '03-06-2025',
      amount: '03-06-2025',
      remainingAmount: '03-06-2025'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Credit Note</h1>
        
        <div className="flex justify-between items-center mb-5 py-4">
          <div className="relative flex-1 max-w-xs">
            <input
              type="text"
              placeholder="Search Credit Note"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-500"
            />
             <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          
          <div className="flex gap-3">
               <Link href={`/dashboard/Customer/1/NewCreditNote`}> <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm">
              New Credit Notes
              </button></Link>
            <button className="px-5 py-2.5 bg-gray-600 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
              Zip Credit notes
            </button>
          </div>
        </div>

        <div className="border border-gray-200  overflow-hidden mb-5">
          <table className="w-full">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-semibold">CN #</th>
                <th className="px-4 py-4 text-left text-xs font-semibold">Subject</th>
                <th className="px-4 py-4 text-left text-xs font-semibold">Status</th>
                <th className="px-4 py-4 text-left text-xs font-semibold">Project</th>
                <th className="px-4 py-4 text-left text-xs font-semibold">Date</th>
                <th className="px-4 py-4 text-left text-xs font-semibold">Amount</th>
                <th className="px-4 py-4 text-left text-xs font-semibold">Remaining Amount</th>
              </tr>
            </thead>
            <tbody>
              {creditNotes.map((note) => (
                <tr key={note.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-5 text-sm text-gray-800">{note.id}</td>
                  <td className="px-4 py-5 text-sm text-gray-800 whitespace-pre-line">
                    {note.subject}
                  </td>
                  <td className="px-4 py-5 text-sm">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                      {note.status}
                    </span>
                  </td>
                  <td className="px-4 py-5 text-sm text-gray-800">{note.project}</td>
                  <td className="px-4 py-5 text-sm text-gray-800">{note.date}</td>
                  <td className="px-4 py-5 text-sm text-gray-800">{note.amount}</td>
                  <td className="px-4 py-5 text-sm text-gray-800">{note.remainingAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center pt-4 text-sm text-gray-600">
          <div>Showing 1 to 1 of 1 entries</div>
          <div className="flex gap-2 items-center">
            <button 
              disabled
              className="px-4 py-2 border border-gray-300 bg-white rounded text-sm text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 bg-gray-100 rounded text-sm text-gray-800 font-semibold">
              1
            </button>
            <button 
              disabled
              className="px-4 py-2 border border-gray-300 bg-white rounded text-sm text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}