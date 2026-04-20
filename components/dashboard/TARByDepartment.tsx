"use client";

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/card';
import Image from 'next/image';
import TARD from "@/icons/TARD.svg";

type TARStatus = 'Marketing' | 'Sales' | 'Abuse';

const TARdOverview = () => {
    const [activeTab, setActiveTab] = useState<TARStatus>('Marketing');

    // Fake data for each tab
    const TARdData: Record<TARStatus, { count: number; total: number; percentage: number }> = {
        'Marketing': { count: 45, total: 90, percentage: 50 },
        'Sales': { count: 32, total: 80, percentage: 40 },
        'Abuse': { count: 28, total: 40, percentage: 70 },
    };

    const currentData = TARdData[activeTab];

    // Data for the pie chart
    const chartData = [
        { name: 'completed', value: currentData.percentage },
        { name: 'remaining', value: 100 - currentData.percentage }
    ];

    const COLORS = ['#94C628', '#E6E6E6'];

    return (
        <div className='pb-4'>
            <Card className="w-full bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center`}>
                        <Image
                            src={TARD}
                            alt={"TARD"}
                            width={24}
                            height={24}
                            className="w-8 h-8"
                        />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Tickets Awaiting Reply by Status</h2>
                </div>

                <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TARStatus)} className="w-full">
                    <TabsList className="w-full flex flex-wrap gap-2 p-1 rounded-lg">
                        <TabsTrigger
                            value="Marketing"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Marketing
                        </TabsTrigger>
                        <TabsTrigger
                            value="Sales"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Sales
                        </TabsTrigger>
                        <TabsTrigger
                            value="Abuse"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Abuse
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
                    {currentData.count} of {currentData.total} tickets
                </div>
            </Card>
        </div>
    );
};

export default TARdOverview;