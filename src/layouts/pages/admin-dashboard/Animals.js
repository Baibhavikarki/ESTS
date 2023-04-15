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

  // const [speciesOptions, setSpeciesOptions] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [animalID, setNameAnimalID] = useState("");
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(`${baseUrl}/species`)
      .then(response => response.json())
      .then(data => { console.log(data); setPosts(data) });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Body", selectedSpecies)

    const animalData = {
      species_id: selectedSpecies.species_id,
      animal_id: 11111,
      name: name,
      sex: sex,
      age: age,
      healthStatus: healthStatus,
      imageUrl: imageUrl,
      species_name: selectedSpecies.name,
      is_approved: "YES"
    };

    console.log("Body animalData", animalData)


    fetch(`${baseUrl}/animal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animalData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Animal added successfully:", data);
        // clear form fields
        setSelectedSpecies("");
        setNameAnimalID("");
        setSex("");
        setAge("");
        setHealthStatus("");
        setImageUrl("");
      })
      .catch((error) => {
        console.error("Error adding animal:", error);
      });
  };

  const handleAnimalChange = (event) => {
    setNameAnimalID(event.target.value);
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleHealthStatusChange = (event) => {
    setHealthStatus(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageUrl(event.target.value);
  };



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
             
                  <Select variant="standard" label="Species" fullWidth
                    value={selectedSpecies}
                    onChange={(event) => setSelectedSpecies(event.target.value)}>
                       
                    {posts.map((post, index) => (
                      <MenuItem key={post.species_id} value={post}>
                        {post.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Animal" fullWidth value={animalID} onChange={handleAnimalChange} />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Name" fullWidth value={name} onChange={handleNameChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select
                    variant="standard"
                    label="Sex"
                    fullWidth
                    value={sex}
                    onChange={(event) => setSex(event.target.value)}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Age" fullWidth value={age} onChange={handleAgeChange} />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Health Status" fullWidth value={healthStatus} onChange={handleHealthStatusChange} />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Image URL" fullWidth value={imageUrl} onChange={handleImageChange} />
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

function Animals() {
  var accountType = sessionStorage.getItem("accountType");
  if (accountType === "admin") {
    // Do nothing
  } else {
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
          <FormSimple />
        </Container>
      </MKBox>


      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Animals;
