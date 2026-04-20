"use client";
import React, { useState } from 'react';
import { Search, Edit,  } from 'lucide-react';

interface CustomerGroup {
  id: number;
  Backup: string;
  BackupSize: string;
  Date: number;
  Options: string;
  
}

const DatabaseBackup: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setModalMode] = useState<'add' | 'edit'>('add');
  const [, setSelectedGroup] = useState<CustomerGroup | null>(null);
  const [groupName, setGroupName] = useState('');

  const customerGroups: CustomerGroup[] = [

  ];

  const handleNewGroup = () => {
    setModalMode('add');
    setGroupName('');
    setIsModalOpen(true);
  };

  const handleEditGroup = (group: CustomerGroup) => {
    setModalMode('edit');
    setSelectedGroup(group);
    setGroupName(group.Backup);
    setIsModalOpen(true);
  };



  const handleSave = () => {
    console.log('Save:', groupName);
    setIsModalOpen(false);
    setGroupName('');
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setGroupName('');
  };

  const handleExport = () => {
    console.log('Export data');
  };

  return (
    <div className="min-h-screen  ">
      <div className="w-full mx-auto">
        {/* Header */}
       



{/* ffff */}
<h1 className="text-2xl font-semibold text-gray-700">
     Database Backup
      </h1>
      <hr className="my-4" />

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row justify-between gap-3  mb-6">
        <div className="relative max-w-md w-full">
          <input
           type="text"
                placeholder="Search Services"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F6F6FB] px-4 py-3 rounded-md text-sm border pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex gap-2">
        
            <button  onClick={handleNewGroup} className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
            Auto backup
            </button>
        
          <button  onClick={handleExport} className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
           Create Database Backup
          </button>
        </div>
      </div>


        {/* Table */}
        <div className="bg-white border overflow-x-auto  border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E6E6E6] text-gray-600 text-xs">
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">
                  Backup
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">
                 Backup Size
                </th>
               
              </tr>
                <th className="px-6 py-3  text-sm font-medium text-gray-700">
                Date
                </th>
                <th className="px-6 py-3  text-sm font-medium text-gray-700">
               Oprions
                </th>
            </thead>
            <tbody className="divide-y">
              {customerGroups.map((group) => (
                <tr key={group.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3">
                    <div className="text-sm text-gray-900">{group.Backup}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium font-inter text-[#232323]">{group.BackupSize}</div>
                    <div className="text-xs font-inter text-[#777777]">{group.Date}</div>
                    <div className="text-xs font-inter text-[#777777]">{group.Options}</div>
                  </td>
               
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEditGroup(group)}
                        className="p-1 text-black hover:text-blue-600 transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                    
                    </div>
                  </td>
                </tr>
              ))}
              {customerGroups.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">          
                    No Services found.
                  </td>
                </tr>
              )}        
            </tbody>
          </table>

       
        </div>
           {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200 bg-white">
            <div className="text-sm text-gray-700">
              Showing 1 to 4 of 4 entries
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="px-3 py-1 text-sm text-white bg-black">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Next
              </button>
            </div>
          </div>
      </div>
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
    <div className="w-full max-w-xl bg-white rounded-lg shadow-lg">
      <div className="p-6">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          New Service

        </h2>

        {/* Form */}
        <div className="space-y-5">
          {/* Ticket Status Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Service Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Write here..."
              className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-md text-sm
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          

      
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={handleClose}
            className="px-8 py-2 bg-gray-200 text-gray-700 rounded-md text-sm
                       hover:bg-gray-300 transition"
          >
            Close
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-2 bg-gray-200 text-gray-700 rounded-md text-sm
                       hover:bg-gray-300 transition"
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

export default DatabaseBackup;