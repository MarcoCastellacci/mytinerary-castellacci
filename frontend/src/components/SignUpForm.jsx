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
import userActions from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import GoogleSignUp from '../components/GoogleSignUp';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast'
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';




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

    const navigate = useNavigate()
    const [selectCountry, setSelectCountry] = React.useState();
    const dispatch = useDispatch()

    Swal.fire({
        title: 'Please Select your country',
        input: 'select',
        inputOptions: {
            'Argentina': 'Argentina',
            'Australia': 'Australia',
            'Brazil': 'Brazil',
            'Chile': 'Chile',
            'Colombia': 'Colombia',
            'China': 'China',
            'Mexico': 'Mexico',
            'Germany': 'Germany',
            'France': 'France',
            'India': 'India',
            'Italy': 'Italy',
            'Japan': 'Japan',
            'Korea': 'Korea',
            'Quatar': 'Quatar',
            'England': 'England',
            'EEUU': 'EEUU',
            'Spain': 'Spain',
        },
        inputPlaceholder: 'Select your country',
        inputAttributes: {
            name: 'select-country'
        },
        showCancelButton: false,
        allowOutsideClick: false,
        preConfirm: (country) => {
            setSelectCountry(country)
        },
        inputValidator: (value) => {
            return new Promise((resolve) => {
                if (value === '') {
                    resolve('You need to select a country')
                } else {
                    resolve()
                }
            })
        },
    }).then((result) => {
        if (result.value) {
            Swal.close()
        }
    })

    function alerts(res) {
        const errormsg = res.data.message
        if (res.data.from === "validator") {
            errormsg.forEach(e => {
                toast.error(e.message)
            })
        }
        if (res.data.from === "form-signup") {
            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/signin')
            } else {
                toast.error(res.data.message)
            }
        }
        if (res.data.from === "signup") {
            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/signin')
            } else {
                toast.error(res.data.message)
            }
        }
    }

async function handleSubmit(event){
        event.preventDefault();
        const userData = {
            name: event.target[0].value,
            lastName: event.target[2].value,
            image: event.target[4].value,
            email: event.target[6].value,
            password: event.target[8].value,
            country: selectCountry,
            from: 'form-signup'
        }
    const res = await dispatch(userActions.signUp(userData))
        alerts(res)
    };


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
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, marginY: '1rem' }}
                            >
                                Sign Up
                            </Button>
                            <GoogleSignUp country={selectCountry} />
                            <Copyright sx={{ mt: 5 }} />
                            <Grid item sx={{ marginY: '1rem' }}>
                                <RouterLink to="/signin" style={{ textDecoration: 'none', color: 'blue' }}>
                                    {"Already have an account? Please Sign In"}
                                </RouterLink>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}