import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile';
import CreateNew from './components/CreateNew';
import Projects from './components/Projects';
import Persons from './components/Persons';




export default () => <Switch>
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/createnew" component={CreateNew} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/persons" component={Persons} />

</Switch>
