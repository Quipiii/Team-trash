import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import RecyclingUS from '../../pages/RecyclingUs';
import WhyRecycle from '../../pages/WhyRecycle';
import Donate from '../../pages/Donate';
import Source from '../../pages/Source';

const NavRoutes = () => {
    return (
        <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/RecyclingUS' element={<RecyclingUS />} />
            <Route path='/WhyRecycle' element={<WhyRecycle />} />
            <Route path='/Donate' element={<Donate />} />
            <Route path='/Source' element={<Source />} />
        </Routes>
    )
}

export default NavRoutes;
