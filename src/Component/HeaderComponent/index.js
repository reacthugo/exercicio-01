import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

export const HeaderComponent = (props) => (
    <header className="header">
        <div className="headerTopo">
            <img src={logo} alt="logo" />
            <ul className="headerMenu">
                {props.menuTop.map((element, index) => <li key={index}><a href="#">{element}</a></li>)}
            </ul>
        </div>

        <div className="headerFooter">
            <input className="inputPesquisa" type="text" placeholder="Search" aria-label="Search"></input>
        </div>
    </header>
)