import { Box, Collapse, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterChip, { InputChip } from './FilterChip';
import { Filter } from '../constants/types';
import { HelpCard } from './Help';

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
  onFiltersChanged: (filters: Array<Filter>) => void,
  showHelp: boolean
}): JSX.Element {
  const classes = useStyles();
  const [filters, setFilters] = useState<Array<Filter>>([]);

  const deleteFilter = (index: number) => {
    const newFilters = filters.filter((_, i) => i !== index);
    setFilters(newFilters);
    props.onFiltersChanged(newFilters);
  };

  const addFilter = (filter: Filter): void => {
    const newFilters = [
      ...filters.filter((f) => f.type !== filter.type),
      filter
    ];
    setFilters(newFilters);
    props.onFiltersChanged(newFilters);
  };

  return (
    <Paper variant="outlined" className={classes.queries}>
      <Box>
        {filters.map((filter, index) => (
          <FilterChip
            key={filter.type}
            filter={filter}
            onDelete={() => deleteFilter(index)}
          />
        ))}
        <InputChip
          onAddFilter={addFilter}
          onDeletePrevious={() => deleteFilter(filters.length - 1)}
        />
      </Box>
      <Collapse in={props.showHelp}>
        <HelpCard />
      </Collapse>
    </Paper>
  );
}
