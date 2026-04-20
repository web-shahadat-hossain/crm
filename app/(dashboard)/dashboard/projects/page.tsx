"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";


const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Tailwind-safe colors for tabs
  const getColorByIndex = (index: number) => {
    const COLORS = [
      "text-red-600",
      "text-blue-600",
      "text-green-600",
      "text-yellow-600",
      "text-purple-600",
      "text-pink-600",
    ];
    return COLORS[index % COLORS.length];
  };

  const projects = useMemo(
    () => [
      {
        id: 1,
        subject: "Web Development",
        tags: ["WordPress"],
        startDate: "03-06-2025",
        deadline: "03-06-2025",
        members: ["Cameron Williamson", "Floyd Miles", "Savannah Nguyen", "Cody Fisher"],
        status: "In Progress",
        statusColor: "text-blue-600 bg-blue-50",
      },
      {
        id: 2,
        subject: "Web Development",
        tags: ["WordPress"],
        startDate: "03-06-2025",
        deadline: "03-06-2025",
        members: ["Cameron Williamson", "Theresa Webb", "Robert Fox"],
        status: "Finished",
        statusColor: "text-green-600 bg-green-50",
      },
      {
        id: 3,
        subject: "Web Development",
        tags: ["WordPress"],
        startDate: "03-06-2025",
        deadline: "03-06-2025",
        members: ["Cameron Williamson", "Floyd Miles", "Savannah Nguyen", "Cody Fisher", "Robert Fox"],
        status: "Cancelled",
        statusColor: "text-red-600 bg-red-50",
      },
      {
        id: 4,
        subject: "Web Development",
        tags: ["WordPress"],
        startDate: "03-06-2025",
        deadline: "03-06-2025",
        members: ["Cameron Williamson", "Floyd Miles", "Savannah Nguyen"],
        status: "On Hold",
        statusColor: "text-orange-600 bg-orange-50",
      },
      {
        id: 5,
        subject: "Web Development",
        tags: ["WordPress"],
        startDate: "03-06-2025",
        deadline: "03-06-2025",
        members: ["Floyd Miles", "Savannah Nguyen", "Cody Fisher"],
        status: "In Progress",
        statusColor: "text-blue-600 bg-blue-50",
      },
      {
        id: 6,
        subject: "Web Development",
        tags: ["WordPress"],
        startDate: "03-06-2025",
        deadline: "03-06-2025",
        members: ["Floyd Miles", "Savannah Nguyen", "Cody Fisher"],
        status: "Not Started",
        statusColor: "text-gray-600 bg-gray-50",
      },
    ],
    []
  );

  const tabs = ["All", "Not Started", "In Progress", "On Hold", "Cancelled", "Finished"];

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    projects.forEach((p) => {
      counts[p.status] = (counts[p.status] || 0) + 1;
    });
    return counts;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchTab = activeTab === "All" || p.status === activeTab;
      const matchSearch = p.subject.toLowerCase().includes(search.toLowerCase());
      return matchTab && matchSearch;
    });
  }, [projects, activeTab, search]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [activeTab, search]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        {/* Title */}
      <h2 className="text-2xl font-semibold text-[#777777] font-inter">
       Projects
      </h2>
      <hr className="my-5" />
      <div className="w-full mx-auto">

        {/* Search + Buttons */}
      <div className="flex flex-col md:flex-row gap-3 mt-6 mb-6">
        {/* Search Box */}
        <div className="relative flex-1">
          <input
            type="text"
              placeholder="Search Project"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#F6F6FB] rounded-md px-3 py-3 text-sm border border-gray-200 pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

      

        <button className="border bg-[#E6E6E6] border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
       Create New Project
        </button>
      </div>


        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                flex-1  px-3 py-2 rounded-md border text-sm font-medium flex items-center justify-center gap-1
                ${getColorByIndex(index)}
                ${activeTab === tab
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-gray-300 hover:text-gray-800 hover:border-gray-400"}
              `}
            >
              <span className="font-semibold">{statusCounts[tab] || 0}</span> {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white overflow-x-auto ">
          <table className="min-w-full border">
            <thead className="bg-gray-200">
              <tr>
                {["P #", "Subject", "Tags", "Start Date", "Deadline", "Members", "Status"].map((h) => (
                  <th key={h} className="px-6 py-3 text-xs text-gray-600 uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {paginatedProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{project.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium">{project.subject}</div>
                    <div className="text-sm text-gray-500 space-x-2 mt-1">
                      <button>View</button>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                      {project.tags[0]}
                    </span>
                  </td>
                  <td className="px-6 py-4">{project.startDate}</td>
                  <td className="px-6 py-4">{project.deadline}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {project.members.map((m, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-gray-100 rounded">
                          {m}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2 text-sm text-gray-600">
          <div>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredProjects.length)} of{" "}
            {filteredProjects.length} entries
          </div>

          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="border px-4 py-2 rounded-md disabled:opacity-50"
            >
              Previous
            </button>

            <button className="bg-black text-white px-4 py-2 rounded-md">
              {currentPage}
            </button>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="border px-4 py-2 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
