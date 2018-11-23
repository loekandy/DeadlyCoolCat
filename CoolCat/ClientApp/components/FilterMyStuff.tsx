import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Loading from './Loading';
import Map from 'ol/Map';
import View from 'ol/View.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import { Fill, Stroke, Style, Text } from 'ol/style.js';

export default class FilterMyStuff extends React.Component<{}, {}> {

    componentDidMount()
    {
        var style = new Style({
            fill: new Fill({
                color: 'rgba(255, 255, 255, 0.6)'
            }),
            stroke: new Stroke({
                color: '#319FD3',
                width: 1
            }),
            text: new Text()
        });

        var map = new Map({
            layers: [
                new VectorLayer({
                    renderMode: 'image',
                    source: new VectorSource({
                        url: 'data/geojson/countries.geojson',
                        format: new GeoJSON()
                    }),
                    style: function (feature) {
                        style.getText().setText(feature.get('name'));
                        return style;
                    }
                })
            ],
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 1
            })
        });

        var featureOverlay = new VectorLayer({
            source: new VectorSource(),
            map: map,
            style: new Style({
                stroke: new Stroke({
                    color: '#f00',
                    width: 1
                }),
                fill: new Fill({
                    color: 'rgba(255,0,0,0.1)'
                })
            })
        });

        var highlight;
        var displayFeatureInfo = function (pixel) {

            var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
                return feature;
            });

            var info = document.getElementById('info');
            if (feature) {
                info.innerHTML = feature.getId() + ': ' + feature.get('name');
            } else {
                info.innerHTML = '&nbsp;';
            }

            if (feature !== highlight) {
                if (highlight) {
                    featureOverlay.getSource().removeFeature(highlight);
                }
                if (feature) {
                    featureOverlay.getSource().addFeature(feature);
                }
                highlight = feature;
            }

        };

        map.on('pointermove', function (evt) {
            if (evt.dragging) {
                return;
            }
            var pixel = map.getEventPixel(evt.originalEvent);
            displayFeatureInfo(pixel);
        });

        map.on('click', function (evt) {
            displayFeatureInfo(evt.pixel);
        });
    }

    render() {
        return (<div>Tomte
            <div id="map" className="map"></div>
            <div id="info"></div>
        </div>);
    }
}