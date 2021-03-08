import React, { Component } from 'react';

export default class CatList extends Component {
    listCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    }

    render() {
        return (
            <div>
                {this.listCats()}
            </div>
        )
    }
}