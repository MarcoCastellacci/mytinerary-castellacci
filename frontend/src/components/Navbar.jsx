import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../img/logo.png';
import '../styles/styles.css';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import Avatar from '@mui/material/Avatar';
import userActions from '../redux/actions/userActions';

const pages = [{ to: '/index', name: 'Home' }, { to: '/cities', name: 'Cities' }, { to: '/user', name: 'Profile' }];
const settings = [{ to: '/login', name: 'Sign In' }, { to: '/signup', name: 'Sign Up' }];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

const user = useSelector(store => store.userReducer.user);
function signOut() {
        dispatch(userActions.SignOutUser())
        navigate('/')
    }
  return (
    <AppBar position="static" sx={{
      backgroundImage: "linear-gradient(to top, #00c6fb 0%, #005bea 100%)",
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              width: '100%',
              marginRight: '0',
            }}
          >
            <img src={Logo} alt="Logo" className="logo" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                color: 'black',
              }}
            >
              {pages.map((page, index) => (
                <RouterLink key={index} to={page.to} onClick={handleCloseNavMenu}>
                  <MenuItem>
                    <Typography sx={{ textDecoration: 'none' }} className='button1' textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </RouterLink>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              width: '100%',
              zIndex: '0',
              justifyContent: 'center',
            }}
          >
            <img src={Logo} alt="logo" className="logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
            {pages.map((page, index) => (
              <RouterLink key={index} to={page.to} className='button1' onClick={handleCloseNavMenu}>
                {page.name}
              </RouterLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, justifyContent: 'center' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, }}>
                {user ? <Avatar
                            alt="User Image"
                            src={user.image}
                            sx={{ width: 56, height: 56 }}
                            /> : <AccountCircleIcon sx={{
                                  width: '4rem',
                                  fontSize: '3rem',
                                  }} />}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: '45px',
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            {user ? <Typography onClick={signOut}>Sign Out</Typography> :
              settings.map((setting, index) => (
                <RouterLink key={index} to={setting.to} onClick={handleCloseUserMenu}>
                  <MenuItem sx={{ textDecoration: 'none', }}>
                    <Typography sx={{
                      color: 'black'
                    }} textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                </RouterLink>)) 
                      
                    }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
