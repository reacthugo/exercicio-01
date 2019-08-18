import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

export const HeaderComponent = () => (
    <header className="">
        <img src={logo} alt="logo" width="300px" />
        <ul className="menu_superior">
            <li>
                <a href="#">Topic 1</a>
            </li>
            <li>
                <a href="#">Topic 2</a>
            </li>
            <li>
                <a href="#">Topic 3</a>
            </li>
        </ul>
    </header>
)