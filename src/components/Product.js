import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';
import Iphone from './Iphone';

export default class Product extends Component {
    render() {
        var product = [
            {
                id: 1,
                slug:'iphone',
                name: 'iphone X',
                price: 350000000
            },
            {
                id: 2,
                slug:'Samsum',
                name: 'Samsum',
                price: 3505565656000000
            },
            {
                id: 3,
                slug:'Opple',
                name: 'Opple ',
                price: 35000324234230000
            }
        ]

        var {match}=this.props;
        var url=match.url;
        var result = product.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item" >
                        {product.id} - {product.name}-{product.price}
                    </li>
                </NavLink>
            )
        });
        return (

            <div className="container">
                <h1>Danh sách sản phẩm</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                
                <div className="row">
                    <Route path="/sanpham/:slug" component={Iphone}/>
                </div>
                
            </div>
        )
    }
}