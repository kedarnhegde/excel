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
                    <source src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2Fgenerators.mp4?alt=media&token=e3f9d319-36c8-4d27-92f0-59d41a70b31e' type = "video/mp4" />
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
                        <div className = 'col-12 col-sm-4 align-self-center'>
                            <Fade top>
                                <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2FRolls-Kino.jpg?alt=media&token=b0a056b9-70da-4b3d-bfe1-6a3c3935b799' alt = 'Rolls-Kino' width = '100%' className="rounded mx-auto d-block"/>
                            </Fade>
                        </div>
                        <div className = 'col-12 col-sm-2 align-self-center'>
                            <Fade bottom>
                                <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2FIEM.png?alt=media&token=691eec58-0c19-4c0d-898d-f9ed4b499167' alt = 'IEM' width = '100%' className="rounded mx-auto d-block"/>
                            </Fade>
                        </div>

                    </div>
                </div>
                <div clasName = 'clienoverlay'>
                    <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2Fclientback.jpg?alt=media&token=2d107087-e144-43e0-807e-8ff4e35ec466' alt = 'clients' zindex = '-2' width='100%' className = 'clientimg'/>
                        <div className = 'container'>
                            <div className = 'row'>
                                <h1>Our Clients</h1> 
                            </div>
                            <div className = 'row clients'>
                                <div className = 'col-12 col-sm-4 justify-content-center align-self-center'>
                                    <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2Fmicrosoft.png?alt=media&token=24a16180-d8bf-48b9-97b8-f9d76efe1818' alt = 'microsoft' width = '100%' className = 'small-clients'></img>
                                </div>
                                <div className = 'col-12 col-sm-3 offset-sm-1 rounded mx-auto d-block'>
                                    <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2Fbosch.png?alt=media&token=a6069bd8-9cf5-4d23-8be1-04e424161d57' alt = 'BOSCH' width = '100%' height = '100%'></img>
                                </div>
                                <div className = 'col-12 col-sm-4 justify-content-center align-self-center mx-auto isroo'>
                                    <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2FISRO%20logo.png?alt=media&token=3d907ee3-3af5-4c31-a1ff-5790e6dc293e' alt = 'ISRO' width = '60%' height = '5%'></img>
                                </div>
                            </div>
                            <div className = 'row clients largeclients'>
                                <div className = 'col-12 col-sm-3 offset-sm-2'>
                                    <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2Fhp.png?alt=media&token=4288bdcd-9b5c-47f2-a2e1-2b0f1c8853ae' alt = 'HP' width = '50%' height ='100%'/>
                                </div>
                                <div className = 'col-12 col-sm-3 rounded mx-auto d-block'>
                                    <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2FLT.png?alt=media&token=220d892b-d032-4eb8-8f54-7b74dbfbb1be' alt = 'LT' width = '70%' height ='100%'/>
                                </div>
                                <div className = 'col-12 col-sm-3 rounded mx-auto d-block'>
                                    <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2FToyota.png?alt=media&token=4c0b8ee0-8dbd-41b1-bbfe-f8267c3c51a7' alt = 'Toyota' width = '50%' height ='100%'/>
                                </div>
                            </div>
                            <div className = 'row clients'>
                                <div className = 'col-12 col-sm-4 mt-5'>
                                    <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2FCognizant.png?alt=media&token=3d304383-d920-40be-a619-ba5b1d49d0b5' alt = 'cognizant' width = '100%' height = '100%'/>
                                </div>
                                <div className = 'col-12 col-sm-4 mx-auto ae'>
                                    <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2FDRDO%20logo.png?alt=media&token=9458a8a5-0581-448d-a597-d8f613d8225f' alt = 'American Express' width = '50%' height = '100%'/>
                                </div>
                                
                                <span className = 'largeclients justify-self-center align-self-center mx-auto'><a href = '/installations/' className='btn1 border mx-auto d-block'>More</a></span>
                                
                            </div>
                    </div>
                </div>
                <div className = 'carousel mt-5'>
                    
                    <ReactBootstrap.Carousel>
                        <ReactBootstrap.CarouselItem>
                            <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2Fenron.svg?alt=media&token=bd794c11-c28f-4d44-943e-c34fbdd1fbc4' alt = 'ENRON' className = 'rounded mx-auto d-block' width = '30%'/>
                            <ReactBootstrap.Carousel.Caption><p className = 'carouselcaption'>Criteria used for selecting Excel was their price, their ability to mobilise the necessary resources to meet Enron's aggressive schedule and quality of MTU Germany which is very important for a facility like a Data Centre. Excel Generators Pvt. Ltd. have not only met but exceeded Enron's expectations in all categories. Their machine, workmanship and supervision was of the highest caliber The entire Excel team is very supportive and worked diligently to ensure that all schedules were met without comprimising on quality.<br></br>
                            <b className = 'clientnames'>C. Todd - Project Director, Broadband Solutions (Enron Company)</b></p></ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.CarouselItem>
                        <ReactBootstrap.CarouselItem>
                            <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2Fcarousel2.svg?alt=media&token=f7161b0c-dc50-4a0b-ad21-115bf0f7801f' alt = 'ETLISL' className = 'rounded mx-auto d-block' width = '30%'/>
                            <ReactBootstrap.Carousel.Caption>MIS Excel Generators Pvt Ltd., Bangalore is directly associated with us for maintenance of our above mentioned DG sets from April 2009. We are satisfied with their, upkeep and maintenance of the DG sets, quality of service and responsiveness to our calls. We wish them good luck and success in their endeavors.<br></br>
                            <b className = 'clientnames'>K Murali - Manager - Planning and Facility Mgt, ETLISL</b></ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.CarouselItem>
                        <ReactBootstrap.CarouselItem>
                            <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2Fcarousel3.svg?alt=media&token=4b8bd230-116c-4903-9599-3796135490ad' alt = 'ITC' className = 'rounded mx-auto d-block' width = '30%'/>
                            <ReactBootstrap.Carousel.Caption>It gives me immense pleasure and satisfaction to inform you that last month when our 1275 KVA MTU DG set was down due to malfunctioning of MDEC, your company EXCEL Generators Pvt Ltd rose to the occasion and excellent services were rendered, when a service engineer was flown to Mumbai from Bangalore and same day midnight DG set was repaired and put back in operation. I wish all the very best for your company's future and immense growth and thank your team for the prompt and efficient services. I also thank you for the commendable work done during the crisis situation.<br></br>
                            <b className = 'clientnames'>Chief Engineer - ITC Grand Central Sheraton</b></ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.CarouselItem>

                    </ReactBootstrap.Carousel>
                </div>
                <div className = 'small-review mt-5'>
                    <div className = 'container'>
                        <div className = 'col-12 mt-5'>
                            <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2Fenron.svg?alt=media&token=bd794c11-c28f-4d44-943e-c34fbdd1fbc4' alt = 'ENRON' className = 'rounded mx-auto d-block' width = '50%'/>
                        </div>
                        <div className = 'col-12'><p className = 'carouselcaption'><span className = 'fa fa-quote-left'></span> Criteria used for selecting Excel was their price, their ability to mobilise the necessary resources to meet Enron's aggressive schedule and quality of MTU Germany which is very important for a facility like a Data Centre. Excel Generators Pvt. Ltd. have not only met but exceeded Enron's expectations in all categories. Their machine, workmanship and supervision was of the highest caliber The entire Excel team is very supportive and worked diligently to ensure that all schedules were met without comprimising on quality. <span className = 'fa fa-quote-right'></span><br></br>
                            <b className = 'clientnames'>C. Todd - Project Director, Broadband Solutions (Enron Company)</b></p>
                        </div>
                    </div>
                    <div className = 'container'>
                        <div className = 'col-12 mt-5'>
                            <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2Fcarousel2.svg?alt=media&token=f7161b0c-dc50-4a0b-ad21-115bf0f7801f' alt = 'ETLISL' className = 'rounded mx-auto d-block' width = '30%'/>
                        </div>
                        <div className = 'col-12'><p className = 'carouselcaption'><span className = 'fa fa-quote-left'></span> MIS Excel Generators Pvt Ltd., Bangalore is directly associated with us for maintenance of our above mentioned DG sets from April 2009. We are satisfied with their, upkeep and maintenance of the DG sets, quality of service and responsiveness to our calls. We wish them good luck and success in their endeavors. <span className = 'fa fa-quote-right'></span><br></br>
                            <b className = 'clientnames'>K Murali - Manager - Planning and Facility Mgt, ETLISL</b></p>
                        </div>
                    </div>
                    <div className = 'container'>
                        <div className = 'col-12 mt-5'>
                            <img src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fhome-page%2Fcarousel3.svg?alt=media&token=4b8bd230-116c-4903-9599-3796135490ad' alt = 'ITC' className = 'rounded mx-auto d-block' width = '30%'/>
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