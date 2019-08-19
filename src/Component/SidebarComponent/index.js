import React from 'react';

export const SidebarComponent = (props) => (
    <div className="menuLateral">
        <ul>
            {props.menuAsideLink.map((element, index) => <li key={index}><a href="#">{element}</a></li>)}
        </ul>
    </div>
);
