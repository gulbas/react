import React, {PureComponent} from 'react';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright © Your Website 2018</p>
                </div>
            </footer>
        );
    }
}
