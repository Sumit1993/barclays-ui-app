import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  section: {
    margin: theme.spacing(2, 0),
  },
}));
