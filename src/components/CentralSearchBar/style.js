import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '200px',
    // [theme.breakpoints.down('sm')]: {
    //   marginTop: '200px',
    // },
    // [theme.breakpoints.between('sm', 'md')]: {
    //   marginTop: '270px',
    // },
    [theme.breakpoints.up('md')]: {
      marginTop: '225px',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '72px',
      marginBottom: '16px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '96px',
      marginBottom: '32px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '96px',
      marginBottom: '32px',
    },
  },
}));

export default useStyles;
