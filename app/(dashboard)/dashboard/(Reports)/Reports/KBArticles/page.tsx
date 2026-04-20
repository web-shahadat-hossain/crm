"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import Sale from "@/components/Sale/Sales";
import Abuse from "@/components/Sale/Abuse";
import Company from "@/components/Sale/Company";
import Info from "@/components/Sale/Info";
import License from "@/components/Sale/License";




export default function KBArticles() {
  return (
    <div className="p-4 bg-white  ">
      {/* Title */}
      <h2 className="lg:text-2xl md:text-xl text-lg mt-2 font-inter font-semibold text-gray-600 mb-4">
        KB Articles
      </h2>

      {/* Divider line */}
      <div className="border-b mb-6"></div>

      <Tabs defaultValue="Sales" className="w-full">
        {/* ======== TAB BUTTONS ======== */}
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
          <div>
            <TabsTrigger
              value="Sales"
              
              className="
              px-4 py-2  rounded-md 
              data-[state=active]:bg-[#5A5A5A] 
              data-[state=active]:text-white
              text-gray-600 font-inter font-medium text-base
            "
            >
              Sales
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="Info"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Info
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="Abuse"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Abuse
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="License"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              License
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="Company"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
             Company
            </TabsTrigger>
          </div>

        </TabsList>

        {/* ================= TAB CONTENT ================= */}
        <TabsContent value="Sales" className="mt-6">
          <Sale/>
        </TabsContent>

        <TabsContent value="Info" className="mt-6">
          <  Info/>
        </TabsContent>

        <TabsContent value="Abuse" className="mt-6">
          <Abuse />
        </TabsContent>

        <TabsContent value="License" className="mt-6">
          <License />
        </TabsContent>

        <TabsContent value="Company" className="mt-6">
          <Company/>
        </TabsContent>

      </Tabs>
    </div>
  );
}
