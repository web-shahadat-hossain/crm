"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



import General from "@/components/estimate-request/General";
import Branding from "@/components/estimate-request/Branding";
import Submission from "@/components/estimate-request/Submission";
import Notifications from "@/components/estimate-request/Notifications";




export default function NewForm() {
  return (
    <div className="p-4 max-w-7xl mx-auto bg-white  ">
      {/* Title */}
      <h2 className="lg:text-2xl md:text-xl text-lg mt-2 font-inter font-semibold text-gray-600 mb-4">
       New Form
      </h2>

      {/* Divider line */}
      <div className="border-b mb-6"></div>

      <Tabs defaultValue="General" className="w-full">
        {/* ======== TAB BUTTONS ======== */}
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
          <div>
            <TabsTrigger
              value="General"
              
              className="
              px-4 py-2  rounded-md 
              data-[state=active]:bg-[#5A5A5A] 
              data-[state=active]:text-white
              text-gray-600 font-inter font-medium text-base
            "
            >
              General
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="Branding"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Branding
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="Submission"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Submission
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="Notifications"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Notifications
            </TabsTrigger>
          </div>

          

        </TabsList>

        {/* ================= TAB CONTENT ================= */}
        <TabsContent value="General" className="mt-6">
          <General/>
        </TabsContent>

        <TabsContent value="Branding" className="mt-6">
          <Branding/>
        </TabsContent>

        <TabsContent value="Submission" className="mt-6">
          <Submission/>
        </TabsContent>

        <TabsContent value="Notifications" className="mt-6">
          <Notifications />
        </TabsContent>

      

      </Tabs>
    </div>
  );
}
