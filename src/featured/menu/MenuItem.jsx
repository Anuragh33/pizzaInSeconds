import { formatCurrency } from '../../utilites/helpers';

import ButtonInput from '../../ui/ButtonInput';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className='flex gap-4 py-4'>
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? ' opacity-75 grayscale' : ''}`}
      />
      <div className='flex grow flex-col pt-0.5'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm capitalize italic text-neutral-500'>
          {ingredients.join(', ')}
        </p>
        <div className='mt-auto flex items-center justify-between'>
          {!soldOut ? (
            <p className='text-sm'>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='text-sm font-medium uppercase text-neutral-400'>
              Sold out
            </p>
          )}

          <ButtonInput type='small'>Add to Cart</ButtonInput>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
