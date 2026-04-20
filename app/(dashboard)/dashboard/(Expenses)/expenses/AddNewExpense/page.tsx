"use client";

import AdvanceOptions from "@/components/Expenses/AdvanceOptions";
import ExpenseForm from "@/components/Expenses/Expenses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";







export default function AddNewExpense() {
  return (
    <div className="md:p-4 md:max-w-7xl w-full mx-auto bg-white  ">
      {/* Title */}
      <h2 className="lg:text-2xl md:text-xl text-lg mt-2 font-inter font-semibold text-gray-600 mb-4">
       Add New Expense
      </h2>

   

      <Tabs defaultValue="Expenses" className="w-full">
        {/* ======== TAB BUTTONS ======== */}
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
          <div>
            <TabsTrigger
              value="Expenses"
              
              className="
              px-4 py-2  rounded-md 
              data-[state=active]:bg-[#5A5A5A] 
              data-[state=active]:text-white
              text-gray-600 font-inter font-medium text-base
            "
            >
            Expenses
            </TabsTrigger>
          </div>

          <div>
            <TabsTrigger
              value="AdvanceOptions"
              className="font-inter font-medium text-base px-4 py-2  text-gray-500 data-[state=active]:bg-[#5A5A5A]  data-[state=active]:text-white rounded-md"
            >
              Advance Options
            </TabsTrigger>
          </div>

         

          

        </TabsList>

        {/* ================= TAB CONTENT ================= */}
        <TabsContent value="Expenses" className="mt-6">
        <ExpenseForm />
        </TabsContent>

        <TabsContent value="AdvanceOptions" className="mt-6">
         <AdvanceOptions />
        </TabsContent>


      </Tabs>
    </div>
  );
}
