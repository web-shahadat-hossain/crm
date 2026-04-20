"use client";

import React, { useState } from 'react';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Announcement {
    id: number;
    name: string;
    tags: string[];
    datePublished: string;
}

const AnnouncementsComponent = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([
        {
            id: 1,
            name: 'Gillespie Tea (Afro) Law, INC',
            tags: ['SME', 'Hotels'],
            datePublished: '2025-03-24 09:00:07'
        },
        {
            id: 2,
            name: 'Bank of America',
            tags: ['SME', 'Hotels'],
            datePublished: '2025-03-24 09:00:07'
        },
        {
            id: 3,
            name: 'Bank of America',
            tags: ['SME', 'Hotels'],
            datePublished: '2025-03-24 09:00:07'
        },
        {
            id: 4,
            name: 'Bank of America',
            tags: ['SME', 'Hotels'],
            datePublished: '2025-03-24 09:00:07'
        },
        {
            id: 5,
            name: 'Bank of America',
            tags: ['SME', 'Hotels'],
            datePublished: '2025-03-24 09:00:07'
        },
        {
            id: 6,
            name: 'Bank of America',
            tags: ['SME', 'Hotels'],
            datePublished: '2025-03-24 09:00:07'
        },
        {
            id: 7,
            name: 'Bank of America',
            tags: ['SME', 'Hotels'],
            datePublished: '2025-03-24 09:00:07'
        },
        {
            id: 8,
            name: 'Bank of America',
            tags: ['SME', 'Hotels'],
            datePublished: '2025-03-24 09:00:07'
        },
        {
            id: 9,
            name: 'Bank of America',
            tags: ['SME', 'Hotels'],
            datePublished: '2025-03-24 09:00:07'
        },
        {
            id: 10,
            name: 'Bank of America',
            tags: ['SME', 'Hotels'],
            datePublished: '2025-03-24 09:00:07'
        }
    ]);

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(10);

    // Form states
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [showToStaff, setShowToStaff] = useState<boolean>(false);
    const [showToClients, setShowToClients] = useState<boolean>(false);
    const [showMyName, setShowMyName] = useState<boolean>(false);

    const filteredAnnouncements = announcements.filter(announcement =>
        announcement.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalEntries = filteredAnnouncements.length;
    const totalPages = Math.ceil(totalEntries / itemsPerPage);
    const startEntry = (currentPage - 1) * itemsPerPage + 1;
    const endEntry = Math.min(currentPage * itemsPerPage, totalEntries);

    const currentAnnouncements = filteredAnnouncements.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSave = () => {
        if (!subject.trim() || !message.trim()) {
            alert('Please fill in both Subject and Message fields');
            return;
        }

        const newAnnouncement: Announcement = {
            id: announcements.length + 1,
            name: subject,
            tags: ['SME', 'Hotels'],
            datePublished: new Date().toISOString().replace('T', ' ').substring(0, 19)
        };

        setAnnouncements([newAnnouncement, ...announcements]);

        // Reset form
        setSubject('');
        setMessage('');
        setShowToStaff(false);
        setShowToClients(false);
        setShowMyName(false);
        setIsModalOpen(false);

        alert('Announcement created successfully!');
    };

    const handleExport = () => {
        console.log('Exporting announcements...');
        alert('Export functionality triggered');
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Announcements</h1>

                {/* Search and Actions Bar */}
                <div className="bg-white rounded-lg shadow-sm mb-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
                        {/* Search */}
                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                placeholder="Search Knowledge Base"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded-lg transition-colors"
                            >
                                New Announcement
                            </button>
                            <button
                                onClick={handleExport}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded-lg transition-colors"
                            >
                                Export
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Date Published
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {currentAnnouncements.map((announcement) => (
                                    <tr key={announcement.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {announcement.name}
                                            </div>
                                            <div className="flex gap-2 mt-1">
                                                {announcement.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="text-xs text-gray-500"
                                                    >
                                                        {tag} {index < announcement.tags.length - 1 ? '· ' : ''}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm text-gray-600">
                                            {announcement.datePublished}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                            Showing {startEntry} to {endEntry} of {totalEntries} entries
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                                className={`px-3 py-1 text-sm rounded border ${currentPage === 1
                                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                Previous
                            </button>
                            <span className="text-sm text-gray-700">
                                {currentPage}
                            </span>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-1 text-sm rounded border ${currentPage === totalPages
                                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add New Announcement Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-white/15 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg w-full max-w-2xl">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Add New Announcement
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                                <X size={20} className="text-gray-600" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-4">
                            {/* Subject */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter subject"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="(Optional)"
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />
                            </div>

                            {/* Checkboxes */}
                            <div className="flex flex-wrap gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={showToStaff}
                                        onChange={(e) => setShowToStaff(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">Show to staff</span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={showToClients}
                                        onChange={(e) => setShowToClients(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">Show to clients</span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={showMyName}
                                        onChange={(e) => setShowMyName(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">Show my name</span>
                                </label>
                            </div>

                            {/* Save Button */}
                            <div className="pt-2">
                                <button
                                    onClick={handleSave}
                                    className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnnouncementsComponent;