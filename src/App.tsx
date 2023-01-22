import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { AllChordsData } from './data/all-chords.data';
import ChordCard from './components/chord-card/chord-card.component';
import NoteCard from './components/note-card/note-card.component';
import { INVERSION } from './models/chord-card.model';
import FrettedStringDiagram from './components/fretted-string-diagram/fretted-string-diagram.component';
import SexyButton from './components/sexy-button/sexy-button.component';

function App() {

  const nextChord = () => {
    alert('GIMME THE NEXT CHORD, DEBORAH!');
  };

  const keepGettingChords = () => {
    alert('ALL THE CHORDS, BABY!');
  };

  return (
    <div className="App">
      <h1>Banjo Stuff!</h1>
      <FrettedStringDiagram/>
      <NoteCard note='C#' stringNumber={3} />
      <ChordCard chord={AllChordsData.CMinor} inversion={INVERSION.FIRST}/>
      <SexyButton text="Next Chord!" onClick={nextChord} />
      <SexyButton text="Keep Getting Chords" onClick={keepGettingChords}/>
    </div>
  );
}

export default App;
