import React, {Component} from 'react';
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
                                <Fade top>
                                    <h1 className ='drups-title'>YINLONG</h1>
                                    <Button className='down-button'><a className='down-link' href='https://drive.google.com/uc?export=download&id=1fWQjWLPq7JUSmIe4NXJ__Gcickrw9Rno' target='blank'>Download Brochure <span className='fa fa-download'></span></a></Button>
                                    <p>Yinlong's LTO battery, with the characters of, fast charge in 6mins, wide temperature range ( -50℃ ~ 60℃ ), 30 years service life, no fire, no explosion, high security, and high efficiency, etc., has gained the popularity from global famous partners such as AES, INE, BOMBARDIER, Vestas, Ford, PROTERRA, Amberjac Projects, BAE SYSTEMS, State Grid Corporation of China, China Southern Power Grid, CRRC, Shenhua Group, China Tower, etc. LTO battery has been widely used in new energy vehicles and energy storage field of communication stations, grid frequency modulation, household, industry, rail transportation, military, etc., and has broad market prospects and application values</p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center drups-1'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1tBPo3k-OiTxCAAl8BkhH5ILS1swK2f-F" alt = 'generator' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center drups-2'>
                                <Fade top><h1 className ='drups-title2'>Advantages of Yinlong</h1>
                                <p>Content illa, Chithal Pathal</p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1100wlXKlYHZ7uds2uBOm4JtZAFrJWxvz" alt = 'overview' width = "100%" height = "100%"/>
                                </Fade>
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