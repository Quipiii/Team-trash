import React from 'react';
import Nav from '../../components/Nav/Nav';
import NavRoutes from '../../components/NavRoutes/NavRoutes';
import MainPage from '../MainPage/MainPage'
// import RecycleUS from '../RecycleUS/RecycleUS';
// import WhyRecycle from '../WhyRecycle/WhyRecycle';
// import DonatePage from '../DonatePage/DonatePage';
// import SourcesPage from '../SourcesPage/SourcesPage';

const TeamTrash = () => {
    return (
        <div>
            <Nav/>
            <NavRoutes/>

            <div>
                <MainPage/>
                {/* <RecycleUS/>
                <WhyRecycle/>
                <DonatePage/>
                <SourcesPage/> */}
            </div>
            
        </div>
    )
}

export default TeamTrash;
