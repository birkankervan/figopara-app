import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "features/auth/authSlice";
import Logo from "components/Logo";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://figopara.com/" target="_blank">
        Figopara
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = () => {
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: any) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (authenticated) {
      router.push("/");
    }
  }, [authenticated, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formHandler = new FormData(event.currentTarget);

    const data = {
      email: formHandler.get("email"),
      password: formHandler.get("password"),
    };

    try {
      const res = await axios.post("/api/login", data);
      if (res.status === 200) {
        Cookies.set("token", res.data.token);
        router.push("/");
        dispatch(setCredentials(res.data));
      }
    } catch (error: any) {
      setError(error?.response?.data.message);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logo />
          <Typography component="h1" variant="h5">
            Üye Girişi
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="false"
              autoFocus
              value="figopara@gmail.com"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="false"
              value="figopara"
            />
            {error && (
              <Typography align="center" variant="subtitle1" color="red">
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Giriş Yap
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Şifremi Unuttum
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
};

export default Login;
