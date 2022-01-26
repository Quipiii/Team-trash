import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../Webpages/MainPage/MainPage';
import RecycleUS from '../../Webpages/RecycleUS/RecycleUS';
import WhyRecycle from '../../Webpages/WhyRecycle/WhyRecycle';
import DonatePage from '../../Webpages/DonatePage/DonatePage';
import SourcesPage from '../../Webpages/SourcesPage/SourcesPage';


const NavRoutes = () => {
    return (
        <Routes>
            <Route path='/' exact element={<MainPage />} />
            <Route path='/RecycleUS' element={<RecycleUS />} />
            <Route path='/WhyRecycle' element={<WhyRecycle />} />
            <Route path='/DonatePage' element={<DonatePage />} />
            <Route path='/SourcesPage' element={<SourcesPage />} />
        </Routes>
    )
}

export default NavRoutes;
