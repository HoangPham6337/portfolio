import { Link, useRouteError } from 'react-router-dom';
import { CursorSplash } from '../components/CursorSplash';
import cryingChiikawa from '../assets/gif/chiikawa-crying.gif';

export const ErrorPage = () => {
  // react-router-dom provides a hook to get more details about the error
  const error: any = useRouteError();
  console.error(error);

  return (
    <div
      className="isolate min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        color: 'var(--text-color)',
        backgroundColor: 'var(--base-color)',
      }}
    >
      <CursorSplash />
      <img
        src={cryingChiikawa}
        alt="Crying Chiikawa"
        className="w-80 h-40"
      />
      <h1
        className="text-6xl font-extrabold mt-4"
        style={{ color: 'var(--highlight-red)' }}
      >
        Oops!
      </h1>
      <p className="text-xl mt-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-lg mt-2 font-mono" style={{ color: 'var(--secondary-text)' }}>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="btn-gradient-flash rounded-2xl p-3 font-medium mt-8"
      >
        Return to Homepage
      </Link>
    </div>
  );
};