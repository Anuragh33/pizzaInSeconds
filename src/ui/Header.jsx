import { Link } from 'react-router-dom';
import SearchOrder from '../featured/order/SearchOrder';
import Username from '../featured/user/Username';
function Header() {
  return (
    <header className=' border-b border-stone-500 bg-emerald-500 px-5 py-4 uppercase sm:px-6'>
      <Link to='/' className='tracking-widest'>
        Pizza In Seconds Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
