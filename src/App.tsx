import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { AllChordsData } from './data/all-chords.data';
import ChordCard from './components/chord-card/chord-card.component';
import NoteCard from './components/note-card/note-card.component';
import { INVERSION } from './models/chord-card.model';
import { FrettedStringDiagram } from './components/fretted-string-diagram';

function App() {
  return (
    <div className="App">
      <h1>Banjo Stuff!</h1>
      <FrettedStringDiagram/>
      <NoteCard note='C#' stringNumber={3} />
      <ChordCard chord={AllChordsData.CMinor} inversion={INVERSION.FIRST}/>

    </div>
  );
}

export default App;
