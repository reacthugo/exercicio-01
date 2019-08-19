import React from 'react';
import noticiaImg from '../../noticia.png';

import logo from '../../logo.svg';

export const PostComponent = (props) => (
    <article className="notica">
        <img src={noticiaImg} alt="Imagem da noticia em questão" />
        <div>
            <p> {props.materia.conteudo} </p>
        </div>
    </article>
);