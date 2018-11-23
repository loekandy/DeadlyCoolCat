import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Loading from './Loading';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export default class FilterMyStuff extends React.Component<{}, {}> {
    render() {
        return (<div>
            <div id="map" className="map"></div>
            <div id="info"></div>
        </div>);
    }
}