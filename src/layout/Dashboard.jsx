import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="w-full min-h-screen">
            <Header />
            <div className='flex'>
                <Sidebar />
                <div className='flex-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;