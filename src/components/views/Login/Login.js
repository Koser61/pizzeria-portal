import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  return (
    <Container component='main' maxWidth='xs'>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        marginTop='2rem'
      >
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5' marginY='0.5rem'>
          Login
        </Typography>
        <form noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <RouterLink to={process.env.PUBLIC_URL + '/dashboard'}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
            >
              Login
            </Button>
          </RouterLink>
          <Link href='#' variant='body2'>
            Forgot password?
          </Link>
        </form>
      </Box>
    </Container>
  );
};

export default Login;