"use client";

export default function EmailIntegration() {
  return (
    <div className="w-full max-w-6xl bg-white p-8 ">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Email Integration
        </h2>
        <p className="text-sm text-blue-600 mt-1 cursor-pointer">
          Click here to read more about leads email integration
        </p>
      </div>

      {/* Active */}
      <div className="mb-6 flex items-center gap-2">
        <input type="checkbox" className="h-4 w-4 " />
        <label className="text-sm text-gray-700">Active</label>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div className="space-y-5">
          {/* IMAP Server */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              IMAP Server <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Write Here..."
              className="mt-1 w-full rounded bg-[#F1F1F1] px-3 py-2 text-sm"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email address (Login) <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Write Here..."
              className="mt-1 w-full rounded bg-[#F1F1F1] px-3 py-2 text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Write Here..."
              className="mt-1 w-full rounded bg-[#F1F1F1] px-3 py-2 text-sm"
            />
          </div>

          {/* Encryption */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Encryption
            </label>
            <div className="mt-2 space-y-1 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="encryption-left" />
                TLS
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="encryption-left" />
                SSL
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="encryption-left" />
                No Encryption
              </label>
            </div>
          </div>

          {/* Folder */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Folder Retrieve Folders
            </label>
            <input
              value="Inbox"
              className="mt-1 w-full rounded bg-[#F1F1F1] px-3 py-2 text-sm"
            />
          </div>

          {/* Check Every */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Check Every (minutes)
            </label>
            <input
              value="10"
              className="mt-1 w-full rounded bg-[#F1F1F1] px-3 py-2 text-sm"
            />
          </div>

          {/* Options */}
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Only check non opened emails
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Create task if email sender is already customer and assign to responsible staff member
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Delete mail after import?
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Auto mark as public
            </label>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-5">
          {/* Default Status */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Default Status <span className="text-red-500">*</span>
            </label>
            <select className="mt-1 w-full rounded bg-[#F1F1F1] px-3 py-2 text-sm">
              <option>Select One</option>
            </select>
          </div>

          {/* Default Source */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Default Source <span className="text-red-500">*</span>
            </label>
            <select className="mt-1 w-full rounded bg-[#F1F1F1] px-3 py-2 text-sm">
              <option>Select One</option>
            </select>
          </div>

          {/* Responsible */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Responsible for new lead <span className="text-red-500">*</span>
            </label>
            <select className="mt-1 w-full rounded bg-[#F1F1F1] px-3 py-2 text-sm">
              <option>Select One</option>
            </select>
          </div>

          {/* Notification Settings */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Notification settings
            </label>
            <div className="mt-2 space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Notify when lead imported
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Notify if lead send email multiple times
              </label>
            </div>
          </div>

          {/* Encryption */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Encryption
            </label>
            <div className="mt-2 space-y-1 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="encryption-right" />
                TLS
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="encryption-right" />
                SSL
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="encryption-right" />
                No Encryption
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-10 flex gap-4">
        <button className="bg-gray-600 text-white px-6 py-2 rounded text-sm">
          Test IMP Connection
        </button>
        <button className="bg-gray-600 text-white px-6 py-2 rounded text-sm">
          Save
        </button>
      </div>
    </div>
  );
}
