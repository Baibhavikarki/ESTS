import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKButton from "../../../components/MKButton";

// Routes
import routes from "../../../routes";
import footerRoutes from "../../../footer.routes";

// Material Kit 2 React examples
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";

// Images
import bgImage from "../../../assets/images/bg-about.jpg";
import team1 from "../../../assets/images/team-5.jpg";
import team2 from "../../../assets/images/bruce-mars.jpg";
import team3 from "../../../assets/images/ivana-squares.jpg";
import team4 from "../../../assets/images/ivana-square.jpg";

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
              Work with an amazing design
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              We&apos;re constantly trying to express ourselves and actualize
              our dreams. If you have the opportunity to play this game
            </MKTypography>
            <MKButton
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
            >
              create account
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
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
        <MKBox component="section" py={12}>
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} lg={6}>
                <Grid container justifyContent="flex-start">
                  <Grid item xs={12} md={6}>
                    <MKBox mb={5}>
                      <DefaultInfoCard
                        icon="public"
                        title="Fully integrated"
                        description="We get insulted by others, lose trust for those We get back freezes"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={5}>
                      <DefaultInfoCard
                        icon="payments"
                        title="Payments functionality"
                        description="We get insulted by others, lose trust for those We get back freezes"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={{ xs: 5, md: 0 }}>
                      <DefaultInfoCard
                        icon="apps"
                        title="Prebuilt components"
                        description="We get insulted by others, lose trust for those We get back freezes"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={{ xs: 5, md: 0 }}>
                      <DefaultInfoCard
                        icon="3p"
                        title="Improved platform"
                        description="We get insulted by others, lose trust for those We get back freezes"
                      />
                    </MKBox>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            
          </Grid> */}
            </Grid>
          </Container>
        </MKBox>

        {/** Infomation Ends */}

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
                <MKTypography variant="body2" color="white" opacity={0.8}>
                  There&apos;s nothing I really wanted to do in life that I
                  wasn&apos;t able to get good at. That&apos;s my skill.
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team1}
                    name="Emma Roberts"
                    position={{ color: "info", label: "UI Designer" }}
                    description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team2}
                    name="William Pearce"
                    position={{ color: "info", label: "Boss" }}
                    description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team3}
                    name="Ivana Flow"
                    position={{ color: "info", label: "Athlete" }}
                    description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team4}
                    name="Marquez Garcia"
                    position={{ color: "info", label: "JS Developer" }}
                    description="Artist is a term applied to a person who engages in an activity deemed to be an art."
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
