import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './Products.css';
import Fade from 'react-reveal/Fade';
import {Button} from 'reactstrap';

class ProductB extends Component {
    render() {
        return(
            <div className = 'main'>
                <div className = 'container'>
                    <div className = 'rowheader2'>
                        <div className = 'row header'>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center'>
                                <Fade top><h1 className ='drups-title'>Diesel Rotary Uninterruptible Power Supply (DRUPS)</h1>
                                <Button className='down-button'><a className='down-link' href='https://drive.google.com/uc?export=download&id=1ftMKZUsfgKF7tVMqpr79dcg3EN5FmyCi' target='blank'>Download Brochure <span className='fa fa-download'></span></a></Button>
                                <p>Diesel Rotary UPS (no-break KS) has been in market since 1989 and provides uninterruptible power supply system used to secure and protect the critical equipments from the mains / grid failure. Manufactured and tested in modern facilities, this provides multiple benefits such as No AC requirement, No power electronics, No need for battery banks, take care of harmonics generation, compact size, high reliability, small footprint, user friendly, easy maintenance and reduced voltage distortions.</p>
                                <p>(DG sets are available in 415 V, 6.6 kV, 11 kV)</p></Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center drups-1'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1HDNWHRzLydLRStMd1iwluv1u02R-JWih" alt = 'generator' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center drups-2'>
                                <Fade top><h1 className ='drups-title2'>What is DRUPS and how does it work?</h1>
                                <p>In case of a power outage, the kinetic energy accumulated in the outer rotor or accu-rotor) supplies the load until the diesel engine is running at its rated speed. Within seconds the diesel engine becomes the source of power and this is how your critical loads are always fully secured. All this happens, without the slightest interruption or aberration to the load. The Kinetic Energy Accumulator At the heart of the NO-BREAK KS is its kinetic energy accumulator: a clever but simple system to store and retrieve kinetic energy. It consists of two rotating parts: the outer rotor runs mechanically-free around the inner rotor. The inner rotor, driven by the main shaft, rotates at 1500 rpm (50 Hz) or 1800 rpm (60 Hz). It contains two sets of windings; a three-phase AC winding and a DC winding.</p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1qSkZMaeK6sY-LIln8e7ydJgglyfCqq2A" alt = 'graph' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12'>
                                <p className='drups-working'>Working of DRUPS Units</p>
                                <ReactPlayer className='drups-video' playing={true} width = '100%' height = '70%' controls url='https://drive.google.com/uc?export=download&id=1KOfvt9gXfLpIxpHv2qHz8i3S0gF3LpY0'/>
                            </div>
                        </div>
                        <div className = 'row mt-5 features'>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center mx-auto f1'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1q0WSGs2uPiTuul5l5SXeGJ5aUBvvSnHr" alt = 'feature' width = '50%' height = "50%"/>
                                    <p>Exhaust line piping design(chimney stack)</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1AWN2aEC4iqmpknm41APBZjg5xqgMIUE4" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Automated fuel line<br></br> system</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=16uZhaNgUu_uYbIt668_H9AP6T8IJXbPy" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Design of ventination <br></br>system</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className ='foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1HT8x2uZD7vnlSl4tQkHyjhID2qJowSlU" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Acoustics for noise <br></br>reduction</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'row features'>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1BV42ZVCEYBx-GFLTX_XNPXP9Xa9OT4RF" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Water line <br></br>system</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1lfWvdMq7nMvJm_CVdZ3IVMvAsuWCWRRi" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Design of power and control cabling</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1ruY8hE6KhmnWSvsrHXpp1yk0GKbfXb69" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Auto load sharing <br></br>panels</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1hv9gZVYPJEuh5CAt_CBKzPcN_0wMhImA" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Earthing <br></br> systems</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <hr className='break-line'/>
                </div>
            </div>
        );
    }
}

export default ProductB;