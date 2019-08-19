import React from 'react';
import './Content.css';
import { SidebarComponent } from '../SidebarComponent';
import { PostComponent } from '../PostComponent';

export const ContentComponent = (props) => (
    <div id="mainContent">
        <section>
            {props.dados.Materias.map((materia) => <PostComponent materia={materia} />)}
        </section>
        <aside>
            <SidebarComponent menuAsideLink={props.dados.menuAsideLink} />
        </aside>
    </div>
)