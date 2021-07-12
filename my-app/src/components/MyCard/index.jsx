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
      <div className="MyCard" onClick={this.openNewPage}>
        <Card className="Card" style={{ marginBottom: 20, backgroundColor: 'skyblue' }}>
          <div className="CardNum" style={{ textAlign: 'center' }}>#{listNum}</div>
          <Card.Img className="CardImg img-fluid img-thumbnail" style={{ width: '100%' }} variant="top" src={avatar} />
          <Card.Body>
            <Card.Title className="CardTitle" style={{ textAlign: 'center' }}>{name}</Card.Title>
            <Card.Text>
              <ul className="GitHubList" style={{ listStyle: 'none' }}>
                <li><FontAwesomeIcon style={{ color: '#ffbf74', width: 20 }} icon={faUsers} />{name}</li>
                <li><FontAwesomeIcon style={{ color: '#ffd700', width: 20 }} icon={faStar} />{starsCount} stars</li>
                <li><FontAwesomeIcon style={{ color: '#82c3f5', width: 20 }} icon={faShareAlt} />{forksCount} forks</li>
                <li><FontAwesomeIcon style={{ color: '#f18a92', width: 20 }} icon={faExclamation} />{openIssuesCount} open issues</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      // <div className="" onClick={this.openNewPage}>
      //   <span className="">#{listNum}</span>
      //   <img src={avatar} alt="" className="" />
      //   <p className="">{name}</p>
      //   <div style={{ margin: '0 auto' }}>
      //     <div style={{ marginBottom: "5px" }}>
      //       <FontAwesomeIcon style={{ color: '#ffbf74', width: 20 }} icon={faUsers} />
      //       <span style={{ fontWeight: "bold" }}> {name}</span>
      //     </div>
      //     <div style={{ marginBottom: "5px" }}>
      //       <FontAwesomeIcon style={{ color: '#ffd700', width: 20 }} icon={faStar} />
      //       <span>{starsCount} stars</span>
      //     </div>
      //     <div style={{ marginBottom: "5px" }}>
      //       <FontAwesomeIcon style={{ color: '#82c3f5', width: 20 }} icon={faShareAlt} />
      //       <span>{forksCount} forks</span>
      //     </div>
      //     <div>
      //       <FontAwesomeIcon style={{ color: '#f18a92', width: 20 }} icon={faExclamation} />
      //       <span>{openIssuesCount} open issues</span>
      //     </div>
      //   </div>
      // </div>
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