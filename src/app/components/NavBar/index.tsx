/**
 *
 * NavBar
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Box,
  ButtonBase,
} from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { AccountCircle } from '@material-ui/icons';
import { useStyles } from './styles';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSaga } from '../../../store/user/saga';
import {
  userActions,
  reducer as reducer1,
  sliceKey as sliceKey1,
} from '../../../store/user/slice';
import {
  bookActions,
  sliceKey as sliceKey2,
  reducer as reducer2,
} from '../../../store/book/slice';
import {
  cartActions,
  sliceKey as sliceKey3,
  reducer as reducer3,
} from '../../../store/cart/slice';
import { searchBookSaga } from '../../../store/book/saga';
import { selectCart } from '../../../store/cart/selectors';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';

interface Props {
  isLoggedin: boolean;
}

export function NavBar(props: Props) {
  useInjectReducer({ key: sliceKey1, reducer: reducer1 });
  useInjectSaga({ key: sliceKey1, saga: logoutSaga });
  useInjectReducer({ key: sliceKey2, reducer: reducer2 });
  useInjectSaga({ key: sliceKey2, saga: searchBookSaga });
  useInjectReducer({ key: sliceKey3, reducer: reducer3 });

  const cart = useSelector(selectCart);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const history = useHistory();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const goToHome = () => {
    history.replace('/');
  };

  const goToCart = () => {
    history.push('./cart');
    handleMenuClose();
  };
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
    handleMenuClose();
  };
  const handleSignin = () => {
    history.push('./signin');
    handleMenuClose();
  };
  const handleSignup = () => {
    history.push('./signup');
    handleMenuClose();
  };

  const [searchText, setSearch] = React.useState('');

  React.useEffect(() => {
    if (props.isLoggedin) {
      dispatch(
        bookActions.searchBook({
          searchText: searchText,
          paginationOptions: { page: 1, limit: 12, sort: 'average_rating' },
        }),
      );
    }
  }, [props.isLoggedin, searchText]);

  const classes = useStyles();
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {props.isLoggedin ? (
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      ) : (
        <Box>
          <MenuItem onClick={handleSignin}>Signin</MenuItem>
          <MenuItem onClick={handleSignup}>Signup</MenuItem>
        </Box>
      )}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {props.isLoggedin ? (
        <Box>
          <MenuItem onClick={goToCart}>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge
                badgeContent={cart.cartInfo?.items.length || 0}
                color="secondary"
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
            <p>Cart</p>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Logout</p>
          </MenuItem>
        </Box>
      ) : (
        <Box>
          <MenuItem onClick={handleSignin}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Signin</p>
          </MenuItem>
          <MenuItem onClick={handleSignup}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Signup</p>
          </MenuItem>
        </Box>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <ButtonBase onClick={goToHome}>
            <Typography className={classes.title} variant="h6" noWrap>
              Books
            </Typography>
          </ButtonBase>
          {props.isLoggedin && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={event => setSearch(event.target.value)}
              />
            </div>
          )}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {props.isLoggedin && (
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={goToCart}
              >
                <Badge
                  badgeContent={cart.cartInfo?.items.length || 0}
                  color="secondary"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
