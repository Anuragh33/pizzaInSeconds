import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className='divide-y divide-neutral-400 px-2 '>
      {' '}
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//loader is imported as menuLoader in app.jsx file
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
