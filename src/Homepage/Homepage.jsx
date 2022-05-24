import React from 'react';
import Saassolution from '../Component/Saassolution/Saassolution';
import SwCycle from '../Component/SwCycle/SwCycle';
import Icon from '../Component/Icon/icon';
import Intro from '../Component/Intro_section/intro';
import BestCompany from '../Component/BestCompany/BestCompany';
import CardCarousel from '../Component/CardCarousel/CardCarousel';
import Courosel1 from '../Component/courosel1/courosel1';

const Homepage = () => {
  return (
    <div>
      <Intro />
      <BestCompany />
      <Courosel1 />
      <Saassolution />
      <SwCycle />
      <Icon />
      <CardCarousel />
    </div>
  )
}

export default Homepage;
