import React from 'react';

type CardProps = {
  id: string
  name: string
  email: string
  city: string
}

const Card = ({ id, name, email, city } : CardProps) => {
  return (
    <div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='plant' src={`https://robohash.org/set_set5/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <strong>Location: </strong><p>{city}</p>
      </div>
    </div>
  );
}

export default Card;