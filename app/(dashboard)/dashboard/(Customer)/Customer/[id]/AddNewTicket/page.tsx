'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TicketFormData {
  subject: string;
  tags: string;
  contract: string;
  priority: string;
  service: string;
  name: string;
  emailAddress: string;
  reference: string;
  department: string;
  cc: string;
  ticketBody: string;
  knowledgeBaseLink: string;
  clientNote: string;
}

export default function TicketInformationForm() {
  const [formData, setFormData] = useState<TicketFormData>({
    subject: 'Nothing Selected',
    tags: '@project, @payment',
    contract: 'Nothing Selected',
    priority: 'Medium',
    service: '5 days',
    name: 'Nothing Selected',
    emailAddress: 'Nothing Selected',
    reference: '0',
    department: 'Nothing Selected',
    cc: 'Nothing Selected',
    ticketBody: 'Insert Predefined reply',
    knowledgeBaseLink: 'Nothing Selected',
    clientNote: ''
  });

  const handleSubmit = () => {
    console.log('Ticket data:', formData);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto bg-white  p-6 sm:p-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Ticket Information</h1>
        
        <div className="space-y-6">
          {/* Subject and Tags */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({...formData, tags: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Contract */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contract
            </label>
            <div className="relative">
              <select
                value={formData.contract}
                onChange={(e) => setFormData({...formData, contract: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none cursor-pointer"
              >
                <option>Nothing Selected</option>
                <option>Contract 1</option>
                <option>Contract 2</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Priority and Service */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>
              <div className="relative">
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none cursor-pointer"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service
              </label>
              <div className="relative">
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none cursor-pointer"
                >
                  <option>1 day</option>
                  <option>3 days</option>
                  <option>5 days</option>
                  <option>1 week</option>
                  <option>2 weeks</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Name and Email Address */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="text"
                value={formData.emailAddress}
                onChange={(e) => setFormData({...formData, emailAddress: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Reference# */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reference#
              </label>
              <input
                type="text"
                value={formData.reference}
                onChange={(e) => setFormData({...formData, reference: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Department and CC */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <div className="relative">
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none cursor-pointer"
                >
                  <option>Nothing Selected</option>
                  <option>Sales</option>
                  <option>Support</option>
                  <option>Technical</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CC
              </label>
              <input
                type="text"
                value={formData.cc}
                onChange={(e) => setFormData({...formData, cc: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Ticket Body and Insert Knowledge base Link */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ticket Body
              </label>
              <div className="relative">
                <select
                  value={formData.ticketBody}
                  onChange={(e) => setFormData({...formData, ticketBody: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none cursor-pointer"
                >
                  <option>Insert Predefined reply</option>
                  <option>Template 1</option>
                  <option>Template 2</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Insert Knowledge base Link
              </label>
              <div className="relative">
                <select
                  value={formData.knowledgeBaseLink}
                  onChange={(e) => setFormData({...formData, knowledgeBaseLink: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none cursor-pointer"
                >
                  <option>Nothing Selected</option>
                  <option>KB Article 1</option>
                  <option>KB Article 2</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Client Note */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client Note
            </label>
            <textarea
              placeholder="Write here..."
              value={formData.clientNote}
              onChange={(e) => setFormData({...formData, clientNote: e.target.value})}
              
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
            />
          </div>

          {/* Open Ticket Button */}
          <div>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md font-medium transition-colors"
            >
              Open Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}