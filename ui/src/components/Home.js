import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Card, CardHeader, CardBody } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="container head">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Comparator</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>   
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Card>
                            <CardHeader>SPOJ</CardHeader>
                            <CardBody>
                                <Link to="/compare">Let's compare</Link>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4">
                        <Card>
                            <CardHeader>CODE-FORCES</CardHeader>
                            <CardBody>
                                <Link to="/compare">Let's compare</Link>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4">
                        <Card>
                            <CardHeader>CODE-CHEF</CardHeader>
                            <CardBody>
                                <Link to="/compare">Let's compare</Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;