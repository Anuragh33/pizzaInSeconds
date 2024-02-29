import { useDispatch, useSelector } from 'react-redux';
import ButtonInput from '../../ui/ButtonInput';
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from './cartSlice';

function UpdateCart({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increaseItemQuantity(pizzaId));
  }
  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className=' flex items-center gap-1 md:gap-3'>
      <ButtonInput type='round' onClick={handleDecrease}>
        -
      </ButtonInput>
      <span className=' text-sm font-bold'>{currentQuantity}</span>
      <ButtonInput type='round' onClick={handleIncrease}>
        +
      </ButtonInput>
    </div>
  );
}

export default UpdateCart;
