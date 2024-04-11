import { useNavigation } from '@remix-run/react';
import { Suspense } from 'react';
import Navbar from '~/components/Navbar';
import { SearchForm } from '~/components/Search';

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const navigation = useNavigation();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');
  return (
    <>
      <div id="sidebar">
        <h1>Remix Contacts</h1>
        <SearchForm />
        <Navbar />
      </div>
      <div
        className={
          navigation.state === 'loading' && !searching ? 'loading' : ''
        }
        id="detail"
      >
        <Suspense>{children}</Suspense>
      </div>
    </>
  );
}
