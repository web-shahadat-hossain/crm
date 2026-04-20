"use client";

import React, { useState, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Card } from '../ui/card';

type ViewType = 'Monthly' | 'Weekly' | 'Full Report';

interface PaymentData {
    month: string;
    thisWeek: number;
    lastWeek: number;
    date: string;
    amount: number;
}

const PaymentRecordsChart = () => {
    const [activeView, setActiveView] = useState<ViewType>('Monthly');
    const [hoveredData, setHoveredData] = useState<{ date: string; amount: number; month: string } | null>(null);

    // Dummy data for Monthly view
    const monthlyData: PaymentData[] = [
        { month: 'Jan', thisWeek: 20, lastWeek: 35, date: '15 Jan 2022', amount: 35420.50 },
        { month: 'Feb', thisWeek: 25, lastWeek: 32, date: '15 Feb 2022', amount: 38650.75 },
        { month: 'Mar', thisWeek: 30, lastWeek: 38, date: '15 Mar 2022', amount: 42890.30 },
        { month: 'Apr', thisWeek: 35, lastWeek: 48, date: '15 Apr 2022', amount: 48320.90 },
        { month: 'May', thisWeek: 60, lastWeek: 65, date: '15 May 2022', amount: 59492.10 },
        { month: 'Jun', thisWeek: 50, lastWeek: 72, date: '15 Jun 2022', amount: 65780.40 },
        { month: 'Jul', thisWeek: 40, lastWeek: 68, date: '15 Jul 2022', amount: 62340.20 },
        { month: 'Aug', thisWeek: 48, lastWeek: 62, date: '15 Aug 2022', amount: 59492.10 },
        { month: 'Sep', thisWeek: 42, lastWeek: 64, date: '15 Sep 2022', amount: 60120.80 },
        { month: 'Oct', thisWeek: 45, lastWeek: 70, date: '15 Oct 2022', amount: 67890.50 },
        { month: 'Nov', thisWeek: 50, lastWeek: 58, date: '15 Nov 2022', amount: 58230.90 },
        { month: 'Dec', thisWeek: 68, lastWeek: 52, date: '15 Dec 2022', amount: 54670.30 }
    ];

    // Dummy data for Weekly view (4 weeks)
    const weeklyData: PaymentData[] = [
        { month: 'Week 1', thisWeek: 45, lastWeek: 52, date: '1 Dec 2022', amount: 52340.20 },
        { month: 'Week 2', thisWeek: 55, lastWeek: 48, date: '8 Dec 2022', amount: 48920.80 },
        { month: 'Week 3', thisWeek: 62, lastWeek: 58, date: '15 Dec 2022', amount: 58490.50 },
        { month: 'Week 4', thisWeek: 68, lastWeek: 54, date: '22 Dec 2022', amount: 54780.90 }
    ];

    // Dummy data for Full Report (Quarterly)
    const fullReportData: PaymentData[] = [
        { month: 'Q1 2022', thisWeek: 28, lastWeek: 35, date: 'Q1 2022', amount: 105890.45 },
        { month: 'Q2 2022', thisWeek: 48, lastWeek: 62, date: 'Q2 2022', amount: 173592.40 },
        { month: 'Q3 2022', thisWeek: 43, lastWeek: 65, date: 'Q3 2022', amount: 181953.10 },
        { month: 'Q4 2022', thisWeek: 61, lastWeek: 55, date: 'Q4 2022', amount: 180791.70 }
    ];

    // Get current data based on active view
    const getCurrentData = () => {
        switch (activeView) {
            case 'Weekly':
                return weeklyData;
            case 'Full Report':
                return fullReportData;
            default:
                return monthlyData;
        }
    };

    const currentData = getCurrentData();

    // Fixed: Custom tooltip that doesn't update state during render
    const CustomTooltip = useCallback(({ active, payload }: any) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">{data.date}</div>
                    <div className="text-lg font-bold text-gray-900">
                        ${data.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                </div>
            );
        }
        return null;
    }, []);

    const handleMouseMove = useCallback((state: any) => {
        if (state && state.activePayload && state.activePayload.length) {
            const data = state.activePayload[0].payload;
            setHoveredData({
                date: data.date,
                amount: data.amount,
                month: data.month
            });
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredData(null);
    }, []);

    const handleViewChange = useCallback((view: ViewType) => {
        setActiveView(view);
        setHoveredData(null);
    }, []);

    return (
        <div className='pb-4'>
            <Card className="md:p-8 bg-white">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between md:mb-8 gap-8">
                    <h1 className="text-3xl font-bold text-gray-900">Payments Records</h1>

                    {/* View Toggle Buttons */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {(['Monthly', 'Weekly', 'Full Report'] as ViewType[]).map((view) => (
                            <button
                                key={view}
                                onClick={() => handleViewChange(view)}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${activeView === view
                                    ? 'bg-gray-700 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                                    }`}
                            >
                                {view}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-5 mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500"></div>
                        <span className="text-xs md:text-sm text-gray-700">This Week Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-500"></div>
                        <span className="text-xs md:text-sm text-gray-700">Last Week Payments</span>
                    </div>
                </div>

                {/* Chart */}
                <div className="relative w-full" style={{ minHeight: '400px' }}>
                    <ResponsiveContainer width="100%" height={400} minWidth={0}>
                        <LineChart
                            data={currentData}
                            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9ca3af', fontSize: 14 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9ca3af', fontSize: 14 }}
                                domain={[0, 100]}
                                ticks={[0, 20, 40, 60, 80, 100]}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e5e7eb', strokeWidth: 2 }} />

                            {/* Lines */}
                            <Line
                                type="monotone"
                                dataKey="thisWeek"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                dot={false}
                                activeDot={{ r: 6, fill: '#3b82f6' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="lastWeek"
                                stroke="#f97316"
                                strokeWidth={3}
                                dot={false}
                                activeDot={{ r: 6, fill: '#f97316' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>

                    {/* Dynamic Hover Tooltip at Top */}
                    {hoveredData && (
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 text-center pointer-events-none shadow-lg rounded-lg border border-gray-200">
                            <div className="text-xs text-gray-500 mb-1">{hoveredData.date}</div>
                            <div className="text-2xl font-bold text-gray-900">
                                ${hoveredData.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </div>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default PaymentRecordsChart;