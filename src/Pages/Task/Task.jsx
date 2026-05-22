import React from 'react'

const assignedTasks = [
    {
        id: 1,
        title: "Build Login Page",
        assignedBy: "Ayan Ahmed",
        priority: "High",
        deadline: "25 May 2026",
        status: "In Progress",
    },
    {
        id: 2,
        title: "Create User Dashboard",
        assignedBy: "Project Manager",
        priority: "Medium",
        deadline: "28 May 2026",
        status: "Pending",
    },
    {
        id: 3,
        title: "Fix Responsive Issues",
        assignedBy: "UI Team",
        priority: "Low",
        deadline: "30 May 2026",
        status: "Completed",
    },
]

const Task = () => {
    return (

        <div className='w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6'>

            {/* Top Header */}
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8'>

                <div>
                    <h1 className='text-3xl font-bold text-gray-800'>
                        Assigned Tasks
                    </h1>

                    <p className='text-gray-500 mt-1'>
                        Here are the tasks assigned to you
                    </p>
                </div>

                <button className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md transition'>
                    View Reports
                </button>

            </div>

            {/* Task List */}
            <div className='space-y-5'>

                {assignedTasks.map((task) => (

                    <div
                        key={task.id}
                        className='bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition'
                    >

                        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5'>

                            {/* Left */}
                            <div className='space-y-3'>

                                <h2 className='text-xl font-semibold text-gray-800'>
                                    {task.title}
                                </h2>

                                <div className='flex flex-wrap gap-4 text-sm text-gray-600'>

                                    <p>
                                        👤 Assigned By:
                                        <span className='font-medium ml-1 text-gray-800'>
                                            {task.assignedBy}
                                        </span>
                                    </p>

                                    <p>
                                        📅 Deadline:
                                        <span className='font-medium ml-1 text-gray-800'>
                                            {task.deadline}
                                        </span>
                                    </p>

                                    <p>
                                        ⚡ Priority:
                                        <span className='font-medium ml-1 text-gray-800'>
                                            {task.priority}
                                        </span>
                                    </p>

                                </div>

                            </div>

                            {/* Right */}
                            <div className='flex flex-col items-start lg:items-end gap-4'>

                                <span
                                    className={`px-4 py-1 rounded-full text-sm font-medium
                                    ${task.status === "Completed"
                                            ? "bg-green-100 text-green-600"
                                            : task.status === "In Progress"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {task.status}
                                </span>

                                <div className='flex gap-3'>

                                    <button className='bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-lg transition'>
                                        View
                                    </button>

                                    <button className='bg-green-100 hover:bg-green-200 text-green-600 px-4 py-2 rounded-lg transition'>
                                        Update
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )
}

export default Task