import React, { Fragment } from 'react';
import PizzaCard from './components/pizza-card';
import Header from './components/header';
import HomeContainer from './containers/home-container';

function App() {
  return (
    <HomeContainer>
      <Header />
      <PizzaCard />
    </HomeContainer>
  );
}

export default App;
