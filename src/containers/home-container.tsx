import React, { ReactNode } from 'react';
import '../index.css';

const HomeContainer: React.FC<{ children: ReactNode }> = (props) => {
  return <div className='container'>{props.children}</div>;
};

export default HomeContainer;
