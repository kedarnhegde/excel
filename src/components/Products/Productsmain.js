import React, {Component} from 'react';
import './Products.css';
import ProductA from './ProductA';
import ProductB from './ProductB';
import ProductC from './ProductC';

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
                    <source src = 'https://firebasestorage.googleapis.com/v0/b/excel-b7752.appspot.com/o/media%2Fproducts%2FGeneral%20Icons%20For%20both%20Generator%20Types%2FProducts-Jumbotron.mp4?alt=media&token=d88be2a8-21ea-46df-9d8c-fed9a4dc374d' type = "video/mp4" />
                </video>
                        <div className = 'overlay'>
                            <div className = 'inner'>
                                <h1 className = 'title'><centre>Our Products</centre></h1> 
                                <p>Uninterrupted Power is in our DNA</p>
                                <a href = '#productA' className='btn'>RBT UPS</a>
                                <a href = '#productB' className='btn ml-4'>DRUPS</a>
                                <a href = '#productC' className='btn ml-4'>DG sets</a>

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
            </div>
        );
    }
}

export default Products;