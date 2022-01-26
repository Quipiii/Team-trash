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
            <Route path='/Home' element={<MainPage />} />
            <Route path='/RecyclingUS' element={<RecycleUS />} />
            <Route path='/WhyRecycle' element={<WhyRecycle />} />
            <Route path='/Donate' element={<DonatePage />} />
            <Route path='/Source' element={<SourcesPage />} />
        </Routes>
    )
}

export default NavRoutes;
