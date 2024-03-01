import { useFetcher } from 'react-router-dom';
import ButtonInput from '../../ui/ButtonInput';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <ButtonInput type='primary'>Make order priority??</ButtonInput>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
