import * as React from 'react';

export default class Nav extends React.Component {
    render() {
        return (
            <div id="topNav">

                <nav className="site-header sticky-top py-1">

                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <div>
                            <div className="display-4 text-white">Coolcat</div>
                            <div className="slogan">Deadly</div>
                        </div>
                        <a className="py-2 d-none d-md-inline-block" href="#">Tour</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
                    </div>
                </nav>
            </div>);
    }
}