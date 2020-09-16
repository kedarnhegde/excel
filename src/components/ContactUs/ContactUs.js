import React, {Component} from 'react';
import {Form, FormGroup, Input, Button, Col, Table, Card, CardBody} from 'reactstrap';
import './ContactUs.css';
import {db} from '../../firebase';

class Contact extends Component {

    state = {
        name: "",
        email: "",
        number: "",
        desc: ""
    }

    handleChange(event, element) {
        var value = event.currentTarget.value
        if(element === "name") {
            this.setState({
                name: value
            })
        }
        else if(element === "email") {
            this.setState({
                email: value
            })
        }
        else if(element === "number") {
            this.setState({
                number: value
            })
        }
        else {
            this.setState({
                desc: value
            })
        }
    }
    handleClick(event) {
        if(this.state.name === '' || this.state.email === '' || this.state.number === '' ) {
            alert('Please Enter all fields');
        }
        else{
            event.preventDefault();
            db.collection('contacts').add({
                name: this.state.name,
                email: this.state.email,
                number: this.state.number,
                desc: this.state.desc
            })
            .then(() => {
                alert('Your response was Submitted successfully! Thank You!');   
            })
            .catch(error => {
                alert(error.message);
            });
            event.target.reset();
        }
    }

    render(){
      return (
        <div className='full-box'>
            <div className='container contact-mainbox'>
            <div className='image-box'>
                    <div className='offset-md-6 col-12 col-md-4 contact-heading'>
                    <h1><b>Drop us a line.</b></h1>
                            
                    </div>
             </div>
                <div className='row form-box'>
                    <div className='offset-md-6 col-12 col-md-4'>
                    <Form onSubmit = {this.handleClick.bind(this) }>
                            <FormGroup row>
                                <Col>
                                    <Input type="name" name="name" placeholder="Name:"  className="form-fields" id='form-inp' onChange={(event) => this.handleChange(event, "name")}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col>
                                    <Input type="email" name="email" placeholder="E-mail:"  className="form-fields" id='form-inp' onChange={(event) => this.handleChange(event, "email")}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col>
                                    <Input type="number" name="number" placeholder="Contact Number:"  className="form-fields" id='form-inp' onChange={(event) => this.handleChange(event, "number")}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col>
                                    <Input type="textarea" name="desc" placeholder="Description:"  className="form-fields" id='form-inp' rows='5' onChange={(event) => this.handleChange(event, "desc")}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col>
                                    <Button type='submit' className='submit-button btn btn-block' id='form-submit' size='lg'>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form> 
                    </div>                   
                </div>
                <div className='row table-box'>
                    <div className='offset-md-2 col-md-8'>
                    <Table striped bordered className='contact-table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Contact Number</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            <tr>
                                <td>1</td>
                                <td>Mr. R Madhavan - M.D</td>
                                <td><a className = 'linkto' href="tel:[+91 9845033116]">+91-9845033116</a></td>
                                <td><a className = 'linkto' href="mailto:nobreak@excelgenerators.com">nobreak@excelgenerators.com</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Office Number</td>
                                <td><a className = 'linkto' href="tel:[+91 80 23448070]">+91-80-23448070</a></td>
                                <td><a className = 'linkto' href="mailto:info@excelgenerators.com">info@excelgenerators.com</a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mr. Hegde </td>
                                <td><a className = 'linkto' href="tel:[+91 9880132335]">+91-9880132335</a></td>
                                <td><a className = 'linkto' href="mailto:hegde@excelgenerators.com">hegde@excelgenerators.com</a></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Mr. Charan </td>
                                <td><a className = 'linkto' href="tel:[+91 9901768022]">+91-9901768022</a></td>
                                <td><a className = 'linkto' href="mailto:service@excelgenerators.com">service@excelgenerators.com</a></td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                </div>
                <div className='row people-card'>
                    <div className='col-12'>
                        <Card id='phone-cards'>
                            <CardBody>
                            <dl className="row">
                                <dt className="col-5 fact-dt">Name</dt>
                                <dd className="col-7 fact-dd">Mr. R Madhavan - M.D</dd>
                                <dt className="col-5 fact-dt">Contact Number</dt>
                                <dd className="col-7 fact-dd"><a className = 'cont-card-links' href="tel:[+91 9845033116]">+91-9845033116</a></dd>
                                <dt className="col-5 fact-dt">E-mail</dt>
                                <dd className="col-7 fact-dd"><a className = 'cont-card-links' href="mailto:nobreak@excelgenerators.com">nobreak@excelgenerators.com</a></dd>
                            </dl>
                            </CardBody>
                        </Card>
                        <Card id='phone-cards'>
                            <CardBody>
                            <dl className="row">
                                <dt className="col-5 fact-dt">Name</dt>
                                <dd className="col-7 fact-dd">Office</dd>
                                <dt className="col-5 fact-dt">Contact Number</dt>
                                <dd className="col-7 fact-dd"><a className = 'cont-card-links' href="tel:[+91 80 23448070]">+91-80-23448070</a></dd>
                                <dt className="col-5 fact-dt">E-mail</dt>
                                <dd className="col-7 fact-dd"><a className = 'cont-card-links' href="mailto:info@excelgenerators.com">info@excelgenerators.com</a></dd>
                            </dl>
                            </CardBody>
                        </Card>
                        <Card id='phone-cards'>
                            <CardBody>
                            <dl className="row">
                                <dt className="col-5 fact-dt">Name</dt>
                                <dd className="col-7 fact-dd">Mr. Hegde</dd>
                                <dt className="col-5 fact-dt">Contact Number</dt>
                                <dd className="col-7 fact-dd"><a className = 'cont-card-links' href="tel:[+91 9880132335]">+91-9880132335</a></dd>
                                <dt className="col-5 fact-dt">E-mail</dt>
                                <dd className="col-7 fact-dd"><a className = 'cont-card-links' href="mailto:hegde@excelgenerators.com">hegde@excelgenerators.com</a></dd>
                            </dl>
                            </CardBody>
                        </Card>
                        <Card id='phone-cards'>
                            <CardBody>
                            <dl className="row">
                                <dt className="col-5 fact-dt">Name</dt>
                                <dd className="col-7 fact-dd">Mr. Charan</dd>
                                <dt className="col-5 fact-dt">Contact Number</dt>
                                <dd className="col-7 fact-dd"><a className = 'cont-card-links' href="tel:[+91 9901768022]">+91-9901768022</a></dd>
                                <dt className="col-5 fact-dt">E-mail</dt>
                                <dd className="col-7 fact-dd"><a className = 'cont-card-links' href="mailto:service@excelgenerators.com">service@excelgenerators.com</a></dd>
                            </dl>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        );
    }
  }
  
  export default Contact;
  