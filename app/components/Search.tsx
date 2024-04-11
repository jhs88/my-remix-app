import { Form, useNavigation, useSubmit } from '@remix-run/react';
import { useRootLoaderData } from '~/root';

export function SearchForm() {
  const { q } = useRootLoaderData();
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
