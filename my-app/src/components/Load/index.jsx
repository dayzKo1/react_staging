import React, { Component } from 'react'
import "./index.css";
import { Container,Row,Col } from 'react-bootstrap';
import MyCard from '../MyCard';
export default class Load extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    
      return (
            <Container>
                <Row>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                <Col Col lg={4} md={3} sm={2}><MyCard /></Col>
                </Row>
            </Container>
      )
  }
}
