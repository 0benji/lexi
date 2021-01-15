import {Icon} from "@material-ui/core";
import React from "react";

export enum FilterType {
    MEANS_LIKE,
    SOUNDS_LIKE,
    SPELLED_LIKE,
    MODIFIED_BY,
    MODIFIES,
    SYNONYMS,
    TRIGGERS,
    ANTONYMS,
    HYPERNYMS,
    HYPONYMS,
    HOLONYMS,
    MERONYMS,
    FOLLOWS,
    PRECEDES,
    RHYMES,
    NEAR_RHYMES,
    HOMOPHONES,
    CONSONANT_MATCHES,
}

const iconMeaningLike = <Icon>merge_type</Icon>;
const iconSoundsLike = <Icon>hearing</Icon>;
const iconSpelling = <Icon>edit</Icon>;
const iconRightArrow = <Icon>arrow_forward</Icon>;
const iconLeftArrow = <Icon>arrow_backward</Icon>;
const iconCopy = <Icon>content_copy</Icon>;
const iconText = <Icon>description</Icon>;
const oppositeIcon = <Icon>swap_horiz</Icon>;
const categoryIcon = <Icon>bubble_chart</Icon>;
const partIcon = <Icon>extension</Icon>;

export type FilterInfo = {
    type: FilterType,
    icon: JSX.Element,
    text: string,
    code: string,
    query: string
}

export const filterInfo = [
    {type: FilterType.MEANS_LIKE, icon: iconMeaningLike, text: 'meaning like', code: 'ml', query: 'ml'},
    {type: FilterType.SOUNDS_LIKE, icon: iconSoundsLike, text: 'sounds like', code: 'sl', query: 'sl'},
    {type: FilterType.SPELLED_LIKE, icon: iconSpelling, text: 'spelled like', code: 'sp', query: 'sp'},
    {type: FilterType.MODIFIED_BY, icon: iconRightArrow, text: 'modified by', code: 'mb', query: 'rel_jja'},
    {type: FilterType.MODIFIES, icon: iconLeftArrow, text: 'modifies', code: 'm', query: 'rel_jjb'},
    {type: FilterType.SYNONYMS, icon: iconCopy, text: 'synonym of', code: 'sy', query: 'rel_syn'},
    {type: FilterType.TRIGGERS, icon: iconText, text: 'occurs with', code: 'w', query: 'rel_trg'},
    {type: FilterType.ANTONYMS, icon: oppositeIcon, text: 'antonym of', code: 'an', query: 'rel_ant'},
    {type: FilterType.HYPERNYMS, icon: categoryIcon, text: 'parent of', code: 'men', query: 'rel_spc'},
    {type: FilterType.HYPONYMS, icon: categoryIcon, text: 'type of', code: 'typ', query: 'rel_gen'},
    {type: FilterType.HOLONYMS, icon: partIcon, text: 'part of', code: 'par', query: 'rel_com'},
    {type: FilterType.MERONYMS, icon: partIcon, text: 'comprises', code: 'com', query: 'rel_par'},
    {type: FilterType.FOLLOWS, icon: iconRightArrow, text: 'follows', code: 'fol', query: 'rel_bga'},
    {type: FilterType.PRECEDES, icon: iconLeftArrow, text: 'precedes', code: 'pre', query: 'rel_bgb'},
    {type: FilterType.RHYMES, icon: iconSoundsLike, text: 'rhymes with', code: 'rhy', query: 'rel_rhy'},
    {type: FilterType.NEAR_RHYMES, icon: iconSoundsLike, text: 'nearly rhymes with', code: 'nry', query: 'rel_nry'},
    {type: FilterType.HOMOPHONES, icon: iconSoundsLike, text: 'homophone of', code: 'hom', query: 'rel_hom'},
    {
        type: FilterType.CONSONANT_MATCHES,
        icon: iconSpelling,
        text: 'shares consonants with',
        code: 'cns',
        query: 'rel_cns'
    }
]

export const getFilterForCode = (code: string) => filterInfo.find(f => f.code == code);
export const getFilterInfo = (type: FilterType) => filterInfo.find(f => f.type == type);


export type Filter = {
    type: FilterType;
    query: string;
};

export type ApiWord = {
    word: string,
    score: number,
    numSyllables: number,
    tags: Array<string>,
    defs: Array<string>
}

export const phonemeMap = {
    AA: 'ah',
    AE: 'a',
    AH: 'uh',
    AO: 'or',
    AW: 'ow',
    AY: 'eye',
    B: 'b',
    CH: 'ch',
    D: 'd',
    DH: 'th',
    EH: 'eh',
    ER: 'er',
    EY: 'ay',
    F: 'f',
    G: 'g',
    HH: 'h',
    IH: 'ih',
    IY: 'ee',
    JH: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    NG: 'ng',
    OW: 'oh',
    OY: 'oy',
    P: 'p',
    R: 'r',
    S: 's',
    SH: 'sh',
    T: 't',
    TH: 'th',
    UH: 'u',
    UW: 'ooh',
    V: 'v',
    W: 'w',
    Y: 'y',
    Z: 'z',
    ZH: 'zsh'
};

export enum PartOfSpeech {
    UNKNOWN, NOUN, ADJECTIVE, VERB
}

export const posCodes = {
    n: PartOfSpeech.NOUN,
    adj: PartOfSpeech.ADJECTIVE,
    v: PartOfSpeech.VERB
};

export type Meaning = {
    partOfSpeech: PartOfSpeech,
    definition: string
}
