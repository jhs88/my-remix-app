import { Box, Typography } from '@mui/material';
import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <Box style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <Typography variant="h1">Welcome to Remix</Typography>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <Link to="/mui">Go to Mui Example</Link>
    </Box>
  );
}

// export default function Index() {
//   return (
//     <p id="index-page">
//       This is a demo for Remix.
//       <br />
//       Check out <a href="https://remix.run">the docs at remix.run</a>.
//     </p>
//   );
// }
