import { Button, CircularProgress, Stack } from "@mui/material";
import { Form, useNavigation, useSubmit } from "@remix-run/react";

import { useRootLoaderData } from "~/root";
import { SearchInput } from "./styled";

export default function SearchForm() {
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
