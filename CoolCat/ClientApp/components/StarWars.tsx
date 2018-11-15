import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class StarWars extends React.Component<{}, {}> {

    //Använd map funktionen

    public render() {
        return (
            <div id="third-section">
                
                <button type="button" className="btn btn-dark button">Press Me</button>
            </div>
        );
    }
}