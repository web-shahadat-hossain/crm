import { useState } from 'react';
import { Globe } from 'lucide-react';

export default function CustomerDetails() {
  const [formData, setFormData] = useState({
    showPrimaryContact: false,
    company: 'Big Kahuna Burger Ltd.',
    vatNumber: 'NL008677884B01',
    phoneNumber: '(316) 555-0116',
    website: 'altenwerth.com',
    address: '4517 Washington Ave. Manchester, Kentucky 39495',
    city: 'Jerdefort',
    state: 'Georgia',
    zipCode: '78547-1477',
    country: 'london'
  });

  const [selectedGroups, setSelectedGroups] = useState(['VIP']);

  const groups = ['VIP', 'High Budget', 'Low Budget', 'Wholesaler'];

  const toggleGroup = (group: string) => {
    if (selectedGroups.includes(group)) {
      setSelectedGroups(selectedGroups.filter(g => g !== group));
    } else {
      setSelectedGroups([...selectedGroups, group]);
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-white border border-[#E6E6E6] shadow rounded-xl">
      <div className="space-y-6">
        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="showPrimaryContact"
            checked={formData.showPrimaryContact}
            onChange={(e) => setFormData({ ...formData, showPrimaryContact: e.target.checked })}
            className="w-4 h-4 border border-gray-300 rounded"
          />
          <label htmlFor="showPrimaryContact" className="text-base font-inter font-medium text-[#1F1F1F]">
            Show primary contact full name on Invoices, Estimates, Payments, Credit Notes
          </label>
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-semibold text-[#000000] font-inter mb-2">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
          />
        </div>

        {/* Vat Number */}
        <div>
          <label className="block text-sm font-semibold text-[#000000] font-inter mb-2">
            Vat Number
          </label>
          <input
            type="text"
            value={formData.vatNumber}
            onChange={(e) => setFormData({ ...formData, vatNumber: e.target.value })}
            className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-semibold text-[#000000] font-inter mb-2">
            Phone Number
          </label>
          <input
            type="text"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
          />
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-semibold text-[#000000] font-inter mb-2">
            Website
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded">
              <Globe className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Groups */}
        <div>
          <label className="block text-sm font-semibold text-[#000000] font-inter mb-2">
            Groups
          </label>
          <div className="flex flex-wrap gap-2 p-3 bg-gray-100 rounded">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => toggleGroup(group)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  selectedGroups.includes(group)
                    ? 'bg-gray-700 text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* Currency */}
        <div>
          <label className="block text-sm font-semibold text-[#000000] font-inter mb-2">
            Currency
          </label>
          <select className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700">
            <option>System default</option>
          </select>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-semibold text-[#000000] font-inter mb-2">
            Address
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-semibold text-[#000000] font-inter mb-2">
            City
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-semibold text-[#000000] font-inter mb-2">
            State
          </label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
          />
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-sm font-semibold text-[#000000] font-inter mb-2">
            Zip Code
          </label>
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
            className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-semibold text-[#000000] font-inter mb-2">
            Country
          </label>
          <select 
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700 appearance-none"
          >
            <option>london</option>
          </select>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-4">
          <button className="px-8 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded text-sm transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}