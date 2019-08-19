import React from 'react';
import './Content.css';
import { SidebarComponent } from '../SidebarComponent';

export const ContentComponent = (props) => (
    <div id="mainContent">
        <section>

        </section>
        <aside>
            <SidebarComponent menuAsideLink={props.dados.menuAsideLink} />            
        </aside>
    </div>
)