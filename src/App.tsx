import React from 'react'
import './App.scss'
import { Navbar } from './components/Navbar/Navbar'
import { UserListPage } from './pages/UserListPage/UserListPage'
import { Outlet, useLocation } from 'react-router-dom'

export function App() {
    const location = useLocation()
    return (
        <div className="App">
            <div className="wrapper">
                <div className="header">
                    <Navbar />
                </div>
                {location.pathname === '/' ? <UserListPage /> : <Outlet />}
            </div>
        </div>
    )
}
