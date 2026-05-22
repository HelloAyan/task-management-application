import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../route/PrivateRoute";
import TodoList from "../components/TodoList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import NotFound from "../Pages/NotFound";
import Dashboard from "../layout/Dashboard";
import Home from "../Pages/Home";
import Users from "../Pages/Users/Users";
import Task from "../Pages/Task/Task";
import Overview from "../Pages/Overview/Overview";
import Settings from "../Pages/Setting/Setting";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            {/* Protected Routes */}
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            >
                {/* <Route index element={<TodoList />} /> */}
                <Route index element={<Overview />} />
                <Route path="users" element={<Users />} />
                <Route path="home" element={<Home />} />
                <Route path="/tasks" element={<Task />} />
                <Route path="/add-task" element={<TodoList />} />
                <Route path="/setting" element={<Settings />} />
            </Route>

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}