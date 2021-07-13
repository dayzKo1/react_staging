import React, { Component } from 'react'
import axios from "axios";
import "./index.css";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFighterJet, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from 'react-bootstrap';


//初始页面
class BattleBegin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOne: false,
      isTwo: false,
      loadingOne: false,
      loadingTwo: false,
      notFoundPlayerOne: false,
      notFoundPlayerTwo: false,
      errorOne: false,
      errorTwo: false,
      errorOneMessage: "",
      errorTwoMessage: "",
    };
  }
  //查找Player One
  getPlayerOne = async () => {
    //得到Player One输入框的值
    const inputOne = this.refs.inputOne.value;
    //判断是否为空
    if (inputOne.match(/^[ ]*$/)) {
      alert("Player One不能为空！");
      this.refs.inputOne.value = "";
      return;
    }
    //得到Player One的url
    const urlOne = `https://api.github.com/search/repositories?q=${inputOne}`;
    //开始查找
    this.setState({ loadingOne: true });
    try {
      const res = await axios.get(urlOne);
      //判断返回值是否为空
      if (res.data.total_count === 0) {
        this.setState({
          notFoundPlayerOne: true,
        });
        this.refs.inputOne.value = "";
        return;
      }
      //返回值不为空，调用Battle里的setPlayerOne函数存值
      this.props.setPlayerOne(res.data.items[0]);
      //标识已找到
      this.setState({ isOne: true, notFoundPlayerOne: false, errorOne: false });
    } catch (e) {
      if (e.response) {
        //console.log("getPlayerOne: ", e.response.data.message);
        this.setState({
          errorOne: true,
          errorOneMessage: e.response.data.message,
        });
      }
    }
    this.setState({ loadingOne: false });
    if (this.state.isOne && this.state.isTwo) {
      this.refs.battle.disabled = ""
    } else {
      this.refs.battle.disabled = "disabled"
    }
  };
  //重新查找Player One
  findOneAgain = () => {
    this.props.setPlayerOne({});
    this.setState({ isOne: false });
    this.refs.battle.disabled = "disabled"
  };
  //查找Player Two
  getPlayerTwo = async () => {
    const inputTwo = this.refs.inputTwo.value;
    if (inputTwo.match(/^[ ]*$/)) {
      alert("Player Two不能为空！");
      this.refs.inputTwo.value = "";
      return;
    }
    const urlTwo = `https://api.github.com/search/repositories?q=${inputTwo}`;
    this.setState({ loadingTwo: true });
    try {
      const res = await axios.get(urlTwo);
      if (res.data.total_count === 0) {
        this.setState({
          notFoundPlayerTwo: true,
        });
        this.refs.inputTwo.value = "";
        return;
      }
      this.props.setPlayerTwo(res.data.items[0]);
      this.setState({ isTwo: true, notFoundPlayerTwo: false, errorTwo: false });
    } catch (e) {
      if (e.response) {
        //console.log("getPlayerTwo: ", e.response.data.message);
        this.setState({
          errorTwo: true,
          errorTwoMessage: e.response.data.message,
        });
      }
    }
    this.setState({ loadingTwo: false });

    if (this.state.isOne && this.state.isTwo) {
      this.refs.battle.disabled = ""
    } else {
      this.refs.battle.disabled = "disabled"
    }
  };
  //重新查找player two
  findTwoAgain = () => {
    this.props.setPlayerTwo({});
    this.setState({ isTwo: false });
    this.refs.battle.disabled = "disabled";
  };
  //输入框里的值为空时Submit不可点击
  oneInputChange = () => {
    const inputOne = this.refs.inputOne.value;
    if (inputOne.match(/^[ ]*$/)) {
      this.refs.submitOne.className = "btn-primary disabled";
      return;
    }
    this.refs.submitOne.className = "btn-primary";
  };
  twoInputChange = () => {
    const inputTwo = this.refs.inputTwo.value;
    if (inputTwo.match(/^[ ]*$/)) {
      this.refs.submitTwo.className = "btn-primary disabled";
      return;
    }
    this.refs.submitTwo.className = "btn-primary";
  };
  //当焦点在Player One的输入框并按下enter键时
  oneEnter = (e) => {
    if (e.key === "Enter") {
      this.getPlayerOne();
    }
  };
  //当焦点在Player Two
  twoEnter = (e) => {
    if (e.key === "Enter") {
      this.getPlayerTwo();
    }
  };

  render() {
    const { playerOne, playerTwo } = this.props;
    const {
      isOne,
      isTwo,
      loadingOne,
      loadingTwo,
      notFoundPlayerOne,
      notFoundPlayerTwo,
      errorOne,
      errorOneMessage,
      errorTwo,
      errorTwoMessage,
    } = this.state;
    let renderInfoOne;
    let renderInfoTwo;
    if (notFoundPlayerOne) {
      renderInfoOne = (
        <p>
          未找到该用户
        </p>
      );
    } else if (errorOne) {
      renderInfoOne = (
        alert(errorOneMessage)
      );
    }
    if (notFoundPlayerTwo) {
      renderInfoTwo = (
        <p>
          未找到该用户
        </p>
      );
    } else if (errorTwo) {
      renderInfoTwo = (
        alert(errorTwoMessage)
      );
    }
    return (
      <Container>
        <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Instructions</h1>
        <Row style={{ textAlign: 'center', marginBottom: 30 }}>
          <Col lg={4} md={4} sm={6}>
            <h4>Enter Two Github Users</h4>
            <FontAwesomeIcon style={{ color: '#ffbf74', fontSize: 150 }} icon={faUsers} />
          </Col >
          <Col lg={4} md={4} sm={6}>
            <h4>Battle</h4>
            <FontAwesomeIcon style={{ color: '#b8e2f2', fontSize: 150 }} icon={faFighterJet} />
          </Col>
          <Col lg={4} md={4} sm={6}>
            <h4>See The Winner</h4>
            <FontAwesomeIcon style={{ color: '#ffdf36', fontSize: 150 }} icon={faTrophy} />
          </Col>
        </Row>
        <h1 style={{ textAlign: 'center' }}>Fight</h1>
        <Row style={{ textAlign: 'center' }}>
          <Col lg={6} md={6} sm={12}>
            <h4>Player One</h4>
            {loadingOne ? (
              <div>
                正在查找<Spinner animation="border" />
              </div>
            ) : isOne ? (
              <div style={{}}>
                <div >
                  <div style={{ textAlign: 'center' }}>
                    <Button variant="primary" onClick={this.findOneAgain}>
                      重试
                    </Button>
                  </div>
                  <span>playerName:{playerOne.name}</span>
                  <div>
                    <img
                      className="img-thumbnail lazyload"
                      data-src={playerOne.owner.avatar_url}
                      alt={playerOne.name}
                      style={{ height: 100, width: 100 }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <input
                  ref="inputOne"
                  placeholder="输入Player One"
                  onChange={this.oneInputChange}
                  onKeyDown={this.oneEnter}
                ></input>
                <Button
                  variant="primary"
                  onClick={this.getPlayerOne}
                  ref="submitOne"
                  className="disabled"
                >
                  查找
                </Button>
                <div>{renderInfoOne}</div>
              </div>
            )}

          </Col>
          <Col lg={6} md={6} sm={12}>
            <h4>Player Two</h4>
            {
              loadingTwo ? (
                <div>
                  正在查找<Spinner animation="border" />
                </div>
              ) : isTwo ? (
                <div style={{}}>
                  <div style={{ textAlign: 'center' }}>
                    <Button variant="primary" onClick={this.findTwoAgain}>
                      重试
                    </Button>
                  </div>
                  <span>playerName:{playerTwo.name}</span>
                  <div>
                    <img
                      className="img-thumbnail lazyload"
                      data-src={playerTwo.owner.avatar_url}
                      alt={playerTwo.name}
                      style={{ height: 100, width: 100 }}
                    />
                  </div>
                </div>
              ) : (
                <div style={{}}>
                  <input
                    ref="inputTwo"
                    placeholder="输入Player Two"
                    onChange={this.twoInputChange}
                    onKeyDown={this.twoEnter}
                  ></input>
                  <Button
                    variant="primary"
                    onClick={this.getPlayerTwo}
                    ref="submitTwo"
                    className="disabled"
                  >
                    查找
                  </Button>
                  <div>{renderInfoTwo}</div>
                </div>
              )
            }
          </Col>
        </Row>

        <div style={{ textAlign: 'center' }}>

          <NavLink
            to={{
              pathname: `/BattleResult`,
              search: `?user1=${playerOne.name}&user2=${playerTwo.name}`,
              state: {
                playerOne,
                playerTwo,
              },
            }}
          >
            <Button ref="battle" variant="primary" disabled="disabled">Battle</Button>
          </NavLink>

        </div>

      </Container>
    );
  }
}
//Battle
export default class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: {}, //存储第一个数据
      playerTwo: {}, //存储第二个数据
    };
  }
  //通过参数设置存储第一个数据
  setPlayerOne = (oneData) => {
    this.setState({
      playerOne: oneData,
    });
  };
  setPlayerTwo = (twoData) => {
    this.setState({
      playerTwo: twoData,
    });
  };
  render() {
    const { playerOne, playerTwo } = this.state;
    return (
      <BattleBegin
        setPlayerOne={this.setPlayerOne}
        setPlayerTwo={this.setPlayerTwo}
        playerOne={playerOne}
        playerTwo={playerTwo}
      ></BattleBegin>

    );
  }
}