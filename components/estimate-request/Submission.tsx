import React, { useState } from 'react';

const Submission = () => {
  const [submissionAction, setSubmissionAction] = useState('thank-you');
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen  p-8">
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm p-8 border">
        {/* Question */}
        <h2 className="text-base font-medium text-gray-900 mb-4">
          What should happen after a visitor submits this form?
        </h2>

        {/* Radio Options */}
        <div className="space-y-3 mb-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="submission-action"
              value="thank-you"
              checked={submissionAction === 'thank-you'}
              onChange={(e) => setSubmissionAction(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-900">Display thank you message</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="submission-action"
              value="redirect"
              checked={submissionAction === 'redirect'}
              onChange={(e) => setSubmissionAction(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-900">Redirect to another website</span>
          </label>
        </div>

        {/* Message Textarea */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Message to show after form is successfully submitted <span className="text-red-500">*</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write Here"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder-gray-400"
          />
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

export default Submission;