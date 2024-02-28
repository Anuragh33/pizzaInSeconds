import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className='text-semibold hidden text-sm tracking-widest md:block'>
      {username}
    </div>
  );
}

export default Username;
