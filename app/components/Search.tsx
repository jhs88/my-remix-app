import {
  Button,
  CircularProgress,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import { Form, useNavigation, useSubmit } from "@remix-run/react";
import { useRootLoaderData } from "~/root";

const SearchInput = styled(TextField)(({ theme }) => ({
  color: "inherit",
  boxSizing: "border-box",
  width: "100%",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0.75rem 1rem",
    backgroundSize: "1.5rem",
    position: "relative",
  },
}));

export function SearchForm() {
  const { q } = useRootLoaderData();
  const navigation = useNavigation();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");
  const submit = useSubmit();

  return (
    <Stack direction="row" alignItems="baseline" spacing={2}>
      <Form
        id="search-form"
        onChange={(event) => {
          const isFirstSearch = q === null;
          submit(event.currentTarget, { replace: !isFirstSearch });
        }}
        role="search"
      >
        <Stack alignItems="center" spacing={2}>
          <SearchInput
            id="q"
            name="q"
            aria-label="Search contacts"
            className={searching ? "loading" : ""}
            defaultValue={q ?? ""}
            placeholder="Search"
            type="search"
          />
          {searching && <CircularProgress aria-hidden id="search-spinner" />}
        </Stack>
      </Form>
      <Form method="post">
        <Button variant="outlined" type="submit">
          New
        </Button>
      </Form>
    </Stack>
  );
}
