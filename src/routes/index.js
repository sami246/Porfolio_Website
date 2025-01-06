import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { MainApp } from '../MainApp';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import NotFound from '../pages/Error404/NotFound';

const index = () => {
    return (
        <Routes>
            {/*  Dashboard */}
            <Route path='/' element={<MainApp />} />
            {/* <Route path='/individual-project/:projectID' element={<ProjectPage />} /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default index