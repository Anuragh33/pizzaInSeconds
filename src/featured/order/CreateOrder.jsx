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
    <div>
      <h2>Ready to order? Lets go!</h2>

      {/* <Form method="POST" action="/order/new"> */}

      <Form method='POST'>
        <div>
          <label>First Name</label>
          <input
            className='w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-emerald-400 md:px-6 md:py-3'
            type='text'
            name='customer'
            required
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input
              className='w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-emerald-400 md:px-6 md:py-3'
              type='tel'
              name='phone'
              required
            />
          </div>
          {formErrors?.phone && <p> {formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              className='w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-emerald-400 md:px-6 md:py-3'
              type='text'
              name='address'
              required
            />
          </div>
        </div>

        <div>
          <input
            className='h-6 w-6 accent-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-offset-2'
            type='checkbox'
            name='priority'
            id='priority'
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Need a priority order?</label>
        </div>

        <div>
          <input type='hidden' value={JSON.stringify(cart)} name='cart' />
          <ButtonInput disabled={isSubmitting}>
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
