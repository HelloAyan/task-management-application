import React, { useMemo, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Overview = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const pickerRef = useRef(null);

    const tasks = [
        {
            id: 1,
            title: "Build Login Page",
            assignedBy: "Admin",
            assignedDate: "2026-05-20",
            status: "Ongoing",
        },
        {
            id: 2,
            title: "Fix Dashboard Bug",
            assignedBy: "Team Lead",
            assignedDate: "2026-05-18",
            status: "Completed",
        },
    ];

    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            const d = new Date(task.assignedDate);
            return (
                d.getMonth() === selectedDate.getMonth() &&
                d.getFullYear() === selectedDate.getFullYear()
            );
        });
    }, [selectedDate]);

    const stats = {
        total: filteredTasks.length,
        ongoing: filteredTasks.filter(t => t.status === "Ongoing").length,
        completed: filteredTasks.filter(t => t.status === "Completed").length,
        pending: filteredTasks.filter(t => t.status === "Pending").length,
    };

    return (
        <div className="w-full min-h-screen bg-gray-100 p-6">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">

                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
                    <p className="text-gray-500 text-sm">Monthly task analytics</p>
                </div>

                {/* ✅ FIXED PROFESSIONAL DATE PICKER */}
                <div className="relative">

                    <DatePicker
                        ref={pickerRef}
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        showMonthYearPicker
                        dateFormat="MMMM yyyy"
                        popperPlacement="bottom-end"
                        popperModifiers={[
                            {
                                name: "preventOverflow",
                                options: { boundary: "viewport" },
                            },
                        ]}
                        customInput={
                            <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition text-sm text-gray-700">
                                📅
                                <span>
                                    {selectedDate.toLocaleString("default", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                            </button>
                        }
                    />

                </div>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                <div className="bg-white p-5 rounded-xl shadow">
                    <h3 className="text-gray-500">Total Tasks</h3>
                    <p className="text-2xl font-bold">{stats.total}</p>
                </div>

                <div className="bg-yellow-100 p-5 rounded-xl shadow">
                    <h3 className="text-yellow-700">Ongoing</h3>
                    <p className="text-2xl font-bold text-yellow-800">{stats.ongoing}</p>
                </div>

                <div className="bg-green-100 p-5 rounded-xl shadow">
                    <h3 className="text-green-700">Completed</h3>
                    <p className="text-2xl font-bold text-green-800">{stats.completed}</p>
                </div>

                <div className="bg-red-100 p-5 rounded-xl shadow">
                    <h3 className="text-red-700">Pending</h3>
                    <p className="text-2xl font-bold text-red-800">{stats.pending}</p>
                </div>

            </div>

        </div>
    );
};

export default Overview;