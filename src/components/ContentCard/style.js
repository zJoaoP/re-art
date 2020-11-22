import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    height: '100%',
    padding: 8,
  },
  media: {
    flexGrow: 1,
    height: '500px',
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
  },
}));

export default useStyles;
