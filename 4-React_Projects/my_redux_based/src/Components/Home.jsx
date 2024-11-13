import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import Footer from './navigation/footer'
import Header from './navigation/Header'

export default function Home() {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
            < Footer />
        </div>
    )
}
