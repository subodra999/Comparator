import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Compare from './Compare';
import { postUsers } from '../redux/ActionCreators';
import Result from '../components/Result';

const mapStateToProps = state => {
    return {
        details: state.details,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postUsers: (user1, user2) => dispatch(postUsers(user1, user2)),
        resetForm: () => { dispatch(actions.reset('users'))}
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/compare' component={()=> <Compare postUsers={this.props.postUsers} resetForm={this.props.resetForm} redirectToResult={this.props.details.redirectToResult} />} />
                    <Route path='/result' component={() => <Result details={this.props.details} /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));