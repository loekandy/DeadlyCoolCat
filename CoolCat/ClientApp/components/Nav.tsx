import * as React from 'react';
import '../../node_modules/hamburgers/dist/hamburgers.css';

export default class Nav extends React.Component {

    toggleActive() {
            document.getElementById('squeeze').classList.toggle("is-active");
    }

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
                    <div onClick={this.toggleActive} id="squeeze" className="hamburger hamburger--squeeze" style={{ color:"white" }}>
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                    </div>
                </nav>
            </div>);
    }
}