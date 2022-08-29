import React from 'react'
import {Button,Card,Row,Col} from 'react-bootstrap';


function UserForm() {
  return (
    <div>
        <Row>
            <Col md={{ span: 7, offset: 3 }} >
            <Card>
      <Card.Header>User Register</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
        </Row>
  
    </div>
  )
}

export default UserForm