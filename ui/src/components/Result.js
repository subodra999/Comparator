import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
import { spojurl } from '../shared/baseUrl';
import { Card, CardBody, CardHeader, Button, UncontrolledCollapse, Badge } from 'reactstrap';

function Profile({ name, username, institution, points, count}) {
    return (
        <Card>
            <CardHeader>
                <h4><i class="fa fa-user-o" aria-hidden="true"></i> {name}</h4>
            </CardHeader>
            <CardBody>
                <h2>Username : {username}</h2>
                <p>Problem solved count : {count}</p>
                <p>Institution : {institution} </p>
                <p>Points earned : {points} </p>
            </CardBody>
        </Card>
    );
}

function Problem({ problems }) {
    return (
        problems.map((prob) => {
            return(
                <a href={spojurl+prob} target="_blank">
                <Button color="success" className="pill-btn" style={{ margin: '0.5rem' }}>{prob}</Button>
                </a>
        )})
    );
}


function Display({ details }) {
    return (
        <React.Fragment>
        <div className="row">
            <div className="col-12 col-md-6">
                <Profile name={details.user1_name} username={details.user1_username} institution={details.user1_institution} points={details.user1_points} count={details.user1_cnt} />
            </div>
            <div className="col-12 col-md-6">
                <Profile name={details.user2_name} username={details.user2_username} institution={details.user2_institution} points={details.user2_points} count={details.user2_cnt} />
            </div>
        </div>
        <div className="container">
            <div className="row">
                <Button outline color="warning" size="lg" block id="user1P" style={{ marginBottom: '1rem' }}>
                    {details.user1_username} unique solved : count = {details.user1_uncnt}
                </Button>
                <UncontrolledCollapse toggler="#user1P">
                    <Card>
                        <CardBody className="justify">
                            <Problem problems={details.user1_unique_solved} />
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
            <div className="row">
                <Button outline color="warning" size="lg" block id="user2P" style={{ marginBottom: '1rem' }}>
                    {details.user2_username} unique solved : count = {details.user2_uncnt}
                </Button>
                <UncontrolledCollapse toggler="#user2P">
                    <Card>
                        <CardBody  className="justify">
                            <Problem problems={details.user2_unique_solved} />
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
            <div className="row">
                <Button outline color="warning" size="lg" block id="common" style={{ marginBottom: '1rem' }}>
                    Commonly solved
                </Button>
                <UncontrolledCollapse toggler="#common">
                    <Card>
                        <CardBody className="justify">
                            <Problem problems={details.common_solved} />
                        </CardBody>
                    </Card>
                </UncontrolledCollapse> 
            </div>
        </div>
        </React.Fragment>
    );
}




class Result extends Component {

    render() {

        if(this.props.details.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }

        else if(this.props.details.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.props.details.errMess}</h4>
                        </div>
                    </div>
                </div>
            )
        }

        else {
            console.log(this.props.details)
            return (
                <div>
                    <Display details={this.props.details.details} />
                </div>
            );
        }
    }
}

export default Result;