import { useDispatch } from 'react-redux';
import ButtonInput from '../../ui/ButtonInput';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <ButtonInput onClick={handleDeleteItem} type='delete'>
      Delete
    </ButtonInput>
  );
}

export default DeleteItem;
