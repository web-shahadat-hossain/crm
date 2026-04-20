"use client";

export default function AddPredefinedReplyPage() {
  return (
    <div className="min-h-screen flex justify-center  bg-white px-4 py-10">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Page Title (outside border) */}
        <h1 className="text-lg font-semibold mb-6">
          Add New Predefined Reply
        </h1>

        {/* Card */}
        <div className="border border-gray-200 rounded-lg p-6 max-w-4xl">
          
          {/* Predefined Reply Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1">
              Predefined Reply Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Claire"
              className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Description */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Write Here..."
              rows={8}
              className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-sm
                         resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Save Button */}
          <button
            type="button"
            className="bg-gray-200 text-gray-600 text-sm px-8 py-2 rounded-md
                       cursor-not-allowed"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
