import React from 'react';

import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import usersAPI from "../Axios/usersAPI.js";
import positionTypeAPI from "../Axios/positionTypeAPI.js";

function Users() {
    const uAPI = new usersAPI();
    const ptAPI = new positionTypeAPI();

    const [values, setValues] = React.useState({
        name: '',
        surname: '',
        showPassword: true,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const getPositionTypeAPI = () => {
        ptAPI.get()
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <h2>Add User</h2>
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="left">

                    <TextField
                        id="email"
                        label="First name"
                        value={values.name}
                        placeholder="John"
                        required fullWidth
                        onChange={handleChange('name')}
                    />
                    <TextField
                        id="password"
                        label="Surname"
                        required
                        value={values.surname}
                        placeholder="Smith"
                        onChange={handleChange('surname')}
                    />
                </Grid>
                <Box mt="2rem">
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Sing in
                    </Button></Box>

            </Container>
        </div>)
}

export default Users;