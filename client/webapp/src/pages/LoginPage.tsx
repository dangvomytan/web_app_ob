import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import logo from '../../src/ks_logo.png';
import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import * as Yup from 'yup';
import { useFormik } from 'formik';

function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      userName: Yup.string()
        .trim()
        .required('ユーザー名が入力されていません')
        .min(3, 'Username ít nhất phải 3 ký tự.')
        .max(30, ' nhất phải 8 ký tự'),
      password: Yup.string()
        .trim()
        .required('パスワードが入力されていません')
        .min(8, 'Mật khẩu ít nhất phải 8 ký tự.')
        .matches(/(?=.*[0-9])/, 'Mật khẩu phải chứa ít nhất một số.'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
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
          <Box component="form" onSubmit={formik.handleSubmit} noValidate>
            <FormControl sx={{ mt: 5 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-usename">ユーザー名</InputLabel>
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">{<AccountBoxIcon />}</IconButton>
                  </InputAdornment>
                }
                id="userName"
                label="ユーザー名"
                type="text"
                error={Boolean(formik.errors.userName && formik.touched.userName)}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
              />
              <FormHelperText id="helper-text-user" error>
                {formik.errors.userName}
              </FormHelperText>
            </FormControl>

            <FormControl sx={{ mt: 2 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">パスワード</InputLabel>
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                id="password"
                label="パスワード"
                type={showPassword ? 'text' : 'password'}
                error={Boolean(formik.errors.password && formik.touched.password)}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <FormHelperText id="helper-text-pass" error>
                {formik.errors.password}
              </FormHelperText>
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
