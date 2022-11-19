import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { Slide } from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="../" style={{ color: "inherit" }}>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const [errorEmail, setErrorEmail] = React.useState<boolean>(false);
  const [errorEmailText, setErrorEmailText] = React.useState<string>("");

  const [errorPass, setErrorPass] = React.useState<boolean>(false);
  const [errorPassText, setErrorPassText] = React.useState<string>("");

  function isEmail(val: string | null): boolean | undefined {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(String(val))) {
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (isEmail(String(data.get("email")))) {
      if (String(data.get("password")).length > 6) {
        //кидаем запрос на бэк для регистрации
        console.log({
          email: data.get("email"),
          password: data.get("password"),
        });
      } else {
        setErrorPassText("Invalid password");
        setErrorPass(true);
      }
    } else {
      setErrorEmail(true);
      setErrorEmailText("Invalid email");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Slide in={true} direction="up" timeout={250}>
        <Box>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "success.main" }}>
              <LockOpenOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={errorEmail}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    helperText={errorEmailText}
                    onChange={() => {
                      setErrorEmail(false);
                      setErrorEmailText("");
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errorPass}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    helperText={errorPassText}
                    onChange={() => {
                      setErrorPass(false);
                      setErrorPassText("");
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="../signUp" style={{ color: "inherit" }}>
                    <Typography variant="body2">
                      No account? Register
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Slide>
    </Container>
  );
}
