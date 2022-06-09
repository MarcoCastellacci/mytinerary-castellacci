import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../img/logo.png';
import '../styles/styles.css';
import Typography from '@mui/material/Typography';
import Faceboock from '../img/facebook.png';
import Instagram from '../img/instagram.png';
import {Link as RouterLink} from "react-router-dom";import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
 
const pages = [{to: '/index', name: 'Home'}, {to:'/cities', name: 'Cities'}, {to:'/contact', name: 'Contact'}];


function Footer(){

const [anchorElNav, setAnchorElNav] = React.useState(null);
const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
              width: '70vw',
              margin: '0.5rem',
            }}
          >
            <img src={Logo} alt="Logo" className="logo-footer"/>
          <Link href="https://www.facebook.com/" >
          <Button> 
            <img src={Faceboock} className="logos" alt="logo-facebook" />
          </Button>
            </Link>
            <Link href="https://www.instagram.com/" >
          <Button>
            <img src={Instagram} className="logos" alt="logo-instagram" />
          </Button>
            </Link>
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
            
            <Link href="https://www.facebook.com/">
          <Button> 
            <img src={Faceboock} className="logos" alt="logo-facebook" />
          </Button>
            </Link>
            <Link href="https://www.instagram.com/" >
          <Button>
            <img src={Instagram} className="logos" alt="logo-instagram" />
          </Button>
            </Link>
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
                  <Typography sx={{textDecoration:'none'}} className='button1' textAlign="center">{page.name}</Typography>
                </MenuItem>
                </RouterLink>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },}}>
            {pages.map((page, index) => (
              <RouterLink key={index} to={page.to} className='button1' onClick={handleCloseNavMenu}>
                {page.name}
              </RouterLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, justifyContent: 'center' }}>
            <Typography variant="h6" className="copyright">
              ®Copyright - 2022
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Footer;
