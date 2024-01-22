import React from 'react';
import { Pizza } from '../models/pizza';
import '../index.css';

const PizzaCard: React.FC<{ pizza: Pizza }> = (props) => {
  console.log(`../${props.pizza.photoName}`);
  return (
    <div className='pizza'>
      <img src={`../${props.pizza.photoName}`} alt={props.pizza.name} />
      <h3>{props.pizza.name}</h3>
      <p>{props.pizza.ingredients}</p>
    </div>
  );
};

export default PizzaCard;
