"use client";
import React, { useState } from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';

interface CustomerGroup {
  id: number;
  name: string;
  Symbol: string;
  Options: string;
}

const Currencies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setModalMode] = useState<'add' | 'edit'>('add');
  const [, setSelectedGroup] = useState<CustomerGroup | null>(null);
  const [groupName, setGroupName] = useState('');

  const customerGroups: CustomerGroup[] = [
    { id: 1, name: 'EUR', Symbol: '€', Options: '' },
    { id: 2, name: 'USD', Symbol: '$', Options: '' },
    { id: 3, name: 'BDT', Symbol: '৳', Options: '' },
 
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
  Currencies
      </h1>
      <hr className="my-4" />

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row justify-between gap-3  mb-6">
        <div className="relative max-w-md w-full">
          <input
           type="text"
                placeholder="Search "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F6F6FB] px-4 py-3 rounded-md text-sm border pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex gap-2">
        
            <button  onClick={handleNewGroup} className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
           New Currencies
            </button>
        
          <button  onClick={handleExport} className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
            Export
          </button>
        </div>
      </div>



        {/* Table */}
        <div className="bg-white border overflow-y-auto border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E6E6E6] text-gray-600 text-xs">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                 Name
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">
              Symbol
                </th>
                <th className="px-6 py-3  text-sm font-medium text-gray-700">
                  Options
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
                    <div className="text-sm text-center text-gray-900">{group.Symbol}</div>
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

    {/* Currency Modal */}
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
    <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl">
      
      {/* Header */}
      <div className="px-8 pt-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Add New Currency
        </h2>
      </div>

      {/* Body */}
      <div className="px-8 py-6 space-y-6">

        {/* Info Alert */}
        <div className="rounded-md bg-yellow-50 border-l-4 border-yellow-400 px-4 py-3 text-sm text-yellow-700">
          Make sure to enter valid currency ISO code.
        </div>

        {/* Currency Code */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Currency Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Write here..."
            className="w-full rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Symbol */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Symbol <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Write here..."
            className="w-full rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Decimal Separator */}
        <div>
          <p className="text-sm font-medium text-gray-800 mb-2">
            Decimal Separator
          </p>
          <div className="space-y-2">
            {[".", ","].map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <input type="radio" name="decimal" />
                ({item})
              </label>
            ))}
          </div>
        </div>

        {/* Thousand Separator */}
        <div>
          <p className="text-sm font-medium text-gray-800 mb-2">
            Thousand Separator
          </p>
          <div className="space-y-2">
            {[".", ",", "'", "None", "Space"].map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <input type="radio" name="thousand" />
                ({item})
              </label>
            ))}
          </div>
        </div>

        {/* Currency Placement */}
        <div>
          <p className="text-sm font-medium text-gray-800 mb-2">
            Currency Placement
          </p>
          <div className="space-y-2">
            {["Before Amount", "After Amount"].map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <input type="radio" name="placement" />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex gap-4 px-8 pb-8">
        <button
          onClick={handleClose}
          className="rounded-md bg-gray-200 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
        >
          Close
        </button>
        <button
          onClick={handleSave}
          className="rounded-md bg-gray-200 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Currencies;