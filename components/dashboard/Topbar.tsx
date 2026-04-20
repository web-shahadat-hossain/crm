"use client";

import { Search, Plus, Share2, Bell, Clock, User } from "lucide-react";
import { useState } from "react";

export default function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications] = useState(3);

  return (
    <header className="bg-white border-b border-gray-200 h-[70px] px-4 sm:px-6 lg:px-12 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
        LOGO
      </h1>

      {/* Search Bar (hidden on mobile) */}
      <div className="flex-1 max-w-xl hidden sm:block mx-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-[#066E95] transition"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-2 sm:gap-4">
        
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Plus size={22} className="text-gray-600" />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Share2 size={22} className="text-gray-600" />
        </button>

        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <Bell size={22} className="text-gray-600" />
          {notifications > 0 && (
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg hidden sm:block">
          <Clock size={22} className="text-gray-600" />
        </button>

        {/* Divider (hide on mobile) */}
        <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>

        {/* User */}
        <button className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2">
          <div className="w-9 h-9 bg-[#066E95] rounded-full flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>

          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </button>

      </div>
    </header>
  );
}
