import { useSelector } from 'react-redux';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className='px-4 py-3'>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>
      <p className='test-xl mt-7 font-semibold'>
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
