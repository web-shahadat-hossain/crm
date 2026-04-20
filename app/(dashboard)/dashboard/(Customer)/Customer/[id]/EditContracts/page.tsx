"use client";
import React, { useState } from 'react';
import { FileText, MessageSquare } from 'lucide-react';

export default function ContractDetailPage() {
  const [activeTab, setActiveTab] = useState('summary');

  const contractData = {
    company: 'Webnex IT',
    address: '172 Ivy Club Gottliebfurt',
    city: 'New Haven',
    country: 'Canada [CA] 2J6A',
    contractValue: '$1,953.00',
    contractNumber: '10',
    startDate: '2025-03-17',
    endDate: '2025-03-17',
    contractType: 'Adhesion Contracts'
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className="bg-white  border-gray-200 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Web Development Agreement: Terms & Conditions for Project Execution
            </h1>
            <p className="text-sm text-gray-500 mt-1">Contracts under seal</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Downloads
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Sign
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto p-4 bg-white sm:p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row border-b border-gray-200 mb-6 gap-2">
              <button
                onClick={() => setActiveTab('summary')}
                className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium text-sm ${
                  activeTab === 'summary'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FileText className="w-4 h-4" />
                Summary
              </button>
              <button
                onClick={() => setActiveTab('discussion')}
                className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium text-sm ${
                  activeTab === 'discussion'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                Discussion
              </button>
            </div>

            {/* Contract Content */}
            {activeTab === 'summary' && (
              <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                <p>
                  This Web Development Agreement (Agreement) is made and entered into as of [Date], by and between [Your Company Name] (Developer) and [Client`s Name] (Client).
                </p>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Scope of Work</h3>
                  <p className="mb-2">
                    The Developer agrees to design, develop, and deploy a fully functional website for the Client, including but not limited to:
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Custom website design and UI/UX development.</li>
                    <li>Front-end and back-end development.</li>
                    <li>Integration of third-party services and APIs.</li>
                    <li>Testing, debugging, and optimization for performance.</li>
                    <li>Deployment and basic training for website management.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Payment Terms</h3>
                  <p className="mb-2">The Client agrees to compensate the Developer as follows:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Project Fee: Total cost of $[Amount], payable in [Milestone-based/Fixed] installments.</li>
                    <li>Additional Charges: Any extra features requested beyond the initial agreement will be billed separately.</li>
                    <li>Late Payment Clause: Payments not received within [X] days will incur a late fee of $[Amount].</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Timeline & Deliverables</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>The project will begin on [Start Date] and is estimated to be completed by [Completion Date].</li>
                    <li>The Developer agrees to provide updates and progress reports at key milestones.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">4. Ownership & Intellectual Property</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Upon full payment, all website design, code, and content developed by the Developer shall be transferred to the Client.</li>
                    <li>The Developer retains the right to showcase the project in their portfolio unless agreed otherwise.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">5. Maintenance & Support</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>The Developer will provide [X] days/weeks of free post-launch maintenance for bug fixes.</li>
                    <li>Ongoing support and updates can be provided at an additional fee.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">6. Termination Clause</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Either party may terminate the agreement with a [X-day] written notice.</li>
                    <li>In case of termination before project completion, the Client shall pay for work completed up to the termination date.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">7. Liability & Warranties</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>The Developer is not responsible for any damages caused by third-party services, hosting issues, or cybersecurity breaches.</li>
                    <li>The website will be tested for compatibility and responsiveness, but future browser updates may require additional work.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'discussion' && (
              <div className="text-center py-12 text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p>No discussions yet</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-red-600 mb-4">{contractData.company}</h2>
            
            <div className="space-y-3 text-sm">
              <div className="text-gray-600">
                <p>{contractData.address}</p>
                <p>{contractData.city}</p>
                <p>{contractData.country}</p>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-gray-900">Contract Value:</span>
                  <span className="text-gray-900">{contractData.contractValue}</span>
                </div>
              </div>

              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span># Contract Number</span>
                  <span>{contractData.contractNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Start Date</span>
                  <span>{contractData.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>End Date</span>
                  <span>{contractData.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Contract type</span>
                  <span>{contractData.contractType}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
