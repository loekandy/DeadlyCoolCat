import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Loading from './Loading';
import ReactTable from 'react-table';


export default class FilterMyStuff extends React.Component<{}, {}> {
    render() {
        const data = [{
            firstName: 'Tanner',
            lastName: 'Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            },
            status: "unclear",
            visits: 1337,
            tomte: true
        }];

        return <div>Hej</div>
    }
}