import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

import { formatCurrency } from '../../utilites/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    totalCartQuantity !== 0 && (
      <div className='flex items-center justify-between bg-neutral-400 px-4 py-4 text-sm uppercase text-zinc-700 sm:px-6 md:text-base'>
        <p className='space-x-5 font-semibold text-zinc-800 sm:space-x-6'>
          <span>{totalCartQuantity} Pizzas</span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
        <Link to='/cart'>Open cart &rarr;</Link>
      </div>
    )
  );
}

export default CartOverview;
