import React, { Component } from 'react';

export default class Filter extends Component {
    constructor (){
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler (e){
        e.preventDefault();
        let { changeFilter, type } = this.props;
        changeFilter(type);
    }
    render (){
        let { type } = this.props 
        return (
            <a onClick = {this.clickHandler}>
                { type }
            </a>
        )
    }
}