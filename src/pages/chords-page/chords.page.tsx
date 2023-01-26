import { useState, useEffect } from 'react';

import '../pages.scss';
import { AllChordsData, AllChordsList } from '../../data/all-chords.data';
import { INVERSION } from '../../models/chord-card.model';
import { ChordCard } from '../../components/chord-card';
import randomService from '../../services/random.service';
import { AllInversionsList } from '../..//data/all-inversions.data';
import { FriendlyButton } from '../../components';

const ChordsPage = () => {

    const [chordState, setChordState] = useState(AllChordsData.CMinor);
    const [inverstionState, setInversionState] = useState(INVERSION.ROOT);
    const [isNotesExpanded, setIsNotesExpanded] = useState(false);
    const [keepGettingChords, setKeepGettingChords] = useState(false);

    const onExpandNotesClick = (expand: boolean) => {
        setIsNotesExpanded(expand);
    };

    const nextChord = () => {
        const randomChordIndex = randomService.getRandomInteger(0, AllChordsList.length);
        const newRandomChord = AllChordsList[randomChordIndex];
    
        const randomInversionIndex = randomService.getRandomInteger(0, AllInversionsList.length);    
        const newRandomInversion = AllInversionsList[randomInversionIndex];
    
        setChordState(newRandomChord);
        setInversionState(newRandomInversion);
    };

    useEffect(() => {
        const onTick = setInterval(() => {
            if(keepGettingChords) {
                nextChord();
                }
            }, 10000);
        return () => clearInterval(onTick);
    }, [keepGettingChords, nextChord]);

    const toggleInfiniteChords = () => {
        if(!keepGettingChords) {
            nextChord();
        }
        setKeepGettingChords(!keepGettingChords);
    };

    const infiniteText = `${keepGettingChords ? 'Stop' : 'Keep'} Getting Chords`;

    return <section className='Page'>
        <ChordCard chord={chordState} inversion={inverstionState} expandNotes={isNotesExpanded} onExpandNotesClick={onExpandNotesClick}/>
        <section className='Buttons'>
            <FriendlyButton text="Next Chord!" onClick={nextChord} />
            <FriendlyButton text={infiniteText} onClick={toggleInfiniteChords}/>
        </section>
    </section>
};

export { ChordsPage };
