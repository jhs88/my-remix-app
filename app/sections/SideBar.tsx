import { Box, Link as MuiLink, Typography } from "@mui/material";
import { Link } from "react-router";

import SearchForm from "./Search";
import Navbar from "./Navbar";

export default function SideBar() {
  return (
    <Box
      component="nav"
      sx={{
        justifyContent: "center",
      }}
    >
      <MuiLink component={Link} to="/">
        <Typography variant="h3" gutterBottom>
          React Router Contacts
        </Typography>
      </MuiLink>
      <SearchForm />
      <Navbar />
    </Box>
  );
}
