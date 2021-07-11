import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import './index.css'
//头部的链接：Popular Battle
class LinkList extends Component {
  render() {
    return (
      <ul className="header_ul d-flex flex-row">
        <li className="header_li">
          <NavLink to="/Popular" className="navlink">
            Popular
          </NavLink>
        </li>
        <li className="header_li">
          <NavLink to="/Battle" className="navlink">
            Battle
          </NavLink>
        </li>
      </ul>
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