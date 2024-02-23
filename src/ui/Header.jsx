import { Link } from 'react-router-dom';
import SearchOrder from '../featured/order/SearchOrder';
function Header() {
  return (
    <header className='bg-emerald-500'>
      <Link to='/'>Pizza In Seconds Co.</Link>
      <SearchOrder />
      <p>Anuragh</p>
    </header>
  );
}

export default Header;
