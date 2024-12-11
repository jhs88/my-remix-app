import { Box, List, Typography, Link, ListItem } from "@mui/material";
import type { MetaFunction } from "react-router";
import { Link as RouterLink } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

export default function Index() {
  return (
    <Box>
      <Typography variant="h1">Welcome to React Router</Typography>
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
            href="https://react-router.com/home"
            rel="noreferrer"
          >
            React Router Docs
          </Link>
        </ListItem>
      </List>
      <Link component={RouterLink} variant="h4" to="/mui">
        Go to Mui Example
      </Link>
    </Box>
  );
}
