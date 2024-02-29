import ButtonInput from '../../ui/ButtonInput';
import { formatCurrency } from '../../utilites/helpers';
import { deleteItem } from './cartSlice';
import DeleteItem from './DeleteItem';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className='sm: items-center py-3 sm:flex sm:justify-between'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>

      <div className='flex items-center justify-between sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
