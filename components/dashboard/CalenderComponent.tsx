"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../ui/card';

interface CalendarEvent {
    id: number;
    date: string;
    title: string;
    color: 'blue' | 'yellow';
    attendees?: string[];
}

const CalendarComponent = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 1)); // May 2025
    const [view, setView] = useState<'Week' | 'Month' | 'Day'>('Month');

    // Dummy events data
    const events: CalendarEvent[] = [
        {
            id: 1,
            date: '2025-05-08',
            title: 'Product Launch',
            color: 'blue',
            attendees: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop']
        },
        {
            id: 2,
            date: '2025-05-17',
            title: 'Meeting',
            color: 'yellow',
            attendees: []
        }
    ];

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        return { daysInMonth, startingDayOfWeek, year, month };
    };

    const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentDate);

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const previousMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const getEventsForDate = (day: number) => {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return events.filter(event => event.date === dateStr);
    };

    // Generate calendar days including previous month overflow
    const calendarDays = [];
    const prevMonthDays = new Date(year, month, 0).getDate();

    // Previous month days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        calendarDays.push({
            day: prevMonthDays - i,
            isCurrentMonth: false,
            isPrevMonth: true
        });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push({
            day,
            isCurrentMonth: true,
            isPrevMonth: false
        });
    }

    // Next month days to fill the grid
    const remainingDays = 7 - (calendarDays.length % 7);
    if (remainingDays < 7) {
        for (let day = 1; day <= remainingDays; day++) {
            calendarDays.push({
                day,
                isCurrentMonth: false,
                isPrevMonth: false
            });
        }
    }

    return (
        <div className='pb-4'>
            <Card className="p-6 bg-white">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-center md:justify-between md:mb-4 gap-6">
                    <div className="flex items-center gap-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            {monthNames[month]}, {year}
                        </h2>
                        <button className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                            Expand
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={previousMonth}
                                className="p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            <span className="text-sm text-gray-500">
                                May 21 – 26, 2025
                            </span>
                            <button
                                onClick={nextMonth}
                                className="p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                            {['Week', 'Month', 'Day'].map((v) => (
                                <button
                                    key={v}
                                    onClick={() => setView(v as any)}
                                    className={`px-4 py-1.5 text-sm font-medium rounded transition-colors ${view === v
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {v}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Day Headers */}
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-7 min-w-[700px] bg-gray-50 border-b border-gray-200">
                            {dayNames.map((day) => (
                                <div
                                    key={day}
                                    className="py-3 text-center text-xs font-semibold text-gray-600"
                                >
                                    {day}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Calendar Days */}
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-7 min-w-[700px]">
                            {calendarDays.map((dayInfo, index) => {
                                const dayEvents = dayInfo.isCurrentMonth ? getEventsForDate(dayInfo.day) : [];

                                return (
                                    <div
                                        key={index}
                                        className={`min-h-24 p-2 border-b border-r border-gray-200 ${index % 7 === 6 ? 'border-r-0' : ''
                                            } ${index >= calendarDays.length - 7 ? 'border-b-0' : ''
                                            } ${dayInfo.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                                            }`}
                                    >
                                        <div
                                            className={`text-sm font-medium mb-1 ${dayInfo.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                                                }`}
                                        >
                                            {dayInfo.day}
                                        </div>

                                        {/* Events */}
                                        {dayEvents.map((event) => (
                                            <div
                                                key={event.id}
                                                className={`text-xs rounded px-2 py-1 mb-1 ${event.color === 'blue'
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                    }`}
                                            >
                                                <div className="font-medium">{event.title}</div>
                                                {event.attendees && event.attendees.length > 0 && (
                                                    <div className="flex -space-x-1 mt-1">
                                                        {event.attendees.map((img, idx) => (
                                                            <img
                                                                key={idx}
                                                                src={img}
                                                                alt=""
                                                                className="w-4 h-4 rounded-full border border-white"
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                                <div className="text-[10px] mt-0.5 opacity-75">
                                                    The meeting starts
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CalendarComponent;