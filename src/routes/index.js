import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { MainApp } from '../MainApp';
import NotFound from '../pages/Error404/NotFound';
import PrivacyPolicy from '../pages/QuickTeams/Privacy Policy/PrivacyPolicy';

const index = () => {
    return (
        <Routes>
            {/*  Dashboard */}
            <Route path='/' element={<MainApp />} />
            <Route path='/quick-teams/privacy-policy' element={<PrivacyPolicy />} />
            {/* <Route path='/individual-project/:projectID' element={<ProjectPage />} /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default index