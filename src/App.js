import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './routes/home/index';
import User from './routes/user/Index';
import Detail from './routes/detail/Index';
import Seat from './routes/seat/Index';
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <Route path="/seat" exact component={Seat}></Route>
                <Route path="/detail" exact component={Detail}></Route>
                <Route path="/user" exact component={User}></Route>
                <Route path="/" exact component={Home}></Route>
                </Switch>
            </BrowserRouter>
        );
    }

}

export default App;
