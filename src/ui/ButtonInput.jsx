import { Link } from 'react-router-dom';

function ButtonInput({ children, disabled, to, type }) {
  const base =
    'inline-block rounded-full bg-emerald-500 font-semibold uppercase tracking-wide text-zinc-700 transition-colors duration-300 hover:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-400 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' px-4 px-3 sm:px-6 sm:py-4',
    small: base + ' py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block rounded-full font-semibold border-2 border-neutral-300 uppercase tracking-wide text-zinc-400 transition-colors duration-300 hover:bg-stone-300 hover: text-stone-800  focus: text-stone-800focus:bg-emerald-400 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed  px-4 px-2.5 sm:px-6 sm:py-4',
  };

  if (to)
    return (
      <Link className={styles[type]} to='/order/new'>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default ButtonInput;
