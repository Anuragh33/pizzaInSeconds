import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import ButtonInput from '../../ui/ButtonInput';
import Username from '../user/Username';
import { useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
import { formatCurrency } from '../../utilites/helpers';
import { logout } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const orderPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className='px-4 py-6'>
      <h2 className='mb-8 text-xl font-semibold'>Ready to order? Lets go!</h2>

      {/* <Form method="POST" action="/order/new"> */}

      <Form method='POST'>
        <div className='sm: sm: mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <label className='sm: basis-40'>First Name</label>
          <input
            className='grow rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-emerald-400 md:px-6 md:py-3'
            type='text'
            name='customer'
            defaultValue={username}
            required
          />
        </div>

        <div className='sm: sm: mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <label className='sm: basis-40'>Phone number</label>
          <div className='grow'>
            <input
              className=' w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-emerald-400 md:px-6 md:py-3'
              type='tel'
              name='phone'
              required
            />
            {formErrors?.phone && (
              <p className='mt-5 rounded-md bg-red-100 p-2 text-xs text-red-700'>
                {' '}
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className='sm: sm: mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <label className='sm: basis-40'>Address</label>
          <div className='grow'>
            <input
              className=' w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-emerald-400 md:px-6 md:py-3'
              type='text'
              name='address'
              required
            />
          </div>
        </div>

        <div className='mb-12 flex items-center gap-5'>
          <input
            className='h-6 w-6  accent-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-offset-2'
            type='checkbox'
            name='priority'
            id='priority'
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority' className='font-medium'>
            {username}, Do you want a priority delivery?
          </label>
        </div>

        <div>
          <input type='hidden' value={JSON.stringify(cart)} name='cart' />
          <ButtonInput type='primary' disabled={isSubmitting}>
            {isSubmitting
              ? 'Ordering you food...'
              : `Order Now ${formatCurrency(orderPrice)}`}
          </ButtonInput>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const error = {};
  if (!isValidPhone(order.phone))
    error.phone = 'Please Enter a valid phone number to contact you...';
  if (Object.keys(error).length > 0) return error;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());
  store.dispatch(logout());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
