import { Box, List, Typography, Link, ListItem } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import { Link as RouterLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Box>
      <Typography variant="h1">Welcome to Remix</Typography>
      <List>
        <ListItem>
          <Link
            variant="h5"
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </Link>
        </ListItem>
        <ListItem>
          <Link
            variant="h5"
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </Link>
        </ListItem>
        <ListItem>
          <Link
            variant="h5"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </Link>
        </ListItem>
      </List>
      <Link component={RouterLink} variant="h4" to="/mui">
        Go to Mui Example
      </Link>
    </Box>
  );
}
