import React, {Component} from 'react';
import './Products.css';
import ProductA from './ProductA';
import ProductB from './ProductB';
import ProductC from './ProductC';
import ProductD from './ProductD';
import ProductE from './ProductE';

class Products extends Component {
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
                    <source src = 'https://drive.google.com/uc?export=download&id=1KzLA59nhNy4zlmQAktbJfcZDhG-FRGin' type = "video/mp4" />
                </video>
                        <div className = 'overlay'>
                            <div className = 'inner'>
                                <h1 className = 'title'><centre>Our Products</centre></h1> 
                                <p>Uninterrupted Power is in our DNA</p>
                                <a href = '#productA' className='btn ml-sm-3'>DRUPS</a>  
                                <a href = '#productB' className='btn ml-3'>Fuel Cells</a>
                                <a href = '#productC' className='btn ml-3'>LTO Battery</a>
                                <a href = '#productD' className='btn ml-3'>FESS</a>
                                <a href = '#productE' className='btn ml-3'>DG sets</a>

                            </div>
                        </div>                
                    </header>

            </div>
                <div id = 'productA'>
                    <ProductA/>
                </div>
                
                <div id = 'productB'>
                    <ProductB id = 'productB'/>
                </div>
                
                <div id = 'productC'>
                    <ProductC />
                </div>
                <div id = 'productD'>
                    <ProductD />
                </div>
                <div id = 'productE'>
                    <ProductE />
                </div>
            </div>
        );
    }
}

export default Products;