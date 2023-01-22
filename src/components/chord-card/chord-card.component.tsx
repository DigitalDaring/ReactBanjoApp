import './chord-card.styles.scss'
import { ChordCardModel, INVERSION } from '../../models/chord-card.model';

type ChordCardProperties = {
    chord: ChordCardModel,
    inversion: INVERSION
};

const ChordCard = ({chord, inversion}: ChordCardProperties) => {

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
            </section>;
}

export default ChordCard;