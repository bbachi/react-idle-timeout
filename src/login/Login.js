import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class LoginPage extends React.Component {

    constructor(props){
        super(props)
    }

    onSubmit = () => {
        this.props.history.push('/dashboard')
    }
    
    render() {
        return (
            <div className="d-flex justify-content-md-center">
                <div className="loginbox">
                    <div className="d-flex justify-content-md-center">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={this.onSubmit} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}