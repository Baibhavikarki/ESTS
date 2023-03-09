// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";
import MKSocialButton from "../../components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../examples/Footers/DefaultFooter";

// Routes
import routes from "../../routes";
import footerRoutes from "../../footer.routes";

// Images
import bgImage from "../../assets/images/bg-presentation.jpg";

function FilledInfoCard({ variant, color, icon, title, description, action }) {
    const buttonStyles = {
      width: "max-content",
      display: "flex",
      alignItems: "center",
  
      "& .material-icons-round": {
        fontSize: "1.125rem",
        transform: `translateX(3px)`,
        transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
      },
  
      "&:hover .material-icons-round, &:focus .material-icons-round": {
        transform: `translateX(6px)`,
      },
    };
  
    let iconColor = color;
  
    if (variant === "gradient" && color !== "light") {
      iconColor = "white";
    } else if (variant === "gradient" && color === "light") {
      iconColor = "dark";
    }
  
    return (
      <MKBox
        display={{ xs: "block", md: "flex" }}
        variant={variant}
        bgColor={variant === "contained" ? "grey-100" : color}
        borderRadius="xl"
        pt={3.5}
        pb={3}
        px={3}
      >
        <MKTypography
          display="block"
          variant="h3"
          color={iconColor}
          textGradient={variant === "contained"}
          mt={-0.625}
        >
          {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
        </MKTypography>
        <MKBox pt={{ xs: 3, md: 0 }} pl={{ xs: 0, md: 2 }} lineHeight={1}>
          <MKTypography
            display="block"
            variant="5"
            color={variant === "contained" || color === "light" ? "dark" : "white"}
            fontWeight="bold"
            mb={1}
          >
            {title}
          </MKTypography>
          <MKTypography
            display="block"
            variant="body2"
            color={variant === "contained" || color === "light" ? "text" : "white"}
            mb={2}
          >
            {description}
          </MKTypography>
          {action && action.type === "external" ? (
            <MKTypography
              component={MuiLink}
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              fontWeight="regular"
              color={variant === "contained" ? color : "white"}
              sx={buttonStyles}
            >
              {action.label} 
            </MKTypography>
          ) : null}
          {action && action.type === "internal" ? (
            <MKTypography
              component={Link}
              to={action.route}
              variant="body2"
              fontWeight="regular"
              color={variant === "contained" ? color : "white"}
              sx={buttonStyles}
            >
              {action.label} 
            </MKTypography>
          ) : null}
        </MKBox>
      </MKBox>
    );
  }
  
  // Setting default props for the FilledInfoCard
  FilledInfoCard.defaultProps = {
    variant: "contained",
    color: "info",
    action: false,
  };
  
  // Typechecking props for the FilledInfoCard
  FilledInfoCard.propTypes = {
    variant: PropTypes.oneOf(["contained", "gradient"]),
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
    action: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        type: PropTypes.oneOf(["external", "internal"]).isRequired,
        route: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ]),
  };

  function Presentation() {
    return (
      <>
        <DefaultNavbar
          routes={routes}
          sticky
        />
        <MKBox
          minHeight="75vh"
          width="100%"
          sx={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Container>
            <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
              <MKTypography
                variant="h1"
                color="white"
                textAlign="center"
                mt={-6}
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Endangered Species Tracking System{" "}
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                textAlign="center"
                px={{ xs: 6, lg: 12 }}
                mt={1}
              >
                
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  title="Getting Started"
                  description="Check the possible ways of working with our product and the necessary files for building your own project."
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                    label: "Let's start",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  color="info"
                  title="Plugins"
                  description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                    label: "Read more",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  color="info"
                  title="Components"
                  description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                    label: "Read more",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
          <MKBox pt={18} pb={6}>
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                  <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                    Thank you for your support!
                  </MKTypography>
                  <MKTypography variant="body1" color="text">
                    
                  </MKTypography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  my={{ xs: 5, lg: "auto" }}
                  mr={{ xs: 0, lg: "auto" }}
                  sx={{ textAlign: { xs: "center", lg: "right" } }}
                >
                  <MKSocialButton
                    component="a"
                    href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                    target="_blank"
                    color="twitter"
                    sx={{ mr: 1 }}
                  >
                    <i className="fab fa-twitter" />
                    &nbsp;Tweet
                  </MKSocialButton>
                  <MKSocialButton
                    component="a"
                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                    color="facebook"
                    sx={{ mr: 1 }}
                  >
                    <i className="fab fa-facebook" />
                    &nbsp;Share
                  </MKSocialButton>
                  <MKSocialButton
                    component="a"
                    href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                    color="pinterest"
                  >
                    <i className="fab fa-pinterest" />
                    &nbsp;Pin it
                  </MKSocialButton>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Card>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </>
    );
  }
  
  export default Presentation;