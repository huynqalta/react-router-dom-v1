import React, { Component } from 'react'

export default class Iphone extends Component {
    render() {
        var {match}=this.props;
        console.log(match);
        var name=match.params.slug;
        return (
            <div>
                đây là chi tiết sản phẩm :{name}
            </div>
        )
    }
}