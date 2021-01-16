import {Box, Collapse, Paper} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FilterChip, {InputChip} from './FilterChip';
import {Filter} from '../constants/types';
import {HelpCard} from './Help';

const useStyles = makeStyles((theme) => ({
  queries: {
    padding: theme.spacing(1),
    boxSizing: 'border-box',
    marginTop: 0
  },
  filterName: {
    color: theme.palette.primary.light,
    marginRight: theme.spacing(1)
  }
}));

export default function FiltersInput(props: {
  // onFiltersChanged: (filters: Array<Filter>) => void,
  showHelp: boolean,
  filters: Array<Filter>,
  setFilters: (filters: Array<Filter>) => void,
  // setFocusInput: (focusInput: () => void) => void,
  // setFocus: (focus: (() => void)) => void,
  // setInputRef: (inputRef: React.RefObject<HTMLElement>) => void,
}): JSX.Element {
  const classes = useStyles();

  const deleteFilter = (index: number) => {
    const newFilters = props.filters.filter((_, i) => i !== index);
    props.setFilters(newFilters);
  };


  const addFilter = (filter: Filter): void => {
    const newFilters = [
      ...props.filters.filter((f) => f.type !== filter.type),
      filter
    ];
    props.setFilters(newFilters);
  };

  return (
    <Paper variant="outlined" className={classes.queries}>
      <Box>
        {props.filters.map((filter, index) => (
          <FilterChip
            key={filter.type}
            filter={filter}
            onDelete={() => deleteFilter(index)}
          />
        ))}
        <InputChip
          onAddFilter={addFilter}
          onDeletePrevious={() => deleteFilter(props.filters.length - 1)}
          // setFocus={props.setFocus}
        />
      </Box>
      <Collapse in={props.showHelp}>
        <HelpCard />
      </Collapse>
    </Paper>
  );
}
