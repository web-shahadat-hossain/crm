"use client"

import React, { useState } from 'react';
import { Target } from 'lucide-react';
import Activity from "@/icons/activity.svg";
import Image from 'next/image';

export default function Goals() {
    const [showAll, setShowAll] = useState(false);

    const allGoals = [
        {
            id: 1,
            title: 'Generate 500 new leads in the next quarter.',
            description: 'Focus on using targeted marketing strategies and outreach to capture high-quality leads. Track leads generated through various channels like social media, cold calls, and online inquiries.',
            category: 'Achievements',
            progress: 55,
            categoryColor: 'text-[#C62828]'
        },
        {
            id: 2,
            title: 'Sales Conversion Rate Improvement',
            description: 'Enhance the sales pipeline by optimizing follow-up strategies and lead qualification to boost the conversion rate.',
            category: 'Achievements',
            progress: 12,
            categoryColor: 'text-[#C62828]'
        },
        {
            id: 3,
            title: 'Generate 500 new leads in the next quarter.',
            description: 'Focus on using targeted marketing strategies and outreach to capture high-quality leads. Track leads generated through various channels like social media, cold calls, and online inquiries.',
            category: 'Achievements',
            progress: 55,
            categoryColor: 'text-[#C62828]'
        },
        {
            id: 4,
            title: 'Sales Conversion Rate Improvement',
            description: 'Enhance the sales pipeline by optimizing follow-up strategies and lead qualification to boost the conversion rate.',
            category: 'Achievements',
            progress: 12,
            categoryColor: 'text-[#C62828]'
        },
        {
            id: 5,
            title: 'Sales Conversion Rate Improvement',
            description: 'Enhance the sales pipeline by optimizing follow-up strategies and lead qualification to boost the conversion rate.',
            category: 'Achievements',
            progress: 12,
            categoryColor: 'text-[#C62828]'
        },
        {
            id: 6,
            title: 'Generate 500 new leads in the next quarter.',
            description: 'Focus on using targeted marketing strategies and outreach to capture high-quality leads. Track leads generated through various channels like social media, cold calls, and online inquiries.',
            category: 'Achievements',
            progress: 55,
            categoryColor: 'text-[#C62828]'
        },
        {
            id: 7,
            title: 'Sales Conversion Rate Improvement',
            description: 'Enhance the sales pipeline by optimizing follow-up strategies and lead qualification to boost the conversion rate.',
            category: 'Achievements',
            progress: 12,
            categoryColor: 'text-[#C62828]'
        },
        {
            id: 8,
            title: 'Generate 500 new leads in the next quarter.',
            description: 'Focus on using targeted marketing strategies and outreach to capture high-quality leads. Track leads generated through various channels like social media, cold calls, and online inquiries.',
            category: 'Achievements',
            progress: 55,
            categoryColor: 'text-[#C62828]'
        },
        {
            id: 9,
            title: 'Sales Conversion Rate Improvement',
            description: 'Enhance the sales pipeline by optimizing follow-up strategies and lead qualification to boost the conversion rate.',
            category: 'Achievements',
            progress: 12,
            categoryColor: 'text-[#C62828]'
        },
        {
            id: 10,
            title: 'Generate 500 new leads in the next quarter.',
            description: 'Focus on using targeted marketing strategies and outreach to capture high-quality leads. Track leads generated through various channels like social media, cold calls, and online inquiries.',
            category: 'Achievements',
            progress: 55,
            categoryColor: 'text-[#C62828]'
        },
    ];

    const goals = showAll ? allGoals : allGoals.slice(0, 5);

    return (
        <div className="w-full bg-white rounded-lg shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center`}>
                        <Image
                            src={Activity}
                            alt={"Activity"}
                            width={24}
                            height={24}
                            className="w-8 h-8"
                        />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">Goals</h2>
                </div>
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-3 py-1 text-sm text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors"
                >
                    {showAll ? 'Show Less' : 'View All'}
                </button>
            </div>

            {/* Goals List */}
            <div className={`divide-y divide-gray-100 ${showAll ? 'max-h-96 md:max-h-[980px] overflow-y-auto' : ''}`}>
                {goals.map((goal) => (
                    <div key={goal.id} className="px-4 py-4 hover:bg-gray-50 transition-colors">
                        {/* Goal Title */}
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">
                            {goal.title}
                        </h3>

                        {/* Goal Description */}
                        <p className="text-xs text-gray-600 leading-relaxed mb-3">
                            {goal.description}
                        </p>

                        {/* Category and Progress */}
                        <div className="flex items-center justify-between mb-2">
                            <span className={`text-xs font-medium ${goal.categoryColor}`}>
                                {goal.category}
                            </span>
                            <span className="text-xs font-semibold text-gray-700">
                                {goal.progress}%
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-300 bg-[#C62828]`}
                                style={{ width: `${goal.progress}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}