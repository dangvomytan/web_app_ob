import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import logo from '../../src/ks_logo.png';
import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { object, string } from 'yup';

function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  let userSchema = object({
    usename: string().required(),
    pass: string().nullable(),
  });

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '96vh',
          }}
        >
          <img src={logo} alt="logo" />
          <Typography component="h1" variant="h5">
            LSC-EC 拡張機能
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
          >
            <FormControl sx={{ mt: 5 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-usename">ユーザー名</InputLabel>
              <OutlinedInput
                id="use-name"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">{<AccountBoxIcon />}</IconButton>
                  </InputAdornment>
                }
                label="use-name"
              />
            </FormControl>
            <FormControl sx={{ mt: 2 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">パスワード</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 1 }}>
              ログイン
            </Button>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F8F9FA',
          height: '4vh',
        }}
      >
        <footer className="footer">
          <div className="container">
            <div className="text-center">&copy; 2023 Kyoritsu Seiyaku Corporation All Rights Reserved.</div>
          </div>
        </footer>
      </Box>
    </>
  );
}

export default LoginPage;
