import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './Component/HeaderComponent';
import { NavBarComponent } from './Component/NavBarComponent';
import { ContentComponent } from './Component/ContentComponent';

const dados = {
  menuTop: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'],
  menuPrincipal : ['Main menu 1', 'Main menu 2', 'Main menu 3'],
  menuAsideLink: ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5', 
                  'Section 6', 'Section 7', 'Section 8', 'Section 9', 'Section 10', 
                  'Section 11', 'Section 12', 'Section 13', 'Section 14', 'Section 15']
}

function App() {
  return (
    <div>
      <HeaderComponent menuTop={dados.menuTop}/>
      <NavBarComponent menuPrincipal={dados.menuPrincipal}/>
      <ContentComponent dados={dados}/>
    </div>
  );
}

export default App;
