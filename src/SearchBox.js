import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-washed-yellow'
        type='search'
        placeholder='search plants'
        onChange={searchChange}
      />
    </div>
    
  );
}

export default SearchBox;