import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paperWrapper: {
    maxWidth: '90%',
    width: '500px',

    display: 'flex',
  },
  inputBase: {
    flex: 1,
    marginLeft: '16px',
  },
}));

export default useStyles;
