import LinkButton from '../../ui/LinkButton';
import ButtonInput from '../../ui/ButtonInput';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartQuantity } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const cartLength = cart.length;

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cartLength) return <EmptyCart />;

  return (
    <div className='px-4 py-3'>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>
      <h2 className='test-xl mt-7 font-semibold'>Your cart, {username}</h2>
      <ul className='mt-3 divide-y divide-neutral-400 border-b'>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className='mt-6 space-x-2'>
        <ButtonInput to='/order/new' type='primary'>
          Order pizzas
        </ButtonInput>

        <ButtonInput onClick={handleClearCart} type='secondary'>
          Clear Cart
        </ButtonInput>
      </div>
    </div>
  );
}

export default Cart;
