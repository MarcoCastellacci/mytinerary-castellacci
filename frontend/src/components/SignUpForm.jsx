import React from "react";
import '../styles/styles.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from '../img/logo.png';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormCountry from '../components/FormCountry';
import userActions from "../redux/actions/userActions";
import { useDispatch} from "react-redux";

function Copyright(props) {
return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '} 
        Marco Castellacci - Cohorte 28 -{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {

const dispatch = useDispatch();

const handleSubmit = (event) => {
    event.preventDefault();
    const user = { 
        name: event.target[0].value,
        lastName: event.target[2].value,
        email: event.target[6].value,
        password: event.target[8].value,
        image: event.target[4].value,
        country: event.target[10].value,
        from: 'form-signup',
}
console.log(user)
dispatch(userActions.signUp(user))
}




return (
    <ThemeProvider theme={theme}>
        <Grid container component="main" >
                <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1653560668256-6e074e914207?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNXxGem8zenVPSE42d3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />  
            
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <img src={Logo} alt="Logo" className="logo-sign"/>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="First Name"
                                autoFocus
                                size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                size="small"
                                />
                            </Grid>
                                <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="image"
                                label="Url Image"
                                name="image"
                                autoComplete="url image"
                                size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormCountry />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                            <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </ThemeProvider>
);
}