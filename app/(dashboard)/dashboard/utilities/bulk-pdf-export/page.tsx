"use client";

import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

interface SelectOption {
    value: string;
    label: string;
}

const selectTypes: SelectOption[] = [
    { value: 'invoices', label: 'Invoices' },
    { value: 'estimates', label: 'Estimates' },
    { value: 'payments', label: 'Payments' },
    { value: 'credit-notes', label: 'Credit Notes' },
    { value: 'proposal', label: 'Proposal' },
    { value: 'expenses', label: 'Expenses' },
];

export default function BulkPDFExport() {
    const [selectType, setSelectType] = useState<string>('');
    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>('');
    const [includeTag, setIncludeTag] = useState<string>('');

    const [isSelectTypeOpen, setIsSelectTypeOpen] = useState<boolean>(false);

    const handleExport = () => {
        const exportData = {
            selectType,
            fromDate,
            toDate,
            includeTag,
        };
        console.log('Exporting with data:', exportData);
        alert('Export initiated! Check console for details.');
    };

    const getSelectedLabel = (value: string, options: SelectOption[]): string => {
        const option = options.find(opt => opt.value === value);
        return option ? option.label : 'Select...';
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-2xl font-semibold text-gray-800 mb-8">Bulk PDF Export</h1>

                {/* Select Type */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Type
                    </label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => {
                                setIsSelectTypeOpen(!isSelectTypeOpen);
                            }}
                            className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2.5 text-left text-gray-700 flex items-center justify-between hover:bg-gray-100 transition-colors"
                        >
                            <span className={selectType ? 'text-gray-900' : 'text-gray-500'}>
                                {selectType ? getSelectedLabel(selectType, selectTypes) : 'Sale'}
                            </span>
                            <ChevronDown size={20} className="text-gray-500" />
                        </button>
                        {isSelectTypeOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                                {selectTypes.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => {
                                            setSelectType(option.value);
                                            setIsSelectTypeOpen(false);
                                        }}
                                        className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-700 transition-colors border-b border-gray-100 last:border-b-0"
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Date Range */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            From Date
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                                placeholder="DD/MM/YYYY"
                                className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2.5 text-gray-700 pr-10 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Calendar
                                size={18}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            To Date
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                                placeholder="DD/MM/YYYY"
                                className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2.5 text-gray-700 pr-10 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Calendar
                                size={18}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Include Tag */}
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Include Tag
                    </label>
                    <input
                        type="text"
                        value={includeTag}
                        onChange={(e) => setIncludeTag(e.target.value)}
                        placeholder="DD/MM/YYYY"
                        className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2.5 text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Export Button */}
                <button
                    type="button"
                    onClick={handleExport}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-2.5 rounded transition-colors"
                >
                    Export
                </button>
            </div>
        </div>
    );
}