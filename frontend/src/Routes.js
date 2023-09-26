import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Create';
import App from './App';
const RoutedApp =() => {
    return (
        <Router>
            <Routes>
            <Route path="/" exact="true" element={<App />} />
            <Route path="/Create" exact="true" element={<Create />} />

            </Routes>
        </Router>
    ) 
}

export default RoutedApp