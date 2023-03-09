// Pages
import AboutUs from "./layouts/pages/landing-pages/AboutUs";
import ContactUs from "./layouts/pages/landing-pages/ContactUs";
import SignIn from "./layouts/pages/authentication/SignIn";
import Home from "./layouts/pages/Presentation";

const routes = [
    {
      name: "home",
      columns: 1,
      rowsPerColumn: 2,
      component: <Home/>,
      route: "/pages/presentation",
    },
    {
      name: "about us",
      columns: 1,
      rowsPerColumn: 2,
      route: "/pages/landing-pages/about-us",
      component: <AboutUs />,
    },
    {
      name: "contact us",
      columns: 1,
      rowsPerColumn: 2,
      route: "/pages/landing-pages/contact-us",
              component: <ContactUs />,
    },
    {
      name: "sign-in/sign-up",
      route: "/pages/authentication/sign-in",
      component: <SignIn />,
    },
  ];
  
  export default routes;