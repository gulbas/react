import React, {PureComponent, Fragment} from 'react';
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
                    <BrowserRouter>
                        <Fragment>
                        <Header/>
                        <Switch>
                            {routes.map((route, idx) => <Route key={idx} {...route}/>)}
                        </Switch>
                        </Fragment>
                    </BrowserRouter>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('app'));