'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function VaultPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleNewEntry = () => {
    console.log('Create new vault entry');
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">Vault</h1>
        
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          {/* Search and Button Row */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search File"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            
            {/* New Vault Entry Button */}
          <Link href="/dashboard/Customer/1/AddNewVault" >
              <button 
              onClick={handleNewEntry}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium transition-colors whitespace-nowrap"
            >
              New Vault Entry
            </button>
            </Link>
          </div>

          {/* Empty State Message */}
          <div className="py-8 text-gray-900">
            Vault entries not found for this customer.
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 text-sm text-gray-600">
          <div className="order-2 sm:order-1">
            Showing 0 to 0 of 0 entries
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
  );
}