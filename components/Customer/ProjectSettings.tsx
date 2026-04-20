"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type VisibleTabs = {
  task: boolean;
  timeSheets: boolean;
  milestones: boolean;
  tickets: boolean;
  files: boolean;
  discussion: boolean;
  gantt: boolean;
  comments: boolean;
};

type Sales = {
  proposal: boolean;
  subscription: boolean;
  estimates: boolean;
  invoices: boolean;
  expenses: boolean;
  creditNotes: boolean;
};

type Other = {
  notes: boolean;
  activities: boolean;
};

type Permissions = {
  viewTasks: boolean;
  createTask: boolean;
  editTasksOnlyCreated: boolean;
  commentProjectTasks: boolean;
  viewTaskComments: boolean;
  viewTaskAttachments: boolean;
  viewTaskChecklistItems: boolean;
  uploadAttachments: boolean;
  viewTaskLoggedTime: boolean;
  viewFinanceOverview: boolean;
  uploadFiles: boolean;
  openDiscussions: boolean;
  viewMilestones: boolean;
  viewGantt: boolean;
  viewTimesheets: boolean;
  viewActivityLog: boolean;
  viewTeamMembers: boolean;
  hideProjectTasks: boolean;
};

type Settings = {
  rtl: "RTL" | "LTR";
  visibleTabs: VisibleTabs;
  sales: Sales;
  other: Other;
  permissions: Permissions;
};

export default function ProjectSettings() {
  const [settings, setSettings] = useState<Settings>({
    rtl: "RTL",
    visibleTabs: {
      task: false,
      timeSheets: false,
      milestones: false,
      tickets: false,
      files: false,
      discussion: false,
      gantt: false,
      comments: false,
    },
    sales: {
      proposal: false,
      subscription: false,
      estimates: false,
      invoices: false,
      expenses: false,
      creditNotes: false,
    },
    other: {
      notes: false,
      activities: false,
    },
    permissions: {
      viewTasks: false,
      createTask: false,
      editTasksOnlyCreated: false,
      commentProjectTasks: false,
      viewTaskComments: false,
      viewTaskAttachments: false,
      viewTaskChecklistItems: false,
      uploadAttachments: false,
      viewTaskLoggedTime: false,
      viewFinanceOverview: false,
      uploadFiles: false,
      openDiscussions: false,
      viewMilestones: false,
      viewGantt: false,
      viewTimesheets: false,
      viewActivityLog: false,
      viewTeamMembers: false,
      hideProjectTasks: false,
    },
  });

  // ✅ Type-safe checkbox handler for object sections (exclude rtl)
  const handleCheckboxChange = <
    Section extends keyof Omit<Settings, "rtl">,
    Field extends keyof Settings[Section]
  >(
    section: Section,
    field: Field
  ) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: !prev[section][field],
      },
    }));
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Send Contact Notification
        </h2>

        {/* RTL Dropdown */}
        <div className="mb-8">
          <div className="relative">
            <select
              value={settings.rtl}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  rtl: e.target.value as "RTL" | "LTR",
                }))
              }
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none cursor-pointer text-sm"
            >
              <option value="RTL">RTL</option>
              <option value="LTR">LTR</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Visible Tabs */}
        <SectionCheckboxes
          title="Visible Tabs"
          section="visibleTabs"
          settings={settings}
          handleCheckboxChange={handleCheckboxChange}
          labels={{
            task: "Task",
            timeSheets: "Time Sheets",
            milestones: "Milestones",
            tickets: "Tickets",
            files: "Files",
            discussion: "Discussion",
            gantt: "Gantt",
            comments: "Comments",
          }}
        />

        {/* Sales */}
        <SectionCheckboxes
          title="Sales"
          section="sales"
          settings={settings}
          handleCheckboxChange={handleCheckboxChange}
          labels={{
            proposal: "Proposal",
            subscription: "Subscription",
            estimates: "Estimates",
            invoices: "Invoices",
            expenses: "Expenses",
            creditNotes: "Credit Notes",
          }}
        />

        {/* Other */}
        <SectionCheckboxes
          title="Other"
          section="other"
          settings={settings}
          handleCheckboxChange={handleCheckboxChange}
          labels={{
            notes: "Notes",
            activities: "Activities",
          }}
        />

        {/* Permissions */}
        <SectionCheckboxes
          title="Permissions"
          section="permissions"
          settings={settings}
          handleCheckboxChange={handleCheckboxChange}
          labels={{
            viewTasks: "Allow customer to view tasks",
            createTask: "Allow customer to create tasks",
            editTasksOnlyCreated:
              "Allow customer to edit tasks (only tasks created from contact)",
            commentProjectTasks:
              "Allow customer to comment on project tasks",
            viewTaskComments: "Allow customer to view task comments",
            viewTaskAttachments: "Allow customer to view task attachments",
            viewTaskChecklistItems:
              "Allow customer to view task checklist items",
            uploadAttachments: "Allow customer to upload attachments on tasks",
            viewTaskLoggedTime:
              "Allow customer to view task total logged time",
            viewFinanceOverview: "Allow customer to view finance overview",
            uploadFiles: "Allow customer to upload files",
            openDiscussions: "Allow customer to open discussions",
            viewMilestones: "Allow customer to view milestones",
            viewGantt: "Allow customer to view Gantt",
            viewTimesheets: "Allow customer to view timesheets",
            viewActivityLog: "Allow customer to view activity log",
            viewTeamMembers: "Allow customer to view team members",
            hideProjectTasks:
              "Hide project tasks on main tasks beta (when auto)",
          }}
        />

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full sm:w-auto px-8 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md font-medium transition-colors cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}

// Reusable section checkbox component
type SectionCheckboxesProps<Section extends keyof Omit<Settings, "rtl">> = {
  title: string;
  section: Section;
  settings: Settings;
  handleCheckboxChange: <
    S extends Section,
    F extends keyof Settings[S]
  >(
    section: S,
    field: F
  ) => void;
  labels: Record<keyof Settings[Section], string>;
};

function SectionCheckboxes<Section extends keyof Omit<Settings, "rtl">>({
  title,
  section,
  settings,
  handleCheckboxChange,
  labels,
}: SectionCheckboxesProps<Section>) {
  const sectionData = settings[section] as Settings[Section];
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        {Object.keys(sectionData).map((key) => {
          const field = key as keyof Settings[Section];
          return (
            <label
              key={key}
              className="flex items-center cursor-pointer text-sm text-gray-700"
            >
              <input
                type="checkbox"
               
                onChange={() => handleCheckboxChange(section, field)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2">{labels[field]}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
