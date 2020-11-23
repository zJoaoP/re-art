import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  collapseButton: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandedCollapseButton: {
    transform: 'rotate(180deg)',
  },
}));

export default useStyles;
