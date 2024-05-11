import type {
  LinksFunction,
  LoaderFunctionArgs,
  SerializeFrom,
} from "@remix-run/node";
import { defer, redirect } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
  useRouteError,
} from "@remix-run/react";
import { createEmptyContact, getContacts } from "~/api/data";
import Content from "~/components/Content";
import { ErrorFallback } from "~/components/ErrorFallback";
import { getMuiLinks, MuiDocument, MuiMeta } from "~/mui";

export const links: LinksFunction = () => [...getMuiLinks()];

export async function action() {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data as SerializeFrom<typeof loader>;
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return defer({ contacts, q });
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <MuiMeta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <MuiDocument>
      <Content {...data}>
        <Outlet />
      </Content>
    </MuiDocument>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const data = useRootLoaderData();

  return (
    <MuiDocument>
      <Content {...data}>
        <ErrorFallback {...{ error }} />
      </Content>
    </MuiDocument>
  );
}
