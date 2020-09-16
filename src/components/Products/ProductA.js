import React, {Component} from 'react';
import './Products.css';
import Fade from 'react-reveal/Fade';
import ReactPlayer from 'react-player';
import {Button} from 'reactstrap';


class ProductC extends Component {
    render() {
        return(
            <div className = 'main'>
                <div className = 'container'>
                    <div className = 'rowheader2'>
                        <div className = 'row header'>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center'>
                                <Fade top><h1 className ='title2'>Rotabloc UPS (RBT UPS)</h1>
                                    <Button className='down-button'><a className = 'down-link' href='https://drive.google.com/uc?export=download&id=1FTHzkUYP-P8KQkpE2XqYNlAX2rTYTU-M' target='blank'>Download Brochure <span className='fa fa-download'></span></a></Button>
                                <p>The RBT builds upon the Rotabloc Energy Storage Unit to provide a simple UPS system that can be configured to provide the desired level of redundancy and resiliency for your facility. Efficient and sustainable, RBT can be used in low and medium voltage and, in either design, RBT delivers highly competitive CapEx and exceptionally low OpEx leading to an unmatched Total Cost of Ownership.</p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1N92hxdzs0NlMoQCrzYjfWN0v_kHQ5Zb1" alt = 'generator' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                        </div>
                        <div className = 'row header'>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center'>
                                <Fade top>
                                <p>The system consists of a standard synchronous generator with no special windings and a simple steel flywheel. The low-speed shaft extends bearing life and reduces maintenance. The ROTABLOC machine is very robust as critical functions do not use fragile components such as power electronics, power capacitors, electrochemical batteries, active magnetic bearings, electro-mechanical, or mechanical friction clutches.</p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1cF6Il4uCt-XAc8Hj9O_jCr5SyYm9fFsL" alt = 'power-usage' className = 'mx-auto d-block' width = "65%" height = "10%"/>
                                </Fade>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <p className='drups-working'>Working of RBT UPS Units</p>
                                <ReactPlayer className='drups-video' playing={true} width = '100%' height = '70%' muted controls url='https://drive.google.com/uc?export=download&id=1dQkDAe4SruCm-zWUhamHNbuOu1Ywwq-b'/>
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

export default ProductC;