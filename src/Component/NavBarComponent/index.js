import React from 'react';
import './NavBar.css';

export const NavBarComponent = (props) => (
    <div className="corpo">
        <nav className="menu">
            <div className="center">
                <ul>
                    {props.menuPrincipal.map((element, index) => <li key={index}><a href="#">{element}</a></li>)}
                </ul>
            </div>
        </nav>
    </div>
)