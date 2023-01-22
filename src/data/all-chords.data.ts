import { ChordCardModel } from '../models/chord-card.model'

type AllChordsType = {
    [key: string]: ChordCardModel
}

const AllChordsData = {
    AMajor: new ChordCardModel('A', 'A Major', ['A', 'C#', 'E']),
    AMinor: new ChordCardModel('Am', 'A Minor', ['A', 'C', 'E']),
    BMajor: new ChordCardModel('B', 'B Major', ['B', 'D#', 'F#']),
    BMinor: new ChordCardModel('Bm', 'B Minor', ['B', 'D', 'F#']),
    CMajor: new ChordCardModel('C', 'C Major', ['C', 'E', 'G']),
    CMinor: new ChordCardModel('Cm', 'C Minor', ['C', 'D#', 'G']),
    DMajor: new ChordCardModel('D', 'D Major', ['D', 'F#', 'A']),
    DMinor: new ChordCardModel('Dm', 'D Minor', ['D', 'F', 'A']),
    EMajor: new ChordCardModel('E', 'E Major', ['E', 'G#', 'B']),
    EMinor: new ChordCardModel('Em', 'E Minor', ['E', 'G', 'B']),
    FMajor: new ChordCardModel('F', 'F Major', ['F', 'A', 'C']),
    FMinor: new ChordCardModel('Fm', 'F Minor', ['F', 'G#', 'C']),
    GMajor: new ChordCardModel('G', 'G Major', ['G', 'B', 'D']),
    GMinor: new ChordCardModel('Gm', 'G Minor', ['G', 'A#', 'D'])
} as AllChordsType;

const AllChordsList = [
    AllChordsData.AMajor,
    AllChordsData.AMinor,
    AllChordsData.BMajor,
    AllChordsData.BMinor,
    AllChordsData.CMajor,
    AllChordsData.CMinor,
    AllChordsData.DMajor,
    AllChordsData.DMinor,
    AllChordsData.EMajor,
    AllChordsData.EMinor,
    AllChordsData.FMajor,
    AllChordsData.FMinor,
    AllChordsData.GMajor,
    AllChordsData.GMinor
] as ChordCardModel[];

export {
    AllChordsData,
    AllChordsList
};