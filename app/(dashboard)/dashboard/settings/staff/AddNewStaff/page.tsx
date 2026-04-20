"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";




import Profile from "@/components/settings/staff/Profile";
import RolePermissions from "@/components/settings/staff/Permission";




export default function AddNewStaff() {
  return (
    <div className="p-4 max-w-7xl mx-auto bg-white  ">
      {/* Title */}
      <h2 className="lg:text-2xl md:text-xl text-lg mt-2 font-inter font-semibold text-gray-600 mb-4">
      Add New Staff Member
      </h2>

      {/* Divider line */}
      <div className="border-b mb-6"></div>

      <Tabs defaultValue="Profile" className="w-full">
        {/* ======== TAB BUTTONS ======== */}
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
          <div>
            <TabsTrigger
              value="Profile"
              
              className="
              px-4 py-2  rounded-md 
              data-[state=active]:bg-[#5A5A5A] 
              data-[state=active]:text-white
              text-gray-600 font-inter font-medium text-base
            "
            >
             Profile
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="Permission"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Permission
            </TabsTrigger>
          </div>

          


          

        </TabsList>

        {/* ================= TAB CONTENT ================= */}
        <TabsContent value="Profile" className="mt-6">
          <Profile />
        </TabsContent>

        <TabsContent value="Permission" className="mt-6">
          <RolePermissions/>
        </TabsContent>

        

      

      </Tabs>
    </div>
  );
}
