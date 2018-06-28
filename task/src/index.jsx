import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.sass';
import routes from './routes';
import store from './store';

import Header from 'components/Header';
import Footer from 'components/Footer';

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header/>
                    <BrowserRouter>
                        <Switch>
                            {routes.map((route) => <Route key={route.toString()} {...route}/>)}
                        </Switch>
                    </BrowserRouter>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('app'));