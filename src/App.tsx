import React, { useEffect, useState } from 'react';
import './App.scss';

import FrettedStringDiagram from './components/fretted-string-diagram/fretted-string-diagram.component';
import { ChordsPage, NotesPage, WelcomePage } from './pages';

enum Pages {
  Chords = 'Chords',
  Notes = 'Notes',
  Welcome = 'Welcome'
};

function App() {

  const [currentPage, setCurrentPage] = useState(<WelcomePage/>);

  const changePage = (newPage: Pages) => {
    switch(newPage) {
      case Pages.Chords: {
        setCurrentPage(<ChordsPage/>);
        break;
      }
      case Pages.Notes: {
        setCurrentPage(<NotesPage/>);
        break;
      }
      case Pages.Welcome: {
        setCurrentPage(<WelcomePage/>);
        break;
      }
    }
  };

  return (
    <div className="App">
      <header>
        <a onClick={() => changePage(Pages.Welcome)}>Home</a>
        <a onClick={() => changePage(Pages.Notes)}>Notes</a>
        <a onClick={() => changePage(Pages.Chords)}>Chords</a>
      </header>
      {currentPage}
    </div>
  );
}

export default App;
