"use client";
import React, { useState } from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';

interface CustomerGroup {
  id: number;
  name: string;
  staffMember: string;
}

const CustomerGroupPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [, setSelectedGroup] = useState<CustomerGroup | null>(null);
  const [groupName, setGroupName] = useState('');

  const customerGroups: CustomerGroup[] = [
    { id: 1, name: 'High Budget', staffMember: '' },
    { id: 2, name: 'Low Budget', staffMember: '' },
    { id: 3, name: 'VIP', staffMember: '' },
    { id: 4, name: 'Wholesaler', staffMember: '' }
  ];

  const handleNewGroup = () => {
    setModalMode('add');
    setGroupName('');
    setIsModalOpen(true);
  };

  const handleEditGroup = (group: CustomerGroup) => {
    setModalMode('edit');
    setSelectedGroup(group);
    setGroupName(group.name);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    console.log('Delete group:', id);
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
       Customer Group
      </h1>
      <hr className="my-4" />

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row justify-between gap-3  mb-6">
        <div className="relative max-w-md w-full">
          <input
           type="text"
                placeholder="Search Goal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F6F6FB] px-4 py-3 rounded-md text-sm border pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex gap-2">
        
            <button  onClick={handleNewGroup} className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
               New Customer Group
            </button>
        
          <button  onClick={handleExport} className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
            Export
          </button>
        </div>
      </div>


        {/* Table */}
        <div className="bg-white border overflow-hidden  border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E6E6E6] text-gray-600 text-xs">
                <th className="px-12 py-3 text-left text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="px-12 py-3  text-sm font-medium text-gray-700">
                  Staff Member
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {customerGroups.map((group) => (
                <tr key={group.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{group.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEditGroup(group)}
                        className="p-1 text-black hover:text-blue-600 transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(group.id)}
                        className="p-1 text-black hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
              {modalMode === 'add' ? 'Add New Customer Group' : 'Edit Customer Group'}
            </h2>

            <div className="bg-white border border-gray-300 rounded-lg p-8 mb-8">
              <label className="block mb-4">
                <span className="text-lg font-medium text-gray-900">
                  Name <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Write here..."
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex gap-4 mt-8">
                <button
                  onClick={handleClose}
                  className="px-12 py-3 bg-gray-200 text-gray-700 rounded-lg text-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleSave}
                  className="px-12 py-3 bg-gray-200 text-gray-700 rounded-lg text-lg font-medium hover:bg-gray-300 transition-colors"
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

export default CustomerGroupPage;