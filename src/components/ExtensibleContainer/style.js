import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
