import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

/** Renders the front card component. */
export default function FrontCard(props: { children?: React.ReactNode }) {
  return (
    <>
      <Grid item xs={4} md={6}>
        <Box
          component="img"
          style={{ maxWidth: "100%", height: "auto" }}
          src=""
        />
      </Grid>
      <Grid item xs={4} md={6}>
        <Stack>
          <Typography
            aria-label="front heading"
            variant="h1"
            gutterBottom
          ></Typography>
          <Typography
            className="card-sub-heading"
            aria-label="front subheading"
            variant="h4"
            gutterBottom
          ></Typography>
          <Typography variant="subtitle2" gutterBottom>
            <span
              aria-label="Expiry date label"
              className="card display-date-label mr-2"
            >
              Offer Expires :
            </span>
            <span aria-label="expiry date" className="display-date-label">
              Date
            </span>
          </Typography>
          <Typography className="card-description-1" gutterBottom></Typography>
          <Typography className="card-description-2" gutterBottom></Typography>
          <Typography className="card-description-3" gutterBottom></Typography>
        </Stack>
      </Grid>
      {React.Children.map(props?.children, (child) => (
        <Grid item>{child}</Grid>
      ))}
    </>
  );
}
