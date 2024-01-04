import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import logo from '../../src/ks_logo.png';

function LoginPage() {
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
            <TextField
              sx={{ mt: 5 }}
              margin="normal"
              required
              fullWidth
              id="text"
              label="ユーザー名"
              name="email"
              autoComplete="user-name"
              autoFocus
              // helperText="ユーザー名が入力されていません"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="パスワード"
              type="password"
              id="password"
              autoComplete="current-password"
              // helperText="パスワードが入力されていません"
            />
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
