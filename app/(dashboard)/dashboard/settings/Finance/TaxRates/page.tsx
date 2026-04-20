"use client";
import React, { useState } from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';

interface CustomerGroup {
  id: number;
  TaxName: string;
  Rate: string;
  Options: string;
   
}

const TaxRates: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setModalMode] = useState<'add' | 'edit'>('add');
  const [, setSelectedGroup] = useState<CustomerGroup | null>(null);
  const [groupName, setGroupName] = useState('');

  const customerGroups: CustomerGroup[] = [
    { id: 1, TaxName: '	TAX3', Rate: '5.00', Options: '',  },
    { id: 2, TaxName: '	Entertainment Tax', Rate: '5.00', Options: '', },
    { id: 3, TaxName: 'TAX2', Rate: '10.00', Options: '',   },
    { id: 4, TaxName: 'TAX1', Rate: '15.00', Options: '',   }
  ];

  const handleNewGroup = () => {
    setModalMode('add');
    setGroupName('');
    setIsModalOpen(true);
  };

  const handleEditGroup = (group: CustomerGroup) => {
    setModalMode('edit');
    setSelectedGroup(group);
    setGroupName(group.TaxName);
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
     Tax Rates
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
              New Tax
            </button>
        
          <button  onClick={handleExport} className="bg-[#E6E6E6] px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white">
            Export
          </button>
        </div>
      </div>


        {/* Table */}
        <div className="bg-white border overflow-x-auto  border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E6E6E6] text-gray-600 text-xs">
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">
                  Id
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
               Tax Name
                </th>
                <th className="px-6 py-3 text-left  text-sm font-medium text-gray-700">
                 Rate (Percent)
                </th>
              
                <th className="px-6 py-3  text-sm font-medium text-gray-700">
                Options
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {customerGroups.map((group) => (
                <tr key={group.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3">
                    <div className="text-sm text-center text-gray-900">{group.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{group.TaxName}</div>
                  </td>
                  <td className="px-6  text-leftpy-4">
                <div className="text-sm text-left text-gray-900">{group.Rate}</div>
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

{isModalOpen && (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
Add New Tax
        </h2>

        <div className="space-y-6">
          {/* Department Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
             Tax Name  <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Write here..."
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
             Tax Rate (percent) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Write here..."
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        

         

      

         

        


          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
            <button
              onClick={handleClose}
              className="px-8 py-2 bg-gray-200 text-gray-700 rounded text-sm font-medium hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="px-8 py-2 bg-gray-200 text-gray-700 rounded text-sm font-medium hover:bg-gray-300 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default TaxRates;