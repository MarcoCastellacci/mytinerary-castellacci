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
import Whatsapp from '../img/whatsapp.png';

 
function Footer(){
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
              width: '100vw',
              marginRight: '0',
            }}
          >
          <img src={Logo} alt="Logo" className="logo-footer"/>
            <img src={Faceboock} className="logos-redes" alt="logo-facebook" />
            <img src={Instagram} className="logos-redes" alt="logo-instagram" />
            <img src={Whatsapp} className="logos-redes" alt="logo-whatsapp" />
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
            <img src={Faceboock} className="logos-redes" alt="logo-facebook" />
            <img src={Instagram} className="logos-redes" alt="logo-instagram" />
            <img src={Whatsapp} className="logos-redes" alt="logo-whatsapp" />
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
