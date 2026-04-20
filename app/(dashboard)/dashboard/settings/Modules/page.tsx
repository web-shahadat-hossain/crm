"use client";

import { useState } from "react";

export default function ModulesPage() {
  const [search, setSearch] = useState("");

  const modules = [
    { name: "Database Backup", desc: "Default module for defining goals", version: "Version 2.3.0", info: "Database Backup" },
    { name: "CSV Export Manager", desc: "Default module for defining goals", version: "Version 2.3.0" },
    { name: "Goals", desc: "Default module for defining goals", version: "Version 2.3.0" },
    { name: "Menu Setup", desc: "Default module for defining goals", version: "Version 2.3.0", info: "Main Menu | Setup Menu" },
    { name: "Surveys", desc: "Default module for defining goals", version: "Version 2.3.0" },
    { name: "Theme Style", desc: "Default module for defining goals", version: "Version 2.3.0", info: "Settings" },
  ];

  const filtered = modules.filter((m) => m.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="w-full px-6 py-6 bg-gray-50 min-h-screen text-gray-700">
      {/* Upload Module */}
      <div className="flex flex-col gap-3 mb-6">
        <label className="text-sm font-medium">Upload Module</label>
        <div className="flex items-center gap-3">
          <input
            type="file"
            className="border border-gray-300 bg-white text-sm rounded-lg py-2 px-3 w-80"
          />
          <button className="bg-gray-200 text-gray-800 rounded px-4 py-2 text-sm hover:bg-gray-300">Install</button>
        </div>
      </div>

      {/* Search + Export */}
      <div className="flex justify-between items-center mb-3">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 border border-gray-300 bg-white rounded-lg py-2 px-3 text-sm"
        />
        <button className="bg-gray-200 text-gray-800 rounded px-4 py-2 text-sm hover:bg-gray-300">Export</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white  shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="py-3 px-4 text-left">Module</th>
              <th className="py-3 px-4 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m, i) => (
              <tr key={i} className="border-b last:border-none">
                <td className="py-3 px-4">
                  <div className="text-blue-600 font-medium cursor-pointer">{m.name}</div>
                  <div className="text-xs flex gap-2 text-gray-500 mt-1">
                    <span>Deactivate</span>
                    {m.info && <span>| {m.info}</span>}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="text-gray-600 text-sm">{m.desc}</div>
                  <div className="text-xs text-blue-600 mt-1">{m.version}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between text-sm text-gray-500 mt-4">
        <span>Showing {filtered.length} of {modules.length} entries</span>
        <div className="flex gap-3">
          <button className="hover:text-gray-700">Previous</button>
          <span className="px-2 py-1 bg-blue-600 text-white rounded">1</span>
          <button className="hover:text-gray-700">Next</button>
        </div>
      </div>
    </div>
  );
}
