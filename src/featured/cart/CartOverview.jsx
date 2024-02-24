import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className='bg-neutral-400 px-4 py-4 text-sm uppercase text-zinc-700 sm:px-6 md:text-base'>
      <p className='space-x-5 font-semibold text-zinc-800 sm:space-x-6'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
