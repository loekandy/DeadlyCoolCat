import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Zombie extends React.Component<{}, {}> {
    public render() {
        return (<div>
            <div className="zombie-container">
                <div className="zombieText">Zombie.</div>
                <div className="zombie">
                    <div className="ear left">
                    </div>
                    <div className="head">
                        <div className="upper-part">
                            <div className="scars upper">
                                <div className="scar"></div>
                            </div>
                            <div className="features">
                                <div className="eyes">
                                    <div className="eye left">
                                        <div className="pupil">
                                            <div className="iris"></div>
                                        </div>
                                    </div>
                                    <div className="eye right">
                                        <div className="pupil">
                                            <div className="iris"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mouth">
                                    <div className="tooth top right"></div>
                                    <div className="tooth top left"></div>
                                    <div className="tooth bottom center"></div>
                                </div>
                            </div>
                            <div className="scars bottom">
                                <div className="clip-scar"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ear right">
                    </div>
                </div>
            </div>
        </div>);
    }
}
