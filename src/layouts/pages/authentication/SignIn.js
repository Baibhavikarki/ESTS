/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKInput from "../../../components/MKInput";
import MKButton from "../../../components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";

// Material Kit 2 React page layout routes
import routes from "../../../routes";
import { useNavigate } from 'react-router-dom';

// Images
import bgImage from "../../../assets/images/bg-sign-in-basic.jpeg";



function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSignIn = () => {
    // Check if username and password are correct
    if (formData.username === "admin" && formData.password === "admin") {
      // Redirect user to dashboard
      // history.push("/pages/admin-dashboard/dashboard");
      navigate("/pages/admin-dashboard/dashboard");
    } else if (formData.username === "guest" && formData.password === "admin") {
      // Redirect user to dashboard
      // history.push("/pages/admin-dashboard/dashboard");
      navigate("/pages/admin-dashboard/dashboard");
    } else {
      // Display error message
      alert("Incorrect username or password. Please try again..");
    }
  };

  // const homeRoutes = routes.filter((route) => {
  //   return route.name === "home" || route.name === "about us" || route.name === "contact us" || route.name === "sign-in/sign-up";
  // });

  return (
    <>
      { <DefaultNavbar
        routes={routes}
        transparent
        light
      /> }
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a>Sign in</a>
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="username" label="username" onChange={handleInputChange} name="username" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="password" onChange={handleInputChange}  name="password"  fullWidth />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" onClick={handleSignIn} color="info" fullWidth >
                      sign in
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MKTypography
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>

          {/** ************************************************************************************ */}

          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="success"
                borderRadius="lg"
                coloredShadow="success"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  <a>Sign Up</a>
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                <MKBox mb={2}>
                    <MKInput type="text" label="Full Name" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Password" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Confirm Password" fullWidth />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="success" fullWidth>
                      Create Account
                    </MKButton>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default SignInBasic;