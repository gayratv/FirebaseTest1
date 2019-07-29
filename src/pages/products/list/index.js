import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import {observer, inject} from 'mobx-react';

@inject('stores') @observer class Products extends React.Component{
    render(){
        let productModel = this.props.stores.products;
        let cart = this.props.stores.cart;

        let productsCards = productModel.items.map((product) => {  
            let btn;

            if(cart.inCart(product.id)){
                btn = <Button variant="danger" onClick={() => cart.remove(product.id)}>
                    Remove from cart
                </Button>
            }
            else{
                btn = <Button variant="success" onClick={() => cart.add(product.id)}>
                    Add to cart
                </Button>
            }

            return <div className={'col col-4 ' + styles.col} key={product.id}>
                <Card>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            <strong>Price: {product.price}</strong>
                        </Card.Text>
                        <Link to={urlBuilder('product', {id: product.id})}>
                            Get more...
                        </Link>
                        <hr/>
                        {btn}
                    </Card.Body>
                </Card>
            </div>
        });

        return (
            <div>
                <h1>Products page</h1>
                <div className="row">
                    {productsCards}
                </div>
            </div>
        );
    }
}

export default Products;