import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class StarWars extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <button type="button" className="btn btn-dark button">Press Me</button>
            </div>
        );
    }
}