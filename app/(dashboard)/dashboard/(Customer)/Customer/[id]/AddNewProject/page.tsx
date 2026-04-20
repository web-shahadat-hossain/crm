"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";





import ProjectForm from "@/components/Customer/Project";
import ProjectSettings from "@/components/Customer/ProjectSettings";





export default function AddNewProject() {
  return (
    <div className="p-4 bg-white  ">
      {/* Title */}
      <h2 className="lg:text-2xl md:text-xl text-lg mt-2 font-inter font-semibold text-gray-600 mb-4">
        Add new Project
      </h2>

      {/* Divider line */}
      <div className="border-b mb-6"></div>

      <Tabs defaultValue="Project" className="w-full">
        {/* ======== TAB BUTTONS ======== */}
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
          <div>
            <TabsTrigger
              value="Project"
              
              className="
              px-4 py-2  rounded-md 
              data-[state=active]:bg-[#5A5A5A] 
              data-[state=active]:text-white
              text-gray-600 font-inter font-medium text-base
            "
            >
             Project
            </TabsTrigger>
          </div>

         

          <div>
            <TabsTrigger
              value="ProjectSettings"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Project Settings
            </TabsTrigger>
          </div>

         

       

        </TabsList>

        {/* ================= TAB CONTENT ================= */}
        <TabsContent value="Project" className="mt-6">
          <ProjectForm/>
        </TabsContent>

        <TabsContent value="ProjectSettings" className="mt-6">
          <  ProjectSettings/>
        </TabsContent>

       

      </Tabs>
    </div>
  );
}
