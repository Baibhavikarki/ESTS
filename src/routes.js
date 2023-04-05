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
import Locations from './layouts/pages/admin-dashboard/Locations';
import UserRequest from './layouts/pages/admin-dashboard/UserRequest';
import Settings from './layouts/pages/admin-dashboard/ChangePassword';

import UserAnimals from './layouts/pages/user-dashboard/Animals';
import UserDashboard from './layouts/pages/user-dashboard/Dashboard';
import UserSettings from './layouts/pages/user-dashboard/ChangePassword';

const routes = [
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
    },
    {
      icon: <LockOpenIcon />,
      name: "locations",
      route: "/pages/admin-dashboard/locations",
      component: <Locations />,
    },
    {
      icon: <LockOpenIcon />,
      name: "UserRequest",
      route: "/pages/admin-dashboard/UserRequest",
      component: <UserRequest />,
    },
    {
      icon: <LockOpenIcon />,
      name: "Settings",
      route: "/pages/admin-dashboard/ChangePassword",
      component: <Settings />,
    }
    ,
    {
      icon: <LockOpenIcon />,
      name: "animals",
      route: "/pages/user-dashboard/animals",
      component: <UserAnimals />,
    },
    {
      icon: <LockOpenIcon />,
      name: "dashboard",
      route: "/pages/user-dashboard/dashboard",
      component: <UserDashboard />,
    },
    {
      icon: <LockOpenIcon />,
      name: "Settings",
      route: "/pages/user-dashboard/ChangePassword",
      component: <UserSettings />,
    }
  ];
  
  export default routes;