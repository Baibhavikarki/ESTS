//import { useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKButton from "../../../components/MKButton";

// Routes
import footerRoutes from "../../../footer.routes";

// Material Kit 2 React examples
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import ButtonAppBar from "../../../examples/Navbars/Sidebar/AdminNavbar";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(observer, species, location) {
  return { observer, species, location};
}

const rows = [
  createData("John Doe", "Chimpanzee", "Tanzania"),
  createData("Jane Doe", "African Elephant", "Kruger National Park"),
  createData("John Doe", "Lion", "Maasai Mara National Reserve"),
  createData("Mary Jones", "Leopard", "Serengeti National Park"),
  createData("Joseph Nguyen", "Rhinoceros", "Hluhluwe-Imfolozi Park"),
  createData("Maria Rodriguez", "Cheetah", "Masai Mara National Reserve"),
  createData("Kevin W", "Hippopotamus", "Chobe National Park"),
  createData("Emily Li", "Buffalo", "Tarangire National Park"),
  createData("James Wang", "Lion", "Serengeti National Park"),
  createData("Sarah Smith", "Mountain Gorilla", "Bwindi Impenetrable National Park"),
  createData("Peter Garcia", "Leopard", "South Luangwa National Park"),
  createData("Lisa Jones", "Cheetah", "Maasai Mara National Reserve"),
  createData("John Smith", "Black Rhino", "Etosha National Park"),
].sort();

function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={10}
          lg={7}
          mx="auto"
          textAlign="center"
        >
          <MKTypography variant="h3" mb={1}>
            User Requests
          </MKTypography>
        </Grid>
        <Grid container item xs={12} sx={{ mx: "auto" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <h4>Observer</h4>
                  </TableCell>
                  <TableCell><h4>Species</h4></TableCell>
                  <TableCell><h4>Location</h4></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row) => (
                  <TableRow key={row.observer}>
                    <TableCell>
                      {row.observer}
                    </TableCell>
                    <TableCell>{row.species}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>
                      <MKButton
                        type="submit"
                        variant="gradient"
                        color="success"
                        fullWidth
                      >
                        Approve
                      </MKButton>
                    </TableCell>
                    <TableCell>
                      <MKButton
                        type="submit"
                        variant="gradient"
                        color="error"
                        fullWidth
                      >
                        Reject
                      </MKButton>
                    </TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Grid>
      </Container>
    </MKBox>
  );
}

function Animals() {
  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <MKBox minHeight="75vh" width="100%">
        <Container>
          {/* <FormSimple/> */}
          <CustomPaginationActionsTable />
        </Container>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Animals;
