import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './Products.css';
import Fade from 'react-reveal/Fade';

class ProductB extends Component {
    render() {
        return(
            <div className = 'main'>
                <div className = 'container'>
                    <div className = 'rowheader2'>
                        <div className = 'row header'>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center'>
                                <Fade top><h1 className ='drups-title'>Diesel Rotary Uninterruptible Power Supply (DRUPS)</h1>
                                <p>Diesel Rotary UPS (no-break KS) has been in market since 1989 and provides uninterruptible power supply system used to secure and protect the critical equipments from the mains / grid failure. Manufactured and tested in modern facilities, this provides multiple benefits such as No AC requirement, No power electronics, No need for battery banks, take care of harmonics generation, compact size, high reliability, small footprint, user friendly, easy maintenance and reduced voltage distortions.</p>
                                <p>(DG sets are available in 415 V, 6.6 kV, 11 kV)</p></Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center drups-1'>
                                <Fade bottom>
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FDRUPS%2Fdrups.jpg?alt=media&token=c459b9d5-448e-4e85-bbe5-a6467b4ca157" alt = 'generator' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center drups-2'>
                                <Fade top><h1 className ='drups-title2'>What is DRUPS and how does it work?</h1>
                                <p>In case of a power outage, the kinetic energy accumulated in the outer rotor or accu-rotor) supplies the load until the diesel engine is running at its rated speed. Within seconds the diesel engine becomes the source of power and this is how your critical loads are always fully secured. All this happens, without the slightest interruption or aberration to the load. The Kinetic Energy Accumulator At the heart of the NO-BREAK KS is its kinetic energy accumulator: a clever but simple system to store and retrieve kinetic energy. It consists of two rotating parts: the outer rotor runs mechanically-free around the inner rotor. The inner rotor, driven by the main shaft, rotates at 1500 rpm (50 Hz) or 1800 rpm (60 Hz). It contains two sets of windings; a three-phase AC winding and a DC winding.</p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center'>
                                <Fade bottom>
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FDRUPS%2FDRUPS_graph.png?alt=media&token=26e246cc-f03d-4722-a579-4fc79db9f8c9" alt = 'graph' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12'>
                                <p className='drups-working'>Working of DRUPS Units</p>
                                <ReactPlayer className='drups-video' playing={true} width = '100%' height = '70%' controls url='https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FDRUPS%2FHow%20Diesel%20Rotary%20UPS%20DRUPS%20Units%20Work.mp4?alt=media&token=70645689-5314-4d4e-841c-e86ff8a9f880'/>
                            </div>
                        </div>
                        <div className = 'row mt-5 features'>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center mx-auto f1'>
                                <div className = 'foverlay'>
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FGeneral%20Icons%20For%20both%20Generator%20Types%2Fexhaustline.svg?alt=media&token=ded3f96b-c7ac-4a97-b7f5-8afba9d1f480" alt = 'feature' width = '50%' height = "50%"/>
                                    <p>Exhaust line piping design(chimney stack)</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FGeneral%20Icons%20For%20both%20Generator%20Types%2Ffuelline.svg?alt=media&token=2f2c2854-059b-4d3d-be11-69c24fd076d5" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Automated fuel line<br></br> system</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FGeneral%20Icons%20For%20both%20Generator%20Types%2Fventi.svg?alt=media&token=5090dd48-f2a0-44fa-a1f1-14796f72783f" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Design of ventination <br></br>system</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className ='foverlay'>
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FGeneral%20Icons%20For%20both%20Generator%20Types%2Fnoisereduce.svg?alt=media&token=e2b71268-7e14-43e9-9848-eaf667e3f5b7" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Acoustics for noise <br></br>reduction</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'row features'>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FGeneral%20Icons%20For%20both%20Generator%20Types%2Fwaterline.svg?alt=media&token=1bb8d3c4-30a0-4d75-90b8-5bac39da7b5a" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Water line <br></br>system</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FGeneral%20Icons%20For%20both%20Generator%20Types%2Fpowercable.svg?alt=media&token=ec1e21d5-bfae-4f1f-8906-bb9fd13e33c7" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Design of power and control cabling</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FGeneral%20Icons%20For%20both%20Generator%20Types%2Fautoload.svg?alt=media&token=0e19a5d4-d914-4eb8-ac59-1675fdb709cc" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Auto load sharing <br></br>panels</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FGeneral%20Icons%20For%20both%20Generator%20Types%2Fearthing.svg?alt=media&token=ab72fdf4-ac25-40cd-a7dc-a2ba34987468" alt = 'feature' width = '50%' height = "50%" />
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