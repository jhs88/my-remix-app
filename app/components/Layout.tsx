import { Await } from '@remix-run/react';
import { Suspense } from 'react';
import Navbar from '~/components/Navbar';
import { SearchForm } from '~/components/Search';

type LayoutProps = { children?: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div id="sidebar">
        <h1>Remix Contacts</h1>
        <SearchForm />
        <Navbar />
      </div>
      <Suspense fallback={<>Loading...</>}>
        <Await resolve={children}>
          <div id="detail">{children}</div>
        </Await>
      </Suspense>
    </>
  );
}
