import { NavLink } from "react-router-dom";
import { MdDashboard, MdSettings } from "react-icons/md";
import { FaTasks, FaPlusCircle } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Sidebar() {
    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg transition ${isActive
            ? "bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600"
            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
        }`;

    return (
        <aside className="w-64 bg-white shadow-md h-screen p-5">

            <h2 className="text-lg font-semibold mb-6">
                Dashboard
            </h2>

            <nav className="flex flex-col gap-2">

                {/* Overview */}
                <NavLink to="/" className={linkClass}>
                    <MdDashboard className="text-xl" />
                    <span>Overview</span>
                </NavLink>

                {/* Add Task */}
                <NavLink to="/add-task" className={linkClass}>
                    <FaPlusCircle className="text-lg text-blue-500" />
                    <span>Add Task</span>
                </NavLink>

                {/* Assigned Tasks */}
                <NavLink to="/tasks" className={linkClass}>
                    <FaTasks className="text-lg" />
                    <span>Assigned Tasks</span>
                </NavLink>

                {/* Completed */}
                <NavLink to="/completed" className={linkClass}>
                    <BsCheckCircleFill className="text-lg text-green-500" />
                    <span>Completed</span>
                </NavLink>

                {/* Settings */}
                <NavLink to="/setting" className={linkClass}>
                    <MdSettings className="text-xl" />
                    <span>Settings</span>
                </NavLink>

            </nav>

        </aside>
    );
}