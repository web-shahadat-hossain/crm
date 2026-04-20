'use client';
import React, { useState } from 'react';

interface VaultEntryData {
  file: File | null;
  serverAddress: string;
  port: string;
  userName: string;
  password: string;
  shortDescription: string;
  visibleToAllStaff: boolean;
  visibleToAdmins: boolean;
  visibleToMeOnly: boolean;
  shareInProjects: boolean;
}

export default function VaultEntryForm() {
  const [formData, setFormData] = useState<VaultEntryData>({
    file: null,
    serverAddress: '',
    port: '',
    userName: '',
    password: '',
    shortDescription: '',
    visibleToAllStaff: false,
    visibleToAdmins: false,
    visibleToMeOnly: false,
    shareInProjects: false
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

  const handleClose = () => {
    console.log('Close form');
  };

  const handleSave = () => {
    console.log('Save vault entry:', formData);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8  items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Vault Entry</h2>
      <div className="w-full  bg-white rounded-lg border p-6 sm:p-8">
        

        <div className="space-y-5">
          {/* Attach File */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Attach file
            </label>
            <div className="flex items-center gap-3">
              <label className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm cursor-pointer hover:bg-gray-300 transition-colors">
                Choose File
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span className="text-sm text-gray-500">
                {formData.file ? formData.file.name : 'No File Chosen'}
              </span>
            </div>
          </div>

          {/* Server Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Server Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Write here..."
              value={formData.serverAddress}
              onChange={(e) => setFormData({...formData, serverAddress: e.target.value})}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
            />
          </div>

          {/* Port */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Port
            </label>
            <input
              type="text"
              placeholder="Write here..."
              value={formData.port}
              onChange={(e) => setFormData({...formData, port: e.target.value})}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
            />
          </div>

          {/* User Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Write here..."
              value={formData.userName}
              onChange={(e) => setFormData({...formData, userName: e.target.value})}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Write here..."
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Write here..."
              value={formData.shortDescription}
              onChange={(e) => setFormData({...formData, shortDescription: e.target.value})}
            
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none text-sm"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.visibleToAllStaff}
                onChange={(e) => setFormData({...formData, visibleToAllStaff: e.target.checked})}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
              />
              <span className="ml-2 text-sm text-gray-700">
                Visible to all staff member who have access to this customer
              </span>
            </label>

            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.visibleToAdmins}
                onChange={(e) => setFormData({...formData, visibleToAdmins: e.target.checked})}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
              />
              <span className="ml-2 text-sm text-gray-700">
                Visible only to administrators
              </span>
            </label>

            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.visibleToMeOnly}
                onChange={(e) => setFormData({...formData, visibleToMeOnly: e.target.checked})}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
              />
              <span className="ml-2 text-sm text-gray-700">
                Visible only to me (administrators are not excluded)
              </span>
            </label>

            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.shareInProjects}
                onChange={(e) => setFormData({...formData, shareInProjects: e.target.checked})}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
              />
              <span className="ml-2 text-sm text-gray-700">
                Share this vault entry in projects with project members
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleClose}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors text-sm"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors text-sm"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}