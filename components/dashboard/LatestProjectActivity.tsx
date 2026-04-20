"use client";

import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { Card } from '../ui/card';
import Image from 'next/image';
import Activity from "@/icons/activity.svg";

export default function LatestProjectActivity() {
    const [showAll, setShowAll] = useState(false);

    const allActivities = [
        { id: 1, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '5 Minutes ago' },
        { id: 2, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '5 Minutes ago' },
        { id: 3, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '5 Minutes ago' },
        { id: 4, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '5 Minutes ago' },
        { id: 5, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '5 Minutes ago' },
        { id: 6, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '5 Minutes ago' },
        { id: 7, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '5 Minutes ago' },
        { id: 8, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '5 Minutes ago' },
        { id: 9, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '10 Minutes ago' },
        { id: 10, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '15 Minutes ago' },
        { id: 11, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '20 Minutes ago' },
        { id: 12, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '25 Minutes ago' },
        { id: 13, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '30 Minutes ago' },
        { id: 14, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '35 Minutes ago' },
        { id: 15, user: 'Berry Parisian', action: 'Added new team member', project: 'Crm software', time: '40 Minutes ago' },
    ];

    const activities = showAll ? allActivities : allActivities.slice(0, 5);

    return (
        <div className='pb-4'>
            <Card className="w-full bg-white rounded-lg shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between px-4 pb-6 border-b border-gray-200">
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
                        <h2 className="text-base font-semibold text-gray-900">Latest Project Activity</h2>
                    </div>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-3 py-1 text-sm text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors"
                    >
                        {showAll ? 'Show Less' : 'View All'}
                    </button>
                </div>

                {/* Activity List */}
                <div className={`divide-y divide-gray-100 ${showAll ? 'max-h-96 overflow-y-auto' : ''}`}>
                    {activities.map((activity) => (
                        <div key={activity.id} className="px-4 py-3 hover:bg-gray-50 transition-colors">
                            <div className="text-xs text-gray-500 mb-1">{activity.time}</div>
                            <div className="text-sm">
                                <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                                    {activity.user}
                                </span>
                                <span className="text-gray-700"> - {activity.action}</span>
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                                Project Name: {activity.project}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}