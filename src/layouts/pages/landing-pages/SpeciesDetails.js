
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKSocialButton from "../../../components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import CenteredBlogCard from "../../../examples/Cards/BlogCards/CenteredBlogCard";

// Routes
import routes from "../../../routes";
import footerRoutes from "../../../footer.routes";
import { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';

// Images
import bgImage from "../../../assets/images/bg-presentation.jpg";


const baseUrl = "https://ests-api.herokuapp.com";
// const baseUrl = 'http://localhost:8080';

const SpeciesDetails = () => {
  const [species, setSpecies] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${baseUrl}/species/${id}`)
      .then((response) => response.json())
      .then((data) => setSpecies(data));
  }, [id]);


  if (species === null) {
    // Display a loading message or spinner
    return <div>Loading...</div>;
  }

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${species[0].image_url})`,
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
              {species[0].species_name}{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            ></MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox pt={5} pb={3}>
          <Container>
            <Grid container spacing={3}>
              {species && species.map((post, index) => (
                <Grid item xs={12} lg={4} key={index}>
                    <CenteredBlogCard
                      image={post.image_url}
                      sx={{ height: 100 }}
                      title={post.name}
                      description={''}
                      health={"Health: "+ post.health_status}
                      age={"Age: "+ post.age}
                      sex={"Sex: "+ post.sex}
                      action={{
                        type: "internal",
                        route: `/pages/animal-details/${post.animal_id}`,
                        color: "info",
                        label: "find out more",
                      }}
                    />
                </Grid>
              ))}
            </Grid>
          </Container>
        </MKBox>
        
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                lg={5}
                ml="auto"
                sx={{ textAlign: { xs: "center", lg: "left" } }}
              >
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text"></MKTypography>
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
                  href="https://twitter.com/"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/"
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
};

export default SpeciesDetails;