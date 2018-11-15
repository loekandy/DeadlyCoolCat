import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Loading from './Loading';


export default class FilterMyStuff extends React.Component<{}, {}> {
    render()
    {
        return (<div>
            <Loading />
        </div>);
    }
}