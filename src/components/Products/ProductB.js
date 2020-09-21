import React, {Component} from 'react';
import './Products.css';
import Fade from 'react-reveal/Fade';
import ReactPlayer from 'react-player';
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
                                    <h1 className ='drups-title'>Bloom Energy Fuel Cells</h1>
                                    <Button className='down-button'><a className='down-link' href='https://drive.google.com/uc?export=download&id=1jGkdPEZ8By_dqYDNdwm52VzsMTKX4Xeq' target='blank'>Download Brochure <span className='fa fa-download'></span></a></Button>
                                    <p>Bloom Energy has developed a revolutionary on-site primary power generation system. The Bloom Energy Server is based on a proprietary fuel cell technology that provides a more reliable, cleaner, and cost-effective alternative to the traditional electric grid. Bloom provides a transformational new data center topology that greatly simplifies the architecture and eliminates the need for many legacy components. </p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center drups-1'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1LF_Dc1FnNXygLAtWyl2jv_yyXmR38ci1" alt = 'generator' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center drups-2'>
                                <Fade top><h1 className ='drups-title2'>Working of Fuel Cells</h1>
                                <p>The technology is based on a solid oxide fuel cell platform with roots in the NASA Mars Program. The Bloom Energy Server converts fuel into electricity through a clean and efficient electrochemical process that emits significantly fewer greenhouse gases, NOx, SOx, and particulate matter than conventional combustion technologies. The system can run on natural gas for significant greenhouse gas reductions or biogas for a carbon-neutral solution.</p>
                                </Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1gFcDigmPiaAvJu0x5NKeI2dsgLunUl1b" alt = 'working' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                        </div> 
                        <div className='row'>
                            <div className='col-12'>
                                <p className='drups-working'>How a Bloom Energy Server works</p>
                                <ReactPlayer className='drups-video' playing={true} width = '100%' height = '70%' muted loop controls url='https://drive.google.com/uc?export=download&id=1iG-WUyVRWLVl-IBSjoVJzVZBdqAJDJNm'/>
                            </div>
                        </div>  
                        <div className='row'>
                            <div className='col-12'>
                                <img src = 'https://drive.google.com/uc?export=download&id=1PLtt_zxLuqwCc7Yh6Fu7i6VFC4FiNoXV' alt = 'features' width = '100%' height = '100%' className = 'bloom-image' />
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