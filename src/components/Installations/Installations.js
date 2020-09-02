import React, {Component} from 'react';
import './Installations.css';
import data from '../../shared/installations.json';
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardGroup} from 'reactstrap';


class Installations extends Component {
    render() {
        return(
            <div className='install-fullbox'>
                <div className='gen-head'>
                        <div className = 'col-12 col-sm-6 offset-sm-3 justify-content-center align-self-center'>
                            <h1><b>Our Clients</b></h1>
                            <p>We have worked around the world with the best</p>
                        </div>
                </div>                   
                <div className='container'>
                    <CardGroup>
                        { data.map(element => {
                            return (
                                <div key={element.id} className='col-12 col-md-3'>
                                    <Card id='gen-cards' style={{ backgroundColor: '#00000095', borderColor: '#333' }}>
                                        <CardImg top width='100%' src={element.imageUrl} alt='Generator' className='gen-card-img'/>                                                                                        
                                        <CardBody>
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
                </div>
            </div>
        );
    }
}

export default Installations;