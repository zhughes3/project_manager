import React, { Component } from 'react';
import HeaderItem from './HeaderItem'

class Header extends Component {
    render() {
        const { items } = this.props;
        return (
            <ul className="header">
                {/*map() : creates a new array with the results of calling a provided function on every element in the calling array*/}
                {
                    items.map( item => {
                        return <HeaderItem item={item} />
                    })

                }
            </ul>
        );
    }
}

export default Header;