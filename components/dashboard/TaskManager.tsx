"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import tasksSVG from "@/icons/tasks.svg";
import projectsSVG from "@/icons/projects.svg";
import announcementsSVG from "@/icons/announcements.svg";
import moneySVG from "@/icons/money.svg";
import microphoneSVG from "@/icons/microphone.svg";
import { Card } from '../ui/card';

// Define types
type Status = 'Not Started' | 'Complete' | 'Awaiting Feedback' | 'Testing';
type SecondaryStatus = 'Follow Up' | 'Bug' | 'Review' | 'Todo';
type Priority = 'Urgent' | 'Low' | 'Medium' | 'High';
type TabType = 'tasks' | 'projects' | 'reminders' | 'tickets' | 'announcements';

interface Task {
    id: number;
    name: string;
    issue: string;
    status: Status;
    secondaryStatus: SecondaryStatus[];
    date: string;
    priority: Priority;
    timerRunning?: boolean;
    timerSeconds?: number;
}

const TaskManager = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState<TabType>('tasks');
    const [showAddModal, setShowAddModal] = useState(false);
    const [showAllItems, setShowAllItems] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [projects, setProjects] = useState<Task[]>([]);
    const [reminders, setReminders] = useState<Task[]>([]);
    const [tickets, setTickets] = useState<Task[]>([]);
    const [announcements, setAnnouncements] = useState<Task[]>([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskIssue, setNewTaskIssue] = useState('');
    const [timerIntervals, setTimerIntervals] = useState<Record<string, number>>({});
    const itemsPerPage = showAllItems ? 1000 : 5;

    // Status and priority color mappings
    const statusColors: Record<Status, string> = {
        'Not Started': 'bg-yellow-100 text-yellow-700 border-yellow-200',
        'Complete': 'bg-green-100 text-green-700 border-green-200',
        'Awaiting Feedback': 'bg-purple-100 text-purple-700 border-purple-200',
        'Testing': 'bg-blue-100 text-blue-700 border-blue-200'
    };

    const priorityColors: Record<Priority, string> = {
        'Urgent': 'text-red-600',
        'Low': 'text-gray-600',
        'Medium': 'text-blue-600',
        'High': 'text-orange-600'
    };

    const secondaryStatusColors: Record<SecondaryStatus, string> = {
        'Follow Up': 'bg-yellow-100 text-yellow-700',
        'Bug': 'bg-blue-100 text-blue-700',
        'Review': 'bg-green-100 text-green-700',
        'Todo': 'bg-purple-100 text-purple-700'
    };

    // Generate fake data with static values
    const generateInitialData = (prefix: string, count: number = 30): Task[] => {
        const taskData = [
            { status: 'Not Started' as Status, secondary: ['Follow Up', 'Todo'] as SecondaryStatus[], priority: 'Urgent' as Priority },
            { status: 'Complete' as Status, secondary: ['Follow Up', 'Bug'] as SecondaryStatus[], priority: 'Low' as Priority },
            { status: 'Awaiting Feedback' as Status, secondary: ['Bug', 'Review'] as SecondaryStatus[], priority: 'Medium' as Priority },
            { status: 'Testing' as Status, secondary: ['Bug'] as SecondaryStatus[], priority: 'High' as Priority },
            { status: 'Complete' as Status, secondary: ['Follow Up', 'Bug'] as SecondaryStatus[], priority: 'Medium' as Priority },
            { status: 'Not Started' as Status, secondary: ['Review', 'Todo'] as SecondaryStatus[], priority: 'High' as Priority },
            { status: 'Testing' as Status, secondary: ['Bug', 'Follow Up'] as SecondaryStatus[], priority: 'Low' as Priority },
            { status: 'Awaiting Feedback' as Status, secondary: ['Todo', 'Review'] as SecondaryStatus[], priority: 'Urgent' as Priority },
            { status: 'Complete' as Status, secondary: ['Bug'] as SecondaryStatus[], priority: 'Medium' as Priority },
            { status: 'Not Started' as Status, secondary: ['Follow Up'] as SecondaryStatus[], priority: 'High' as Priority },
            { status: 'Testing' as Status, secondary: ['Review', 'Bug'] as SecondaryStatus[], priority: 'Low' as Priority },
            { status: 'Complete' as Status, secondary: ['Todo'] as SecondaryStatus[], priority: 'Medium' as Priority },
            { status: 'Awaiting Feedback' as Status, secondary: ['Follow Up', 'Review'] as SecondaryStatus[], priority: 'Urgent' as Priority },
            { status: 'Not Started' as Status, secondary: ['Bug', 'Todo'] as SecondaryStatus[], priority: 'High' as Priority },
            { status: 'Testing' as Status, secondary: ['Review'] as SecondaryStatus[], priority: 'Low' as Priority },
            { status: 'Complete' as Status, secondary: ['Follow Up', 'Bug'] as SecondaryStatus[], priority: 'Medium' as Priority },
            { status: 'Awaiting Feedback' as Status, secondary: ['Todo', 'Review'] as SecondaryStatus[], priority: 'Urgent' as Priority },
            { status: 'Not Started' as Status, secondary: ['Bug'] as SecondaryStatus[], priority: 'High' as Priority },
            { status: 'Testing' as Status, secondary: ['Follow Up', 'Review'] as SecondaryStatus[], priority: 'Medium' as Priority },
            { status: 'Complete' as Status, secondary: ['Bug', 'Todo'] as SecondaryStatus[], priority: 'Low' as Priority },
            { status: 'Not Started' as Status, secondary: ['Review'] as SecondaryStatus[], priority: 'Urgent' as Priority },
            { status: 'Awaiting Feedback' as Status, secondary: ['Follow Up', 'Bug'] as SecondaryStatus[], priority: 'Medium' as Priority },
            { status: 'Testing' as Status, secondary: ['Todo'] as SecondaryStatus[], priority: 'High' as Priority },
            { status: 'Complete' as Status, secondary: ['Review', 'Follow Up'] as SecondaryStatus[], priority: 'Low' as Priority },
            { status: 'Not Started' as Status, secondary: ['Bug', 'Todo'] as SecondaryStatus[], priority: 'Medium' as Priority },
            { status: 'Awaiting Feedback' as Status, secondary: ['Follow Up'] as SecondaryStatus[], priority: 'High' as Priority },
            { status: 'Testing' as Status, secondary: ['Review', 'Bug'] as SecondaryStatus[], priority: 'Urgent' as Priority },
            { status: 'Complete' as Status, secondary: ['Todo', 'Follow Up'] as SecondaryStatus[], priority: 'Low' as Priority },
            { status: 'Not Started' as Status, secondary: ['Bug', 'Review'] as SecondaryStatus[], priority: 'Medium' as Priority },
            { status: 'Awaiting Feedback' as Status, secondary: ['Follow Up', 'Todo'] as SecondaryStatus[], priority: 'High' as Priority },
        ];

        return taskData.slice(0, count).map((data, i) => ({
            id: i + 1,
            name: `${prefix} item`,
            issue: `#${i + 1} - issue description`,
            status: data.status,
            secondaryStatus: data.secondary,
            date: '03-06-2025',
            priority: data.priority,
            timerRunning: false,
            timerSeconds: 0
        }));
    };

    // Initialize data on mount
    useEffect(() => {
        if (tasks.length === 0) setTasks(generateInitialData('Task', 30));
        if (projects.length === 0) setProjects(generateInitialData('Project', 30));
        if (reminders.length === 0) setReminders(generateInitialData('Reminder', 30));
        if (tickets.length === 0) setTickets(generateInitialData('Ticket', 30));
        if (announcements.length === 0) setAnnouncements(generateInitialData('Announcement', 30));
    }, []);

    // Clean up timers on unmount
    useEffect(() => {
        return () => {
            Object.values(timerIntervals).forEach(interval => clearInterval(interval));
        };
    }, [timerIntervals]);

    // Get current data based on active tab
    const getCurrentData = () => {
        switch (activeTab) {
            case 'projects': return projects;
            case 'reminders': return reminders;
            case 'tickets': return tickets;
            case 'announcements': return announcements;
            default: return tasks;
        }
    };

    const setCurrentData = (data: Task[]) => {
        switch (activeTab) {
            case 'projects': setProjects(data); break;
            case 'reminders': setReminders(data); break;
            case 'tickets': setTickets(data); break;
            case 'announcements': setAnnouncements(data); break;
            default: setTasks(data); break;
        }
    };

    const currentData = getCurrentData();

    // Filter tasks based on search
    const filteredTasks = useMemo(() => {
        if (!searchTerm) return currentData;
        return currentData.filter(task =>
            task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.issue.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, currentData]);

    // Pagination
    const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTasks = filteredTasks.slice(startIndex, endIndex);

    const getSecondaryStatusColor = (status: SecondaryStatus): string => {
        return secondaryStatusColors[status];
    };

    const handleAddTask = () => {
        if (newTaskName.trim()) {
            const newTask: Task = {
                id: currentData.length + 1,
                name: newTaskName,
                issue: newTaskIssue || 'No issue specified',
                status: 'Not Started',
                secondaryStatus: ['Todo'],
                date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).split('/').join('-'),
                priority: 'Medium',
                timerRunning: false,
                timerSeconds: 0
            };
            setCurrentData([...currentData, newTask]);
            setNewTaskName('');
            setNewTaskIssue('');
            setShowAddModal(false);
        }
    };

    const handleDeleteTask = (id: number) => {
        const intervalKey = `${activeTab}-${id}`;
        if (timerIntervals[intervalKey]) {
            clearInterval(timerIntervals[intervalKey]);
            const newIntervals = { ...timerIntervals };
            delete newIntervals[intervalKey];
            setTimerIntervals(newIntervals);
        }
        setCurrentData(currentData.filter(task => task.id !== id));
    };

    const handleStatusChange = (taskId: number, newStatus: Status) => {
        setCurrentData(currentData.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
        ));
    };

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleToggleTimer = (taskId: number) => {
        const intervalKey = `${activeTab}-${taskId}`;
        const task = currentData.find(t => t.id === taskId);

        if (!task) return;

        if (task.timerRunning) {
            // Stop timer
            if (timerIntervals[intervalKey]) {
                clearInterval(timerIntervals[intervalKey]);
                const newIntervals = { ...timerIntervals };
                delete newIntervals[intervalKey];
                setTimerIntervals(newIntervals);
            }
            setCurrentData(currentData.map(t =>
                t.id === taskId ? { ...t, timerRunning: false } : t
            ));
        } else {
            // Start timer
            const interval = window.setInterval(() => {
                switch (activeTab) {
                    case 'projects':
                        setProjects((prev: Task[]) => prev.map(t =>
                            t.id === taskId ? { ...t, timerSeconds: (t.timerSeconds || 0) + 1 } : t
                        ));
                        break;
                    case 'reminders':
                        setReminders((prev: Task[]) => prev.map(t =>
                            t.id === taskId ? { ...t, timerSeconds: (t.timerSeconds || 0) + 1 } : t
                        ));
                        break;
                    case 'tickets':
                        setTickets((prev: Task[]) => prev.map(t =>
                            t.id === taskId ? { ...t, timerSeconds: (t.timerSeconds || 0) + 1 } : t
                        ));
                        break;
                    case 'announcements':
                        setAnnouncements((prev: Task[]) => prev.map(t =>
                            t.id === taskId ? { ...t, timerSeconds: (t.timerSeconds || 0) + 1 } : t
                        ));
                        break;
                    default:
                        setTasks((prev: Task[]) => prev.map(t =>
                            t.id === taskId ? { ...t, timerSeconds: (t.timerSeconds || 0) + 1 } : t
                        ));
                }
            }, 1000);

            setTimerIntervals((prev: Record<string, number>) => ({ ...prev, [intervalKey]: interval }));
            setCurrentData(currentData.map(t =>
                t.id === taskId ? { ...t, timerRunning: true } : t
            ));
        }
    };

    const handleResetTimer = (taskId: number) => {
        const intervalKey = `${activeTab}-${taskId}`;
        if (timerIntervals[intervalKey]) {
            clearInterval(timerIntervals[intervalKey]);
            const newIntervals = { ...timerIntervals };
            delete newIntervals[intervalKey];
            setTimerIntervals(newIntervals);
        }
        setCurrentData(currentData.map(t =>
            t.id === taskId ? { ...t, timerRunning: false, timerSeconds: 0 } : t
        ));
    };

    const handleExport = () => {
        const csvContent = [
            ['ID', 'Name', 'Issue', 'Status', 'Secondary Status', 'Date', 'Priority'],
            ...filteredTasks.map(task => [
                task.id,
                task.name,
                task.issue,
                task.status,
                task.secondaryStatus.join('; '),
                task.date,
                task.priority
            ])
        ].map(row => row.join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${activeTab}-export-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    const handleTabChange = (tab: TabType) => {
        setActiveTab(tab);
        setSearchTerm('');
        setCurrentPage(1);
    };

    return (
        <div className="pb-4">
            <Card className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
                {/* Header Navigation */}
                <div className="flex flex-wrap justify-between gap-2 md:gap-6 p-4 border-b">
                    <button
                        onClick={() => handleTabChange('tasks')}
                        className={`flex items-center gap-2 font-medium ${activeTab === 'tasks' ? 'text-gray-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <div className={`w-6 h-6 rounded-xl flex items-center justify-center`}>
                            <Image
                                src={tasksSVG}
                                alt={"tasks"}
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </div>
                        My Tasks
                    </button>
                    <button
                        onClick={() => handleTabChange('projects')}
                        className={`flex items-center gap-2 font-medium ${activeTab === 'projects' ? 'text-gray-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <div className={`w-6 h-6 rounded-xl flex items-center justify-center`}>
                            <Image
                                src={projectsSVG}
                                alt={"Projects"}
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </div> My Projects
                    </button>
                    <button
                        onClick={() => handleTabChange('reminders')}
                        className={`flex items-center gap-2 font-medium ${activeTab === 'reminders' ? 'text-gray-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <div className={`w-6 h-6 rounded-xl flex items-center justify-center`}>
                            <Image
                                src={announcementsSVG}
                                alt={"Announcements"}
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </div> My Reminders
                    </button>
                    <button
                        onClick={() => handleTabChange('tickets')}
                        className={`flex items-center gap-2 font-medium ${activeTab === 'tickets' ? 'text-gray-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <div className={`w-6 h-6 rounded-xl flex items-center justify-center`}>
                            <Image
                                src={moneySVG}
                                alt={"Money"}
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </div> Tickets
                    </button>
                    <button
                        onClick={() => handleTabChange('announcements')}
                        className={`flex items-center gap-2 font-medium ${activeTab === 'announcements' ? 'text-gray-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <div className={`w-6 h-6 rounded-xl flex items-center justify-center`}>
                            <Image
                                src={microphoneSVG}
                                alt={"Microphone"}
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </div> Announcements
                    </button>
                </div>

                {/* Search and Actions */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder={`Search ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto text-xs md:text-base">
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="flex-1 md:flex-none px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                        >
                            Add New {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
                        </button>
                        <button
                            onClick={() => {
                                setShowAllItems(!showAllItems);
                                setCurrentPage(1);
                            }}
                            className="flex-1 md:flex-none px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                        >
                            {showAllItems ? 'Show Pages' : 'View All'}
                        </button>
                        <button
                            onClick={handleExport}
                            className="flex-1 md:flex-none px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                        >
                            Export
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-medium">#</th>
                                <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                                <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                                <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                                <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                                <th className="px-4 py-3 text-left text-sm font-medium">Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentTasks.map((task) => (
                                <tr key={task.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-4 text-sm text-gray-700">{task.id}</td>
                                    <td className="px-4 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-900">{task.name}</span>
                                            <span className="text-xs text-gray-500">{task.issue}</span>
                                            {task.timerRunning || (task.timerSeconds && task.timerSeconds > 0) ? (
                                                <div className="text-xs font-mono text-blue-600 mt-1">
                                                    ⏱️ {formatTime(task.timerSeconds || 0)}
                                                </div>
                                            ) : null}
                                            <div className="flex flex-col md:flex-row items-start gap-2 mt-2">
                                                <button
                                                    onClick={() => handleToggleTimer(task.id)}
                                                    className={`text-xs ${task.timerRunning ? 'text-red-600' : 'text-blue-600'} hover:underline`}
                                                >
                                                    {task.timerRunning ? 'Stop Timer' : 'Start Timer'}
                                                </button>
                                                {(task.timerSeconds && task.timerSeconds > 0) ? (
                                                    <button
                                                        onClick={() => handleResetTimer(task.id)}
                                                        className="text-xs text-orange-600 hover:underline"
                                                    >
                                                        Reset
                                                    </button>
                                                ) : null}
                                                <button className="text-xs text-blue-600 hover:underline">Edit</button>
                                                <button
                                                    onClick={() => handleDeleteTask(task.id)}
                                                    className="text-xs text-red-600 hover:underline"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="relative inline-flex items-center">
                                            <select
                                                value={task.status}
                                                onChange={(e) => handleStatusChange(task.id, e.target.value as Status)}
                                                className={`appearance-none pl-3 pr-8 py-1 rounded-full text-xs font-medium border cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${statusColors[task.status]}`}
                                            >
                                                {(Object.keys(statusColors) as Status[]).map((status) => (
                                                    <option key={status} value={status}>
                                                        {status}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-2 w-3 h-3 pointer-events-none" />
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {task.secondaryStatus.map((status, i) => (
                                                <span key={i} className={`px-2 py-1 rounded text-xs font-medium ${getSecondaryStatusColor(status)}`}>
                                                    {status}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-700">{task.date}</td>
                                    <td className="px-4 py-4">
                                        <span className={`text-sm font-medium ${priorityColors[task.priority]}`}>
                                            {task.priority}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {!showAllItems && (
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border-t">
                        <div className="text-sm text-gray-600">
                            Showing {startIndex + 1} to {Math.min(endIndex, filteredTasks.length)} of {filteredTasks.length} entries
                        </div>
                        <div className="flex gap-2 items-center">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Previous
                            </button>
                            <span className="px-4 py-2 border rounded-lg text-sm bg-gray-700 text-white">
                                {currentPage}
                            </span>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </Card>

            {/* Add Task Modal */}
            {showAddModal && (
                <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Add New {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
                            </h2>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)} Name
                                </label>
                                <input
                                    type="text"
                                    value={newTaskName}
                                    onChange={(e) => setNewTaskName(e.target.value)}
                                    placeholder={`Enter ${activeTab.slice(0, -1)} name`}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Issue Description
                                </label>
                                <input
                                    type="text"
                                    value={newTaskIssue}
                                    onChange={(e) => setNewTaskIssue(e.target.value)}
                                    placeholder="Enter issue description"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex gap-2 pt-4">
                                <button
                                    onClick={handleAddTask}
                                    className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                                >
                                    Add {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
                                </button>
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskManager;