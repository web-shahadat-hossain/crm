/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Profile = () => {
  const [formData, setFormData] = useState<{
    isAdmin: boolean;
    notStaffMember: boolean;
    profileImage: File | null;
    firstName: string;
    lastName: string;
    email: string;
    hourlyRate: string;
    phone: string;
    facebook: string;
    linkedin: string;
    skype: string;
    defaultLanguage: string;
    emailSignature: string;
    direction: string;
    departments: {
      marketing: boolean;
      sales: boolean;
      abuse: boolean;
    };
    sendWelcomeEmail: boolean;
    password: string;
  }>({
    isAdmin: false,
    notStaffMember: false,
    profileImage: null,
    firstName: '',
    lastName: '',
    email: '',
    hourlyRate: '',
    phone: '',
    facebook: '',
    linkedin: '',
    skype: '',
    defaultLanguage: '',
    emailSignature: '',
    direction: 'RTL',
    departments: {
      marketing: false,
      sales: false,
      abuse: false,
    },
    sendWelcomeEmail: true,
    password: '',
  });

  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDepartmentChange = (dept: 'marketing' | 'sales' | 'abuse') => {
    setFormData({
      ...formData,
      departments: {
        ...formData.departments,
        [dept]: !formData.departments[dept],
      },
    });
  };

  const handleFileChange = (e:any) => {
    setFormData({
      ...formData,
      profileImage: e.target.files[0],
    });
  };

  const handleSave = () => {
    console.log('Form data:', formData);
    alert('Staff data saved successfully!');
  };

  return (
    <div className="min-h-screen bg-white p-6 border rounded-lg">
      <div className="w-full">
        {/* Administrator Checkboxes */}
        <div className="space-y-2 mb-6">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleInputChange}
              className="w-4 h-4 border-gray-300 rounded"
            />
            Administrator
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              name="notStaffMember"
              checked={formData.notStaffMember}
              onChange={handleInputChange}
              className="w-4 h-4 border-gray-300 rounded"
            />
            Not Staff Member
          </label>
        </div>

        {/* Profile Image */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Image
          </label>
          <div className="flex items-center gap-3">
            <label className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded cursor-pointer hover:bg-gray-300">
              Choose file
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
            </label>
            <span className="text-sm text-gray-500">
              {formData.profileImage ? formData.profileImage.name : 'No file chosen'}
            </span>
          </div>
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Clare"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Clare"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Clare"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Hourly Rate */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hourly Rate
          </label>
          <input
            type="number"
            name="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleInputChange}
            placeholder="0"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+++++++++++++++++"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Facebook */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Facebook
          </label>
          <input
            type="text"
            name="facebook"
            value={formData.facebook}
            onChange={handleInputChange}
            placeholder="link..."
            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* LinkedIn */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            LinkedIn
          </label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            placeholder="link..."
            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Skype */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Skype
          </label>
          <input
            type="text"
            name="skype"
            value={formData.skype}
            onChange={handleInputChange}
            placeholder="link..."
            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Default Language */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Default Language
          </label>
          <div className="relative">
            <select
              name="defaultLanguage"
              value={formData.defaultLanguage}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm appearance-none cursor-pointer"
            >
              <option value="">link...</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Email Signature */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Signature
          </label>
          <textarea
            name="emailSignature"
            value={formData.emailSignature}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm resize-none"
          />
        </div>

        {/* Direction */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Direction
          </label>
          <div className="relative">
            <select
              name="direction"
              value={formData.direction}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm appearance-none cursor-pointer"
            >
              <option value="RTL">RTL</option>
              <option value="LTR">LTR</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Member Departments */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Member departments
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.departments.marketing}
                onChange={() => handleDepartmentChange('marketing')}
                className="w-4 h-4 border-gray-300 rounded"
              />
              Marketing
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.departments.sales}
                onChange={() => handleDepartmentChange('sales')}
                className="w-4 h-4 border-gray-300 rounded"
              />
              Sales
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.departments.abuse}
                onChange={() => handleDepartmentChange('abuse')}
                className="w-4 h-4 border-gray-300 rounded"
              />
              Abuse
            </label>
          </div>
        </div>

        {/* Send Welcome Email */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              name="sendWelcomeEmail"
              checked={formData.sendWelcomeEmail}
              onChange={handleInputChange}
              className="w-4 h-4 border-gray-300 rounded"
            />
            Send welcome email
          </label>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Clare"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;