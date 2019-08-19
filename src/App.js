import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './Component/HeaderComponent';
import { NavBarComponent } from './Component/NavBarComponent';
import { ContentComponent } from './Component/ContentComponent';

const dados = {
  menuTop: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'],
  menuPrincipal: ['Main menu 1', 'Main menu 2', 'Main menu 3'],
  menuAsideLink: ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5',
    'Section 6', 'Section 7', 'Section 8', 'Section 9', 'Section 10',
    'Section 11', 'Section 12', 'Section 13', 'Section 14', 'Section 15'],
  Materias: [
    {
      nome: "Matéria 1",
      conteudo: "Matéria 1. Veritatis doloribus doloremque ab qui culpa dignissimos explicabo natus optio omnis incidunt recusandae, perferendis dicta, animi ad. Aliquam nostrum sequi inventore vero! (...)"
    },
    {
      nome: "Matéria 2",
      conteudo: "Matéria 2. Veritatis doloribus doloremque ab qui culpa dignissimos explicabo natus optio omnis incidunt recusandae, perferendis dicta, animi ad. Aliquam nostrum sequi inventore vero! (...)"
    },
    {
      nome: "Matéria 3",
      conteudo: "Matéria 3. Veritatis doloribus doloremque ab qui culpa dignissimos explicabo natus optio omnis incidunt recusandae, perferendis dicta, animi ad. Aliquam nostrum sequi inventore vero! (...)"
    },
    {
      nome: "Matéria 4",
      conteudo: "Matéria 4. Veritatis doloribus doloremque ab qui culpa dignissimos explicabo natus optio omnis incidunt recusandae, perferendis dicta, animi ad. Aliquam nostrum sequi inventore vero! (...)"
    },
    {
      nome: "Matéria 5",
      conteudo: "Matéria 5. Veritatis doloribus doloremque ab qui culpa dignissimos explicabo natus optio omnis incidunt recusandae, perferendis dicta, animi ad. Aliquam nostrum sequi inventore vero! (...)"
    }
  ]
}

function App() {
  return (
    <div>
      <HeaderComponent menuTop={dados.menuTop} />
      <NavBarComponent menuPrincipal={dados.menuPrincipal} />
      <ContentComponent dados={dados} />
    </div>
  );
}

export default App;
