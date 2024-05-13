import { Box, Link as MuiLink, Typography } from "@mui/material";
import { Link } from "@remix-run/react";

import SearchForm from "./Search";
import Navbar from "./Navbar";

export default function SideBar() {
  return (
    <Box component="nav" justifyContent="center">
      <MuiLink component={Link} to="/">
        <Typography variant="h3" gutterBottom>
          Remix Contacts
        </Typography>
      </MuiLink>
      <SearchForm />
      <Navbar />
    </Box>
  );
}
