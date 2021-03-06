import React, {useEffect, useState} from 'react';
import {AppBar, Box, Icon, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import WordsTable, {TableWord} from './WordsTable';
import FiltersInput from './FiltersInput';
import {ApiWord, Filter, getFilterForCode, getFilterInfo, phonemeMap, posCodes} from '../constants/types';
import {SettingsDialog} from './Settings';
import {useSnackbar} from "notistack";

const useStyles = makeStyles((theme) => ({
    logo: {
        fontFamily: 'monospace',
        marginLeft: theme.spacing(2),
        fontWeight: 'bold',
        flex: 1
    },
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    footer: {
        padding: theme.spacing(1)
    }
}));

const API_ROOT = 'https://api.datamuse.com/words?';
const LEXI_ROOT = 'https://lexi.fyi/';

export default function Home(): JSX.Element {
    const { enqueueSnackbar } = useSnackbar();

    const classes = useStyles();
    const fromHash = (hash: string) => {
        return hash ? hash.split("#")[1].split("&")
            .map((slug) => slug.split("="))
            .filter(([type, _]) => getFilterForCode(type))
            .map(([type, query]) => ({
                type: getFilterForCode(type)!.type,
                query: query
            })) : [];
    }
    const getLinkHash = () => filters.map(filter => `${getFilterInfo(filter.type)?.code}=${filter.query}`).join("&");
    const copyLink = () => {
        let link = `${LEXI_ROOT}#${getLinkHash()}`;
        navigator.clipboard.writeText(link);
        enqueueSnackbar(`Copied link: ${link}`, {
            variant: "success",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
            }
        })
        // focusInput();
    }

    // const inputRef = useRef<HTMLElement>(null);
    // const [focusInput, setFocusInput] = useState<(() => void)>(() => {});
    const [filters, setFilters] = useState<Array<Filter>>(fromHash(window.location.hash));
    const [words, setWords] = useState<Array<TableWord> | undefined>(undefined);

    const processWords = (apiWords: Array<ApiWord>) => {
        setWords(apiWords.map(word => {
            const ipa = word.tags
                .find(tag => tag.startsWith('ipa_pron'))?.substring(9);
            const phonemes = word.tags
                .find(tag => tag.startsWith('pron'))?.substring(5).replace(/[0-9]/gi, '').trim().split(' ')
                // @ts-ignore
                .map(phoneme => phonemeMap[phoneme]).join('-');

            const meanings = word.defs
                ? word.defs
                    .map(def => def.split('\t'))
                    // @ts-ignore
                    .map(([posCode, def]) => ({partOfSpeech: posCodes[posCode], definition: def}))
                : undefined;

            return {
                word: word.word,
                meanings,
                ipa,
                phonemes,
                score: word.score
            } as TableWord;
        }));
    };

    const onFiltersChanged = () => {
        window.location.hash = getLinkHash();
        if (!filters.length) {
            setWords(undefined);
            return;
        }

        const query =
            API_ROOT +
            filters
                .map((filter) => `${getFilterInfo(filter.type)?.query}=${filter.query}`)
                .concat(['max=1000'])
                .concat(['md=dr'])
                .concat(['ipa=1'])
                .join('&');

        fetch(query)
            .then((res) => res.json())
            .then(processWords)
            .catch(console.error);
    };
    useEffect(onFiltersChanged, [filters]);

    const [settingsOpen, setSettingsOpen] = useState(false);
    const toggleSettings = () => setSettingsOpen(!settingsOpen);

    const [helpOpen, setHelpOpen] = useState(false);
    const toggleHelp = () => setHelpOpen(!helpOpen);

    // useEffect(() => {
    //     if(settingsOpen || helpOpen || !focusInput)
    //         return;
    //     focusInput();
    // }, [settingsOpen, helpOpen]);

    return (
        <Box height="100%" className={classes.container}>
            <AppBar position="sticky">
                <Toolbar className="draggable">
                    <Icon fontSize="large">translate</Icon>
                    <Typography variant="h6" className={classes.logo}>
                        Lexi
                    </Typography>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={copyLink}
                        tabIndex={-1}
                        className="not-draggable">
                        <Icon>link</Icon>
                    </IconButton>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={toggleHelp}
                        tabIndex={-1}
                        className="not-draggable">
                        <Icon>help</Icon>
                    </IconButton>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={toggleSettings}
                        tabIndex={-1}
                        className="not-draggable">
                        <Icon>settings</Icon>
                    </IconButton>
                </Toolbar>
                <Box p={2} paddingTop={0}>
                    <FiltersInput setFilters={setFilters} showHelp={helpOpen} filters={filters}/>
                </Box>
            </AppBar>
            <SettingsDialog open={settingsOpen} onClose={toggleSettings}/>
            <Box style={{overflow: 'auto', flexGrow: 1, scrollBehavior: 'smooth'}} display={'flex'}
                 justifyContent={'center'}>
                <WordsTable words={words}/>
            </Box>
            <Paper square className={classes.footer} variant="outlined">
                <Typography variant="subtitle2" color="inherit">
                    {`${words !== undefined ? words.length : 0} results`}
                </Typography>
            </Paper>
        </Box>
    );
}
