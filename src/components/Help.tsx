import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {FilterType} from "../constants/types";
import {ExampleChip} from "./FilterChip";

const useStyles = makeStyles((theme) => ({
    helpCard: {
      padding: theme.spacing(1),
      marginTop: theme.spacing(1)
    }
  }
));

export function HelpCard() {
  const classes = useStyles();

    return (
    <Paper className={classes.helpCard} variant={'outlined'}>
      {
          // @ts-ignore
        Object.keys(FilterType).map(k => <ExampleChip key={k} type={FilterType[k]}/>)
      }
    </Paper>
  );
}

export function HelpDialog({ open, onClose }: { open: boolean, onClose: () => void }) {

  return (
    <Dialog aria-labelledby="simple-dialog-title" onClose={onClose} open={open}>
      <DialogTitle id="simple-dialog-title">Help</DialogTitle>
      <DialogContent>
          <HelpCard></HelpCard>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
