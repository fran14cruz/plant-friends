import React, { useState, useEffect, ChangeEvent } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { getData } from './utils/data.utils';
import './App.css';

export type Plant = {
  id: string
  name: string
  email: string
  address: {
    city: string
  }
}

function App() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => { // is called every time the app renders
    // fetch('https://jsonplaceholder.typicode.com/users') // make an HTTP request
    //   .then(response => response.json()) // parse JSON to JS object
    //   .then(users => setPlants(users))
    //   .catch(err => console.log(err))

    const fetchUsers = async() => { // '[]' because it's an array
      const users = await getData<Plant[]>('https://jsonplaceholder.typicode.com/users');
      setPlants(users);
    }
    fetchUsers();
  }, []) // only run useEffect if [] has changed, and it will never change. So this hook
  // will only run once, i.e. only the first time the component is rendered.
  // this is a shortcut for componentDidMount lifecycle method.

  // handle search event
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchfield(event.target.value);
  }

  // filter logic
  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  if (plants.length === 0) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='tc'>
        <h1 className='f-headline'>Random Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList plants={filteredPlants} />
      </div>
    );
  }
}

export default App;