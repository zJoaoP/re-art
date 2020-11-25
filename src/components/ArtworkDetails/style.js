import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'box',
    marginLeft: 'auto',
    marginRight: 'auto',

    width: '100%',
    maxWidth: '720px',
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '50px',
    },
  },
  text: {
    margin: '16px',
    wordWrap: 'break-word',
  },
}));

export default useStyles;
