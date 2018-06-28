import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Header from 'components/Header';
import Footer from 'components/Footer';
import routes from './routes';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.sass';


class App extends PureComponent {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Header/>
                    <BrowserRouter>
                        <Switch>
                            {routes.map((route) => <Route key={route.toString()} {...route}/>)}
                        </Switch>
                    </BrowserRouter>
                    <Footer/>
                </Provider>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('app'));