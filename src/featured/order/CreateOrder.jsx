import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import ButtonInput from '../../ui/ButtonInput';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  //const [withPriority, setWithPriority] = useState(false)
  const cart = fakeCart;

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
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority' className='font-medium'>
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type='hidden' value={JSON.stringify(cart)} name='cart' />
          <ButtonInput type='primary' disabled={isSubmitting}>
            {isSubmitting ? 'Ordering you food...' : 'Order Now!!'}
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
    priority: data.priority === 'on',
  };

  const error = {};
  if (!isValidPhone(order.phone))
    error.phone = 'Please Enter a valid phone number to contact you...';
  if (Object.keys(error).length > 0) return error;

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
