import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import routes from "./routes";
import logo from './logo.svg';

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";
import Presentation from "./layouts/pages/Presentation";
import { Helmet } from "react-helmet";

// Material Kit 2 React routes
//import routes from "./routes";


function App() {

  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8"/>
        <title>ESTS</title>
        <meta name="description" content="Endangered Species Tracking System" />
        <img src={logo} className="App-logo" alt="logo" />
      </Helmet>

      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes>
    </ThemeProvider>
        
      
    </div>
  );
}

export default App;

