/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

import { BsFillTicketPerforatedFill, BsPersonFill, BsPersonFillCheck } from "react-icons/bs";
import { PiNoteFill, PiNotepadFill } from "react-icons/pi";
import { FaFileInvoice, FaMap } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdLockClock, MdStickyNote2, MdTask } from "react-icons/md";
import { HiCreditCard } from "react-icons/hi";
import { BiSolidBookmarkAlt } from "react-icons/bi";
import { TbBellRingingFilled, TbFileFilled } from "react-icons/tb";
import { SiFiles } from "react-icons/si";
import { RiProjectorFill } from "react-icons/ri";
export default function Sidebar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const id = Number(params.id);

  /* 🔹 CUSTOMER DATA (INLINE) */
  const customers = [
    { id: 1, company: "Big Kahuna Burger Ltd." },
    { id: 2, company: "eBay" },
    { id: 3, company: "Nintendo" },
    { id: 4, company: "General Electric" },
    { id: 5, company: "Starbucks" },
    { id: 6, company: "Bank of America" },
    { id: 7, company: "Louis Vuitton" },
    { id: 8, company: "IBM" },
    { id: 9, company: "The Walt Disney Company" },
    { id: 10, company: "Apple" },
  ];

  const customer = useMemo(
    () => customers.find((c) => c.id === id),
    [id]
  );

  if (!customer) return null;

  const menuItems = [
    { icon: BsPersonFill , label: "Profile", path: `/dashboard/Customer/${id}` },
    { icon: BsPersonFillCheck, label: "Contacts", path: `/dashboard/Customer/${id}/contact` },
    { icon: PiNoteFill, label: "Notes", path: `/dashboard/Customer/${id}/Notes` },
    { icon: PiNotepadFill, label: "Statement", path: `/dashboard/Customer/${id}/statements` },
    { icon: FaFileInvoice, label: "Invoices", path: `/dashboard/Customer/${id}/invoices` },
    { icon: FaMoneyCheckDollar, label: "Payments", path: `/dashboard/Customer/${id}/payments` },
    { icon: MdStickyNote2, label: "Proposals", path: `/dashboard/Customer/${id}/proposals` },
    { icon: HiCreditCard, label: "Credit Notes", path: `/dashboard/Customer/${id}/credit-notes` },
    { icon: BiSolidBookmarkAlt, label: "Estimates", path: `/dashboard/Customer/${id}/estimates` },
    { icon: TbFileFilled, label: "Subscription", path: `/dashboard/Customer/${id}/subscription` },
    { icon: BiSolidBookmarkAlt, label: "Expenses", path: `/dashboard/Customer/${id}/expenses` },
    { icon: BiSolidBookmarkAlt, label: "Contracts", path: `/dashboard/Customer/${id}/contracts` },
    { icon: RiProjectorFill, label: "Projects", path: `/dashboard/Customer/${id}/projects` },
    { icon: MdTask, label: "Tasks", path: `/dashboard/Customer/${id}/tasks` },
    { icon: BsFillTicketPerforatedFill, label: "Tickets", path: `/dashboard/Customer/${id}/tickets` },
    { icon: SiFiles, label: "Files", path: `/dashboard/Customer/${id}/files` },
    { icon: MdLockClock, label: "Vault", path: `/dashboard/Customer/${id}/vault` },
    { icon: TbBellRingingFilled, label: "Reminders", path: `/dashboard/Customer/${id}/reminders` },
    { icon: FaMap, label: "Map", path: `/dashboard/Customer/${id}/map` },
  ];

  return (
    <aside
      className={`bg-white border-r border-l transition-all duration-300
      ${isNavCollapsed ? "w-0 overflow-hidden" : "w-76"}`}
    >
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <h1 className="text-xl font-inter font-semibold text-[#2D2D2D] truncate">
          {customer.company}
        </h1>

        <button
          onClick={() => setIsNavCollapsed(true)}
          className="p-1 rounded hover:bg-gray-100"
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
           {/* Expand Button */}
      {isNavCollapsed && (
        <button
          onClick={() => setIsNavCollapsed(false)}
          className="fixed  bg-white w-10 border p-2 rounded-r shadow z-50"
        >
         <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> </svg>
        </button>
      )}
      </div>

      {/* Menu */}
      <nav className="py-2">
       {menuItems.map((item) => {
  const isActive = pathname === item.path;

  return (
    <Link
      key={item.label}
      href={item.path}
      className={`flex items-center font-medium gap-3 font-inter px-4 py-2 text-base
        transition
        ${isActive ? "text-[#4A90E2] font-semibold" : "text-[#4A90E2] hover:bg-gray-50"}`}
    >
      <item.icon
        className={`w-6 h-6 ${isActive ? "text-[#4A90E2]" : "text-[#777777]"}`}
      />
      <span className={isActive ? "text-[#4A90E2]" : "text-[#777777]"}>{item.label}</span>
    </Link>
  );
})}

      </nav>
    </aside>
  );
}
