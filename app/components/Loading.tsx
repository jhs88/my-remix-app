import {
  Box,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

/** Renders a loading component with a specified limit of skeleton cards. */
export default function Loading({ limit }: { limit?: number }) {
  return Array.from({ length: limit ?? 10 }).map((_, i) => (
    <SkeleCard key={`loading-gi-${i}`} />
  ));
}

/** Renders a skeleton card with a flip effect. */
function SkeleCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: { sm: "column", md: "row" },
        borderRadius: 0,
        boxShadow: 0,
      }}
    >
      <CardMedia component="img" loading="lazy" />
      <CardContent sx={{ width: "100%" }}>
        <Typography aria-label="front heading" variant="h6">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={`skele-card-line-${i}`} />
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
}

/** Renders a popup loader component. */
export function PopupLoader() {
  return (
    <Stack alignItems="center" justifyContent="center" mt="5em" mb="5em">
      <Card variant="outlined">
        <CardContent>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
            margin="auto"
            maxWidth="100vw"
            padding="60px 30px"
          >
            <Typography marginBottom="0.25rem" marginTop="1rem" variant="h3">
              Loading...
            </Typography>
            <CircularProgress />
            <Typography variant="subtitle2">
              This will take a couple seconds
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
}
