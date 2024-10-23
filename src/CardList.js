import React from 'react';
import Card from './Card';

const CardList = ({ plants }) => {
  return (
    <div>
      {
        plants.map((user, i) => {
          return (
            <Card
              key={i}
              id={plants[i].id}
              name={plants[i].name}
              email={plants[i].email} 
            />
          );
        })
      }
    </div>
  );
}

export default CardList;