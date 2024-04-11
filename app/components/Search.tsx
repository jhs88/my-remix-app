import type { LoaderFunctionArgs } from '@remix-run/node';
import {
  Form,
  json,
  useLoaderData,
  useNavigation,
  useSubmit,
} from '@remix-run/react';

export async function loader({ request }: LoaderFunctionArgs) {
  const q = new URL(request.url).searchParams.get('q');
  return json({ q });
}

export function SearchForm() {
  const { q } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');
  const submit = useSubmit();

  return (
    <div>
      <Form
        id="search-form"
        onChange={(event) => {
          const isFirstSearch = q === null;
          submit(event.currentTarget, { replace: !isFirstSearch });
        }}
        role="search"
      >
        <input
          aria-label="Search contacts"
          className={searching ? 'loading' : ''}
          defaultValue={q ?? ''}
          id="q"
          name="q"
          placeholder="Search"
          type="search"
        />
        <div aria-hidden hidden={!searching} id="search-spinner" />
      </Form>
      <Form method="post">
        <button type="submit">New</button>
      </Form>
    </div>
  );
}
