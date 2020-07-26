import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

class ProductList extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="py-5">
                     <div className="container">
                         <Title name="our" title="Products"/>
                       <div className="row"></div>
                      
                      <ProductConsumer>
                          {
                            value=>{
                                return value.products.map(prod=>(
                                      <Product key={prod.id} product={prod}/>
                                ))
                             }
                          }

                      </ProductConsumer>
                     </div>
                </div>
                </React.Fragment>
          
        );
    }
}

export default ProductList;