"use client";

import React, { useState } from "react";
import {  FileText, MessageSquare, Download, PenLine } from "lucide-react";

type TabType = "summary" | "discussion";

const ProposalDetail = () => {
  const [activeTab, setActiveTab] = useState<TabType>("summary");

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Top Header */}
      <div className="flex items-start justify-between mb-1">
        <div>
          <h1 className="text-lg font-bold text-gray-800"># PRO-000001</h1>
          <p className="text-sm text-gray-500 mt-0.5">SEO Proposal</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 border border-gray-300 bg-[#0000008C] px-3 py-2.5 rounded-md text-sm text-white hover:bg-gray-200 transition">
            <Download className="w-3.5 h-3.5" />
            Downloads
          </button>
          <button className="flex items-center gap-1.5 border border-gray-300 bg-[#0000008C] px-3 py-2.5 rounded-md text-sm text-white hover:bg-gray-200 transition">
            <PenLine className="w-3.5 h-3.5" />
            Sign
          </button>
        </div>
      </div>

      <hr className="my-4" />

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Proposal Content */}
        <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3 border p-4 rounded-xl shadow-xl">
          <p className="text-[#000000] font-inter text-base">
            This Web Development Agreement Agreement is made and entered into as of [Date], by and between [Your
            Company Name] Developer and Client`s Name Client.
          </p>

          <div>
            <p className="text-[#000000] font-inter font-semibold text-base">1. Scope of Work</p>
            <p className="text-[#000000] font-inter text-base">
              The Developer agrees to design, develop, and deploy a fully functional website for the Client, including but not
              limited to:
            </p>
            <ul className="list-disc list-inside mt-1 space-y-0.5 pl-2">
              <li className="text-[#000000] font-inter text-base">Custom website design and UI/UX development.</li>
              <li className="text-[#000000] font-inter text-base">Front-end and back-end development.</li>
              <li className="text-[#000000] font-inter text-base">Integration of third-party services and APIs.</li>
              <li className="text-[#000000] font-inter text-base">Testing, debugging, and optimization for performance.</li>
              <li className="text-[#000000] font-inter text-base">Deployment and basic training for website management.</li>
            </ul>
          </div>

          <div>
            <p className="text-[#000000] font-semibold font-inter text-base">The Client agrees to compensate the Developer as follows:</p>
            <ul className="list-disc list-inside mt-1 space-y-0.5 pl-2">
              <li className="text-[#000000] font-inter text-base">Project Fee: Total cost of $[Amount], payable in [Milestone-based/Fixed] installments.</li>
              <li className="text-[#000000] font-inter text-base">Additional Charges: Any extra features requested beyond the initial agreement will be billed separately.</li>
              <li className="text-[#000000] font-inter text-base">Late Payment Clause: Payments not received within [X] days will incur a late fee of $[Amount].</li>
            </ul>
          </div>

          <div>
            <p className="text-[#000000] font-inter text-base font-semibold">3. Timeline & Deliverables</p>
            <ul className="list-disc list-inside mt-1 space-y-0.5 pl-2">
              <li className="text-[#000000] font-inter text-base">The project will begin on [Start Date] and is estimated to be completed by [Completion Date].</li>
              <li className="text-[#000000] font-inter text-base">The Developer agrees to provide updates and progress reports at key milestones.</li>
            </ul>
          </div>

          <div>
            <p className="text-[#000000] font-inter text-base font-semibold">4. Ownership & Intellectual Property</p>
            <ul className="list-disc list-inside mt-1 space-y-0.5 pl-2">
              <li className="text-[#000000] font-inter text-base">
                Upon full payment, all website design, code, and content developed by the Developer shall be transferred to the
                Client.
              </li>
              <li className="text-[#000000] font-inter text-base">The Developer retains the right to showcase the project in their portfolio unless agreed otherwise.</li>
            </ul>
          </div>

          <div>
            <p className="text-[#000000] font-inter text-base font-semibold">5. Maintenance & Support</p>
            <ul className="list-disc list-inside mt-1 space-y-0.5 pl-2">
              <li className="text-[#000000] font-inter text-base">The Developer will provide [X] days/weeks of free post-launch maintenance for bug fixes.</li>
              <li className="text-[#000000] font-inter text-base">Ongoing support and updates can be provided at an additional fee.</li>
            </ul>
          </div>

          <div>
            <p className="text-[#000000] font-inter text-base font-semibold">6. Termination Clause</p>
            <ul className="list-disc list-inside mt-1 space-y-0.5 pl-2">
              <li className="text-[#000000] font-inter text-base">Either party may terminate the agreement with a [X-day] written notice.</li>
              <li className="text-[#000000] font-inter text-base">
                In case of termination before project completion, the Client shall pay for work completed up to the termination
                date.
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#000000] font-inter text-base font-semibold">7. Liability & Warranties</p>
            <ul className="list-disc list-inside mt-1 space-y-0.5 pl-2">
              <li className="text-[#000000] font-inter text-base">
                The Developer is not responsible for any damages caused by third-party services, hosting issues, or
                cybersecurity breaches.
              </li>
              <li className="text-[#000000] font-inter text-base">
                The website will be tested for compatibility and responsiveness, but future browser updates may require
                additional work.
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Summary Panel */}
        <div className="w-full lg:w-72 shrink-0 ">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-4">
            <button
              onClick={() => setActiveTab("summary")}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium border-b-2 transition ${
                activeTab === "summary"
                  ? "border-gray-800 text-[#1F1F1F] text-xl font-semibold font-inter"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              <FileText className="w-6.5 h-6.5" />
              Summary
            </button>
            <button
              onClick={() => setActiveTab("discussion")}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium border-b-2 transition ${
                activeTab === "discussion"
                  ? "border-gray-800 text-[#1F1F1F] text-xl font-semibold font-inter"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              <MessageSquare className="w-6.5 h-6.5" />
              Discussion
            </button>
          </div>

          {activeTab === "summary" && (
            <div className="space-y-5 text-sm">
              {/* Company */}
              <div>
                <p className="font-semibold font-inter text-[#FF0000] text-xl">Webnex IT</p>
                <p className="text-[#777777] font-medium text-base font-inter mt-0.5">172 Ivy Club Gottlebfurt</p>
                <p className="text-[#777777] font-medium text-base font-inter mt-0.5">New Heaven</p>
                <p className="text-[#777777] font-medium text-base font-inter mt-0.5">Canada (CA) 2364</p>
              </div>

              <hr />

              {/* Proposal Information */}
              <div>
                <p className="text-[#1F1F1F] text-xl font-semibold font-inter">Proposal Information</p>
               
                <p className="text-[#777777] font-medium text-base font-inter mt-0.5">172 Ivy Club Gottlebfurt</p>
                <p className="text-[#777777] font-medium text-base font-inter mt-0.5">New Heaven</p>
                <p className="text-[#777777] font-medium text-base font-inter mt-0.5">Canada (CA) 2364</p>
                <p className="text-[#4A90E2] font-medium text-base font-inter mt-0.5">+1-779-980-7588</p>
                <p className="text-[#4A90E2] font-medium text-base font-inter mt-0.5">invoice.sla@example.net</p>
                <p className="text-[#777777] font-medium text-base font-inter mt-1.5">Total : $1,853.00</p>
              </div>

              <hr />

              {/* Status / Date / Open Till */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className="text-teal-600 font-medium">Open</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date</span>
                  <span className="text-gray-700">2025-03-17</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Open Till</span>
                  <span className="text-gray-700">2025-03-17</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "discussion" && (
            <div className="text-sm text-gray-500 mt-4">
              No discussion yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProposalDetail;