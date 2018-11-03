import * as React from 'react';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <div>
                <div id="topNav">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-static-top">
                        <div>
                            <div className="display-4 text-light">Coolcat</div>
                            <div className="slogan">Deadly</div>
                        </div>
                    </nav>
                    </div>
                <div id="first-section"></div>
                <div id="second-section"></div>
                <div id="third-section"></div>
            </div>);
    }
}
