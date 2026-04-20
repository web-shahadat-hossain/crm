"use client";
import React from 'react';

interface TimeStat {
  label: string;
  value: string;
  highlighted?: boolean;
}import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



import General from "@/components/estimate-request/General";
import Notes from '@/components/settings/staff/Notes';
import TimeSheets from '@/components/settings/staff/TimeSheets&Reports';
import Projects from '@/components/settings/staff/Projects';

const TimesheetSummary: React.FC = () => {
  const timeStats: TimeStat[] = [
    { label: 'Total Logged Time', value: '00:00' },
    { label: 'Last Month Logged Time', value: '00:00' },
    { label: 'This Month Logged Time', value: '00:00', highlighted: true },
    { label: 'Last Week Logged Time', value: '00:00' },
    { label: 'This Week Logged Time', value: '00:00' }
  ];

  return (
    <div className="min-h-screen md:p-8 p-3 ">
      <div className="w-full mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Timesheet Summary
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {timeStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border p-6 ${
                stat.highlighted
                  ? 'border-gray-200'
                  : 'border-gray-200'
              }`}
            >
              <div
                className={`text-sm mb-2 ${
                  stat.highlighted ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {stat.label}
              </div>
              <div className="text-lg font-normal text-gray-900">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
         <div className="p-4 w-full mx-auto bg-white  ">
      {/* Title */}
      <h2 className="lg:text-2xl md:text-xl text-lg mt-2 font-inter font-semibold text-gray-600 mb-4">
       Andres Roberts
      </h2>


      <Tabs defaultValue="Staff" className="w-full">
        {/* ======== TAB BUTTONS ======== */}
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
          <div>
            <TabsTrigger
              value="Staff"
              
              className="
              px-4 py-2  rounded-md 
              data-[state=active]:bg-[#5A5A5A] 
              data-[state=active]:text-white
              text-gray-600 font-inter font-medium text-base
            "
            >
              Staff
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="Notes"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
            Notes
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="TimeSheets&Reports"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Time Sheets & Reports
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="Projects"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Projects
            </TabsTrigger>
          </div>

          

        </TabsList>

        {/* ================= TAB CONTENT ================= */}
        <TabsContent value="Staff" className="mt-6">
          <General/>
        </TabsContent>

        <TabsContent value="Notes" className="mt-6">
          <Notes/>
        </TabsContent>

        <TabsContent value="TimeSheets&Reports" className="mt-6">
          < TimeSheets/>
        </TabsContent>

        <TabsContent value="Projects" className="mt-6">
          <Projects />
        </TabsContent>

      

      </Tabs>
    </div>
    </div>
  );
};

export default TimesheetSummary;