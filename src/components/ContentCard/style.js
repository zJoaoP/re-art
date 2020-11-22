import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  media: {
    // flexGrow: 1,
    // height: '500px',
  },
  card: {
    margin: 8,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
}));

export default useStyles;
