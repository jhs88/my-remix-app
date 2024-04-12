import { Box, Container, Grid, Typography } from "@mui/material";
import Navbar from "~/components/Navbar";
import { SearchForm } from "~/components/Search";

export default function Content({ children }: { children?: React.ReactNode }) {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <SideBar />
        </Grid>
        <Grid item xs={12} md={9}>
          <Detail>{children}</Detail>
        </Grid>
      </Grid>
    </Container>
  );
}

function SideBar() {
  return (
    <Box>
      <Typography variant="h3">Remix Contacts</Typography>
      <SearchForm />
      <Navbar />
    </Box>
  );
}

function Detail({ children }: { children?: React.ReactNode }) {
  return <Box>{children}</Box>;
}
