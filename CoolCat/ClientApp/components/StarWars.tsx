import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import '../modals/StarWarsModal'

interface States {
    response: StarWarsModal
}

export default class StarWars extends React.Component<{}, States> {
    constructor() {
        super();

        this.state = {
            response: {}
        }
    }

    componentDidMount() {

        axios.get("https://swapi.co/api/starships/9").then(data => {
            this.setState({
                response: data.data
            });
        })
    }


    outputStarWarsFacts = (item: StarWarsModal) => {
        return (
            <div className="row">
                <div className="col d-flex align-items-center justify-content-end">
                    <h1>{item.name}</h1>

                </div>
                <div className="col">
                    <div className="p-5">
                        <h4>{item.manufacturer}</h4>
                        <p>{item.starship_class}</p>
                        <p>{item.manufacturer}</p>
                        <p>Hyperdrive Rating {item.hyperdrive_rating}</p>
                        <p>Cost {item.cost_in_credits}</p>
                        <p>Passengers {item.passengers}</p>
                    </div>
                </div>
            </div>);
    }

    public render() {

        const { response } = this.state;

        let SWFacts;

        if (response) {
            console.log(response);
            SWFacts = this.outputStarWarsFacts(response);

        }

        return (
            <div>
                {SWFacts}
                <div className="text-center p-3">
                    <button type="button" className="btn btn-dark button ">Randomzie!</button>
                    </div>
            </div>
        );
    }
}