import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  spinner: {
    position: 'relative',
    height: '50px',
    width: '50px',
    left: '50%',
    marginLeft: '-25px',
  },
}));

export default useStyles;
