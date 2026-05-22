import { Link } from "react-router-dom";
import { MdDashboard, MdSettings } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md h-screen p-5">

            <h2 className="text-lg font-semibold mb-6">
                Dashboard
            </h2>

            <nav className="flex flex-col gap-4 text-gray-700">

                {/* Overview */}
                <Link
                    to="/"
                    className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                    <MdDashboard className="text-xl" />
                    <span>Overview</span>
                </Link>

                {/* Assigned Tasks */}
                <Link
                    to="/tasks"
                    className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                    <FaTasks className="text-lg" />
                    <span>Assigned Tasks</span>
                </Link>

                {/* Completed */}
                <Link
                    to="/completed"
                    className="flex items-center gap-3 hover:text-green-600 transition"
                >
                    <BsCheckCircleFill className="text-lg text-green-500" />
                    <span>Completed</span>
                </Link>

                {/* Settings */}
                <Link
                    to="/settings"
                    className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                    <MdSettings className="text-xl" />
                    <span>Settings</span>
                </Link>

            </nav>

        </aside>
    );
}