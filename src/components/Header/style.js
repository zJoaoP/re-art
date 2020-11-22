import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {},
  toolBar: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    margin: '20px',
    overflow: 'inherit',
  },
  space: {
    flexGrow: 1,
  },
  favoritesButton: {
    margin: '12px',
    // alignContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
      // alignContent: 'center',
    },
  },
  favoriteIcon: {
    color: '#ff0000',
  },
}));

export default useStyles;
