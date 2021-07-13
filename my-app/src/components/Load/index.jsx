import React, { Component } from 'react'
import { Container, } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
export default class Load extends Component {
  render() {
    return (
      <Container>
        <div style={{ textAlign: 'center' }}>
          <Spinner animation="grow">
          </Spinner>
          加载中，请稍等...
        </div>
        {/* <Row>
          <Col lg={3} md={4} sm={6}><MyCard /></Col>
          <Col lg={3} md={4} sm={6}><MyCard /></Col>
          <Col lg={3} md={4} sm={6}><MyCard /></Col>
          <Col lg={3} md={4} sm={6}><MyCard /></Col>
          <Col lg={3} md={4} sm={6}><MyCard /></Col>
          <Col lg={3} md={4} sm={6}><MyCard /></Col>
        </Row> */}
      </Container>
    )
  }
}
