import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.sass';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container/>
                <Footer/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('app'));