import React, {Component} from 'react';
import './AboutUs.css'
import { Card, Accordion } from 'react-bootstrap';

class About extends Component {
    render(){
      return (
        <div className='container about-mainbox'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='head1'>
                  About Us
              </h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
                <h3 className='head2'>Our History</h3>
                <p className='about-content'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit beatae, officiis dolore tempore incidunt saepe blanditiis adipisci esse, laudantium eveniet repudiandae aperiam laborum, veniam voluptatem numquam fuga minima quidem?
                </p>
                <p className='about-content'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit beatae, officiis dolore tempore incidunt saepe blanditiis adipisci esse, laudantium eveniet repudiandae aperiam laborum, veniam voluptatem numquam fuga minima quidem?
                </p>
            </div>
            <div className='col-12 col-sm-6'>
                <Card className='fact-card'>
                  <Card.Header className='card-head' style={{ backgroundColor: '#b21b09', borderColor: '#b21b09' }}>
                    Facts at a Glance
                  </Card.Header>
                  <Card.Body>
                    <dl className="row">
                      <dt className="col-6 fact-dt">Started</dt>
                      <dd className="col-6 fact-dd">12th Aug. 2020</dd>
                      <dt className="col-6 fact-dt">M.D</dt>
                      <dd className="col-6 fact-dd">Mr. R Madhavan</dd>
                      <dt className="col-6 fact-dt">Installments</dt>
                      <dd className="col-6 fact-dd">123,456,789</dd>
                      <dt className="col-6 fact-dt">Employees</dt>
                      <dd className="col-6 fact-dd">40</dd>
                    </dl>
                  </Card.Body>
                </Card>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
                <h1>Our Team</h1>
                <Accordion className='accord'>
                    <Card className='accord-card'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <div className='accord-head'>
                              Mr. R Madhavan - M.D
                              <i className="fa fa-caret-down arrow-down"></i>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <div className='accord-body'>
                            <Card.Body>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit beatae, officiis dolore tempore incidunt saepe blanditiis adipisci esse, laudantium eveniet repudiandae aperiam laborum, veniam voluptatem numquam fuga minima quidem?
                            </Card.Body>
                        </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion className='accord'>
                    <Card className='accord-card'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <div className='accord-head'>
                              Mr. Hegde
                              <i className="fa fa-caret-down arrow-down"></i>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <div className='accord-body'>
                            <Card.Body>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit beatae, officiis dolore tempore incidunt saepe blanditiis adipisci esse, laudantium eveniet repudiandae aperiam laborum, veniam voluptatem numquam fuga minima quidem?
                            </Card.Body>
                        </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion className='accord'>
                    <Card className='accord-card'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <div className='accord-head'>
                              Mr. Charan
                              <i className="fa fa-caret-down arrow-down"></i>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <div className='accord-body'>
                            <Card.Body>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit beatae, officiis dolore tempore incidunt saepe blanditiis adipisci esse, laudantium eveniet repudiandae aperiam laborum, veniam voluptatem numquam fuga minima quidem?
                            </Card.Body>
                        </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default About;
  