import './note-card.styles.scss';

export type NoteCardProperties = {
    note: string;
    stringNumber: number;
}

const NoteCard = ({note, stringNumber}: NoteCardProperties) => {
    const isSharp = note.includes('#');
    const bareNote = note.length > 0 ? note[0]: '';
    return <section className='NoteCard'>
        <span className={`Note ${isSharp ? 'Sharp' : ''}`}>
            {bareNote}
        </span>
        <span>On String {stringNumber}</span>
    </section>;
};

export default NoteCard;
