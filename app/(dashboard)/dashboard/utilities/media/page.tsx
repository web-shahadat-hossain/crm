"use client";

import React, { useState, useRef, ChangeEvent } from 'react';
import { Upload, FolderOpen, Image, Trash2, X, ZoomIn, ZoomOut, Download, ChevronLeft, ChevronRight, Eye, Pencil, Info } from 'lucide-react';

interface MediaFile {
    id: number;
    name: string;
    url: string;
    type: string;
    size: number;
    file: File;
}

type FolderType = 'media' | 'public';

export default function MediaComponent() {
    const [activeFolder, setActiveFolder] = useState<FolderType>('media');
    const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
    const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const filesArray = Array.from(files);
        const newFiles: MediaFile[] = filesArray.map(file => ({
            id: Date.now() + Math.random(),
            name: file.name,
            url: URL.createObjectURL(file),
            type: file.type,
            size: file.size,
            file: file
        }));
        setMediaFiles(prev => [...prev, ...newFiles]);
    };

    const handleDelete = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setMediaFiles(prev => prev.filter(file => file.id !== id));
        if (selectedFile?.id === id) {
            setSelectedFile(null);
        }
    };

    const handleDownload = (file: MediaFile, e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = file.url;
        link.download = file.name;
        link.click();
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / 1048576).toFixed(1) + ' MB';
    };

    return (
        <div className="">
            {/* Toolbar */}
            <div className="bg-[#4A90E214] border-b border-gray-200 px-6 py-3 flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View">
                    <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View">
                    <ChevronRight size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Folder">
                    <FolderOpen size={20} className="text-gray-600" />
                </button>
                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Upload files"
                >
                    <Upload size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View">
                    <Pencil size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View">
                    <Eye size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View">
                    <Info size={20} className="text-gray-600" />
                </button>

                <div className="ml-2 w-px h-6 bg-gray-300" />
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Zoom in">
                    <ZoomIn size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Zoom out">
                    <ZoomOut size={20} className="text-gray-600" />
                </button>
            </div>

            <div className='flex h-screen bg-[#4A90E214]'>
                {/* Sidebar */}
                <div className="md:w-64 bg-[#4A90E2] text-white p-4">
                    <div className="space-y-2">
                        <button
                            onClick={() => setActiveFolder('media')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeFolder === 'media'
                                ? 'bg-[#FFFFFF33]'
                                : 'hover:bg-[#FFFFFF33]'
                                }`}
                        >
                            <FolderOpen size={20} />
                            <span className="font-medium">Media</span>
                        </button>
                        <button
                            onClick={() => setActiveFolder('public')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeFolder === 'public'
                                ? 'bg-[#FFFFFF33]'
                                : 'hover:bg-[#FFFFFF33]'
                                }`}
                        >
                            <FolderOpen size={20} />
                            <span className="font-medium">Public</span>
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col">
                    {/* Files Grid */}
                    <div className="flex-1 overflow-auto p-8">
                        {mediaFiles.length === 0 ? (
                            <div className="h-full flex items-center justify-center">
                                <div className="text-center">
                                    <FolderOpen size={64} className="text-blue-300 mx-auto mb-4" />
                                    <p className="text-blue-400 text-xl font-medium">Folder Is Empty</p>
                                    <p className="text-gray-400 mt-2">Upload files to get started</p>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                                {mediaFiles.map((file) => (
                                    <div
                                        key={file.id}
                                        onClick={() => setSelectedFile(file)}
                                        className="group relative cursor-pointer"
                                    >
                                        <div className="bg-blue-500 rounded-xl aspect-square flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
                                            {file.type.startsWith('image/') ? (
                                                <img
                                                    src={file.url}
                                                    alt={file.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="text-white text-center p-4">
                                                    <Image size={32} className="mx-auto mb-2" />
                                                    <p className="text-xs font-bold uppercase">JPG</p>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            onClick={(e) => handleDelete(file.id, e)}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
                                            title="Delete"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                        <p className="mt-2 text-xs text-gray-600 text-center truncate px-1">
                                            {file.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* File Input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                />

                {/* Preview Modal */}
                {selectedFile && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8"
                        onClick={() => setSelectedFile(null)}
                    >
                        <div
                            className="bg-white rounded-2xl max-w-4xl max-h-full overflow-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <h3 className="font-semibold text-gray-800 truncate flex-1 mr-4">
                                    {selectedFile.name}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={(e) => handleDownload(selectedFile, e)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        title="Download"
                                    >
                                        <Download size={20} className="text-gray-600" />
                                    </button>
                                    <button
                                        onClick={() => setSelectedFile(null)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        title="Close"
                                    >
                                        <X size={20} className="text-gray-600" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                {selectedFile.type.startsWith('image/') ? (
                                    <img
                                        src={selectedFile.url}
                                        alt={selectedFile.name}
                                        className="max-w-full max-h-[70vh] mx-auto rounded-lg"
                                    />
                                ) : (
                                    <div className="text-center py-12">
                                        <Image size={64} className="mx-auto text-gray-400 mb-4" />
                                        <p className="text-gray-600">Preview not available</p>
                                    </div>
                                )}
                                <div className="mt-4 text-sm text-gray-500">
                                    <p>Size: {formatFileSize(selectedFile.size)}</p>
                                    <p>Type: {selectedFile.type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}