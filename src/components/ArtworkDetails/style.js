import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  image: {
    display: 'box',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '100%',
    maxHeight: '800px',
    marginBottom: '8px',
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '40px',
    },
  },
  text: {
    margin: '16px',
    wordWrap: 'break-word',
  },
}));

export default useStyles;
