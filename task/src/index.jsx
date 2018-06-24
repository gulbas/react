import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.sass';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route) => <Route {...route}/>)}
                    </Switch>
                </BrowserRouter>
                <Footer/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('app'));