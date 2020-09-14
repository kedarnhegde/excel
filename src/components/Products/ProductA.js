import React, {Component} from 'react';
import './Products.css';
import Fade from 'react-reveal/Fade';
import ReactPlayer from 'react-player';


class ProductC extends Component {
    render() {
        return(
            <div className = 'main'>
                <div className = 'container'>
                    <div className = 'rowheader2'>
                        <div className = 'row header'>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center'>
                                <Fade top><h1 className ='title2'>Rotabloc UPS (RBT UPS)</h1>
                                <p>The RBT builds upon the Rotabloc Energy Storage Unit to provide a simple UPS system that can be configured to provide the desired level of redundancy and resiliency for your facility. Efficient and sustainable, RBT can be used in low and medium voltage and, in either design, RBT delivers highly competitive CapEx and exceptionally low OpEx leading to an unmatched Total Cost of Ownership.</p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center'>
                                <Fade bottom>
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FRBT%20UPS%2FRBT%20Rotary%20UPS%20Systems.png?alt=media&token=c362dd64-6335-45d0-931a-c8da99ef8b61" alt = 'generator' width = "100%" height = "100%"/>
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
                                    <img src = "https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FRBT%20UPS%2FRBT%20Power%20usage.png?alt=media&token=38ce195f-4a16-4bf9-947e-dee4757cac30" alt = 'generator' className = 'mx-auto d-block' width = "65%" height = "10%"/>
                                </Fade>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <p className='drups-working'>Working of RBT UPS Units</p>
                                <ReactPlayer className='drups-video' playing={true} width = '100%' height = '70%' muted controls url='https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FGeneral%20Icons%20For%20both%20Generator%20Types%2FIEM%20Power%20Systems%20Rotabloc%20UPS%2060Hz%20HD.mp4?alt=media&token=bd5a7516-71e0-4141-9337-9089136178fc'/>
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

export default ProductC;