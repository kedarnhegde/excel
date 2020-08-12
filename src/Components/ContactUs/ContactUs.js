import React, {Component} from 'react';
import {Form, FormGroup, Input, Button, Col, Table} from 'reactstrap';
import './ContactUs.css';

class Contact extends Component {
    render(){
      return (
        <div className='container'>
            <div id='contact-heading'>
                <h1>Get in touch with us!</h1>
            </div>
            <div>
                <div className='offset-4'>
                    <img src='/assets/images/full.png' alt='logo' className='contact-img'/>
                </div>
            </div>
            <div className='row'>
                <div className='offset-md-3 col-md-6'>
                    <Form>
                        <FormGroup row>
                            <Col>
                                <Input type="name" name="name" placeholder="Name:"  className="form-fields"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Input type="email" name="email" placeholder="E-mail:"  className="form-fields"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Input type="number" name="number" placeholder="Contact Number:"  className="form-fields"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Input type="textarea" name="desc" placeholder="Description:"  className="form-fields" rows='5'/>
                            </Col>
                        </FormGroup>
                        <FormGroup row className=''>
                            <Col>
                                <Button color='outline-danger' className='submit-button btn btn-block' size='lg'>Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form> 
                </div>                   
            </div>
            <div className='row'>
                <div className='offset-md-2 col-md-8'>
                <Table striped bordered hover className='contact-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Contact Number</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
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
        </div>
      );
    }
  }
  
  export default Contact;
  