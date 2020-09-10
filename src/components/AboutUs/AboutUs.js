import React, {Component} from 'react';
import './AboutUs.css'
import { Card, Accordion } from 'react-bootstrap';

class About extends Component {

  state = {
    toggle1: false,
    toggle2: true,
    toggle3: true
  }

  changeit1() {
      this.setState({
          toggle1: !this.state.toggle1
      })
  }
  changeit2() {
    this.setState({
        toggle2: !this.state.toggle2
    })
}
changeit3() {
  this.setState({
      toggle3: !this.state.toggle3
  })
}

    render(){
      return (
        <div className='about-fullbox'>
          <div className='container about-mainbox'>
            <div className='row'>
              <div className='col-12'>
                <h2 className='head1'>
                    About Us
                </h2>
                <hr className='hr-line' />
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
                  <Card className='fact-card' id='accordian-heading'>
                    <Card.Header className='card-head' style={{ backgroundColor: '#b21b09', borderColor: '#b21b09' }}>
                      Facts at a Glance
                    </Card.Header>
                    <Card.Body>
                      <dl className="row">
                        <dt className="col-6 fact-dt">Established</dt>
                        <dd className="col-6 fact-dd">1996</dd>
                        <dt className="col-6 fact-dt">M.D</dt>
                        <dd className="col-6 fact-dd">Mr. R Madhavan</dd>
                        <dt className="col-6 fact-dt">Installations</dt>
                        <dd className="col-6 fact-dd">123,456,789</dd>
                        <dt className="col-6 fact-dt">Employees</dt>
                        <dd className="col-6 fact-dd">40</dd>
                        <dt className="col-6 fact-dt">Headquarters</dt>
                        <dd className="col-6 fact-dd">Bengaluru</dd>
                      </dl>
                    </Card.Body>
                  </Card>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                  <h3 className='head2'>Our Team</h3>
                  <Accordion className='accord' defaultActiveKey="0">
                      <Card className='accord-card' id='accordian-heading' >
                          <Accordion.Toggle as={Card.Header} eventKey="0" style={{ backgroundColor: '#b21b09', borderColor: '#b21b09' }} onClick={this.changeit1.bind(this)}>
                              <div className='accord-head'>
                                Mr. R Madhavan - M.D
                                {this.state.toggle1 === false ? <i className="fa fa-caret-up arrow-down"></i> : <i className="fa fa-caret-down arrow-down"></i>}
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
                      <Card className='accord-card' id='accordian-heading' >
                          <Accordion.Toggle as={Card.Header} eventKey="0" style={{ backgroundColor: '#b21b09', borderColor: '#b21b09' }} onClick={this.changeit2.bind(this)}>
                              <div className='accord-head'>
                                Mr. Hegde
                                {this.state.toggle2 === false ? <i className="fa fa-caret-up arrow-down"></i> : <i className="fa fa-caret-down arrow-down"></i>}
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
                      <Card className='accord-card' id='accordian-heading' >
                          <Accordion.Toggle as={Card.Header} eventKey="0" style={{ backgroundColor: '#b21b09', borderColor: '#b21b09' }} onClick={this.changeit3.bind(this)}>
                              <div className='accord-head'>
                                Mr. Charan
                                {this.state.toggle3 === false ? <i className="fa fa-caret-up arrow-down"></i> : <i className="fa fa-caret-down arrow-down"></i>}
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
        </div>
      );
    }
  }
  
  export default About;
  