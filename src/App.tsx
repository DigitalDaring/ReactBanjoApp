import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { AllChordsData, AllChordsList } from './data/all-chords.data';
import ChordCard from './components/chord-card/chord-card.component';
import NoteCard from './components/note-card/note-card.component';
import { INVERSION } from './models/chord-card.model';
import FrettedStringDiagram from './components/fretted-string-diagram/fretted-string-diagram.component';
import SexyButton from './components/sexy-button/sexy-button.component';
import randomService from './services/random.service';
import { AllInversionsList } from './data/all-inversions.data';

function App() {

  const [chordState, setChordState] = useState(AllChordsData.CMinor);
  const [inverstionState, setInversionState] = useState(INVERSION.ROOT);

  const nextChord = () => {
    const randomChordIndex = randomService.getRandomInteger(0, AllChordsList.length);
    const newRandomChord = AllChordsList[randomChordIndex];

    const randomInversionIndex = randomService.getRandomInteger(0, AllInversionsList.length);    
    const newRandomInversion = AllInversionsList[randomInversionIndex];

    setChordState(newRandomChord);
    setInversionState(newRandomInversion);
  };

  const keepGettingChords = () => {
    alert('ALL THE CHORDS, BABY!');
  };

  return (
    <div className="App">
      <h1>Banjo Stuff!</h1>
      <FrettedStringDiagram/>
      <NoteCard note='C#' stringNumber={3} />
      <ChordCard chord={chordState} inversion={inverstionState}/>
      <SexyButton text="Next Chord!" onClick={nextChord} />
      <SexyButton text="Keep Getting Chords" onClick={keepGettingChords}/>
    </div>
  );
}

export default App;
