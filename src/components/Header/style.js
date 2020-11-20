import { Typography } from '@material-ui/core';
import styled from 'styled-components';

import FavoriteIcon from '@material-ui/icons/Favorite';

export const SearchInputWrapper = styled.div``;

export const AppBarWrapper = styled.div``;

export const ToolbarWrapper = styled.div`
  background-color: var(--white);
`;

export const Title = styled(Typography)`
  color: var(--oxfordBlue);
`;

export const StyledFavoritesButton = styled(FavoriteIcon)`
  color: var(--redSalsa);
`;

export default AppBarWrapper;
