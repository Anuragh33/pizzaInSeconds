import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className='bg-neutral-400 text-zinc-700'>
      <p className='text-zinc-800'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
