import React, { useState } from 'react';

const Notifications = () => {
  const [notifyOnSubmit, setNotifyOnSubmit] = useState(false);
  const [notificationType, setNotificationType] = useState('specific');
  const [selectedStaff, setSelectedStaff] = useState('@jacob');

  return (
    <div className="min-h-screen  p-8">
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm border  p-8">
        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Notification settings
        </h1>

        {/* Checkbox */}
        <div className="mb-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifyOnSubmit}
              onChange={(e) => setNotifyOnSubmit(e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-base text-gray-700">
              Notify when estimate request submitted
            </span>
          </label>
        </div>

        {/* Radio Options */}
        <div className="flex gap-8 mb-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="notification-type"
              value="specific"
              checked={notificationType === 'specific'}
              onChange={(e) => setNotificationType(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-base text-gray-900">Specific Staff Members</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="notification-type"
              value="roles"
              checked={notificationType === 'roles'}
              onChange={(e) => setNotificationType(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-base text-gray-900">Staff members with roles</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="notification-type"
              value="responsible"
              checked={notificationType === 'responsible'}
              onChange={(e) => setNotificationType(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-base text-gray-900">Responsible person</span>
          </label>
        </div>

        {/* Staff Members Dropdown */}
        <div className="mb-8">
          <label className="block text-base font-medium text-gray-900 mb-2">
            Staff Members to Notify
          </label>
          <div className="relative">
            <select
              value={selectedStaff}
              onChange={(e) => setSelectedStaff(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="@jacob">@jacob</option>
              <option value="@sarah">@sarah</option>
              <option value="@mike">@mike</option>
              <option value="@emma">@emma</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div>
          <button className="px-8 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;