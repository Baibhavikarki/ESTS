/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

function DefaultFooter({ content }) {
  const { brand, socials } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
            <MKBox>
              <Link to={brand.route}>
                {/* <MKBox component="img" src={brand.image} alt={brand.name} maxWidth="2rem" mb={2} /> */}
              </Link>
              <MKTypography variant="h6">CONNECT WITH US</MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  // key={link}
                  component="a"
                  // href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
          <Grid item xs={6} md={2} sx={{ mb: 3 }}>
            <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
              site terms
            </MKTypography>
          </Grid>
          <Grid item xs={6} md={2} sx={{ mb: 3 }}>
            <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
              Privacy Policy
            </MKTypography>
          </Grid>
          <Grid item xs={6} md={2} sx={{ mb: 3 }}>
            <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
              Disclosure
            </MKTypography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            <p style={{fontSize:"0.875rem"}}>All rights reserved. Copyright © 2023 by Team Panda.</p>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
