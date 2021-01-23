import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  box: {
    padding: theme.spacing(2),
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '50vh',
    width: '100%',
  },
  image: {
    width: '15em',
    height: '15em',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
