"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



import CustomerDetails from "@/components/Customer/CustomerDetails";
import BillingShippingForm from "@/components/Customer/BillingShippingForm";
import AssignAdminTable from "@/components/Customer/AssignAdminTable";





export default function Profile() {
  return (
    <div className="p-4 bg-white  ">
      {/* Title */}
      <h2 className="lg:text-2xl md:text-xl text-lg mt-2 font-inter font-semibold text-gray-600 mb-4">
       Profile
      </h2>

      {/* Divider line */}
      <div className="border-b mb-6"></div>

      <Tabs defaultValue="Customer Details" className="w-full">
        {/* ======== TAB BUTTONS ======== */}
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
          <div>
            <TabsTrigger
              value="Customer Details"
              
              className="
              px-4 py-2  rounded-md 
              data-[state=active]:bg-[#5A5A5A] 
              data-[state=active]:text-white
              text-gray-600 font-inter font-medium text-base
            "
            >
              Customer Details
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="Billing and Shipping"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
            Billing and Shipping
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="Customer Admins"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
             Customer Admins
            </TabsTrigger>
          </div>

     


        </TabsList>

        {/* ================= TAB CONTENT ================= */}
        <TabsContent value="Customer Details" className="mt-6">
          <CustomerDetails/>
        </TabsContent>

        <TabsContent value="Billing and Shipping" className="mt-6">
          <  BillingShippingForm/>
        </TabsContent>

        <TabsContent value="Customer Admins" className="mt-6">
          <AssignAdminTable />
        </TabsContent>

       

      </Tabs>
    </div>
  );
}
