import {Box, Icon, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core';
import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Meaning, PartOfSpeech} from '../constants/types';
import {ConfigContext} from '../containers/App';

export type TableWord = {
  word: string,
  meanings: Array<Meaning>
  phonemes: string,
  ipa: string,
  score: number
};

const useStyles = makeStyles((theme) => ({
  ipa: {
    whiteSpace: 'nowrap'
  },
  pronunciation: {
    fontStyle: 'italic',
    color: theme.palette.action.disabled,
    whiteSpace: 'nowrap'
  },
  partOfSpeech: {
    fontSize: 12,
    color: theme.palette.action.disabled,
    display: 'block'
  },
  unknown: {
    color: theme.palette.action.disabled
  },
  emptyIcon: {
    fontSize: theme.spacing(20),
  },
}));

function EmptyState(classes: Record<"ipa" | "pronunciation" | "partOfSpeech" | "unknown" | "emptyIcon", string>, zeroResults: boolean) {
  return (
    <Box style={{ textAlign: 'center', color: '#ddd' }} alignSelf={'center'} >
      <Icon className={classes.emptyIcon}>{ zeroResults ? "sentiment_dissatisfied" : "translate"}</Icon>
      <Typography variant={'h5'}>{ zeroResults ? "No results" : "Add a filter to see results"}</Typography>
    </Box>
  );
}

function MeaningRow(meaning: Meaning, classes: Record<"ipa" | "pronunciation" | "partOfSpeech" | "unknown" | "emptyIcon", string>): JSX.Element {
  return (
    <span>
      <span className={classes.partOfSpeech}>{PartOfSpeech[meaning.partOfSpeech]}</span>
      <span>{meaning.definition}</span>
    </span>
  );
}

export default function WordsTable({ words }: { words: Array<TableWord> | undefined }) {
  const classes = useStyles();

  const { config } = useContext(ConfigContext);

  if(words === undefined)
    return EmptyState(classes, false);
  else if(words.length == 0)
    return EmptyState(classes, true);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Word</TableCell>
          {config.showPronunciations && <TableCell>Pronunciation</TableCell>}
          {config.showDefinitions && <TableCell>Meaning</TableCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {words.map((word: TableWord) => (
          <TableRow key={word.word}>
            <TableCell>{word.word}</TableCell>
            {
              config.showPronunciations &&
              <TableCell>
                <span className={classes.ipa}>{word.ipa}</span>{'\u2003'}<span
                className={classes.pronunciation}>{word.phonemes}</span>
              </TableCell>
            }
            {
              config.showDefinitions &&
              <TableCell>{word.meanings ?
                MeaningRow(word.meanings[0], classes)
                : <span className={classes.unknown}>unknown</span>}</TableCell>
            }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
