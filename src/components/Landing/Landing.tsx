import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Slide } from "@mui/material/";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const tiers = [
  {
    title: "Keep",
    description: ["Convenience", "Safety", "Prestige"],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Trade",
    description: [
      "Convenient interface",
      "Fast transactions",
      "Best technology",
      "(o^▽^o)",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Earn",
    description: ["Most popular currencies", "Real data", "Real money"],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
];

function PricingContent() {
  const navigate = useNavigate();

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Box>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />

        {/* Hero unit */}
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
        >
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="text.primary"
            gutterBottom
          >
            SC Trade
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            If you ask us to describe ourselves in one sentence, it will Best
            "Client is the main"
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card sx={{ shadow: 4 }}>
                  <CardHeader
                    title={tier.title}
                    titleTypographyProps={{ align: "center" }}
                    action={tier.title === "Pro" ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    ></Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant as "outlined" | "contained"}
                      onClick={() => {
                        navigate("/signUp");
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Slide>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
