'use client';
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface LocationData {
  latitude: string;
  longitude: string;
}

export default function GoogleMapsForm() {
  const [formData, setFormData] = useState<LocationData>({
    latitude: '',
    longitude: '@rasfia'
  });

  const handleSave = () => {
    console.log('Save location data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
          <div className="space-y-5">
            {/* Latitude */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Latitude (Google Maps)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Write her..."
                  value={formData.latitude}
                  onChange={(e) => setFormData({...formData, latitude: e.target.value})}
                  className="w-full px-4 py-2 pr-12 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Longitude */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Longitude (Google Maps)
              </label>
              <input
                type="text"
                value={formData.longitude}
                onChange={(e) => setFormData({...formData, longitude: e.target.value})}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
              />
            </div>

            {/* Info Message */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
              <p className="text-sm text-blue-700">
                <a href="#" className="hover:underline">
                  Setup google api key in order to view to customer map
                </a>
              </p>
            </div>

            {/* Save Button */}
            <div>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors text-sm"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}