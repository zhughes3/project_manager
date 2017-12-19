import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class HeaderItem extends Component {
    render() {
        const {item} = this.props;
        return (
            <li><NavLink to={item.href}>{item.text}</NavLink></li>
        );
    }
}

export default HeaderItem;