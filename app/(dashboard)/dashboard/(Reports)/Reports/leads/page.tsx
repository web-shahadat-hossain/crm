"use client"
import SourcesConversion from "@/components/lead/Lead";
import LeadsReport from "@/components/lead/LeadsReport";
import StaffReport from "@/components/lead/StaffReport";
import { Card } from "@/components/ui/card";

import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Sun", value: 400, color: "#E8D9FF" },
  { name: "Mon", value: 500, color: "#C5A3FF" },
  { name: "Tue", value: 450, color: "#A06BFF" },
  { name: "Wed", value: 600, color: "#7C3AED" },
  { name: "Thu", value: 550, color: "#6D28D9" },
  { name: "Fri", value: 500, color: "#5B21B6" },
  { name: "Sat", value: 480, color: "#4C1D95" }
];

export default function LeadsDashboard() {
  return (
    <div >
      
   


   <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full bg-white">
   {/* Left Chart */}
      <Card className="col-span-3 rounded-2xl shadow-sm p-6">
        <h2 className="text-lg md:text-2xl font-bold text-[#6928DB] font-inter mb-4">This Week Leads Conversions</h2>

        <div className="flex flex-col  items-center gap-6">

          {/* Donut Chart */}
          <div>
            <PieChart width={360} height={360}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={150}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>

          {/* Table */}
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr>
                <th className="pb-2 text-sm font-bold text-[#6A567E] font-inter">Day</th>
                <th className="pb-2 text-sm font-bold text-[#6A567E] font-inter">Leads Contacted</th>
                <th className="pb-2 text-sm font-bold text-[#6A567E] font-inter">%</th>
                <th className="pb-2 text-sm font-bold text-[#6A567E] font-inter">Qualified</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Sunday", 2000, "34%", "+111%"],
                ["Monday", 2000, "34%", "+22%"],
                ["Tuesday", 2000, "34%", "+33%"],
                ["Wednesday", 2000, "34%", "-11%"],
                ["Thursday", 2000, "34%", "-11%"],
                ["Friday", 2000, "34%", "-11%"],
                ["Saturday", 2000, "34%", "-11%"],
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">{row[0]}</td>
                  <td className="py-2">{row[1]}</td>
                  <td className="py-2">{row[2]}</td>
                  <td className="py-2">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </Card>
  
   <div className="w-full col-span-2 flex flex-col gap-5">
     <SourcesConversion></SourcesConversion>
     <StaffReport></StaffReport>
   </div>
   </div>
   <div className="">
    <LeadsReport></LeadsReport>
   </div>
    </div>
  );
}
