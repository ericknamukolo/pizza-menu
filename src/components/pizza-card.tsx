import React from 'react';
import { Pizza } from '../models/pizza';
import '../index.css';

const PizzaCard: React.FC<{ pizza: Pizza }> = (props) => {
  return (
    <div className='pizza'>
      <img src={props.pizza.photoName} alt={props.pizza.name} />
      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>
        <span>{props.pizza.price}</span>
      </div>
    </div>
  );
};

export default PizzaCard;
