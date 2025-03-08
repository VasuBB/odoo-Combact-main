import { Helmet } from 'react-helmet-async';

import Games from 'src/sections/games/Games';

// ----------------------------------------------------------------------

export default function Event() {
  return (
    <>
      <Helmet>
        <title> Event | Minimal UI </title>
      </Helmet>

      <Games/>
    </>
  );
}