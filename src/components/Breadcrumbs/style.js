import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
  },
  breadcrumbs: {
    marginLeft: '20px',
  },
}));

export default useStyles;
