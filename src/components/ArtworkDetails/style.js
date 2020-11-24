import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {},
  image: {
    display: 'box',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '100%',
    maxHeight: '500px',
    marginBottom: '8px',
  },
  text: {
    margin: '16px',
  },
}));

export default useStyles;
