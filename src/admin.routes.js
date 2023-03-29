// @mui material components
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GroupsIcon from '@mui/icons-material/Groups';


// Pages
import AboutUs from "./layouts/pages/landing-pages/AboutUs";
import ContactUs from "./layouts/pages/landing-pages/ContactUs";
import SignIn from "./layouts/pages/authentication/SignIn";
import Home from "./layouts/pages/Presentation";
import Dashboard from "./layouts/pages/admin-dashboard/Dashboard";
import Animals from "./layouts/pages/admin-dashboard/Animals";

const adminRoutes = [
    {
      icon: <HomeIcon/>,
      name: "home",
      columns: 1,
      rowsPerColumn: 2,
      component: <Home/>,
      route: "/pages/presentation",
    },
    {
      icon: <GroupsIcon/>,
      name: "about us",
      columns: 1,
      rowsPerColumn: 2,
      route: "/pages/landing-pages/about-us",
      component: <AboutUs />,
    },
    {
      icon: <MailOutlineIcon/>,
      name: "contact us",
      columns: 1,
      rowsPerColumn: 2,
      route: "/pages/landing-pages/contact-us",
      component: <ContactUs />,
    },
    {
      icon: <LockOpenIcon />,
      name: "sign-in/sign-up",
      route: "/pages/authentication/sign-in",
      component: <SignIn />,
    },
    {
      icon: <LockOpenIcon />,
      name: "dashboard",
      route: "/pages/admin-dashboard/dashboard",
      component: <Dashboard />,
    },
    {
      icon: <LockOpenIcon />,
      name: "animals",
      route: "/pages/admin-dashboard/animals",
      component: <Animals />,
    }
  ];
  
  export default adminRoutes;