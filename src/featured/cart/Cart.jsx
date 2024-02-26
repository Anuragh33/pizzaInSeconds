import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import ButtonInput from '../../ui/ButtonInput';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className='px-4 py-3'>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <h2 className='test-xl mt-7 font-semibold'>Your cart, %NAME%</h2>

      <ul className='mt-3 divide-y divide-neutral-400 border-b'>
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className='mt-6 space-x-2'>
        <ButtonInput to='/order/new' type='primary'>
          Order pizzas
        </ButtonInput>

        <ButtonInput type='secondary'>Clear Cart</ButtonInput>
      </div>
    </div>
  );
}

export default Cart;
