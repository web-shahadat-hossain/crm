'use client';
import React, { useState } from 'react';
import { Search, Upload } from 'lucide-react';

interface FileItem {
  id: number;
  name: string;
  showCustomerArea: boolean;
  dateUploaded: string;
}

export default function FilesPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const files: FileItem[] = [];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log('File selected:', file.name);
    }
  };

  const handleExport = () => {
    console.log('Export files');
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Files</h1>
        
        {/* Info Text */}
        <p className="text-blue-600 text-sm mb-6">
          Files from projects and tasks linked to the customer are not shown on this table.
        </p>

        {/* File Upload Area */}
        <div className="mb-6">
          <label htmlFor="file-upload" className="block">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-16 text-center cursor-pointer hover:border-gray-400 transition-colors bg-white">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <span className="text-sm text-gray-600">Attach File</span>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </label>
          {selectedFile && (
            <p className="text-sm text-gray-600 mt-2">
              Selected: {selectedFile.name}
            </p>
          )}
        </div>

        {/* Search and Export Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
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
            
            {/* Export Button */}
            <button 
              onClick={handleExport}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium transition-colors whitespace-nowrap"
            >
              Export
            </button>
          </div>

          {/* Table - Desktop View */}
          <div className=" overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left text-sm font-medium">Files</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Show Customer Area</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Date Uploaded</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Options</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {files.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-left text-gray-900">
                      No Entries Found
                    </td>
                  </tr>
                ) : (
                  files.map((file) => (
                    <tr key={file.id} className="hover:bg-gray-50 border-b border-gray-200">
                      <td className="px-4 py-4 text-sm text-gray-900">{file.name}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {file.showCustomerArea ? 'Yes' : 'No'}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{file.dateUploaded}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                        <button className="text-red-600 hover:text-red-800">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
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
    </div>
  );
}