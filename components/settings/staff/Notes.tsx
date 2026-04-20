"use client";

import { Search } from "lucide-react";
import { useState } from "react";

type Note = {
  id: number;
  content: string;
  addedFrom: string;
  dateAdded: string;
};

export default function Notes() {
  const [search, setSearch] = useState("");

  const notes: Note[] = [
    {
      id: 1,
      content:
        "Just at this moment Alice felt that she was in confusion, getting the Dormouse sulkily remarked, If you do. I'll set Dinah at you! There was a general clapping of hands at this: it was indeed: she was small enough to try the whole thing, and.",
      addedFrom: "Jacques Torphy",
      dateAdded: "03-06-2025",
    },
    {
      id: 2,
      content:
        "Just at this moment Alice felt that she was in confusion, getting the Dormouse sulkily remarked, If you do. I'll set Dinah at you! There was a general clapping of hands at this: it was indeed: she was small enough to try the whole thing, and.",
      addedFrom: "Jacques Torphy",
      dateAdded: "03-06-2025",
    },
  ];

  const filteredNotes = notes.filter(
    (note) =>
      note.content.toLowerCase().includes(search.toLowerCase()) ||
      note.addedFrom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border p-6 space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Notes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border px-10 py-2 text-sm outline-none focus:ring-1 focus:ring-gray-400"
          />
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <button className="rounded-md bg-gray-600 px-4 py-2 text-sm text-white hover:bg-gray-700">
            New Note
          </button>
          <button className="rounded-md bg-gray-600 px-4 py-2 text-sm text-white hover:bg-gray-700">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-md">
        <table className="w-full min-w-[600px] text-sm">
          <thead className="bg-[#2f2f2f] text-white">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Start Date</th>
              <th className="px-4 py-3 text-left font-medium">Added form</th>
              <th className="px-4 py-3 text-left font-medium">Date Added</th>
              <th className="px-4 py-3 text-left font-medium">Options</th>
            </tr>
          </thead>

          <tbody>
            {filteredNotes.map((note) => (
              <tr key={note.id} className="border-b last:border-0">
                <td className="px-4 py-4 max-w-xl text-gray-700 leading-relaxed">
                  {note.content}
                </td>
                <td className="px-4 py-4 text-gray-700">{note.addedFrom}</td>
                <td className="px-4 py-4 text-gray-700">{note.dateAdded}</td>
                <td className="px-4 py-4 text-gray-500 whitespace-nowrap">
                  <button className="hover:underline">Edit</button>
                  <span className="mx-1">|</span>
                  <button className="hover:underline">Delete</button>
                </td>
              </tr>
            ))}

            {filteredNotes.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-6 text-center text-gray-500"
                >
                  No notes found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-gray-500 gap-2">
        <span>
          Showing {filteredNotes.length} of {notes.length} entries
        </span>

        <div className="flex items-center gap-2 flex-wrap">
          <button className="rounded-md px-3 py-1 hover:bg-gray-100">
            Previous
          </button>
          <button className="rounded-md bg-gray-200 px-3 py-1">1</button>
          <button className="rounded-md px-3 py-1 hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  );
}
