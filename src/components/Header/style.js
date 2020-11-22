// import { Typography } from '@material-ui/core';
// import styled from 'styled-components';

// import FavoriteIcon from '@material-ui/icons/Favorite';

// export const SearchInputWrapper = styled.div``;

// export const AppBarWrapper = styled.div``;

// export const ToolbarWrapper = styled.div`
//   background-color: var(--white);
// `;

// export const Title = styled(Typography)`
//   color: var(--oxfordBlue);
// `;

// export const StyledFavoritesButton = styled(FavoriteIcon)`
//   color: var(--redSalsa);
// `;

// export default AppBarWrapper;
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
