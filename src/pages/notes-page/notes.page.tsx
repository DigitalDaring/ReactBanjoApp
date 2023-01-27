import { useState, useEffect } from 'react';

import '../pages.scss';
import { NoteCard, FriendlyButton } from '../../components';
import { AllNotesList } from '../../data/all-notes.data';
import randomService from '../../services/random.service';

const NotesPage = () => {

    const [noteState, setNoteState] = useState('C#');
    const [stringState, setStringState] = useState(3);
    const [keepGettingNotes, setKeepGettingNotes] = useState(false);

    const nextNote = () => {
        const randomNoteIdx = randomService.getRandomInteger(0, AllNotesList.length);
        const randomNote = AllNotesList[randomNoteIdx];
        const randomStringNumber = randomService.getRandomInteger(1, 5);
        setNoteState(randomNote);
        setStringState(randomStringNumber);
    }

    useEffect(() => {
        const onTick = setInterval(() => {
            if(keepGettingNotes) {
                nextNote();
                }
            }, 5000);
        return () => clearInterval(onTick);
    }, [keepGettingNotes, nextNote]);

    const toggleInfiniteNotes = () => {
        if(!keepGettingNotes) {
            nextNote();
        }
        setKeepGettingNotes(!keepGettingNotes);
    };

    const infiniteText = `${keepGettingNotes ? 'Stop' : 'Keep'} Getting Notes`;

    return <section className="Page">
        <NoteCard note={noteState} stringNumber={stringState} />
        <section className='Buttons'>
            <FriendlyButton text="Next Note!" onClick={nextNote} />
            <FriendlyButton text={infiniteText} onClick={toggleInfiniteNotes}/>
        </section>
    </section>;
};

export { NotesPage };
