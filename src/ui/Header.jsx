import { Link, useNavigate } from 'react-router-dom';
import SearchOrder from '../featured/order/SearchOrder';
import Username from '../featured/user/Username';
import ButtonInput from './ButtonInput';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../featured/user/userSlice';

function Header() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClick() {
    dispatch(logout());
    navigate('/');
  }

  return (
    <header className=' flex items-center justify-between border-b border-stone-500 bg-emerald-500 px-5 py-4 uppercase sm:px-6'>
      {/* <img
        className='w-15 h-10 rounded-full object-scale-down'
        src='./Designer.png'
        alt='pizza in seconds'
      /> */}
      <Link to='/' className='tracking-widest'>
        🍕 Pizza In Seconds Co.
      </Link>
      <SearchOrder />
      <Username />

      {username && (
        <ButtonInput type='logout' onClick={handleClick}>
          Logout
        </ButtonInput>
      )}
    </header>
  );
}

export default Header;
