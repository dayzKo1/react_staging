import React, { Component } from 'react'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUsers,faStar,faShareAlt,faExclamation,} from "@fortawesome/free-solid-svg-icons";

export default class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }
  openNewPage = () => {
    window.open(this.props.htmlUrl);
  };

  render() {
    const {
      listNum,
      avatar,
      name,
      starsCount,
      forksCount,
      openIssuesCount,
    } = this.props;

    const itemDetStyle = {
      margin: "0 auto",
    };

    const listUserIcon = {
      color: "#ffbf74",
      width: "20px",
    };

    const listStarIcon = {
      color: "#ffd700",
      width: "20px",
    };

    const listForkIcon = {
      color: "#82c3f5",
      width: "20px",
    };

    const listIssueIcon = {
      color: "#f18a92",
      width: "20px",
    };

    return (
      <div className="github-list d-flex flex-column" onClick={this.openNewPage}>
        <span className="listNumber">#{listNum}</span>
        <img src={avatar} alt="" className="listAvatar" />
        <p className="listName">{name}</p>
        <div style={itemDetStyle}>
          <div style={{ marginBottom: "5px" }}>
            <FontAwesomeIcon style={listUserIcon} icon={faUsers} />
            <span style={{ fontWeight: "bold" }}> {name}</span>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <FontAwesomeIcon style={listStarIcon} icon={faStar} />
            <span>{starsCount} stars</span>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <FontAwesomeIcon style={listForkIcon} icon={faShareAlt} />
            <span>{forksCount} forks</span>
          </div>
          <div>
            <FontAwesomeIcon style={listIssueIcon} icon={faExclamation} />
            <span>{openIssuesCount} open issues</span>
          </div>
        </div>
      </div>
    );
  }
}
