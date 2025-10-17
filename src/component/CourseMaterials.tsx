"use client";
import React from 'react'
import { Timer, BookOpen, Users, Globe } from "lucide-react";

export default function CourseMaterials() {
    return (
        <div className='p-4'>
            <h2 className="text-lg font-semibold mb-4">Course Materials</h2>
            <div className='grid lg:grid-cols-2 sm:sm:grid-cols-1 gap-4'>
                <MaterialTable duration="5 weeks" lessons={25} enrolled={1200} language="English" />
                <MaterialTable duration="5 weeks" lessons={25} enrolled={1200} language="English" />
            </div>
        </div>
    )
}

function MaterialTable({ duration, lessons, enrolled, language }: { duration: string; lessons: number; enrolled: number; language: string }) {

    const items = [
        { icon: Timer, label: "Duration", value: duration },
        { icon: BookOpen, label: "Lessons", value: `${lessons}` },
        { icon: Users, label: "Enrolled", value: `${enrolled}` },
        { icon: Globe, label: "Language", value: language },
    ];

    return (
        <div className="w-full max-w-md bg-white rounded-xl overflow-hidden divide-y divide-gray-100">
            {items.map(({ icon: Icon, label, value }) => (
                <div
                    key={label}
                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition "
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
                            <Icon size={18} className="text-gray-700" />
                        </div>
                        <span className="font-medium text-gray-800">{label}</span>
                    </div>
                    <span className="text-gray-600">{value}</span>
                </div>
            ))}
        </div>
    );
}
