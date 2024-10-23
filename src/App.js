import React from 'react';
import CardList from './CardList';
import { plants } from './plants';

const App = () => {
  return (
    <CardList plants={plants} />
  );
}

export default App;