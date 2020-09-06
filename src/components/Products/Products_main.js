import React, {Component} from 'react';
import './Products.css';
import Product_1 from './Product_1';
import Product_2 from './Product_2';
import Product_3 from './Product_3';
import Product_4 from './Product_4';

class Products extends Component {
    render() {
        return(
            <div>
                <h1 className='prod'>This is Products page</h1>
                <Product_1 />
                <Product_2 />
                <Product_3 />
                <Product_4 />
            </div>
        );
    }
}

export default Products;