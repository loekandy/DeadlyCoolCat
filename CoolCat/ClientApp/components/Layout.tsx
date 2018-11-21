import * as React from 'react';
import { NavMenu } from './NavMenu';
import Zombie from './Zombie';
import QuotesMachine from './QuotesMachine';
import StarWars from './StarWars';
import FilterMyStuff from './FilterMyStuff';
import Nav from './Nav';


export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <div>
                <Nav />
               
                <section id="first-section">
                    <Zombie />
                </section>
                <section id="second-section">
                    <QuotesMachine />
                </section>
                <section id="third-section">
                    <StarWars />
                </section>
                <section id="fourth-section">
                    <FilterMyStuff />
                </section>
            </div>
        );
    }
}
