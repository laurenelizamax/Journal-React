import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import JournalList from '../components/journal/JournalList'
import JournalDetail from './journal/JournalDetail'
import JournalForm from './journal/JournalForm'
import JournalEditForm from './journal/JournalEditForm'
import Login from './auth/Login'


class ApplicationViews extends Component {

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/entries" render={props => {
                    if (this.props.user) {
                        return <JournalList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/entries/:entryId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <JournalDetail entryId={parseInt(props.match.params.entryId)} {...props} />
                }} />
                <Route path="/entries/new" render={(props) => {
                    return <JournalForm {...props} />
                }} />
                <Route
                   exact path="/entries/:entryId(\d+)/edit" render={props => {
                        return <JournalEditForm {...props} />
                    }}
                />
                <Route path="/login" render={props => {
                    return <Login setUser={this.props.setUser} {...props} />
                }} />
                </React.Fragment>
        )
    }
}

export default ApplicationViews