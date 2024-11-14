import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  const [plants, setPlants] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => { // is called every time the app renders
    fetch('https://jsonplaceholder.typicode.com/users') // make an HTTP request
      .then(response => response.json()) // parse JSON to JS object
      .then(users => setPlants(users))
      .catch(err => console.log(err))
  }, []) // only run useEffect if [] has changed, and it will never change. So this hook
  // will only run once, i.e. only the first time the component is rendered.
  // this is a shortcut for componentDidMount lifecycle method.

  // handle search event
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  // filter logic
  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  if (!plants.length) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='tc'>
        <h1 className='f-headline'>Random Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList plants={filteredPlants} />
        </Scroll>
      </div>
    );
  }
}

export default App;