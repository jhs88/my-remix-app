import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Button, Grid, InputLabel, Stack, TextField } from "@mui/material";

import { getContact, updateContact } from "~/api/data";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  const contact = await getContact(params.contactId);
  if (!contact) throw new Response("Not Found", { status: 404 });
  return { contact };
};

export default function EditContact() {
  const { contact } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <Form id="contact-form" method="post">
      <Grid container p="2rem" spacing={2}>
        <Grid item xs={12} md={6}>
          <InputLabel htmlFor="first">First Name</InputLabel>
          <TextField
            variant="filled"
            fullWidth
            defaultValue={contact.first}
            aria-label="First name"
            label="First name"
            name="first"
            type="text"
            placeholder="Bobby"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel htmlFor="last">Last Name</InputLabel>
          <TextField
            variant="filled"
            fullWidth
            aria-label="Last name"
            defaultValue={contact.last}
            label="Last name"
            name="last"
            type="text"
            placeholder="Johnson"
            required
          />
        </Grid>
        {/* <div>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextField
            variant="filled"
            defaultValue={contact.email}
            label="Email"
            name="email"
            placeholder="og.bobby.johnson@gmail.com"
            type="text"
          />
        </div> */}
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="twitter">Twitter</InputLabel>
          <TextField
            variant="filled"
            fullWidth
            defaultValue={contact.twitter}
            label="Twitter"
            name="twitter"
            placeholder="@jack"
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="avatar">Avatar URL</InputLabel>
          <TextField
            variant="filled"
            fullWidth
            aria-label="Avatar URL"
            defaultValue={contact.avatar}
            label="Avatar URL"
            name="avatar"
            placeholder="https://example.com/avatar.jpg"
            type="text"
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="notes">Notes</InputLabel>
          <TextField
            variant="filled"
            multiline
            fullWidth
            defaultValue={contact.notes}
            label="Notes"
            name="notes"
            rows={6}
          />
        </Grid>
      </Grid>
      <Stack direction="row" justifyContent="end" spacing={2}>
        <Button onClick={() => navigate(-1)} type="button">
          Cancel
        </Button>
        <Button variant="outlined" type="submit">
          Save
        </Button>
      </Stack>
    </Form>
  );
}
