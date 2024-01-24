import React from 'react';
import { Pizza } from '../models/pizza';
import '../index.css';

const PizzaCard: React.FC<{ pizza: Pizza }> = ({ pizza }) => {
  return (
    <div className={`pizza ${pizza.soldOut && 'sold-out'}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
      </div>
    </div>
  );
};

export default PizzaCard;
