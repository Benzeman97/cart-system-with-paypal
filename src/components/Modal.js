import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from '../style-components/Button';
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {
                        value=>{
                         const {modelOpen,closeModel}=value;
                         const {img,title,price}=value.modelProduct;

                         if(!modelOpen)
                               return null;
                               else {
                                 return(  <ModalContainer>
                                       <div className="container">
                                           <div className="row">
                                             <div id="modal" className="col-3 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                                      <h4>Item add to the cart</h4>
                                                      <img src={img} className="img-fluid" alt="product"/>
                                                      <h5 className="mt-3">{title}</h5>
                                                      <h5 className="text-muted">
                                                          price : ${price}
                                                      </h5>
                                                      <Link to="/">
                                                          <ButtonContainer onClick={()=>closeModel()}>
                                                              store
                                                          </ButtonContainer>
                                                      </Link>
                                                      <Link to="/cart">
                                                          <ButtonContainer cart onClick={()=>closeModel()}>
                                                            go to cart
                                                          </ButtonContainer>
                                                      </Link>
                                             </div>
                                           </div>
                                       </div>
                                   </ModalContainer>
                                 );
                               }

                        }
                    }
                </ProductConsumer>
            </div>
        );
    }
}

const ModalContainer= styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display:flex;
align-items: center;
justify-content:center;
#modal{
    background: var(--mainWhite);
}

`;

export default Modal;