import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './index.css'
import { Container } from 'react-bootstrap';
//头部的链接：Popular Battle
class LinkList extends Component {
  render() {
    return (
      <Container>

        <NavLink 
        style={{marginRight:20}}
        activeClassName="MyNavLink"
        to="/Popular">
          Popular
        </NavLink>

        <NavLink 
        activeClassName="MyNavLink"
        to="/Battle">
          Battle
        </NavLink>
        
      </Container>
    );
  }
}

//头部
class Header extends React.Component {
  render() {
    const { pagesClick, nowpages } = this.props;
    return (
      <div className="header">
        <nav>
          <LinkList pagesClick={pagesClick} nowpages={nowpages}></LinkList>
        </nav>
      </div>
    );
  }
}
export default Header;