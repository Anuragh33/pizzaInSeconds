import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='w-28 rounded-full bg-emerald-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-800 focus:outline-none focus:ring focus:ring-emerald-800 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
        placeholder=' Search your order'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
