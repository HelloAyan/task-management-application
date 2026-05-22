import React, { useState } from "react";

const Settings = () => {

    const [users, setUsers] = useState([
        { id: 1, name: "Ayan Ahmed", email: "ayan@gmail.com", role: "Admin" },
        { id: 2, name: "Rahim Uddin", email: "rahim@gmail.com", role: "User" },
        { id: 3, name: "Sadia Islam", email: "sadia@gmail.com", role: "Moderator" },
    ]);

    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "User",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addUser = (e) => {
        e.preventDefault();
        setUsers([...users, { id: Date.now(), ...form }]);
        setForm({ name: "", email: "", role: "User" });
    };

    const removeUser = (id) => {
        setUsers(users.filter(u => u.id !== id));
    };

    return (
        <div className="w-full min-h-screen bg-[#f4f6fb] p-6">

            {/* HEADER */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                    User Management
                </h1>
                <p className="text-gray-500 text-sm">
                    Add, manage and control system users
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT FORM CARD */}
                <div className="bg-white rounded-2xl shadow-sm p-6">

                    <h2 className="text-lg font-semibold text-gray-800 mb-5">
                        Add New User
                    </h2>

                    <form onSubmit={addUser} className="space-y-4">

                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 outline-none transition"
                            required
                        />

                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 outline-none transition"
                            required
                        />

                        <select
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 outline-none transition"
                        >
                            <option>User</option>
                            <option>Moderator</option>
                            <option>Admin</option>
                        </select>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition font-medium shadow-sm"
                        >
                            + Create User
                        </button>

                    </form>

                </div>

                {/* RIGHT USER LIST */}
                <div className="lg:col-span-2">

                    {/* LIST CONTAINER */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">

                        <h2 className="text-lg font-semibold text-gray-800 mb-5">
                            All Users ({users.length})
                        </h2>

                        {/* SEPARATED LIST */}
                        <div className="space-y-3">

                            {users.map(user => (

                                <div
                                    key={user.id}
                                    className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition"
                                >

                                    {/* LEFT INFO */}
                                    <div className="flex flex-col">
                                        <span className="text-gray-800 font-medium">
                                            {user.name}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            {user.email}
                                        </span>
                                    </div>

                                    {/* ROLE */}
                                    <span className={`text-xs px-3 py-1 rounded-full font-medium
                                        ${user.role === "Admin"
                                            ? "bg-red-100 text-red-600"
                                            : user.role === "Moderator"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-green-100 text-green-600"
                                        }`}
                                    >
                                        {user.role}
                                    </span>

                                    {/* ACTION BUTTON */}
                                    <button
                                        onClick={() => removeUser(user.id)}
                                        className="text-sm px-3 py-1 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition cursor-pointer"
                                    >
                                        Remove
                                    </button>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Settings;