import { Link } from 'react-router-dom';

function ButtonInput({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-emerald-500 font-semibold uppercase tracking-wide text-zinc-700 transition-colors duration-300 hover:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-400 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' px-4 px-3 sm:px-6 sm:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs ',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm ',
    secondary:
      'inline-block text-sm rounded-full font-semibold border-2 border-neutral-300 uppercase tracking-wide text-zinc-400 transition-colors duration-300 hover:bg-stone-300 hover: text-stone-800  focus: text-stone-800focus:bg-emerald-400 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed  px-4 px-2.5 sm:px-6 sm:py-4',

    logout:
      ' inline-block text-xs rounded-full font-semibold uppercase tracking-wide bg-zinc-300 text-zinc-700 transition-colors duration-300 hover:bg-zinc-400 focus:bg-zinc-600 focus:outline-none focus:ring focus:ring-zinc-100 focus:ring-offset-2 disabled:cursor-not-allowed p-3 ',

    delete:
      ' inline-block text-xs rounded-full font-semibold uppercase tracking-wide bg-red-700 text-zinc-100 transition-colors duration-300 hover:bg-red-500 focus:bg-red-600 focus:outline-none focus:ring focus:ring-zinc-100 focus:ring-offset-2 disabled:cursor-not-allowed p-3 ',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonInput;
