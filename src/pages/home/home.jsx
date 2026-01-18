import Typography from "@mui/material/Typography";
import { Box, Stack, Button, useMediaQuery } from "@mui/material";
import heroImg from "../../assets/img/homeHero.jpg";
import heroLogo from "../../assets/img/keyNoText.png";
import { useTheme, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CityCarousel from "../../components/carousel.jsx";

//start working on next section -- side by side

//create a card component to be used for this page and the gallery page
//card component will accept a prop that tells it the city and the city information

function home() {
  const theme = useTheme(); //callback hook for theme
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Box backgroundColor="background">
        <Box
          sx={{
            backgroundImage: `
              linear-gradient(
              rgba(255, 255, 255, 0.1) 5%,
              rgba(255, 255, 255, 0.6) 40%,
              rgba(255, 255, 255, 0.9) 100%
              ),
            url(${heroImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: { xs: "70vh", md: "55vh" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              px: { xs: 2, md: 0 },
              boxSizing: "border-box",
              gap: 2,
              // alignItems: 'center',
              // textAlign: { xs: 'center', md: 'left'},
              // width: '100%',
              // maxWidth: '1200px',
            }}
          >
            <Box
              component="img"
              src={heroLogo}
              alt="Urban Lens Key-shaped Logo"
              sx={{
                width: { xs: "70%", sm: "40%", md: "auto" },
                height: "100%",
                mr: {
                  lg: 3,
                },
              }}
            ></Box>
            <Stack
              alignItems={{ xs: "center", md: "flex-start" }}
              sx={{
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Typography
                variant="h1"
                color="primary"
                sx={{
                  fontWeight: 500,
                  marginLeft: 0,
                  width: { xs: "100%", md: "auto" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                UrbanLens
              </Typography>
              <Typography
                variant="h3"
                color="primary"
                sx={{
                  fontWeight: 500,
                  width: { xs: "100%", md: "auto" },
                  letterSpacing: "0.07em",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Compare. Decide. Live better.
              </Typography>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={Link}
                to="/explore"
                sx={{
                  marginTop: { xs: 3, md: 5 },
                  borderColor: theme.palette.primary.main,
                  border: "2px solid",
                  backgroundColor: alpha(theme.palette.secondary.main, 0.5),
                  color: theme.palette.primary.main,
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: theme.shadows[3],
                  },
                }}
              >
                Explore Areas
              </Button>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
            flexDirection: "column",
            alignItems: { xs: "left", lg: "center" },
            ml: { xs: 1, lg: 0 },
          }}
        >
          <Typography variant="h2" color="primary">
            Find Your Dream City
          </Typography>
          <Typography
            variant="body1"
            color="text"
            sx={{
              textAlign: { xs: "left", lg: "center" },
              mt: { xs: 2, lg: 2 },
            }}
          >
            We know that moving is a big decision and we’re here to make it
            easier.
          </Typography>
          <Typography
            variant="body1"
            color="text"
            sx={{
              textAlign: { xs: "left", lg: "center" },
            }}
          >
            With UrbanLens, find all the information you need to feel confident
            in your decision.
          </Typography>
          <Typography
            variant="body1"
            color="text"
            sx={{
              textAlign: { xs: "left", lg: "center" },
              mb: 4,
            }}
          >
            Don’t know where to start? Use our Explore Areas page to get
            started!
          </Typography>
          {isDesktop && <CityCarousel />}
        </Box>

        <Box
          sx={{
            my: { xs: 2, sm: 4, lg: 13, xl: 14 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            component={Link}
            size="large"
            to="/explore"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.accent.main,
            }}
          >
            Discover More Cities
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default home;
