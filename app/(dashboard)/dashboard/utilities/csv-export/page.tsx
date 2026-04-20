"use client";

import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

interface SelectOption {
    value: string;
    label: string;
}

const exportTypes: SelectOption[] = [
    { value: 'invoices', label: 'Invoices' },
    { value: 'contacts', label: 'Contacts' },
    { value: 'leads', label: 'Leads' },
    { value: 'expenses', label: 'Expenses' },
    { value: 'payments', label: 'Payments' },
];

const periods: SelectOption[] = [
    { value: 'all-time', label: 'All Time' },
    { value: 'this-month', label: 'This Month' },
    { value: 'last-month', label: 'Last Month' },
    { value: 'this-year', label: 'This Year' },
    { value: 'last-year', label: 'Last Year' },
    { value: 'last-3-months', label: 'Last 3 Months' },
    { value: 'last-6-months', label: 'Last 6 Months' },
    { value: 'last-12-months', label: 'Last 12 Months' },
];

export default function CSVExport() {
    const [exportType, setExportType] = useState<string>('');
    const [period, setPeriod] = useState<string>('');

    const [isExportTypeOpen, setIsExportTypeOpen] = useState<boolean>(false);
    const [isPeriodOpen, setIsPeriodOpen] = useState<boolean>(false);

    const handleExport = () => {
        const exportData = {
            exportType,
            period,
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
                <h1 className="text-2xl font-semibold text-gray-800 mb-8">CSV Export</h1>

                {/* Export Type Dropdown */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Export Type
                    </label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => {
                                setIsExportTypeOpen(!isExportTypeOpen);
                                setIsPeriodOpen(false);
                            }}
                            className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2.5 text-left text-gray-500 flex items-center justify-between hover:bg-gray-100 transition-colors"
                        >
                            <span className={exportType ? 'text-gray-900' : 'text-gray-500'}>
                                {exportType ? getSelectedLabel(exportType, exportTypes) : 'Select export type...'}
                            </span>
                            <ChevronDown size={20} className="text-gray-500" />
                        </button>
                        {isExportTypeOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                                {exportTypes.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => {
                                            setExportType(option.value);
                                            setIsExportTypeOpen(false);
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

                {/* Period Dropdown */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Period
                    </label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => {
                                setIsPeriodOpen(!isPeriodOpen);
                                setIsExportTypeOpen(false);
                            }}
                            className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2.5 text-left text-gray-500 flex items-center justify-between hover:bg-gray-100 transition-colors"
                        >
                            <span className={period ? 'text-gray-900' : 'text-gray-500'}>
                                {period ? getSelectedLabel(period, periods) : 'Select period...'}
                            </span>
                            <ChevronDown size={20} className="text-gray-500" />
                        </button>
                        {isPeriodOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                                {periods.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => {
                                            setPeriod(option.value);
                                            setIsPeriodOpen(false);
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