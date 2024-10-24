import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // make an HTTP request
      .then(response => {
        return response.json(); // parse JSON to JS object
      })
      .then(users => {
        this.setState({ plants: users})
      })

  }

  // handle event
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value)
  }

  render() {
    const filteredPlants = this.state.plants.filter(plant => {
      return plant.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.plants.length === 0) {
      return <div>Loading...</div>
    } else {
      return (
        <div className='tc'>
          <h1 className='f-headline'>Plant Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList plants={filteredPlants} />
        </div>
      );
    }  
  }
}

export default App;