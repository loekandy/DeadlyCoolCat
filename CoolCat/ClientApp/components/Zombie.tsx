import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Zombie extends React.Component<{}, {}> {
    render() {
        //var settings = {
        //    dots: true
        //};
        //return (
        //    <div className="container">
        //        <Slider {...settings}>
        //            <div>
        //                <img src="http://placekitten.com/g/400/200" />
        //            </div>
        //            <div>
        //                <img src="http://placekitten.com/g/400/200" />
        //            </div>
        //            <div>
        //                <img src="http://placekitten.com/g/400/200" />
        //            </div>
        //            <div>
        //                <img src="http://placekitten.com/g/400/200" />
        //            </div>
        //        </Slider>
        //    </div>
        //);

        const zombie = (<div className="zombie-container">
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
            </div>);


        const santa = (<div id='canvas'>
            <div id='headSanta'>
                <div id='hatSanta'>
                    <div id='hat_topSanta'></div>
                    <div id='hat_bottomSanta'></div>
                </div>
                <div id='faceSanta'>
                    <div id='eyes_noseSanta'>
                        <div id='eye_leftSanta' className='eyesSanta'></div>
                        <div id='noseSanta'></div>
                        <div id='eye_rightSanta' className='eyesSanta'></div>
                    </div>
                </div>
                <div id='beardSanta'></div>
            </div>
            <div id='body'>
                <div id='torsoSanta'>
                    <div id='torso_bottomSanta'></div>
                </div>
                <div id='arm_leftSanta'>
                    <div id='hand_leftSanta'></div>
                </div>
                <div id='arm_rightSanta'>
                    <div id='hand_rightSanta'></div>
                </div>
            </div>
            <div id='legsSanta'>
                <div id='leg_leftSanta'></div>
                <div id='leg_rightSanta'></div>
            </div>
        </div>);

        return (
            <div id="demo" className="carousel slide" data-ride="carousel" data-interval="100000">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {zombie}
                        <div className="carousel-caption">
                            <h4>Zombie</h4>
                            <p>Arrrgghhhh braaaaaainnnss!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {santa}
                        <div className="carousel-caption">
                            <h4>Santa</h4>
                            <p>North Pole 1, Imaginationland.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        );
    }
}


    //public render() {
    //    return (<div className="row">
    //            <div className="col"></div>
    //            <div className="col">
    //        <div className="zombie-container">

    //            <div className="zombie">
    //                <div className="ear left">
    //                </div>
    //                <div className="head">
    //                    <div className="upper-part">
    //                        <div className="scars upper">
    //                            <div className="scar"></div>
    //                        </div>
    //                        <div className="features">
    //                            <div className="eyes">
    //                                <div className="eye left">
    //                                    <div className="pupil">
    //                                        <div className="iris"></div>
    //                                    </div>
    //                                </div>
    //                                <div className="eye right">
    //                                    <div className="pupil">
    //                                        <div className="iris"></div>
    //                                    </div>
    //                                </div>
    //                            </div>
    //                            <div className="mouth">
    //                                <div className="tooth top right"></div>
    //                                <div className="tooth top left"></div>
    //                                <div className="tooth bottom center"></div>
    //                            </div>
    //                        </div>
    //                        <div className="scars bottom">
    //                            <div className="clip-scar"></div>
    //                        </div>
    //                    </div>
    //                </div>
    //                <div className="ear right">
    //                </div>
    //            </div>
    //                </div>
    //            </div>
    //            <div className="col zombieDiv"><div className="zombieText">Zombie.</div></div>
    //        </div>);
//}
//}
