"use client";

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/card';
import Image from 'next/image';
import projectStatus from "@/icons/projects-status.svg";

type ProjectsStatus = 'Not Started' | 'In Progress' | 'On Hold' | 'Cancelled' | 'Finished';

const ProjectsOverview = () => {
    const [activeTab, setActiveTab] = useState<ProjectsStatus>('Not Started');

    // Fake data for each tab
    const ProjectsData: Record<ProjectsStatus, { count: number; total: number; percentage: number }> = {
        'Not Started': { count: 45, total: 90, percentage: 50 },
        'In Progress': { count: 32, total: 80, percentage: 40 },
        'On Hold': { count: 28, total: 40, percentage: 70 },
        'Cancelled': { count: 15, total: 30, percentage: 50 },
        'Finished': { count: 12, total: 20, percentage: 60 },
    };

    const currentData = ProjectsData[activeTab];

    // Data for the pie chart
    const chartData = [
        { name: 'completed', value: currentData.percentage },
        { name: 'remaining', value: 100 - currentData.percentage }
    ];

    const COLORS = ['#8E24AA', '#E6E6E6'];

    return (
        <div className='pb-4'>
            <Card className="w-full bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center`}>
                        <Image
                            src={projectStatus}
                            alt={"Project Status"}
                            width={24}
                            height={24}
                            className="w-8 h-8"
                        />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Statistics by Project Status</h2>
                </div>

                <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ProjectsStatus)} className="w-full">
                    <TabsList className="w-full flex flex-wrap gap-2 p-1 rounded-lg">
                        <TabsTrigger
                            value="Not Started"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Not Started
                        </TabsTrigger>
                        <TabsTrigger
                            value="In Progress"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            In Progress
                        </TabsTrigger>
                        <TabsTrigger
                            value="On Hold"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            On Hold
                        </TabsTrigger>
                    </TabsList>

                    <TabsList className="w-full flex flex-wrap gap-2 p-1 rounded-lg">
                        <TabsTrigger
                            value="Cancelled"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Cancelled
                        </TabsTrigger>
                        <TabsTrigger
                            value="Finished"
                            className="rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xs"
                        >
                            Finished
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
                    {currentData.count} of {currentData.total} projects
                </div>
            </Card>
        </div>
    );
};

export default ProjectsOverview;