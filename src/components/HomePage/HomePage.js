import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
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
                    <source src = 'https://drive.google.com/uc?export=download&id=1eIfWRTZ6uHBjoslaytDk9SiaeuCXedyo' type = "video/mp4" />
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
                <div id = 'partners'></div>
                <div className = 'container'>
                    <div className = 'row rowheader'>
                        <div className = 'col-12 col-sm-6 col1'>
                            <Fade top>
                                <h3 className = 'title2'>We Work With the<br></br> Best Partners</h3>
                                <p>While we are at the forefront of and specialize in design-build, we are very familiar with a number of delivery methods and are confident we can find the process that can help you achieve your goal.</p>
                            </Fade>
                        </div>
                        <div className = 'col-12 col-sm-6 align-self-center'>
                            <Fade bottom>
                                <img src = 'https://drive.google.com/uc?export=download&id=1-4DLkocmcQJweEw9fe9JaxXe7n0_4Prw' alt = 'Partners' width = '100%' className="rounded mx-auto d-block"/>
                            </Fade>
                        </div>
            </div>
                    
                </div>
                
                <div className='clienoverlay-full'>
                    <div clasName = ''>
                        <div className = 'container clients-bg'>
                            <div className = 'row'> </div>
                            <div className = 'row clients mt-5'>
                                <div className = 'col-12 col-sm-4 justify-content-center align-self-center'>
                                    <img src = 'https://drive.google.com/uc?export=download&id=1-fUxWEn68ttix7JBITzPDTt9M7EcSbIg' alt = 'microsoft' width = '100%' className = 'small-clients'></img>
                                </div>
                                <div className = 'col-12 col-sm-3 offset-sm-1 rounded mx-auto d-block'>
                                    <img src = 'https://drive.google.com/uc?export=download&id=1rtgEEeBroIdeYKt7TTj9XbXeo7ANxUrQ' alt = 'BOSCH' width = '100%' height = '100%'></img>
                                </div>
                                <div className = 'col-12 col-sm-4 justify-content-center align-self-center mx-auto isroo'>
                                    <img src = 'https://drive.google.com/uc?export=download&id=1NO9BP8ziazGpWxgMEfllB811jg5-admk' alt = 'ISRO' width = '50%' height = '5%'></img>
                                </div>
                            </div>
                            <div className = 'row clients largeclients'>
                                <div className = 'col-12 col-sm-3 offset-sm-2'>
                                    <img src = 'https://drive.google.com/uc?export=download&id=1Y8Y2gTE_EATGV_NJ-qpf4roL57GV6nmg' alt = 'HP' width = '50%' height ='100%'/>
                                </div>
                                <div className = 'col-12 col-sm-3 rounded mx-auto d-block'>
                                    <img src = 'https://drive.google.com/uc?export=download&id=1cw538x3JtQI33EX0BSCdeInn4T1U1FaR' alt = 'DRDO' width = '50%' height ='100%'/>
                                </div>
                                <div className = 'col-12 col-sm-3 rounded mx-auto d-block'>
                                    <img src = 'https://drive.google.com/uc?export=download&id=1-Y2RGSYV3svxu_3JKN1sJRHBzPLdyn5k' alt = 'Toyota' width = '50%' height ='100%'/>
                                </div>
                            </div>
                            <div className = 'row clients'>
                                <div className = 'col-12 col-sm-4 mt-5 isroo'>
                                    <img src = 'https://drive.google.com/uc?export=download&id=1MXBGXZQGbfsT62CeumMB4LFCn32eoE9g' alt = 'pfizer' width = '50%' height = '60%'/>
                                </div>
                                <div className = 'col-12 col-sm-4 ae'>
                                    <img src = 'https://drive.google.com/uc?export=download&id=1ca-mHsem38Qx7H2J-2z1ZDVUr7VJAkl7' alt = 'LT' width = '50%' height = '90%'/>
                                </div>
                                <div className = 'col-sm-4 isroo'>
                                    <span className = 'largeclients justify-self-center align-self-center mx-auto'><button className='btn1 border mt-5 more d-block'><a href = '/installations/' className='more-btn'>More</a></button></span>
                                </div>
                                
                            </div>
                    </div>
                    </div>
                </div>
                <div className = 'carousel'>
                    
                    <ReactBootstrap.Carousel>
                        <ReactBootstrap.CarouselItem>
                            <img src = 'https://drive.google.com/uc?export=download&id=1skeFzyFyazUcS5t6ahLLwUsc8xlxLwUx' alt = 'ENRON' className = 'rounded mx-auto d-block reviews' width = '30%'/>
                            <ReactBootstrap.Carousel.Caption><p className = 'carouselcaption'>Criteria used for selecting Excel were their price, their ability to mobilize the necessary resources to meet Enron's aggressive schedule and quality of MTU Germany which is very important for a facility like a Data Centre. Excel Generators Pvt. Ltd. has not only met but exceeded Enron's expectations in all categories. Their machine, workmanship, and supervision was of the highest caliber The entire Excel team is very supportive and worked diligently to ensure that all schedules were met without compromising on quality<br></br>
                            <b className = 'clientnames'>C. Todd - Project Director, Broadband Solutions (Enron Company)</b></p></ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.CarouselItem>
                        <ReactBootstrap.CarouselItem>
                            <img src = 'https://drive.google.com/uc?export=download&id=11Rmhl8uTWV6Z5oRXC2nnNF5qeNvhtBxo' alt = 'ETLISL' className = 'rounded mx-auto d-block reviews' width = '30%'/>
                            <ReactBootstrap.Carousel.Caption>Excel Generators Pvt Ltd., Bangalore is directly associated with us for maintenance of our above-mentioned DG sets from April 2009. We are satisfied with their, upkeep and maintenance of the DG sets, quality of service, and responsiveness to our calls. We wish them good luck and success in their endeavors.<br></br>
                            <b className = 'clientnames'>K Murali - Manager - Planning and Facility Mgt, ETLISL</b></ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.CarouselItem>
                        <ReactBootstrap.CarouselItem>
                            <img src = 'https://drive.google.com/uc?export=download&id=1HKwrkzPYBK-RXyyAFlEF6RBkettznt3X' alt = 'ITC' className = 'rounded mx-auto d-block reviews' width = '30%'/>
                            <ReactBootstrap.Carousel.Caption>It gives me immense pleasure and satisfaction to inform you that last month when our 1275 KVA MTU DG set was down due to malfunctioning of MDEC, your company EXCEL Generators Pvt Ltd rose to the occasion, and excellent services were rendered, when a service engineer was flown to Mumbai from Bangalore and same day midnight DG set was repaired and put back in operation. I wish all the very best for your company's future and immense growth and thank your team for the prompt and efficient services. I also thank you for the commendable work done during the crisis situation<br></br>
                            <b className = 'clientnames'>Chief Engineer - ITC Grand Central Sheraton</b></ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.CarouselItem>

                    </ReactBootstrap.Carousel>
                </div>
                <div className = 'small-review'>
                    <div className = 'container'>
                        <div className = 'col-12 mt-5'>
                            <img src = 'https://drive.google.com/uc?export=download&id=1skeFzyFyazUcS5t6ahLLwUsc8xlxLwUx' alt = 'ENRON' className = 'rounded mx-auto d-block mt-5' width = '60%'/>
                        </div>
                        <div className = 'col-12'><p className = 'carouselcaption'><span className = 'fa fa-quote-left'></span> Criteria used for selecting Excel were their price, their ability to mobilize the necessary resources to meet Enron's aggressive schedule and quality of MTU Germany which is very important for a facility like a Data Centre. Excel Generators Pvt. Ltd. has not only met but exceeded Enron's expectations in all categories. Their machine, workmanship, and supervision was of the highest caliber The entire Excel team is very supportive and worked diligently to ensure that all schedules were met without compromising on quality <span className = 'fa fa-quote-right'></span><br></br>
                            <b className = 'clientnames'>C. Todd - Project Director, Broadband Solutions (Enron Company)</b></p>
                        </div>
                    </div>
                    <div className = 'container'>
                        <div className = 'col-12 mt-5'>
                            <img src = 'https://drive.google.com/uc?export=download&id=11Rmhl8uTWV6Z5oRXC2nnNF5qeNvhtBxo' alt = 'ETLISL' className = 'rounded mx-auto d-block' width = '60%'/>
                        </div>
                        <div className = 'col-12'><p className = 'carouselcaption'><span className = 'fa fa-quote-left'></span> Excel Generators Pvt Ltd., Bangalore is directly associated with us for maintenance of our above-mentioned DG sets from April 2009. We are satisfied with their, upkeep and maintenance of the DG sets, quality of service, and responsiveness to our calls. We wish them good luck and success in their endeavors.<span className = 'fa fa-quote-right'></span><br></br>
                            <b className = 'clientnames'>K Murali - Manager - Planning and Facility Mgt, ETLISL</b></p>
                        </div>
                    </div>
                    <div className = 'container mb-5 mt-5'>
                        <div className = 'col-12 mt-5'>
                            <img src = 'https://drive.google.com/uc?export=download&id=1HKwrkzPYBK-RXyyAFlEF6RBkettznt3X' alt = 'ITC' className = 'rounded mx-auto d-block' width = '60%'/>
                        </div>
                        <div className = 'col-12'><p className = 'carouselcaption'><span className = 'fa fa-quote-left'></span> It gives me immense pleasure and satisfaction to inform you that last month when our 1275 KVA MTU DG set was down due to malfunctioning of MDEC, your company EXCEL Generators Pvt Ltd rose to the occasion, and excellent services were rendered, when a service engineer was flown to Mumbai from Bangalore and same day midnight DG set was repaired and put back in operation. I wish all the very best for your company's future and immense growth and thank your team for the prompt and efficient services. I also thank you for the commendable work done during the crisis situation <span className = 'fa fa-quote-right'></span><br></br>
                            <b className = 'clientnames'>Chief Engineer - ITC Grand Central Sheraton</b></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
