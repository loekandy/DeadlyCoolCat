import * as React from 'react';
import { NavMenu } from './NavMenu';
import Zombie from './Zombie';
import QuotesMachine from './QuotesMachine';
import StarWars from './StarWars';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <div>
                <div id="topNav">
                <nav className="navbar navbar-expand-lg navbar-dark navbar-static-top">
                        <div>
                            <div className="display-4 text-dark">Coolcat</div>
                            <div className="slogan">Deadly</div>
                        </div>
                    </nav>
                </div>
                <Zombie />
                <QuotesMachine />
                <StarWars />
            </div>
        );
    }
}
