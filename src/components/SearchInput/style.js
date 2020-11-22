import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '500px',
    maxWidth: '90vw',

    display: 'flex',
    margin: '0px',
  },
  inputBase: {
    flex: 1,
    marginLeft: '16px',
  },
}));

export default useStyles;
