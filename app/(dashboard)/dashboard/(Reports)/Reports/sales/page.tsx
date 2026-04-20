"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import InvoicesReport from "@/components/sales/InvoicesReport";
import ItemReport from "@/components/sales/ItemReport";
import PaymentsReceived from "@/components/sales/PaymentsReceived";
import CreditNotesReport from "@/components/sales/Credit-Notes-Report";
import ProposalsReport from "@/components/sales/ProposalsReport";
import EstimatesReport from "@/components/sales/EstimatesReport";
import CustomersReport from "@/components/sales/CustomersReport";
import TotalIncome from "@/components/sales/TotalIncome";
import PaymentsMethod from "@/components/sales/PaymentsMethod";
import TotalValue from "@/components/sales/TotalValue";

export default function SalesReport() {
  return (
    <div className="p-2 bg-white  ">
      {/* Title */}
      <h2 className="lg:text-2xl md:text-xl text-lg mt-2 font-inter font-semibold text-gray-600 mb-4">
        Sales & Chart Based Report
      </h2>

      {/* Divider line */}
      <div className="border-b mb-6"></div>

      <Tabs defaultValue="invoices" className="w-full">
        {/* ======== TAB BUTTONS ======== */}
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
          <div>
            <TabsTrigger
              value="invoices"
              className="
              px-4 py-2  rounded-md 
              data-[state=active]:bg-[#5A5A5A] 
              data-[state=active]:text-white
              text-gray-600 font-inter font-medium text-base
            "
            >
              Invoices Report
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="items"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Item Report
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="payments"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Payments Received
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="credit"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Credit Notes Report
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="proposals"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Proposals Report
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="estimates"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Estimates Report
            </TabsTrigger>
          </div>
          <div>
            <TabsTrigger
              value="customers"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Customers Report
            </TabsTrigger>
          </div>
          <div>
            <TabsTrigger
              value="TotalIncome"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Total Income
            </TabsTrigger>
          </div>
          <div>
            <TabsTrigger
              value="PaymentsMethod"
              className="px-4 py-2 font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Payments Method (Transactions)
            </TabsTrigger>
          </div>
          <div>
            <TabsTrigger
              value="TotalValue"
              className="px-4 py-2 w-[300px] font-inter font-medium text-base text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Total Value By Customer Groups
            </TabsTrigger>
          </div>
        </TabsList>

        {/* ================= TAB CONTENT ================= */}
        <TabsContent value="invoices" className="mt-6">
          <InvoicesReport />
        </TabsContent>

        <TabsContent value="items" className="mt-6">
          <ItemReport />
        </TabsContent>

        <TabsContent value="payments" className="mt-6">
          <PaymentsReceived />
        </TabsContent>

        <TabsContent value="credit" className="mt-6">
          <CreditNotesReport />
        </TabsContent>

        <TabsContent value="proposals" className="mt-6">
          <ProposalsReport />
        </TabsContent>

        <TabsContent value="estimates" className="mt-6">
          <EstimatesReport />
        </TabsContent>

        <TabsContent value="customers" className="mt-6">
          {" "}
          <CustomersReport />
        </TabsContent>
        <TabsContent value="TotalIncome" className="mt-6">
          <TotalIncome />
        </TabsContent>
        <TabsContent value="PaymentsMethod" className="mt-6">
          <PaymentsMethod />
        </TabsContent>
        <TabsContent value="TotalValue" className="mt-6">
          <TotalValue />
        </TabsContent>
      </Tabs>
    </div>
  );
}
