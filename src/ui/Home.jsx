import { useSelector } from 'react-redux';
import CreateUser from '../featured/user/CreateUser';
import ButtonInput from './ButtonInput';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className='my-10 px-4 text-center sm:my-16'>
      <h1 className='mb-9 text-center text-xl font-semibold md:text-3xl'>
        The best pizza.
        <br />
        <span className='text-emerald-500'>
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <ButtonInput to='/menu' type='primary'>
          Continue Ordering, {username}
        </ButtonInput>
      )}
    </div>
  );
}

export default Home;
