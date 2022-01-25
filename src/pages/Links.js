import RecyclingUS from "./RecyclingUS";
import Home from "./Home";
import WhyRecycle from "./WhyRecycle";
import Donate from "./Donate";
import Source from "./Source";


const Links = [
  {
    title: "Home",
    link: "/Home",
    component: <Home />,
  },
  {
    title: " Recycling in the US",
    link: "/RecyclingUS",
    component: <RecyclingUS />,
  },
  {
    title: " Why Recycle",
    link: "/WhyRecycle",
    component: <WhyRecycle />,
  },
  {
    title: " Donate",
    link: "/Donate",
    component: <Donate />,
  },
  {
    title: " Source",
    link: "/Source",
    component: <Source />,
  },
];

export default Links;