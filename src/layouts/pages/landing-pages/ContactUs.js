// @mui material components
import Grid from "@mui/material/Grid";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";

// Routes
import routes from "../../../routes";
import footerRoutes from "../../../footer.routes";

// Image
import bgImage from "../../../assets/images/illustrations/illustration-reset.jpg";


// const homeRoutes = routes.filter((route) => {
//   return route.name === "home" || route.name === "about us" || route.name === "contact us" || route.name === "sign-in/sign-up";
// });


function ContactUs() {
    return (
      <>
        <MKBox position="fixed" top="0.5rem" width="100%">
          <DefaultNavbar
            routes={routes}
          />
        </MKBox>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <MKBox
              display={{ xs: "none", lg: "flex" }}
              width="calc(100% - 2rem)"
              height="calc(100vh - 2rem)"
              borderRadius="lg"
              ml={2}
              mt={2}
              sx={{ backgroundImage: `url(${bgImage})` }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            lg={6}
            xl={4}
            ml={{ xs: "auto", lg: 6 }}
            mr={{ xs: "auto", lg: 6 }}
          >
            <MKBox
              bgColor="white"
              borderRadius="xl"
              shadow="lg"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              mt={{ xs: 20, sm: 18, md: 20 }}
              mb={{ xs: 20, sm: 18, md: 20 }}
              mx={3}
            >
              <MKBox
                variant="gradient"
                bgColor="info"
                coloredShadow="info"
                borderRadius="lg"
                p={2}
                mx={2}
                mt={-3}
              >
                <MKTypography variant="h3" color="white">
                  Contact us
                </MKTypography>
              </MKBox>
              <MKBox p={3}>
                <MKTypography variant="body2" color="text" mb={3}>
                  <EmailIcon/> endangered_species@teampanda.com.
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={3}>
                <LocationOnIcon/><br/>
                Endangered Species Tracking System<br/>
                1750 Finch Avenue East<br/>
                Toronto, Ontario, Canada<br/>
                M2J 2X5
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </>
    );
  }

  export default ContactUs;
