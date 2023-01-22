import { AllNotesList } from '../data/all-notes.data';

class NoteFrettingService {
    findFirstFretOnStringWithNote = (note: string, stringTuning: string): number => {
        const startingNoteIndex = AllNotesList.indexOf(stringTuning);
        const targetNoteIndex = AllNotesList.indexOf(note);

        if (startingNoteIndex <= targetNoteIndex) {
            return targetNoteIndex - startingNoteIndex;
        } else {
            const distanceLeftInList = AllNotesList.length - startingNoteIndex;
            return distanceLeftInList + targetNoteIndex;
        }
    }
}

const noteFrettingService = new NoteFrettingService();

export {noteFrettingService};