//import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
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
import { useState, useEffect } from "react";

const baseUrl = "https://ests-api.herokuapp.com";
// const baseUrl = "http://localhost:8080";

function FormSimple() {
  //const [checked, setChecked] = useState(true);

  const [posts, setPosts] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState("");

  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [climate, setClimate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`${baseUrl}/individuals
    `)
      .then(response => response.json())
      .then(data => { console.log(data); setPosts(data) });
  }, []);


  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const handleClimateChange = (event) => {
    setClimate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };





  const handleSubmit = (event) => {
    event.preventDefault();

    const locationData = {
        Location: location,
        country: country,
        location: {
            type: "Point",
            coordinates: [parseFloat(latitude), parseFloat(longitude)]
        },
        climate: climate,
        description: description,
        animal_id: selectedAnimal.animal_id,
        species: selectedAnimal.species_name,
        is_approved: "YES"
    };


    fetch(`${baseUrl}/location`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Location added successfully:", data);
        // clear form fields
        setSelectedAnimal("");
        setLocation("");
        setCountry("");
        setLatitude("");
        setLongitude("");
        setClimate("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding location:", error);
      });
  };

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
                  <MKInput variant="standard" label="Location" fullWidth value={location} onChange={handleLocationChange}/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Country" fullWidth  value={country} onChange={handleCountryChange}/>
                </Grid>
             
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Latitude" fullWidth  value={latitude} onChange={handleLatitudeChange}/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Longitude" fullWidth  value={longitude} onChange={handleLongitudeChange}/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Climate" fullWidth value={climate} onChange={handleClimateChange}/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Description" fullWidth value={description} onChange={handleDescriptionChange}/>
                </Grid>
                <Grid item xs={12} md={6}>
             <Select variant="standard" label="Species" fullWidth
               value={selectedAnimal}
               onChange={(event) => setSelectedAnimal(event.target.value)}>
               {posts.map((post, index) => (
                 <MenuItem key={post.animal_id} value={post}>
                   {post.name} - {post.species_name}
                 </MenuItem>
               ))}
             </Select>
           </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="success" fullWidth onClick={handleSubmit}>
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
