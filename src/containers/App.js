import React, { useEffect } from 'react';
// import { useState } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestPlants } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    plants: state.requestPlants.plants,
    isPending: state.requestPlants.isPending,
    error: state.requestPlants.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value));
    },
    onRequestPlants: () => dispatch(requestPlants())
  }
}

function App(props) {
  const { searchField, onSearchChange, plants, isPending, onRequestPlants } = props;
  // const [plants, setPlants] = useState([]);
  // const [searchfield, setSearchfield] = useState(''); replaced by Redux

  // This has been replaced by Redux
  // Fetch data when the component mounts
  // useEffect(() => { // is called every time the app renders
  //   fetch('https://jsonplaceholder.typicode.com/users') // make an HTTP request
  //     .then(response => response.json()) // parse JSON to JS object
  //     .then(users => setPlants(users))
  //     .catch(err => console.log(err))
  // }, []) // only run useEffect if [] has changed, and it will never change. So this hook
  // will only run once, i.e. only the first time the component is rendered.
  // this is a shortcut for componentDidMount lifecycle method.

  useEffect(() => {
    onRequestPlants();
  }, [onRequestPlants])

  // handle search event
  // replaced by redux logic
  // const onSearchChange = (event) => {
  //   setSearchfield(event.target.value);
  // }

  // filter logic
  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchField.toLowerCase());
  })
  if (isPending) {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);