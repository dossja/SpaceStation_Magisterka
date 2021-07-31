import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Box from '@material-ui/core/Box';

import usersAPI from "./Axios/usersAPI.js";

function Login() {
    const uAPI = new usersAPI();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: true,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        getUsersAPI();
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const getUsersAPI = () => {
        uAPI.get()
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const getUserByEmailAPI = () => {
        uAPI.getByEmail({ 'email': values.email })
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div>
            <Container maxWidth="s">
                <h2>Sign in</h2>
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="left">

                    <TextField
                        id="email"
                        label="Email"
                        value={values.email}
                        placeholder="name.surname@firm.com"
                        required fullWidth
                        onChange={handleChange('email')}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        required
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                <IconButton><Visibility /></IconButton>
                            </InputAdornment>
                        }
                    />
                </Grid>
                <Box mt="2rem">
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIosIcon />}
                        onClick={getUserByEmailAPI}
                    >
                        Sing in
                    </Button></Box>

            </Container>
        </div >)
}

export default Login;