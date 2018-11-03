import * as React from 'react';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-static-top">
                    <p className="display-4 text-light">Project Name</p>
                </nav>
            </div>);
    }
}
