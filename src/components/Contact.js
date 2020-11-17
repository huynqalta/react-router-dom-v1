import React, { Component } from 'react'
import {Prompt} from 'react-router-dom'

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state={
            isCheck:true
        }
    }
    onClick=(value)=>{
        this.setState({
        isCheck:value
        })
    }
    render() {
        return (
            <div>
                <h1>Đây là trang Contact</h1>
                <div className="row">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <button type="button" className="btn btn-info"
                        onClick={()=>this.onClick(false)}
                        >cho mài </button>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <button type="button" className="btn btn-danger"
                        onClick={()=>this.onClick(true)}
                        >Không cho mài </button>
                    </div>
                    <Prompt
                    when={this.state.isCheck}
                    message={location=>(`Bạn có chắc chắc muốn đi đến${location.pathname}`)}
                    />
                </div>
            </div>
        )
    }
}
