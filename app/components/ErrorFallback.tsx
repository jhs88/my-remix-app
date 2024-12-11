import { Box, Stack, Typography } from "@mui/material";
import { isRouteErrorResponse } from "react-router";

export function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <Box className="error-page">
      <Stack
        spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">
          {isRouteErrorResponse(error) ? error.status : 500}
        </Typography>
        <Typography>
          {isRouteErrorResponse(error)
            ? (error.data.message ?? error.data)
            : error instanceof Error
              ? error.message
              : "An Unknown error ocurred"}
        </Typography>
      </Stack>
    </Box>
  );
}
