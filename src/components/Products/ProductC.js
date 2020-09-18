import React, {Component} from 'react';
import './Products.css';
import Fade from 'react-reveal/Fade';
import {Button} from 'reactstrap';

class ProductC extends Component {
    render() {
        return(
            <div className = 'main'>
                <div className = 'container'>
                    <div className = 'rowheader2'>
                        <div className = 'row header'>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center'>
                                <Fade top>
                                    <h1 className ='drups-title'>YINLONG LTO Power Battery</h1>
                                    <Button className='down-button'><a className='down-link' href='https://drive.google.com/uc?export=download&id=1_svvNbz3S0ATm_q2eHNTdvR5t9JlwfYq' target='blank'>Download Brochure <span className='fa fa-download'></span></a></Button>
                                    <p>Yinlong's LTO battery, with the characters of, fast charge in 6mins, wide temperature range ( -50℃ ~ 60℃ ), 30 years service life, no fire, no explosion, high security, and high efficiency, etc., has gained the popularity from global famous partners such as AES, INE, BOMBARDIER, Vestas, Ford, PRO TERRA, Amberjack Projects, BAE SYSTEMS, State Grid Corporation of China, China Southern Power Grid, CRRC, Shenhua Group, China Tower, etc. LTO battery has been widely used in new energy vehicles and energy.</p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center drups-1'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1LTAPEBkvTxeksiRyZY8HuRYd7__W36En" alt = 'generator' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                        </div>  
                    </div>
                    <div className = 'row mt-5 features'>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center mx-auto f1'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1S5e7xt0Ht8USpwd-8BK8WUItdyR_gbEV" alt = 'feature' width = '50%' height = "50%"/>
                                    <p>Communication</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1qcKcMRb0uXatLO2kTF1L7bAyTU9BMuQ0" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Industry</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1Zs4FKVbeK10F_GxalaYsm48L3dG7dUm4" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Transportation</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className ='foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=10N5nRk2fjforc-PkXvnkZtMox75GdIuH" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Military Industry</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'row features'>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=165Aobk8_lbHOi0CzVfxVx_kj6M5k__Km" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Power Grid</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1-kcDf0ugDkujqqnO6wkDaVwdiUkT7wl0" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Construction</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=12o1CZkl9wzT32pgL8QdWZZogwZMBOcPC" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Storage and Logistics</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1T4Zx-UlS_cFSEEQ01Xc9-7sK0qkV5e4B" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Household</p>
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