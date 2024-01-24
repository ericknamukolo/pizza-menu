import React, { Fragment } from 'react';
import PizzaCard from './pizza-card';
import { Pizza } from '../models/pizza';
import '../index.css';

const Menu: React.FC<{ pizzas: Pizza[] }> = (props) => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <div className='pizzas'>
        {props.pizzas.map((pizza) => (
          <PizzaCard pizza={pizza} key={pizza.name + pizza.photoName} />
        ))}
      </div>
    </main>
  );
};

export default Menu;
