import { Link } from 'react-router-dom';

function ButtonInput({ children, disabled, to }) {
  const className =
    'inline-block rounded-full bg-emerald-500 px-4 py-3 font-semibold uppercase tracking-wide text-zinc-700 transition-colors duration-300 hover:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-400 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';

  if (to)
    return (
      <Link className={className} to='/order/new'>
        {children}
      </Link>
    );

  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default ButtonInput;
