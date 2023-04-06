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
            Add Location
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autocomplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Location" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Country" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="GPS Co-ordinates" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Climate" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Description" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Notes" multiline fullWidth rows={6} />
                </Grid>
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

function Locations() {
  var accountType = sessionStorage.getItem("accountType");
  if(accountType === "admin")
  {
    // Do nothing
  }else
  {
    alert("You are not authorised to visit this page"); return false;
  }
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

export default Locations;
