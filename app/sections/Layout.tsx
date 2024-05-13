import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "@remix-run/react";

import Navbar from "~/sections/Navbar";
import { SearchForm } from "~/sections/Search";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <SideBar />
        </Grid>
        <Grid item justifyContent="center" alignItems="center" xs={12} md={8}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}

function SideBar() {
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
