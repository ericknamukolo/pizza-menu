import React, { useState } from 'react';
import Header from './components/header';
import HomeContainer from './containers/home-container';
import Menu from './components/menu';
import { pizzaData } from './data';
import Footer from './components/footer';

function App() {
  const [pizzas, setPizzas] = useState(pizzaData);

  return (
    <HomeContainer>
      <Header />
      <Menu pizzas={pizzas} />
      <Footer />
    </HomeContainer>
  );
}

export default App;
