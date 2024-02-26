import ButtonInput from '../../ui/ButtonInput';
import { formatCurrency } from '../../utilites/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className='sm: items-center py-3 sm:flex sm:justify-between'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>

      <div className='flex items-center justify-between sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <ButtonInput type='small'>Delete</ButtonInput>
      </div>
    </li>
  );
}

export default CartItem;
