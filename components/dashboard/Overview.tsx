"use client";

import { Card, CardContent } from "@/components/ui/card";
import clipboardTick from "@/icons/clipboard-tick.svg";
import documentText from "@/icons/document-text.svg";
import note from "@/icons/note.svg";
import Image from "next/image";

const mockData = [
    {
        id: 1,
        title: "Invoice Overview",
        icon: documentText,
        color: "text-[#0AA90F]",
        stats: [
            { label: "Draft", value: 2, percent: 4.32, bar: "bg-[#7DB4EB]", textColor: "text-[#7DB4EB]" },
            { label: "Not Sent", value: 13, percent: 28.08, bar: "bg-[#FFA761]", textColor: "text-[#FFA761]" },
            { label: "Unpaid", value: 9, percent: 19.44, bar: "bg-[#E63946]", textColor: "text-[#E63946]" },
            { label: "Partially Paid", value: 4, percent: 28.08, bar: "bg-[#FFC107]", textColor: "text-[#FFC107]" },
            { label: "Overdue", value: 0, percent: 0, bar: "bg-[#C62828]", textColor: "text-[#C62828]" },
            { label: "Paid", value: 4, percent: 28.08, bar: "bg-[#0AA90F]", textColor: "text-[#0AA90F]" },
        ],
    },
    {
        id: 2,
        title: "Estimate Overview",
        icon: note,
        color: "text-[#42A5F5]",
        stats: [
            { label: "Draft", value: 2, percent: 4.32, bar: "bg-[#7DB4EB]", textColor: "text-[#7DB4EB]" },
            { label: "Not Sent", value: 13, percent: 28.08, bar: "bg-[#FFA761]", textColor: "text-[#FFA761]" },
            { label: "sent", value: 3, percent: 19.44, bar: "bg-[#7DB4EB]", textColor: "text-[#7DB4EB]" },
            { label: "Expired", value: 0, percent: 0, bar: "bg-[#8E44AD]", textColor: "text-[#8E44AD]" },
            { label: "Declined", value: 11, percent: 28.08, bar: "bg-[#FF0000]", textColor: "text-[#FF0000]" },
            { label: "Accepted", value: 0, percent: 0, bar: "bg-[#0AA90F]", textColor: "text-[#0AA90F]" },
        ]
    },
    {
        id: 3,
        title: "Proposal Overview",
        icon: clipboardTick,
        color: "text-[#8E24AA]",
        stats: [
            { label: "Draft", value: 2, percent: 4.32, bar: "bg-[#7DB4EB]", textColor: "text-[#7DB4EB]" },
            { label: "sent", value: 3, percent: 19.44, bar: "bg-[#4A90E2]", textColor: "text-[#4A90E2]" },
            { label: "open", value: 1, percent: 28.08, bar: "bg-[#4CAF50]", textColor: "text-[#4CAF50]" },
            { label: "Revised", value: 2, percent: 0, bar: "bg-[#FFEB3B]", textColor: "text-[#FFEB3B]" },
            { label: "Declined", value: 11, percent: 28.08, bar: "bg-[#FF0000]", textColor: "text-[#FF0000]" },
            { label: "Accepted", value: 0, percent: 0, bar: "bg-[#0AA90F]", textColor: "text-[#0AA90F]" },
        ]
    },
];

const summaryData = [
    { title: "Outstanding Invoices", amount: "$102,351.20", color: "text-[#FFB200]" },
    { title: "Past Due Invoices", amount: "$0.00", color: "text-[#E53935]" },
    { title: "Paid Invoices", amount: "$219,444.40", color: "text-[#4CAF50]" },
];

export default function OverviewComponent() {
    return (
        <div className="w-full py-4">
            <Card className="bg-white p-4 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    {mockData.map((group) => (
                        <div key={group.id}>
                            <CardContent className="p-2 space-y-6">
                                {/* Header */}
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center`}>
                                        <Image
                                            src={group.icon}
                                            alt={group.title}
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                        />
                                    </div>
                                    <h2 className={`font-medium ${group.color}`}>{group.title}</h2>
                                </div>

                                {/* Stats */}
                                <div className="space-y-4">
                                    {group.stats.map((stat, idx) => (
                                        <div key={idx} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className={`text-sm font-medium ${stat.textColor}`}>
                                                    {stat.value} {stat.label}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    {stat.percent.toFixed(2)}%
                                                </span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${stat.bar} rounded-full transition-all duration-300`}
                                                    style={{ width: `${stat.percent}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </div>
                    ))}
                </div>

                {/* Summary boxes - only for Invoice Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 px-2 border-t border-[#C8CBD9]">
                    {summaryData.map((summary, index) => (
                        <div key={index} className={`p-4 rounded-lg border border-[#C8CBD9]`}>
                            <p className={`text-xs font-medium ${summary.color} mb-2`}>{summary.title}</p>
                            <h3 className={`font-semibold text-lg text-[#5A5A5A]`}>{summary.amount}</h3>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}