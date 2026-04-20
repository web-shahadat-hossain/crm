"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import keyboardOpen from "@/icons/keyboard-open.svg";
import moneyTime from "@/icons/money-time.svg";
import taskSquare from "@/icons/task-square.svg";
import trendUp from "@/icons/trend-up.svg";

const mockStats = [
    {
        id: 1,
        title: "Invoices waiting Payment",
        value: 13,
        total: 17,
        color: "bg-[#FFB200]",
        iconBg: "bg-[#1C1D1D0D] shadow-[0_0_38px_0_#00000012]",
        icon: moneyTime,
    },
    {
        id: 2,
        title: "Converted Leads",
        value: 7,
        total: 50,
        color: "bg-[#28A745]",
        iconBg: "bg-[#1C1D1D0D] shadow-[0_0_38px_0_#00000012]",
        icon: trendUp,
    },
    {
        id: 3,
        title: "Projects In Progress",
        value: 5,
        total: 5,
        color: "bg-[#407BFF]",
        iconBg: "bg-[#1C1D1D0D] shadow-[0_0_38px_0_#00000012]",
        icon: keyboardOpen,
    },
    {
        id: 4,
        title: "Tasks Not Finished",
        value: 46,
        total: 62,
        color: "bg-[#FF7043]",
        iconBg: "bg-[#1C1D1D0D] shadow-[0_0_38px_0_#00000012]",
        icon: taskSquare,
    },
];

export default function StateCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
            {mockStats.map((item) => {
                const percentage = (item.value / item.total) * 100;

                return (
                    <Card
                        key={item.id}
                        className="p-4 rounded-2xl flex flex-col gap-4"
                    >
                        <CardContent className="p-0 flex flex-col gap-4">
                            <div className="flex flex-col gap-3">
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconBg}`}
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={24}
                                        height={24}
                                        className="w-6 h-6"
                                    />
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    {item.title}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-full h-[11px] bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${item.color}`}
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                                <div className="text-right text-xs text-gray-500">
                                    {item.value}/{item.total}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}