import React from 'react';

import cartModel from '~s/cart.js';
import orderModel from '~s/order.js';

import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';

export default class extends React.Component{
    render(){
        let postsTmp = [1, 2, 3];
        let links = postsTmp.map(post => {
            return <div key={post}>
                <Link to={urlBuilder('blogPost', {some: post})}>Post {post}</Link>
            </div>
        });

        return (
            <div>
                <h2>Congratulations!</h2>
                <p>Hi, {orderModel.data.name}!</p>
                <p><strong>Total: {cartModel.total}</strong></p>
                <div>
                    {links}
                </div>
            </div>
        )
    }
}