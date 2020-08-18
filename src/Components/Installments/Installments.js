import React, {Component} from 'react';
import './Installments.css';
import data from '../../shared/installations.json';
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardGroup} from 'reactstrap';


class Installments extends Component {
    render() {
        return(
            <div className='install-fullbox'>
                <div className='container'>
                <h2 className='gen-head'>
                    Some of our Installations are shown below
                </h2>                   
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

export default Installments;