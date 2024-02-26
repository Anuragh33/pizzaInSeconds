import { useState } from 'react';
import ButtonInput from '../../ui/ButtonInput';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='test mb-4 text-sm text-stone-800 md:text-base'>
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type='text'
        placeholder=' Your Name...'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='mb-8 h-8 w-72 rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-emerald-400 md:px-6 md:py-3 '
      />

      {username !== '' && (
        <div>
          <ButtonInput type='primary'>Start ordering</ButtonInput>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
