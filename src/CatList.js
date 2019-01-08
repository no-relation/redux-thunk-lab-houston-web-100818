import React, { Component } from 'react';

export class CatList extends Component {

    render() {
        console.log('rendering CatList', this.props.catPics)
        return (
            <div>
                {this.props.catPics.map( catPic => {
                    return <img src={catPic.url} width='150px' />
                }) }
            </div>
        )
    }
}