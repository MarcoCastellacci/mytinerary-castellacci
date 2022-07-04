import * as React from 'react';
import Logo from '../img/logo.png';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch} from 'react-redux';
import userActions from '../redux/actions/userActions';
import { Link as RouterLink, useNavigate} from "react-router-dom";
import GoogleSignIn from './GoogleSignIn';
import toast from 'react-hot-toast';


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
export default function LogIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const logedUser = {
            email: event.target[0].value,
            password: event.target[2].value,
            from: 'form-signup',
        }
    const res = await dispatch(userActions.signIn(logedUser))
        console.log(res)
    if (res.data.from === "signup") {
        if (res.data.success) {
            toast.success(res.data.message)
            navigate('/user');
        } else {
            toast.error(res.data.message)
        }
    }
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
                        <img src={Logo} alt="Logo" className="logo-sign" />
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                size="small"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                size="small"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item sx={{ marginY: '1rem', marginX:'2rem' }}>
                                    <RouterLink to="/signup" style={{ textDecoration: 'none', color: 'blue' }}>
                                        {"Don't have an account? Sign Up"}
                                    </RouterLink>
                                </Grid>
                                <Grid item >
                                    <GoogleSignIn />
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}