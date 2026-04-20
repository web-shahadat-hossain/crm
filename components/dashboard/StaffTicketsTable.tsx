"use client";

import React, { useState } from 'react';
import { Search, Download } from 'lucide-react';
import { Card } from '../ui/card';

export default function StaffTicketsTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const allContracts = [
        { id: 1, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Cameron Williamson', startDate: '03-06-2025', endDate: '03-06-2025' },
        { id: 2, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Cameron Williamson', startDate: '03-06-2025', endDate: '03-06-2025' },
        { id: 3, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Cameron Williamson', startDate: '03-06-2025', endDate: '03-06-2025' },
        { id: 4, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Cameron Williamson', startDate: '03-06-2025', endDate: '03-06-2025' },
        { id: 5, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Cameron Williamson', startDate: '03-06-2025', endDate: '03-06-2025' },
        { id: 6, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Cameron Williamson', startDate: '03-06-2025', endDate: '03-06-2025' },
        { id: 7, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Cameron Williamson', startDate: '03-06-2025', endDate: '03-06-2025' },
        { id: 8, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'John Doe', startDate: '04-06-2025', endDate: '04-06-2025' },
        { id: 9, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Jane Smith', startDate: '05-06-2025', endDate: '05-06-2025' },
        { id: 10, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Michael Brown', startDate: '06-06-2025', endDate: '06-06-2025' },
        { id: 11, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Sarah Johnson', startDate: '07-06-2025', endDate: '07-06-2025' },
        { id: 12, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'David Wilson', startDate: '08-06-2025', endDate: '08-06-2025' },
        { id: 13, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Emily Davis', startDate: '09-06-2025', endDate: '09-06-2025' },
        { id: 14, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Robert Miller', startDate: '10-06-2025', endDate: '10-06-2025' },
        { id: 16, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Lisa Anderson', startDate: '11-06-2025', endDate: '11-06-2025' },
        { id: 17, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'James Taylor', startDate: '12-06-2025', endDate: '12-06-2025' },
        { id: 18, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Patricia Thomas', startDate: '13-06-2025', endDate: '13-06-2025' },
        { id: 19, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Christopher Moore', startDate: '14-06-2025', endDate: '14-06-2025' },
        { id: 20, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Jennifer Martin', startDate: '15-06-2025', endDate: '15-06-2025' },
        { id: 21, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Daniel Jackson', startDate: '16-06-2025', endDate: '16-06-2025' },
        { id: 22, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Nancy White', startDate: '17-06-2025', endDate: '17-06-2025' },
        { id: 23, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Matthew Harris', startDate: '18-06-2025', endDate: '18-06-2025' },
        { id: 24, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Karen Clark', startDate: '19-06-2025', endDate: '19-06-2025' },
        { id: 25, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Paul Lewis', startDate: '20-06-2025', endDate: '20-06-2025' },
        { id: 26, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Betty Robinson', startDate: '21-06-2025', endDate: '21-06-2025' },
        { id: 27, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Mark Walker', startDate: '22-06-2025', endDate: '22-06-2025' },
        { id: 28, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Sandra Hall', startDate: '23-06-2025', endDate: '23-06-2025' },
        { id: 29, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Steven Allen', startDate: '24-06-2025', endDate: '24-06-2025' },
        { id: 30, subject: "Oh dear! I'd nearly forgotten to ask: 'It turned into a,", customerName: 'Donna Young', startDate: '25-06-2025', endDate: '25-06-2025' },
    ];

    const filteredContracts = allContracts.filter(contract =>
        contract.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contract.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contract.id.toString().includes(searchQuery)
    );

    const totalPages = Math.ceil(filteredContracts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentContracts = filteredContracts.slice(startIndex, endIndex);

    const handleExport = () => {
        alert('Export functionality - CSV/Excel export would be implemented here');
    };

    const handleViewAll = () => {
        alert('View All functionality - Navigate to full contracts page');
    };

    return (
        <div>
            <Card className="w-full bg-white rounded-lg shadow-sm">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3 md:mb-0">Staff Tickets Report</h2>

                    <div className="flex flex-wrap justify-center items-center gap-3">
                        {/* Search Input */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Contract"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="pl-3 pr-9 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>

                        {/* View All Button */}
                        <button
                            onClick={handleViewAll}
                            className="px-4 py-2 text-sm text-white bg-gray-600 rounded hover:bg-gray-700 transition-colors"
                        >
                            View All
                        </button>

                        {/* Export Button */}
                        <button
                            onClick={handleExport}
                            className="px-4 py-2 text-sm text-white bg-gray-600 rounded hover:bg-gray-700 transition-colors"
                        >
                            Export
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Subject</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Customer Name</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Start Date</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">End Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {currentContracts.map((contract, index) => (
                                <tr key={contract.id} className="hover:bg-gray-50 transition-colors text-xs">
                                    <td className="px-6 py-4 text-gray-900">{contract.id}</td>
                                    <td className="px-6 py-4 text-gray-900">{contract.subject}</td>
                                    <td className="px-6 py-4 text-gray-900">{contract.customerName}</td>
                                    <td className="px-6 py-4 text-gray-900">{contract.startDate}</td>
                                    <td className="px-6 py-4 text-gray-900">{contract.endDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                        Showing {startIndex + 1} to {Math.min(endIndex, filteredContracts.length)} of {filteredContracts.length} entries
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 text-sm rounded transition-colors ${currentPage === 1
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            Previous
                        </button>

                        <button
                            className="px-3 py-1 text-sm bg-gray-200 text-gray-900 rounded font-medium"
                        >
                            {currentPage}
                        </button>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 text-sm rounded transition-colors ${currentPage === totalPages
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
}