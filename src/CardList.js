import React from 'react';
import Card from './Card';

const CardList = ({ plants }) => {
  return (
    <div>
      {
        plants && plants.length > 0 ? (
          plants.map((user, i) => {
            return (
              <Card
                key={i}
                id={plants[i].id}
                name={plants[i].name}
                email={plants[i].email}
                city={plants[i].address.city}
              />
            );
          })
        ) : (<p>No people found</p>)
      }
    </div>
  );
}

export default CardList;