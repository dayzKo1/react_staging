import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar, faShareAlt, faExclamation, } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
export default class MyCard extends Component {
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
    return (
      <div className="MyCard" onClick={this.openNewPage} title={name}>
        <Card className="Card" style={{ marginBottom: 30, backgroundColor: '#b8e2f2' }}>
          <div className="CardNum" style={{ textAlign: 'center' }}>#{listNum}</div>
          <Card.Img className="CardImg img-fluid img-thumbnail lazyload" style={{ width: '100%', padding: 20 }} variant="top" data-src={avatar} />
          <Card.Body>
            <Card.Title className="CardTitle" style={{ textAlign: 'center', fontSize: 15, color: 'red', textTransform: 'uppercase' }}>{name}</Card.Title>
            <div>
              <div style={{ marginBottom: "5px" }}>
                <FontAwesomeIcon style={{ color: '#ffbf74', width: 20 }} icon={faUsers} />
                <span> {name}</span>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <FontAwesomeIcon style={{ color: '#ffd700', width: 20 }} icon={faStar} />
                <span>{starsCount} stars</span>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <FontAwesomeIcon style={{ color: '#82c3f5', width: 20 }} icon={faShareAlt} />
                <span>{forksCount} forks</span>
              </div>
              <div>
                <FontAwesomeIcon style={{ color: '#f18a92', width: 20 }} icon={faExclamation} />
                <span>{openIssuesCount} open Issues</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
MyCard.defaultProps = {
  listNum: '???',
  avatar: 'https://avatars.githubusercontent.com/u/63722633?v=4',
  name: '???',
  starsCount: '???',
  forksCount: '???',
  openIssuesCount: '???'
}