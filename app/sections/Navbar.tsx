import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink, useNavigation } from "react-router";

import { useRootLoaderData } from "~/root";

export default function Navbar() {
  const { contacts }: NavbarProps = useRootLoaderData();
  const navigation = useNavigation();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  return (
    <List id="sidebar" hidden={searching}>
      {contacts.length ? (
        contacts.map((contact) => (
          <ListItemButton
            key={contact.id}
            component={NavLink}
            to={`contacts/${contact.id}`}
          >
            <ListItemText>
              {contact.first ?? ""} {contact.last ?? ""}
            </ListItemText>
            {contact.favorite && <Typography variant="h5">★</Typography>}
          </ListItemButton>
        ))
      ) : (
        <ListItem>
          <ListItemText>No contacts</ListItemText>
        </ListItem>
      )}
    </List>
  );
}
