"use client";

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/card';
import Image from 'next/image';
import property38 from "@/icons/Property 38.svg";

type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Working' | 'Proposal Sent' | 'Customer' | 'Lost Leads';

const LeadsOverview = () => {
    const [activeTab, setActiveTab] = useState<LeadStatus>('New');

    // Fake data for each tab
    const leadsData: Record<LeadStatus, { count: number; total: number; percentage: number }> = {
        'New': { count: 45, total: 90, percentage: 50 },
        'Contacted': { count: 32, total: 80, percentage: 40 },
        'Qualified': { count: 28, total: 40, percentage: 70 },
        'Working': { count: 15, total: 30, percentage: 50 },
        'Proposal Sent': { count: 12, total: 20, percentage: 60 },
        'Customer': { count: 8, total: 10, percentage: 80 },
        'Lost Leads': { count: 5, total: 50, percentage: 10 }
    };

    const currentData = leadsData[activeTab];

    // Data for the pie chart
    const chartData = [
        { name: 'completed', value: currentData.percentage },
        { name: 'remaining', value: 100 - currentData.percentage }
    ];

    const COLORS = ['#FFC107', '#E6E6E6'];

    return (
        <div className='pb-4'>
            <Card className="w-full bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center`}>
                        <Image
                            src={property38}
                            alt={"Property 38"}
                            width={24}
                            height={24}
                            className="w-8 h-8"
                        />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Leads Overview</h2>
                </div>

                <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as LeadStatus)} className="w-full">
                    <TabsList className="w-full flex flex-wrap gap-2 p-1 rounded-lg">
                        <TabsTrigger
                            value="New"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            New
                        </TabsTrigger>
                        <TabsTrigger
                            value="Contacted"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Contacted
                        </TabsTrigger>
                        <TabsTrigger
                            value="Qualified"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Qualified
                        </TabsTrigger>
                        <TabsTrigger
                            value="Working"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Working
                        </TabsTrigger>
                    </TabsList>

                    <TabsList className="w-full flex flex-wrap gap-2 p-1 rounded-lg">
                        <TabsTrigger
                            value="Customer"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Customer
                        </TabsTrigger>
                        <TabsTrigger
                            value="Proposal Sent"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Proposal Sent
                        </TabsTrigger>
                        <TabsTrigger
                            value="Lost Leads"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Lost Leads
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="flex justify-center items-center">
                    <div className="relative w-56 h-56">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={110}
                                    startAngle={90}
                                    endAngle={-270}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl font-bold text-gray-900">
                                {currentData.percentage}%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4 text-sm text-gray-500">
                    {currentData.count} of {currentData.total} leads
                </div>
            </Card>
        </div>
    );
};

export default LeadsOverview;