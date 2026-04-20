import React, { useState } from 'react';

interface Permission {
  id: string;
  label: string;
}

interface Section {
  title: string;
  permissions: Permission[];
}

const RolePermissions: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('Administrator');
  const [checkedPermissions, setCheckedPermissions] = useState<Set<string>>(new Set());

  const sections: Section[] = [
    {
      title: 'Bulk PDF Export',
      permissions: [
        { id: 'pdf-view', label: 'View/Global' }
      ]
    },
    {
      title: 'Contracts',
      permissions: [
        { id: 'contracts-view-own', label: 'View (Own)' },
        { id: 'contracts-edit', label: 'Edit' },
        { id: 'contracts-view-global', label: 'View/Global' },
        { id: 'contracts-delete', label: 'Delete' },
        { id: 'contracts-create', label: 'Create' },
        { id: 'contracts-templates', label: 'View All Templates' }
      ]
    },
    {
      title: 'Credit Notes',
      permissions: [
        { id: 'credit-view-own', label: 'View (Own)' },
        { id: 'credit-edit', label: 'Edit' },
        { id: 'credit-view-global', label: 'View/Global' },
        { id: 'credit-delete', label: 'Delete' },
        { id: 'credit-create', label: 'Create' }
      ]
    },
    {
      title: 'Customers',
      permissions: [
        { id: 'customers-view-own', label: 'View (Own)' },
        { id: 'customers-edit', label: 'Edit' },
        { id: 'customers-view-global', label: 'View/Global' },
        { id: 'customers-delete', label: 'Delete' },
        { id: 'customers-create', label: 'Create' }
      ]
    },
    {
      title: 'Email Templates',
      permissions: [
        { id: 'email-view', label: 'View/Global' },
        { id: 'email-edit', label: 'Edit' }
      ]
    },
    {
      title: 'Estimates',
      permissions: [
        { id: 'estimates-view-own', label: 'View (Own)' },
        { id: 'estimates-edit', label: 'Edit' },
        { id: 'estimates-view-global', label: 'View/Global' },
        { id: 'estimates-delete', label: 'Delete' },
        { id: 'estimates-create', label: 'Create' }
      ]
    },
    {
      title: 'Expenses',
      permissions: [
        { id: 'expenses-view-own', label: 'View (Own)' },
        { id: 'expenses-edit', label: 'Edit' },
        { id: 'expenses-view-global', label: 'View/Global' },
        { id: 'expenses-delete', label: 'Delete' },
        { id: 'expenses-create', label: 'Create' }
      ]
    },
    {
      title: 'Invoices',
      permissions: [
        { id: 'invoices-view-own', label: 'View (Own)' },
        { id: 'invoices-edit', label: 'Edit' },
        { id: 'invoices-view-global', label: 'View/Global' },
        { id: 'invoices-delete', label: 'Delete' },
        { id: 'invoices-create', label: 'Create' }
      ]
    },
    {
      title: 'Items',
      permissions: [
        { id: 'items-view', label: 'View/Global' },
        { id: 'items-edit', label: 'Edit' },
        { id: 'items-create', label: 'Create' },
        { id: 'items-delete', label: 'Delete' }
      ]
    },
    {
      title: 'Knowledge Base',
      permissions: [
        { id: 'kb-view', label: 'View/Global' },
        { id: 'kb-edit', label: 'Edit' },
        { id: 'kb-create', label: 'Create' },
        { id: 'kb-delete', label: 'Delete' }
      ]
    },
    {
      title: 'Payments',
      permissions: [
        { id: 'payments-view-own', label: 'View (Own)' },
        { id: 'payments-edit', label: 'Edit' },
        { id: 'payments-view-global', label: 'View/Global' },
        { id: 'payments-delete', label: 'Delete' },
        { id: 'payments-create', label: 'Create' }
      ]
    },
    {
      title: 'Projects',
      permissions: [
        { id: 'projects-view-own', label: 'View (Own)' },
        { id: 'projects-edit', label: 'Edit' },
        { id: 'projects-view-global', label: 'View/Global' },
        { id: 'projects-delete', label: 'Delete' },
        { id: 'projects-create', label: 'Create' },
        { id: 'projects-milestones', label: 'Delete Milestones' },
        { id: 'projects-timesheets', label: 'Create Timesheets' },
        { id: 'projects-edit-milestones', label: 'Edit Milestones' }
      ]
    },
    {
      title: 'Proposals',
      permissions: [
        { id: 'proposals-view-own', label: 'View (Own)' },
        { id: 'proposals-edit', label: 'Edit' },
        { id: 'proposals-view-global', label: 'View/Global' },
        { id: 'proposals-delete', label: 'Delete' },
        { id: 'proposals-create', label: 'Create' },
        { id: 'proposals-templates', label: 'View All Templates' }
      ]
    },
    {
      title: 'Reports',
      permissions: [
        { id: 'reports-view', label: 'View/Global' },
        { id: 'reports-timesheets', label: 'View Timesheets Report' }
      ]
    },
    {
      title: 'Staff Roles',
      permissions: [
        { id: 'roles-view', label: 'View/Global' },
        { id: 'roles-edit', label: 'Edit' },
        { id: 'roles-create', label: 'Create' },
        { id: 'roles-delete', label: 'Delete' }
      ]
    },
    {
      title: 'Settings',
      permissions: [
        { id: 'settings-view', label: 'View/Global' },
        { id: 'settings-edit', label: 'Edit' }
      ]
    },
    {
      title: 'Staff',
      permissions: [
        { id: 'staff-view', label: 'View/Global' },
        { id: 'staff-edit', label: 'Edit' },
        { id: 'staff-create', label: 'Create' },
        { id: 'staff-delete', label: 'Delete' }
      ]
    },
    {
      title: 'Subscriptions',
      permissions: [
        { id: 'subs-view-own', label: 'View (Own)' },
        { id: 'subs-edit', label: 'Edit' },
        { id: 'subs-view-global', label: 'View/Global' },
        { id: 'subs-delete', label: 'Delete' },
        { id: 'subs-create', label: 'Create' }
      ]
    },
    {
      title: 'Tasks',
      permissions: [
        { id: 'tasks-view-own', label: 'View (Own)' },
        { id: 'tasks-edit', label: 'Edit' },
        { id: 'tasks-view-global', label: 'View/Global' },
        { id: 'tasks-delete', label: 'Delete' },
        { id: 'tasks-create', label: 'Create' },
        { id: 'tasks-timesheets-global', label: 'Delete Timesheets (Global)' },
        { id: 'tasks-own-timesheets', label: 'Edit Own Timesheets' },
        { id: 'tasks-delete-own', label: 'Delete own Timesheets' }
      ]
    },
    {
      title: 'Task Checklist Templates',
      permissions: [
        { id: 'checklist-create', label: 'Create' },
        { id: 'checklist-delete', label: 'Delete' }
      ]
    },
    {
      title: 'Estimate Request',
      permissions: [
        { id: 'estimate-req-view-own', label: 'View (Own)' },
        { id: 'estimate-req-edit', label: 'Edit' },
        { id: 'estimate-req-view-global', label: 'View/Global' },
        { id: 'estimate-req-delete', label: 'Delete' },
        { id: 'estimate-req-create', label: 'Create' }
      ]
    },
    {
      title: 'Leads',
      permissions: [
        { id: 'leads-view', label: 'View/Global' },
        { id: 'leads-delete', label: 'Delete' }
      ]
    },
    {
      title: 'Surveys',
      permissions: [
        { id: 'surveys-view', label: 'View/Global' },
        { id: 'surveys-edit', label: 'Edit' },
        { id: 'surveys-create', label: 'Create' },
        { id: 'surveys-delete', label: 'Delete' }
      ]
    },
    {
      title: 'Goals',
      permissions: [
        { id: 'goals-view', label: 'View/Global' },
        { id: 'goals-edit', label: 'Edit' },
        { id: 'goals-create', label: 'Create' },
        { id: 'goals-delete', label: 'Delete' }
      ]
    }
  ];

  const handleCheckboxChange = (id: string) => {
    const newChecked = new Set(checkedPermissions);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedPermissions(newChecked);
  };

  const handleSave = () => {
    console.log('Saving permissions:', Array.from(checkedPermissions));
    alert('Permissions saved!');
  };

  return (
    <div className="min-h-screen  ">
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm p-6 border">
        <div className="mb-6">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Administrator</option>
            <option>Manager</option>
            <option>Staff</option>
          </select>
        </div>

        <h2 className="text-xl font-bold mb-6 text-gray-800">Permissions</h2>

        <div className="space-y-6">
          {sections.map((section) => (
           <><div key={section.title}>
              <h3 className="text-lg  font-semibold  text-[#777777] font-inter mb-3">{section.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                {section.permissions.map((permission) => (
                  <label
                    key={permission.id}
                    className="flex items-center font-medium font-inter text-base text-[#1F1F1F] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checkedPermissions.has(permission.id)}
                      onChange={() => handleCheckboxChange(permission.id)}
                      className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    {permission.label}
                  </label>
                ))}
              </div>
            </div>
            <hr className='my-5  border'/></> 
          ))}
          
        </div>

        <button
          onClick={handleSave}
          className="mt-6 px-6 py-2 bg-gray-300 border border-gray-400  rounded-md text-sm font-medium  transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default RolePermissions;