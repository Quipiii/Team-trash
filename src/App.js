import Nav from './components/Nav'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecyclingUS from './pages/RecyclingUS';
import WhyRecycle from './pages/WhyRecycle';
import Donate from './pages/Donate';
import Source from './pages/Source';


function App() {
  return (
    <div >
     <Nav/>
     <Routes>
       <Route path='/Home' element={<Home />} />
       <Route path='/RecyclingUS' element={<RecyclingUS />} />
       <Route path='/WhyRecycle' element={<WhyRecycle />} />
       <Route path='/Donate' element={<Donate />} />
       <Route path='/Source' element={<Source />} />
     </Routes>

    </div>
  );
}

export default App;
