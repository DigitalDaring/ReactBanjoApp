import React from 'react';
import { render, screen } from '@testing-library/react';
import { noteFrettingService } from './note-fretting.service';

test('Finds an F on the G string at fret 10 ', () => {
    const stringTuning = 'G';
    const targetNote = 'F';

    const result = noteFrettingService.findFirstFretOnStringWithNote(targetNote, stringTuning);

    expect(result).toEqual(10);
});


test('Finds a G on the B string at fret 8', () => {
    const stringTuning = 'B';
    const targetNote = 'G';

    const result = noteFrettingService.findFirstFretOnStringWithNote(targetNote, stringTuning);

    expect(result).toEqual(8);
});

test('Finds a D on the D string at fret 0', () => {
    const stringTuning = 'D';
    const targetNote = 'D';

    const result = noteFrettingService.findFirstFretOnStringWithNote(targetNote, stringTuning);

    expect(result).toEqual(0);
});

test('Finds an F# on the D string at fret 4', () => {
    const stringTuning = 'D';
    const targetNote = 'F#';

    const result = noteFrettingService.findFirstFretOnStringWithNote(targetNote, stringTuning);

    expect(result).toEqual(4);
});