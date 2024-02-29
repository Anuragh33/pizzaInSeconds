import { useSelector } from 'react-redux';
import ButtonInput from '../../ui/ButtonInput';
import { formatCurrency } from '../../utilites/helpers';
import { deleteItem, getCurrentQuantityById } from './cartSlice';
import DeleteItem from './DeleteItem';
import UpdateCart from './UpdateCart';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className='sm: items-center py-3 sm:flex sm:justify-between'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>

      <div className='flex items-center justify-between sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <UpdateCart pizzaId={pizzaId} currentQuantity={currentQuantity} />

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
