import React, { useState } from 'react';

const Branding = () => {
  const [buttonText, setButtonText] = useState('Claire');
  const [backgroundColor, setBackgroundColor] = useState('#FFB200');
  const [textColor, setTextColor] = useState('#F0F0F0');

  return (
    <div className="min-h-screen  p-8">
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm p-8 border">
        {/* Submit button text */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Submit button text <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Color pickers row */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Submit button background color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Submit button background color <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <div className="relative">
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="opacity-0 absolute inset-0 w-8 h-8 cursor-pointer"
                  />
                  <div
                    className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                    style={{ backgroundColor: backgroundColor }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit button background Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Submit button background Text <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <div className="relative">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="opacity-0 absolute inset-0 w-8 h-8 cursor-pointer"
                  />
                  <div
                    className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                    style={{ backgroundColor: textColor }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Button (optional) */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-3">Preview:</p>
          <button
            style={{
              backgroundColor: backgroundColor,
              color: textColor
            }}
            className="px-6 py-2 rounded-md font-medium"
          >
            {buttonText}
          </button>
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

export default Branding;