import React from 'react';
import Table from 'react-bootstrap/Table';

export const DashboardPage = (props) => {

    const title = 'React Idle Timeout'

    console.log(props)

    if(props.isIdleTimeOut) {
        props.history.push('/')
    }
    
    return (
        <div className="container mgntop">
            <h2>Users</h2>         
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>First name 1</td>
                    <td>Last Name 1</td>
                    <td>first.last@example.com</td>
                </tr>
                <tr>
                    <td>First name 2</td>
                    <td>Last Name 2</td>
                    <td>first.last@example.com</td>
                </tr>
                <tr>
                    <td>First name 3</td>
                    <td>Last Name 3</td>
                    <td>first.last@example.com</td>
                </tr>
                <tr>
                    <td>First name 4</td>
                    <td>Last Name 4</td>
                    <td>first.last@example.com</td>
                </tr>
                <tr>
                    <td>First name 5</td>
                    <td>Last Name 5</td>
                    <td>first.last@example.com</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}