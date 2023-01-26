import './chord-card.styles.scss'
import { ChordCardModel, INVERSION } from '../../models/chord-card.model';

type ChordCardProperties = {
    chord: ChordCardModel,
    inversion: INVERSION,
    expandNotes: boolean,
    onExpandNotesClick: (expand: boolean) => void;
};

const ChordCard = ({chord, inversion, expandNotes, onExpandNotesClick}: ChordCardProperties) => {
    const notesClasses = `Notes ${expandNotes ? 'Expanded' : ''}`
    const triad = chord.triadNotes.map(note => <span key={note}>{note}</span>);
    return  <section className="ChordCard">
                <section className={`Content ${inversion}`}>
                   {chord.shortName}
                </section>
                <section className="Tab RootTab">
                    Root
                </section>
                <section className="Tab FirstInversionTab">
                    1st Inv
                </section>
                <section className="Tab SecondInversionTab">
                    2nd Inv
                </section>
                <section className={notesClasses} onClick={() => onExpandNotesClick(!expandNotes)}>
                    <h3>Notes</h3>
                    <div className='Triad'>{triad}</div>
                </section>
            </section>;
}

export default ChordCard;