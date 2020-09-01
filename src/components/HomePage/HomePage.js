import React from 'react';
import IntroVideo from '../../media/generators.mp4';
import Rolls from '../../media/rolls.png';
import part2 from '../../media/Vycon.jpg';
import client from '../../media/clientback.jpg';
import microsoft from '../../media/microsoft.png';
import hp from '../../media/hp.png';
import ing from '../../media/ING.png';
import bosch from '../../media/bosch.png';
import LT from '../../media/LT.png';
import toyo from '../../media/Toyota.png';
import cogni from '../../media/Cognizant.png';
import express from '../../media/Express.png';
import enron from '../../media/enron.svg';
import car2 from '../../media/carousel2.svg';
import car3 from '../../media/carousel3.svg';
import * as ReactBootstrap from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import iem from '../../media/IEM.png';
class Home extends React.Component {
    render() {
        return(
            
            <div className = 'main-c'>
                <div className = 'main'>
                    <header>
                    <video
                    autoPlay
                    muted
                    loop
                    style={{
                        position:"absolute",
                        width:"100%",
                        left:"50%",
                        top:"50%",
                        bottom:"0",
                        height:"100%",
                        objectFit:"cover",
                        transform: "translate(-50%,-50%)",
                        zindex:-2
                    }}
                    >
                    <source src = {IntroVideo} type = "video/mp4" />
                </video>
                        <div className = 'overlay'>
                            <div className = 'inner'>
                                <h1 className = 'title'><centre>Specialists in Power Backup Solutions</centre></h1> 
                                <p>Successful installations in IT / Data Centers, Healthcare, Pharma, Airports, R&D Labs and Critical Process Industries</p>
                                <a href = '#partners' className='btn'>Read More</a>
                            </div>
                        </div>                
                    </header>

                </div>
                <div className = 'container' id = 'partners'>
                    <div className = 'row rowheader'>
                        <div className = 'col-12 col-sm-6 col1'>
                            <Fade top>
                                <h3 className = 'title2'>We Work With the<br></br> Best Partners</h3>
                                <p>While we are the forefront of and specialize in design-build, we are very familiar with a number of delivery methods and are confident we can find the process that can help you achieve your goal.</p>
                            </Fade>
                        </div>
                        <div className= 'col-12 col-sm-2 col2 align-self-center justify-content-center'>
                        <Fade bottom>
                            <img src = {Rolls} alt = 'rolls royce' width = '40%' className="rounded mx-auto d-block"/>
                        </Fade>
                        </div>
                        <div className = 'col-12 col-sm-2 align-self-center'>
                        <Fade top>
                            <img src = {part2} alt = 'Vycon' width = '100%' className="rounded mx-auto d-block"/>
                        </Fade>
                        </div>
                        <div className = 'col-12 col-sm-2 align-self-center'>
                        <Fade top>
                            <img src = {iem} alt = 'IEM' width = '100%' className="rounded mx-auto d-block"/>
                        </Fade>
                        </div>

                    </div>
                </div>
                <div clasName = 'clienoverlay'>
                    <img src = {client} alt = 'clients' zindex = '-2' width='100%' className = 'clientimg'/>
                        <div className = 'container'>
                            <div className = 'row'>
                                <h1>Our Clients</h1> 
                            </div>
                            <div className = 'row clients'>
                                <div className = 'col-12 col-sm-4 justify-content-center align-self-center'>
                                    <img src = {microsoft} alt = 'microsoft' width = '100%' className = 'small-clients'></img>
                                </div>
                                <div className = 'col-12 col-sm-3 offset-sm-1 rounded mx-auto d-block'>
                                    <img src = {bosch} alt = 'BOSCH' width = '100%' height = '100%'></img>
                                </div>
                                <div className = 'col-12 col-sm-4 justify-content-center align-self-center'>
                                    <img src = {ing} alt = 'ING' width = '100%' height = '10%'></img>
                                </div>
                            </div>
                            <div className = 'row clients largeclients'>
                                <div className = 'col-12 col-sm-3 offset-sm-2'>
                                    <img src = {hp} alt = 'HP' width = '50%' height ='100%'/>
                                </div>
                                <div className = 'col-12 col-sm-3 rounded mx-auto d-block'>
                                    <img src = {LT} alt = 'LT' width = '70%' height ='100%'/>
                                </div>
                                <div className = 'col-12 col-sm-3 rounded mx-auto d-block'>
                                    <img src = {toyo} alt = 'Toyota' width = '50%' height ='100%'/>
                                </div>
                            </div>
                            <div className = 'row clients'>
                                <div className = 'col-12 col-sm-4 mt-5'>
                                    <img src = {cogni} alt = 'cognizant' width = '100%' height = '100%'/>
                                </div>
                                <div className = 'col-12 col-sm-4 ae'>
                                    <img src = {express} alt = 'American Express' width = '100%' height = '100%'/>
                                </div>
                                <span className = 'largeclients justify-self-center align-self-center mx-auto'><a href = '/installations' className='btn1 border mx-auto d-block'>More</a></span>
                            </div>
                    </div>
                </div>
                <div className = 'carousel mt-5'>
                    
                    <ReactBootstrap.Carousel>
                        <ReactBootstrap.CarouselItem>
                            <img src = {enron} alt = 'ENRON' className = 'rounded mx-auto d-block' width = '30%'/>
                            <ReactBootstrap.Carousel.Caption><p className = 'carouselcaption'>Criteria used for selecting Excel was their price, their ability to mobilise the necessary resources to meet Enron's aggressive schedule and quality of MTU Germany which is very important for a facility like a Data Centre. Excel Generators Pvt. Ltd. have not only met but exceeded Enron's expectations in all categories. Their machine, workmanship and supervision was of the highest caliber The entire Excel team is very supportive and worked diligently to ensure that all schedules were met without comprimising on quality.<br></br>
                            <b className = 'clientnames'>C. Todd - Project Director, Broadband Solutions (Enron Company)</b></p></ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.CarouselItem>
                        <ReactBootstrap.CarouselItem>
                            <img src = {car2} alt = 'ETLISL' className = 'rounded mx-auto d-block' width = '30%'/>
                            <ReactBootstrap.Carousel.Caption>MIS Excel Generators Pvt Ltd., Bangalore is directly associated with us for maintenance of our above mentioned DG sets from April 2009. We are satisfied with their, upkeep and maintenance of the DG sets, quality of service and responsiveness to our calls. We wish them good luck and success in their endeavors.<br></br>
                            <b className = 'clientnames'>K Murali - Manager - Planning and Facility Mgt, ETLISL</b></ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.CarouselItem>
                        <ReactBootstrap.CarouselItem>
                            <img src = {car3} alt = 'ITC' className = 'rounded mx-auto d-block' width = '30%'/>
                            <ReactBootstrap.Carousel.Caption>It gives me immense pleasure and satisfaction to inform you that last month when our 1275 KVA MTU DG set was down due to malfunctioning of MDEC, your company EXCEL Generators Pvt Ltd rose to the occasion and excellent services were rendered, when a service engineer was flown to Mumbai from Bangalore and same day midnight DG set was repaired and put back in operation. I wish all the very best for your company's future and immense growth and thank your team for the prompt and efficient services. I also thank you for the commendable work done during the crisis situation.<br></br>
                            <b className = 'clientnames'>Chief Engineer - ITC Grand Central Sheraton</b></ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.CarouselItem>

                    </ReactBootstrap.Carousel>
                </div>
                <div className = 'small-review mt-5'>
                    <div className = 'container'>
                        <div className = 'col-12 mt-5'>
                            <img src = {enron} alt = 'ENRON' className = 'rounded mx-auto d-block' width = '50%'/>
                        </div>
                        <div className = 'col-12'><p className = 'carouselcaption'><span className = 'fa fa-quote-left'></span> Criteria used for selecting Excel was their price, their ability to mobilise the necessary resources to meet Enron's aggressive schedule and quality of MTU Germany which is very important for a facility like a Data Centre. Excel Generators Pvt. Ltd. have not only met but exceeded Enron's expectations in all categories. Their machine, workmanship and supervision was of the highest caliber The entire Excel team is very supportive and worked diligently to ensure that all schedules were met without comprimising on quality. <span className = 'fa fa-quote-right'></span><br></br>
                            <b className = 'clientnames'>C. Todd - Project Director, Broadband Solutions (Enron Company)</b></p>
                        </div>
                    </div>
                    <div className = 'container'>
                        <div className = 'col-12 mt-5'>
                            <img src = {car2} alt = 'ETLISL' className = 'rounded mx-auto d-block' width = '30%'/>
                        </div>
                        <div className = 'col-12'><p className = 'carouselcaption'><span className = 'fa fa-quote-left'></span> MIS Excel Generators Pvt Ltd., Bangalore is directly associated with us for maintenance of our above mentioned DG sets from April 2009. We are satisfied with their, upkeep and maintenance of the DG sets, quality of service and responsiveness to our calls. We wish them good luck and success in their endeavors. <span className = 'fa fa-quote-right'></span><br></br>
                            <b className = 'clientnames'>K Murali - Manager - Planning and Facility Mgt, ETLISL</b></p>
                        </div>
                    </div>
                    <div className = 'container'>
                        <div className = 'col-12 mt-5'>
                            <img src = {car3} alt = 'ITC' className = 'rounded mx-auto d-block' width = '30%'/>
                        </div>
                        <div className = 'col-12'><p className = 'carouselcaption'><span className = 'fa fa-quote-left'></span> It gives me immense pleasure and satisfaction to inform you that last month when our 1275 KVA MTU DG set was down due to malfunctioning of MDEC, your company EXCEL Generators Pvt Ltd rose to the occasion and excellent services were rendered, when a service engineer was flown to Mumbai from Bangalore and same day midnight DG set was repaired and put back in operation. I wish all the very best for your company's future and immense growth and thank your team for the prompt and efficient services. I also thank you for the commendable work done during the crisis situation. <span className = 'fa fa-quote-right'></span><br></br>
                            <b className = 'clientnames'>Chief Engineer - ITC Grand Central Sheraton</b></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;