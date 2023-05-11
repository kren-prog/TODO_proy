import React from 'react';
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) // props   { searchValue, setSearchValue }
{

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      disabled={loading}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };