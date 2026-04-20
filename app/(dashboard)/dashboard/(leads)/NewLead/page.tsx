'use client';
import React, { useState } from 'react';

interface LeadFormData {
  status: string;
  source: string;
  assigned: string;
  tags: string;
  name: string;
  address: string;
  position: string;
  city: string;
  email: string;
  state: string;
  website: string;
  country: string;
  phone: string;
  zipCode: string;
  leadValue: string;
  defaultLanguage: string;
  company: string;
  description: string;
  isPublic: boolean;
  contactedToday: boolean;
}

const AddNewLead: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    status: '',
    source: '',
    assigned: '',
    tags: '@followup',
    name: '',
    address: '',
    position: '',
    city: '',
    email: '',
    state: '',
    website: '',
    country: '',
    phone: '',
    zipCode: '',
    leadValue: '',
    defaultLanguage: '',
    company: '',
    description: '',
    isPublic: false,
    contactedToday: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleClose = () => {
    console.log('Form closed');
  };

  const handleSave = () => {
    console.log('Form saved:', formData);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg ">
        {/* Header */}
        <div className="px-6 py-4  border-gray-200">
          <h2 className="text-xl font-medium text-gray-900">Add new Lead</h2>
        </div>

        {/* Form Content */}
        <div className="p-6 border rounded-xl">
          {/* Top Row - 3 Dropdowns */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select one</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="working">Working</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Source
              </label>
              <select
                name="source"
                value={formData.source}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select one</option>
                <option value="facebook">Facebook</option>
                <option value="linkedin">LinkedIn</option>
                <option value="website">Website</option>
                <option value="referral">Referral</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assigned
              </label>
              <select
                name="assigned"
                value={formData.assigned}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select one</option>
                <option value="marvin">Marvin McKinney</option>
                <option value="annette">Annette Black</option>
                <option value="kristin">Kristin Watson</option>
                <option value="brooklyn">Brooklyn Simmons</option>
              </select>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="@followup"
              className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Name & Address */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Write here..."
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Write here..."
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Position & City */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="Write here..."
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Write here..."
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Email Address & State */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Write here..."
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="Write here..."
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Website & Country */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website
              </label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="Write here..."
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Write here...</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
              </select>
            </div>
          </div>

          {/* Phone & Zip Code */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Write here..."
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="Write here..."
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Lead Value & Default Language */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lead Value
              </label>
              <input
                type="text"
                name="leadValue"
                value={formData.leadValue}
                onChange={handleInputChange}
                placeholder="Write here..."
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Default Language
              </label>
              <select
                name="defaultLanguage"
                value={formData.defaultLanguage}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Write here...</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </select>
            </div>
          </div>

          {/* Company */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Write here..."
              className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Write here..."
              rows={4}
              className="w-full px-3 py-2 text-sm  rounded bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex gap-6 mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isPublic"
                checked={formData.isPublic}
                onChange={handleCheckboxChange}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Public</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="contactedToday"
                checked={formData.contactedToday}
                onChange={handleCheckboxChange}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Contacted Today</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-[#F1F1F1] rounded hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-[#F1F1F1] rounded hover:bg-gray-300 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewLead;