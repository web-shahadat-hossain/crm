"use client";

import ActiveContacts from "@/components/Customer/ActiveContacts";
import ActiveCustomers from "@/components/Customer/ActiveCustomers";
import InactiveContacts from "@/components/Customer/InactiveContacts";
import InactiveCustomers from "@/components/Customer/InactiveCustomers";
import Customers from "@/components/Customer/TotalCustomers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";




export default function Customer() {
  return (
    <div className="p-4 bg-white  ">
      {/* Title */}
         <div className="flex items-center gap-2 justify-between p-4 bg-gray-50">
      <h1 className="lg:text-2xl md:text-xl text-lg mt-2 font-inter font-semibold text-gray-600 mb-4">Customers</h1>
      <div className="flex gap-3">
     <Link href={"/dashboard/Customer/AddNewCustomer"}>
        <button className="px-4 py-2 text-xs md:text-base bg-[#E6E6E6] border border-gray-500 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
          Add New Customer
        </button></Link>
        <button className="px-4 py-2 border text-xs md:text-base border-gray-500 bg-[#E6E6E6] text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
          Import
        </button>
      </div>
    </div>
     

      {/* Divider line */}
      <div className="border-b mb-6"></div>

      <Tabs defaultValue="TotalCustomers" className="w-full">
        {/* ======== TAB BUTTONS ======== */}
        <TabsList className="flex flex-wrap justify-between gap-2 bg-transparent p-0 h-auto">
          <div>
            <TabsTrigger
              value="TotalCustomers"
              className="
              px-4 py-2  rounded-md 
              data-[state=active]:bg-[#5A5A5A] 
              data-[state=active]:text-white
              text-gray-600 font-inter font-medium text-base
            "
            >
              Total Customers (20)
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="ActiveCustomers"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Active Customers (5)
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="InactiveCustomers"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Inactive Customers (3)
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="ActiveContacts"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
             Active Contacts (17)
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="InactiveContacts"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Inactive Contacts (200)
            </TabsTrigger>
          </div>

        </TabsList>

        {/* ================= TAB CONTENT ================= */}
        <TabsContent value="TotalCustomers" className="mt-6">
       <Customers/>
        </TabsContent>

        <TabsContent value="ActiveCustomers" className="mt-6">
        <ActiveCustomers></ActiveCustomers>
        </TabsContent>

        <TabsContent value="InactiveCustomers" className="mt-6">
        <InactiveCustomers></InactiveCustomers>
        </TabsContent>

        <TabsContent value="ActiveContacts" className="mt-6">
         <ActiveContacts></ActiveContacts>
        </TabsContent>

        <TabsContent value="InactiveContacts" className="mt-6">
     <InactiveContacts></InactiveContacts>
        </TabsContent>

      </Tabs>
    </div>
  );
}
