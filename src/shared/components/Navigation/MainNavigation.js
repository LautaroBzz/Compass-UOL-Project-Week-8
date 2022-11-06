import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <React.Fragment>
      { drawerOpen && <Backdrop onClick={() => setDrawerOpen(false)} /> }

      <SideDrawer show={drawerOpen} onClick={() => setDrawerOpen(false)}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={() => setDrawerOpen(true)}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
