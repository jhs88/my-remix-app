import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
  SerializeFrom,
} from '@remix-run/node';
import { defer, redirect } from '@remix-run/node';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
  useRouteError,
} from '@remix-run/react';

import { createEmptyContact, getContacts } from '~/api/data';
import Content from '~/components/Layout';
import { getMuiLinks } from '~/mui/getMuiLinks';
import { MuiMeta } from '~/mui/MuiMeta';
import theme from '~/mui/theme';
import { MuiDocument } from './mui/MuiDocument';

export const meta: MetaFunction = () => [
  { name: 'theme-color', content: theme.palette.primary.main },
  { title: 'Remix Contacts' },
];

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
  const q = url.searchParams.get('q');
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
  const rootData = useRootLoaderData();

  return (
    <MuiDocument>
      <Content {...rootData}>
        <div className="error-page">
          <h1>{isRouteErrorResponse(error) ? error.status : 500}</h1>
          <p>
            {isRouteErrorResponse(error)
              ? error.data.message ?? error.data
              : error instanceof Error
                ? error.message
                : 'An Unknown error ocurred'}
          </p>
        </div>
      </Content>
      <ScrollRestoration />
      <Scripts />
    </MuiDocument>
  );
}
