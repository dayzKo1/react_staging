import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MyCard from '../MyCard';
import Spinner from 'react-bootstrap/Spinner'
export default class Load extends Component {
  render() {
    return (
      <Container>
        <div style={{textAlign:'center'}}>
        <Spinner animation="grow">
        </Spinner>
        加载中，请稍等...
        </div>
        <Row>
          <Col lg={2} md={3} sm={4}><MyCard /></Col>
          <Col lg={2} md={3} sm={4}><MyCard /></Col>
          <Col lg={2} md={3} sm={4}><MyCard /></Col>
          <Col lg={2} md={3} sm={4}><MyCard /></Col>
          <Col lg={2} md={3} sm={4}><MyCard /></Col>
          <Col lg={2} md={3} sm={4}><MyCard /></Col>
        </Row>
      </Container>
    )
  }
}
