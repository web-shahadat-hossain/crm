import { useState } from 'react';

export default function AssignAdminTable() {
  const [staffMembers] = useState([
    {
      id: 1,
      name: 'Leslie Alexander',
      dateAssigned: '3.10.2025'
    },
    {
      id: 2,
      name: 'Cameron Williamson',
      dateAssigned: '3.10.2025'
    },
    {
      id: 3,
      name: 'Bessie Cooper',
      dateAssigned: '3.10.2025'
    }
  ]);

  return (
    <div className="w-full mx-auto p-6  bg-white border rounded-md shadow">
      {/* Assign Admin Button */}
      <div className="mb-6">
        <button className="px-6 py-4 bg-[#E6E6E6] border rounded-md border-gray-400 hover:bg-gray-300 text-[#5A5A5A] font-inter font-medium  text-base transition-colors">
          Assign Admin
        </button>
      </div>

      {/* Table */}
      <div className="border border-gray-200  overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#E6E6E6]">
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 w-16">
                #
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">
                Staff Member
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">
                Date Assigned
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {staffMembers.map((member) => (
              <tr 
                key={member.id}
                className={`border-t border-gray-200 bg-white `}
              >
                <td className="px-4 py-4 text-sm text-gray-900">
                  {member.id}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">
                  {member.name}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">
                  {member.dateAssigned}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">
                  {/* Options column - empty in the image */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-6">
        <button className="px-6 py-4 bg-[#E6E6E6] border rounded-md border-gray-400 hover:bg-gray-300 text-[#5A5A5A] font-inter font-medium  text-base transition-colors">
          Save
        </button>
      </div>
    </div>
  );
}