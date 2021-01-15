import {Chip, Icon} from '@material-ui/core';
import React, {useRef, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Filter, FilterType, getFilterForCode, getFilterInfo} from '../constants/types';

const unknownIcon = <Icon>help</Icon>;

const useStyles = makeStyles((theme) => ({
    chip: {
        padding: theme.spacing(0.5),
        margin: theme.spacing(1),
        height: 'auto',
        fontSize: 17,
        fontFamily: 'monospace',
        color: theme.palette.primary.light
    },
    inputChip: {
        cursor: 'pointer'
    },
    exampleChip: {
        color: theme.palette.secondary.main,
    },
    filterName: {
        color: theme.palette.primary.light,
        marginRight: theme.spacing(1)
    },
    filterQuery: {
        color: theme.palette.primary.contrastText
    },
    filterInput: {
        outline: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        color: theme.palette.common.black,
        fontFamily: 'monospace',
        marginRight: theme.spacing(1)
    },
    filterQueryInput: {
        color: theme.palette.primary.contrastText
    },
    hidden: {
        display: 'none'
    },
    error: {
        color: 'red'
    }
}));

export function InputChip(props: {
    onAddFilter: (filter: Filter) => void;
    onDeletePrevious: () => void;
}): JSX.Element {
    const classes = useStyles();
    const typeInput = useRef<HTMLElement>(null);
    const queryInput = useRef<HTMLElement>(null);

    const [newType, setNewType] = useState<FilterType | undefined>(undefined);

    const clear = () => {
        setNewType(undefined);
        if (queryInput.current && typeInput.current) {
            queryInput.current.innerText = '';
            typeInput.current.innerText = '';
            typeInput.current.focus();
            queryInput.current.classList.add(classes.hidden);
        }
    };

    const onTypeInput = (event: React.FormEvent<HTMLElement>) => {
        if (event.currentTarget.innerHTML.includes('&nbsp;')) {
            const maybeNewType = getFilterForCode(
                event.currentTarget.innerText.trimEnd()
            );
            if (maybeNewType !== undefined) {
                setNewType(maybeNewType.type);
                event.currentTarget.innerText = maybeNewType.text;
                if (queryInput.current) {
                    queryInput.current.classList.remove(classes.hidden);
                    queryInput.current.focus();
                }
            } else {
                event.currentTarget.classList.add(classes.error);
            }
        } else {

            event.currentTarget.classList.remove(classes.error);
        }
    };

    const onTypeInputKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key == 'Backspace'
            && window.getSelection()?.getRangeAt(0).startOffset === 0)
            props.onDeletePrevious();
        else if (event.key == 'Enter')
            event.preventDefault();
    };

    const onQueryInputKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key == 'Backspace'
            && window.getSelection()?.getRangeAt(0).startOffset === 0)
            clear();
        else if (event.key == 'Enter')
            event.preventDefault();
    };

    const onQueryInput = (event: React.FormEvent<HTMLElement>) => {
        if (event.currentTarget.innerHTML.includes('&nbsp;')) {
            props.onAddFilter({
                type: newType as FilterType,
                query: event.currentTarget.innerText.trimEnd()
            });
            clear();
        }
    };

    const doFocus = () =>
        newType ? queryInput.current && queryInput.current.focus() : typeInput.current && typeInput.current.focus();

    window.addEventListener("load", doFocus);

    return (
        <Chip
            tabIndex={-1}
            className={[classes.chip, classes.inputChip].join(' ')}
            icon={
                newType !== undefined ? getFilterInfo(newType)?.icon : unknownIcon
            }
            onClick={doFocus}
            label={
                <span>
          <span
              contentEditable
              className={classes.filterInput}
              onKeyDown={onTypeInputKeyDown}
              onInput={onTypeInput}
              ref={typeInput}
          />
          <span
              contentEditable
              className={[classes.filterInput, classes.hidden].join(' ')}
              onKeyDown={onQueryInputKeyDown}
              onInput={onQueryInput}
              ref={queryInput}
          />
        </span>
            }
        />
    );
}

export default function FilterChip({
                                       filter,
                                       onDelete
                                   }: {
    filter: Filter;
    onDelete: () => void;
}) {
    const classes = useStyles();

    const chipType = getFilterInfo(filter.type);
    if (chipType == null) return null;

    return (
        <Chip
            className={classes.chip}
            onDelete={onDelete}
            icon={chipType.icon}
            label={
                <span>
          <span className={classes.filterName}>{chipType.text}</span>
          <span className={classes.filterQuery}>{filter.query}</span>
        </span>
            }
            color="primary"
        />
    );
}


export function ExampleChip({type}: { type: FilterType }) {
    const classes = useStyles();

    const chipType = getFilterInfo(type);
    if (chipType == null) return null;

    return (
        <Chip
            variant={'outlined'}
            className={[classes.chip, classes.exampleChip].join(' ')}
            icon={chipType.icon}
            label={
                <span>
                    [{chipType.code}] {chipType.text} ...
        </span>
            }
            color="secondary"
        />
    );
}
