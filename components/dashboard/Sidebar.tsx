/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  CreditCard,
  Receipt,
  FileText,
  Briefcase,
  CheckSquare,
  Headphones,
  UserPlus,
  FileQuestion,
  BookOpen,
  Wrench,
  BarChart3,
  Settings,
  ChevronDown,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";
import { useState, useEffect } from "react";

type MenuItem = {
  name: string;
  icon: any;
  href?: string;
  children?: { name: string; href: string }[];
};

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Customer", icon: Users, href: "/dashboard/Customer" },
  {
    name: "Sales",
    icon: ShoppingCart,
    children: [
      { name: "Proposals", href: "/dashboard/Sales/proposals" },
      { name: "Estimates", href: "/dashboard/Sales/estimates" },
      { name: "Invoices", href: "/dashboard/Sales/invoices" },
      { name: "Payments", href: "/dashboard/Sales/payments" },
      { name: "Credit Notes", href: "/dashboard/Sales/credit-notes" },
      { name: "Items", href: "/dashboard/Sales/items" },
    ],
  },
  { name: "Subscription", icon: CreditCard, href: "/dashboard/subscription" },
  { name: "Expenses", icon: Receipt, href: "/dashboard/expenses" },
  { name: "Contracts", icon: FileText, href: "/dashboard/contracts" },
  { name: "Projects", icon: Briefcase, href: "/dashboard/projects" },
  { name: "Tasks", icon: CheckSquare, href: "/dashboard/tasks" },
  { name: "Support", icon: Headphones, href: "/dashboard/support" },
  { name: "Leads", icon: UserPlus, href: "/dashboard/leads" },
  { name: "Estimate Request", icon: FileQuestion, href: "/dashboard/estimate-request" },
  { name: "Knowledge Base", icon: BookOpen, href: "/dashboard/knowledge-base" },
  {
    name: "Utilities",
    icon: Wrench,
    children: [
      { name: "Media", href: "/dashboard/utilities/media" },
      { name: "Bulk PDF Export", href: "/dashboard/utilities/bulk-pdf-export" },
      { name: "CSV Export", href: "/dashboard/utilities/csv-export" },
      { name: "Calendar", href: "/dashboard/utilities/calendar" },
      { name: "Announcements", href: "/dashboard/utilities/announcements" },
      { name: "Goals", href: "/dashboard/utilities/goals" },
      { name: "Activity Log", href: "/dashboard/utilities/activity-log" },
      { name: "Surveys", href: "/dashboard/utilities/surveys" },
      { name: "Database Backup", href: "/dashboard/utilities/database-backup" },
      { name: "Ticket Pipe Log", href: "/dashboard/utilities/ticket-pipe-log" },
    ]
  },
  {
    name: "Reports",
    icon: BarChart3,
    children: [
      { name: "Sales", href: "/dashboard/Reports/sales" },
      { name: "Expenses", href: "/dashboard/Reports/Expenses" },
      { name: "Expenses vs Income", href: "/dashboard/Reports/ExpensesvsIncome" },
      { name: "Leads", href: "/dashboard/Reports/leads" },
      { name: "Timesheets Overview", href: "/dashboard/Reports/TimesheetsOverview" },
      { name: "KB Articles", href: "/dashboard/Reports/KBArticles" },
    ],
  },
];

// Settings Sidebar Menu Items
const settingsMenuItems = [
  { name: "Staff", href: "/dashboard/settings/staff" },
  {
    name: "Customer",
    children: [
      { name: "Groups", href: "/dashboard/settings/customer" },

    ],
  },
  {
    name: "Support",
    children: [
      { name: "Departments", href: "/dashboard/settings/support/departments" },
      { name: "Predefined Replies", href: "/dashboard/settings/support/PredefinedReplies" },
      { name: "Ticket Priority", href: "/dashboard/settings/support/TicketPrioritys" },
      { name: "Ticket Status", href: "/dashboard/settings/support/TicketStatus" },
      { name: "Services", href: "/dashboard/settings/support/Services" },
      { name: "Spam Filters", href: "/dashboard/settings/support/SpamFilters" },
    ],
  },
  {
    name: "Leads",
    children: [
      { name: "Sources", href: "/dashboard/settings/Leads/Sources" },
      { name: "Status", href: "/dashboard/settings/Leads/Status" },
      { name: "Email Integration", href: "/dashboard/settings/Leads/EmailIntegration" },
      { name: "Web to Lead", href: "/dashboard/settings/Leads/WebtoLead" },
    ],
  },
  {
    name: "Finance",
    children: [
      { name: "Tax Rates", href: "/dashboard/settings/Finance/TaxRates" },
      { name: "Currencies", href: "/dashboard/settings/Finance/Currencies" },
      { name: "Payment Modes", href: "/dashboard/settings/Finance/PaymentModes" },
      { name: "Expenses Categories", href: "/dashboard/settings/Finance/ExpensesCategories" },

    ],
  },
  {
    name: "Contracts",
    children: [
      { name: "Contract Types", href: "/dashboard/settings/Contracts/ContractTypes" },


    ]
  },
  {
    name: "Estimate Request",
    children: [
      { name: "Forms", href: "/dashboard/settings/EstimateRequest/Forms" },
      { name: "Status", href: "/dashboard/settings/EstimateRequest/Status" },
    ],
  },
  { name: "Modules", href: "/dashboard/settings/Modules" },
  { name: "Database Backup", href: "/dashboard/settings/DatabaseBackup" },
  { name: "Email Templates", href: "/dashboard/settings/email-templates" },
  { name: "Custom Fields", href: "/dashboard/settings/custom-fields" },
  { name: "GDPR", href: "/dashboard/settings/gdpr" },
  { name: "Roles", href: "/dashboard/settings/roles" },
  {
    name: "Menu Setup",
    children: [
      { name: "Main Menu", href: "/dashboard/settings/menu-setup/main" },
      { name: "Setup Menu", href: "/dashboard/settings/menu-setup/setup" },
    ],
  },
  { name: "Theme Style", href: "/dashboard/settings/theme-style" },
  { name: "Settings", href: "/dashboard/settings/general" },
  { name: "Help", href: "/dashboard/settings/help" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showSettingsSidebar, setShowSettingsSidebar] = useState(false);

  // Auto open submenu based on current route
  useEffect(() => {
    const activeParent = menuItems.find((item) =>
      item.children?.some((child) => pathname.startsWith(child.href))
    );
    if (activeParent) {
      setOpenSubmenu(activeParent.name);
    }
  }, [pathname]);

  // Show settings sidebar if on settings page
  useEffect(() => {
    setShowSettingsSidebar(pathname.startsWith("/dashboard/settings"));
  }, [pathname]);

  // Render Settings Sidebar
  if (showSettingsSidebar) {
    return (
      <>
        {/* Mobile Top Bar */}
        <div className="lg:hidden absolute items-center z-10 py-3 ml-2">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Overlay */}
        {isMobileOpen && (
          <div
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          />
        )}

        {/* Settings Sidebar */}
        <aside
          className={cn(
            "fixed z-50 inset-y-0 left-0 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300",
            isMobileOpen ? "translate-x-0" : "-translate-x-full",
            "lg:translate-x-0 lg:static"
          )}
        >
          {/* Header with Back Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <button
              onClick={() => setShowSettingsSidebar(false)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-1 hover:bg-gray-100 rounded"
            >
              <X size={18} className="text-gray-500" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-2">
            {settingsMenuItems.map((item) => {
              const hasChildren = !!item.children;
              const isOpen = openSubmenu === item.name;

              return (
                <div key={item.name}>
                  {/* Parent Item */}
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-6 py-2.5 hover:bg-gray-50 transition-colors",
                        pathname === item.href && "bg-gray-100"
                      )}
                    >
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </Link>
                  ) : (
                    <div
                      onClick={() => setOpenSubmenu(isOpen ? null : item.name)}
                      className="flex items-center justify-between px-6 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm text-gray-600">{item.name}</span>
                      {hasChildren && (
                        <ChevronDown
                          size={16}
                          className={cn(
                            "text-gray-400 transition-transform duration-200",
                            isOpen && "rotate-180"
                          )}
                        />
                      )}
                    </div>
                  )}

                  {/* Submenu */}
                  {hasChildren && isOpen && (
                    <div className="bg-gray-50">
                      {item.children!.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={cn(
                            "block pl-8 pr-6 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors",
                            pathname === child.href && "bg-gray-100 font-medium"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-200 px-6 py-4">
            <p className="text-xs text-gray-500">SEO Optimization</p>
            <p className="text-xs text-gray-500">Little LLC</p>
          </div>
        </aside>
      </>
    );
  }

  // Render Main Sidebar
  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden absolute items-center z-10 py-3 ml-2">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
        />
      )}

      {/* Main Sidebar */}
      <aside
        className={cn(
          "fixed z-50 inset-y-0 left-0 w-64 bg-[#F8F9FA] border-r border-gray-200 flex flex-col transition-transform duration-300",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:static"
        )}
      >
        {/* Mobile Close */}
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={() => setIsMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col w-64 overflow-y-auto py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const hasChildren = !!item.children;
            const isOpen = openSubmenu === item.name;
            const isActive =
              item.href === pathname ||
              item.children?.some((child) => pathname.startsWith(child.href));

            return (
              <div key={item.name}>
                {/* Parent */}
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-6 py-2.5 cursor-pointer hover:bg-gray-100",
                      isActive && "bg-[#E8E9EA]"
                    )}
                  >
                    <Icon size={18} className="text-gray-600" />
                    <span className="flex-1 text-[#777777]">{item.name}</span>

                    {hasChildren && (
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform",
                          isOpen && "rotate-180"
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenSubmenu(isOpen ? null : item.name);
                        }}
                      />
                    )}
                  </Link>
                ) : (
                  <div
                    onClick={() => setOpenSubmenu(isOpen ? null : item.name)}
                    className="flex items-center gap-3 px-6 py-2.5 cursor-pointer hover:bg-gray-100"
                  >
                    <Icon size={18} className="text-gray-600" />
                    <span className="flex-1 text-[#777777]">{item.name}</span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </div>
                )}

                {/* Submenu */}
                {hasChildren && isOpen && (
                  <div className="bg-white">
                    {item.children!.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={cn(
                          "flex pl-12 pr-6 py-2 text-sm text-gray-600 hover:bg-gray-50",
                          pathname === child.href && "bg-gray-50 font-medium"
                        )}
                      >
                        • {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Settings Button - Opens Settings Sidebar */}
          <button
            onClick={() => setShowSettingsSidebar(true)}
            className="flex items-center gap-3 px-6 py-2.5 cursor-pointer hover:bg-gray-100"
          >
            <Settings size={18} className="text-gray-600" />
            <span className="flex-1 text-left text-[#777777]">Settings</span>
          </button>
        </nav>

        {/* Footer */}
        <div className="border-t px-6 py-4 text-[11px] text-gray-500">
          SEO Optimization <br /> Little LLC
        </div>
      </aside>
    </>
  );
}