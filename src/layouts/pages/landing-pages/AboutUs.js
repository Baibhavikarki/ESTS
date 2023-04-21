import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import FilledInfoCard from "../../../examples/Cards/InfoCards/FilledInfoCard";

// Routes
import routes from "../../../routes";
import footerRoutes from "../../../footer.routes";

// Material Kit 2 React examples
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";

// Images
import bgImage from "../../../assets/images/bg-about.jpg";
import team1 from "../../../assets/images/profile.jpg";

function HorizontalTeamCard({ image, name, position, description }) {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <MKBox
              component="img"
              src={image}
              alt={name}
              width="100%"
              borderRadius="md"
              shadow="lg"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <MKBox
            pt={{ xs: 1, lg: 2.5 }}
            pb={2.5}
            pr={4}
            pl={{ xs: 4, lg: 1 }}
            lineHeight={1}
          >
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography variant="h6" color={position.color} mb={1}>
              {position.label}
            </MKTypography>
            <MKTypography variant="body2" color="text">
              {description}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

function DefaultInfoCard({
  color,
  icon,
  title,
  description,
  direction,
  small,
}) {
  return (
    <MKBox
      lineHeight={1}
      p={direction === "center" ? 2 : 0}
      textAlign={direction}
    >
      {typeof icon === "string" ? (
        <MKTypography
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
          color={color}
          textGradient
        >
          {" "}
          {" "}
        </MKTypography>
      ) : (
        icon
      )}
      <MKTypography
        display="block"
        variant="5"
        fontWeight="bold"
        mt={direction === "center" ? 1 : 2}
        mb={1.5}
      >
        {title}
      </MKTypography>
      <MKTypography
        display="block"
        variant={small ? "button" : "body2"}
        color="text"
        pr={direction === "left" ? 6 : 0}
        pl={direction === "right" ? 6 : 0}
      >
        {description}
      </MKTypography>
    </MKBox>
  );
}

// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  direction: "left",
  small: false,
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
  small: PropTypes.bool,
};

// const homeRoutes = routes.filter((route) => {
//   return route.name === "home" || route.name === "about us" || route.name === "contact us" || route.name === "sign-in/sign-up";
// });

function AboutText(){
  return (<p>
    Welcome to the Endangered Species Tracking System website! Our mission is to provide a comprehensive platform for tracking endangered species across the globe.<br/><br/>

We understand the critical need to protect and conserve endangered species, which is why we have created a user-friendly system that allows users to monitor the status and location of these species. Our team of experts is dedicated to collecting and analyzing data on endangered species, making it easier for conservationists, researchers, and the general public to access and use this information.<br/><br/>

At the Endangered Species Tracking System, we believe that everyone has a role to play in protecting endangered species. By providing accurate and up-to-date information on these animals, we hope to increase awareness and encourage action towards their conservation.<br/><br/>

Thank you for visiting our website and for your interest in protecting endangered species. We are committed to providing you with the best possible information and tools to support your conservation efforts.<br/><br/>
  </p>);
}

function AboutUs() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Our Story
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              As we confront the dual crises of biodiversity loss and climate change, We are working to protect our planet.
            </MKTypography>
            {/* <MKButton
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
            >
              create account
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography> */}
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
              >
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox component="section" py={2}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={12}>
            <Grid container justifyContent="flex-start">
              <FilledInfoCard
                variant="gradient"
                color="dark"
                icon=""
                title="About Us"
                description="Welcome to the Endangered Species Tracking System website! Our mission is to provide a comprehensive platform for tracking endangered species across the globe.

                We understand the critical need to protect and conserve endangered species, which is why we have created a user-friendly system that allows users to monitor the status and location of these species. Our team of experts is dedicated to collecting and analyzing data on endangered species, making it easier for conservationists, researchers, and the general public to access and use this information.
                
                At the Endangered Species Tracking System, we believe that everyone has a role to play in protecting endangered species. By providing accurate and up-to-date information on these animals, we hope to increase awareness and encourage action towards their conservation.
                
                Thank you for visiting our website and for your interest in protecting endangered species. We are committed to providing you with the best possible information and tools to support your conservation efforts."
              />
            </Grid>

            </Grid>

          </Grid>
        </Container>
        </MKBox>
        <MKBox
          component="section"
          variant="gradient"
          bgColor="dark"
          position="relative"
          py={6}
          px={{ xs: 2, lg: 0 }}
          mx={-2}
        >
          <Container>
            <Grid container>
              <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                <MKTypography variant="h3" color="white">
                  The Executive Team
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team1}
                    name="Baibhavi Karki"
                    position={{ color: "info", label: "Team Lead" }}
                    description="A team leader is a person who provides guidance, instruction, direction and leadership to a group of individuals."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team1}
                    name="Chahat Kaur Chabbra"
                    position={{ color: "info", label: "JS Developer" }}
                    description="JavaScript developers work with websites, producing front-end applications, and performing code analysis and overall improvement of style and usability."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team1}
                    name="Swara Patel"
                    position={{ color: "info", label: "JS Developer" }}
                    description="JavaScript developers work with websites, producing front-end applications, and performing code analysis and overall improvement of style and usability."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team1}
                    name="Rugma Muraleedharan Sandhya"
                    position={{ color: "info", label: "UI/UX Designer" }}
                    description="Design all the screens through which a user will move and to create the visual elements—and their interactive properties—that facilitate this movement."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        {/** Team Ends */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
