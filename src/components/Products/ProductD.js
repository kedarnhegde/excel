import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './Products.css';
import Fade from 'react-reveal/Fade';
import {Button} from 'reactstrap';

class ProductD extends Component {
    render() {
        return(
            <div className = 'main'>
                <div className = 'container'>
                    <div className = 'rowheader2'>
                        <div className = 'row header'>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center'>
                                <Fade top>
                                    <h1 className ='drups-title'>Flywheel Energy Storage System(FESS) VYCON</h1>
                                    <Button className='down-button'><a className='down-link' href='https://drive.google.com/uc?export=download&id=1fWQjWLPq7JUSmIe4NXJ__Gcickrw9Rno' target='blank'>Download Brochure <span className='fa fa-download'></span></a></Button>
                                    <p>The VYCON Direct Connect (VDC) system stores kinetic energy in the form of a rotating mass and is designed for high power, short discharge applications. The patented technology within the VDC system includes a high-speed motor generator, active magnetic bearings that are used to levitate and sustain the rotor during operation, and a superior control system that can provide information on the system performance. These innovative technologies enable the VDC to charge and discharge at high rates for countless cycles making conventional technologies like batteries obsolete.</p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center drups-1'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1F_Hx68YCe63Y1VTtH0-jYlzwVTorhqMN" alt = 'generator' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center drups-2'>
                                <Fade top><h1 className ='drups-title2'>What is FESS and how does it work?</h1>
                                <p>In case of a power outage, the kinetic energy accumulated in the outer rotor or accu-rotor supplies the load until the diesel engine is running at its rated speed. Within seconds the diesel engine becomes the source of power and this is how your critical loads are always fully secured. All this happens, without the slightest interruption or aberration to the load. The Kinetic Energy Accumulator At the heart of the NO-BREAK KS is its kinetic energy accumulator: a clever but simple system to store and retrieve kinetic energy. It consists of two rotating parts: the outer rotor runs mechanically-free around the inner rotor. The inner rotor, driven by the main shaft, rotates at 1500 rpm (50 Hz) or 1800 rpm (60 Hz). It contains two sets of windings; a three-phase AC winding and a DC winding.</p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1qJbYNZfRLC_HlEJJ60dis3lnVdPJJLqR" alt = 'working' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <p className='drups-working'>Working of FESS Units</p>
                                <ReactPlayer className='drups-video' playing={true} width = '100%' height = '70%' muted loop controls url='https://drive.google.com/uc?export=download&id=1HMGwfLBYVJY7_SNw6gdMQh3SYYUHbs3t'/>
                            </div>
                        </div>    
                    </div>
                    <hr className='break-line'/>
                </div>
            </div>
        );
    }
}

export default ProductD;