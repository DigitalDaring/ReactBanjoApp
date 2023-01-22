
export enum INVERSION {
    ROOT = "Root",
    FIRST = "First",
    SECOND = "Second"
}

export class ChordCardModel {
    public shortName: string;
    public fullName: string;
    public triadNotes: string[];

    public constructor(_shortName: string, _fullName: string, _triadNotes: string[]) {
        this.shortName = _shortName;
        this.triadNotes = _triadNotes;
        this.fullName = _fullName;
    }

    public GetInversionNotes = (inversion: INVERSION): string[] => {
        switch(inversion) {
            case INVERSION.FIRST: {
                return [this.triadNotes[1], this.triadNotes[2], this.triadNotes[0]];
            }
            case INVERSION.SECOND: {
                return [this.triadNotes[2], this.triadNotes[0], this.triadNotes[1]];
            }
            default: {
                return [this.triadNotes[0], this.triadNotes[1], this.triadNotes[2]];
            }
        }
    }

};