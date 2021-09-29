import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router'


function Signup(props) {

    const [value, setValue] = useState({
        name: "",
        username: "",
        password: ""
    })



    const onSubmitFunction = async (e) => {
        console.log(props);
        e.preventDefault()
        try {
          const response = await fetch('http://localhost:3001/authors', {
            method: "POST",
            body: JSON.stringify(value),
            headers: {
              "Content-Type": "application/json"
            }
          })
          if (response.ok) {
            setValue('')
            props.history.push("blogs")
          } else {
            console.log('response is not ok');
          }
        } catch (error) {
            console.log(error);
        }
      }

    return (
        <Container>
            <Row className='signup'>
                <Col xs={8} sm={8} md={6} xl={4}>
                    <Form onSubmit={onSubmitFunction}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Full Name"
                                value={value.name}
                                onChange={e => setValue({ ...value, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={value.username}
                                onChange={e => setValue({ ...value, username: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className='mt-2'>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={value.password}
                                onChange={e => setValue({ ...value, password: e.target.value })}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='mt-2' onClick={onSubmitFunction}>
                            Sign up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(Signup) 
