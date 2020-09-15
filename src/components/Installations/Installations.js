import React, {Component} from 'react';
import './Installations.css';
import data from '../../shared/installations.json';
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardGroup} from 'reactstrap';
import Fade from 'react-reveal/Fade';


class Installations extends Component {
    render() {
        return(
            <div className='install-fullbox' id='top'>
                <div className='gen-head'>
                        <div className = 'col-12 col-sm-6 offset-sm-3 justify-content-center align-self-center'>
                            <h1><b>Our Clients</b></h1>
                            <p>The best services started here</p>
                        </div>
                </div>   
                <a class="fa fa-chevron-up back-to-top" href='#top' aria-hidden="true"> </a>                
                <div className='container'>
                    <Fade left>
                    <CardGroup>
                        { data.map(element => {
                            return (
                                <div key={element.id} className='col-12 col-md-3'>
                                    <Card id='gen-cards' style={{ backgroundColor: '#00000095', borderColor: '#333' }}>
                                        <CardImg top width='100%' src={element.imageUrl} alt='Generator' className='gen-card-img'/>                                                                                        
                                        <CardBody className='gen-body'>
                                            <CardTitle className='gen-title'>
                                                {element.name}
                                            </CardTitle>
                                            <CardSubtitle className='gen-title2'>
                                                {element.generator}
                                            </CardSubtitle>
                                        </CardBody>
                                    </Card>       
                                </div>
                            )
                        })}                       
                    </CardGroup> 
                    </Fade>  
                </div>
            </div>
        );
    }
}

export default Installations;