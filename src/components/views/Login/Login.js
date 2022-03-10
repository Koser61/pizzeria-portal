import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  return (
    <Container maxWidth='xs'>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        paddingY={3}
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
            autoComplete='false'
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
            autoComplete='false'
          />
          <RouterLink to={process.env.PUBLIC_URL + '/dashboard'}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              sx={{mt: 2, mb: 1}}
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