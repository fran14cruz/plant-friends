import React, { ChangeEvent } from 'react';

type SearchBoxProps = {
  placeholder?: string
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ placeholder, searchChange }: SearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-washed-yellow'
        type='search'
        placeholder={placeholder}
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;