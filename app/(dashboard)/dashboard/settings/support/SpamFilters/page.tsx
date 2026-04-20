"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BlockedSenders from "@/components/settings/support/BlockedSenders";
import BlockedSubjects from "@/components/settings/support/BlockedSubjects";
import BlockedPhrases from "@/components/settings/support/BlockedPhrases";

export default function KBArticles() {
  return (
    <div className="p-4 bg-white  ">
      {/* Title */}
      <h2 className="lg:text-2xl md:text-xl text-lg mt-2 font-inter font-semibold text-gray-600 mb-4">
        Spam Filters
      </h2>

      {/* Divider line */}
      <div className="border-b mb-6"></div>

      <Tabs defaultValue="BlockedSenders" className="w-full">
        {/* ======== TAB BUTTONS ======== */}
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
          <div>
            <TabsTrigger
              value="BlockedSenders"
              className="
              px-4 py-2  rounded-md 
              data-[state=active]:bg-[#5A5A5A] 
              data-[state=active]:text-white
              text-gray-600 font-inter font-medium text-base
            "
            >
              Blocked Senders
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="BlockedSubjects"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Blocked Subjects
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="BlockedPhrases"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Blocked Phrases
            </TabsTrigger>
          </div>
        </TabsList>

        {/* ================= TAB CONTENT ================= */}
        <TabsContent value="BlockedSenders" className="mt-6">
          <BlockedSenders />
        </TabsContent>

        <TabsContent value="BlockedSubjects" className="mt-6">
          <BlockedSubjects />
        </TabsContent>

        <TabsContent value="BlockedPhrases" className="mt-6">
          <BlockedPhrases />
        </TabsContent>
      </Tabs>
    </div>
  );
}
