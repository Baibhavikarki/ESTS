//import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKInput from "../../../components/MKInput";
import MKButton from "../../../components/MKButton";
import MKTypography from "../../../components/MKTypography";

// Routes
import footerRoutes from "../../../footer.routes";

// Material Kit 2 React examples
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import ButtonAppBar from "../../../examples/Navbars/Sidebar/AdminNavbar";

function FormSimple() {
  //const [checked, setChecked] = useState(true);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
            Add Animals
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autocomplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Species" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Animal" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Name" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Sex" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Age" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Health Status" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" type="file" label="Image URL" fullWidth />
                </Grid>
                {/* <Grid item xs={12}>
                  <MKInput variant="standard" label="Your Message" multiline fullWidth rows={6} />
                </Grid> */}
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="success" fullWidth>
                  Submit
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

function Animals() {
  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <MKBox
        minHeight="75vh"
        width="100%"
      >
        <Container>
            <FormSimple/>
        </Container>
      </MKBox>
    

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Animals;
