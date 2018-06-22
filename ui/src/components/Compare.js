import React, {Component} from 'react';
import { Control, Form, Errors } from 'react-redux-form';
import { Row, Col, Label, Button, Card, CardBody } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const required = (val) => val && val.length;

class Compare extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postUsers(values.user1, values.user2);
        this.props.resetForm();
    }


    render() {

        if(this.props.redirectToResult) {
            return (
                <Redirect to="/result" />
            )
        }

        return (
            <div  className="container">
                <Card>
                    <CardBody className="card">
                    <Form model="users" onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="user1" md={2}>Enter username of first user : </Label>
                            <Col md={10}>
                                <Control.text model=".user1" id="user1" name="user1"
                                    placeholder="Username 1"
                                    className="form-control"
                                    validators={{
                                        required
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".user1"
                                    show="touched"
                                    messages={{
                                        required: 'Required field'
                                    }}
                                    />
                            </Col>
                        </Row>
                                    
                        <Row className="form-group">
                            <Label htmlFor="user2" md={2}>Enter username of Second user : </Label>
                            <Col md={10}>
                                <Control.text model=".user2" id="user2" name="user2"
                                    placeholder="Username 2"
                                    className="form-control"
                                    validators={{
                                        required
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".user2"
                                    show="touched"
                                    messages={{
                                        required: 'Required field'
                                    }}
                                    />
                            </Col>
                        </Row>
                                    
                        <Row className="form-group">
                            <Col md={{size:10, offset: 2}}>
                                <Button type="submit" color="primary">
                                Compare
                                </Button>
                            </Col>
                        </Row>

                    </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default Compare;