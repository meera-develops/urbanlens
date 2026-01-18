import Typography from "@mui/material/Typography";
import { Box, Stack, Button, useMediaQuery, Grid } from "@mui/material";
import heroImg from "../../assets/img/homeHero.jpg";
import heroLogo from "../../assets/img/keyNoText.png";
import { useTheme, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CityCarousel from "../../components/carousel.jsx";
import CityCard from "../../components/cityCard.jsx";
import web from "../../assets/img/peopleWeb.png";


//create a card component to be used for this page and the gallery page
//card component will accept a prop that tells it the city and the city information
//then build the footer 
//then the explore areas
//then single city page 
//then sign up or compare/contrast
//community board last i guess 

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
            mt: { xs: 2, lg: 15, xl: 30},
            mb: { xs: 2, lg: 5, xl: 5},
            // my: { xs: 2, sm: 4, lg: 13, xl: 15 },
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
      
      <Box backgroundColor="primary.main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3,
      }}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row'}}
          spacing={{xs: 6, md: 3 }}
          alignItems={{ xs: 'center', md: 'center', }}
          sx={{
            maxWidth: 1200,
            width: '100%',
            // justifyContent: { xl: 'space-between'},
            px: { xs: 2, md: 10, xl: 0 },
            mt: { xs: 2, md: 0 }
          }}
        >
          <Box sx={{ flex: { xs: '1 1 100%', md: '0 1 600px'}, textAlign: { xs: 'center', md: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: { xs: 'center', md: 'left' },
           } 
        
        
        }}>
            <Typography variant="h2" gutterBottom 
              sx={{
                color: theme.palette.background.default,
                fontWeight: 600,
              }}
            >
              Join the Community
            </Typography>
            <Typography variant="body3"
            sx={{
              color: theme.palette.background.default
            }}
            >
              Discover what life in your next city is really like. Connect with locals, ask questions, and share your own experiences on our community board. Whether you’re researching your first move or comparing neighborhoods, UrbanLens makes it easy to learn from real people who’ve been there.
            </Typography>
            <Button color="accent" variant="contained" component={Link} to="/login"
              sx={{
                fontWeight: 600,
                mt: {md: 5,},
                fontFamily: "'Libre Baskerville'",
                fontSize: '1rem'
              }}
            >
              Sign Up to Start Connecting
            </Button>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '0 1 600px'}, textAlign: 'center'  }}>
            <Box
              component="img"
              src={web}
              alt="3 people icons connected in a web representing community"
              sx={{ width: '60%', height: 'auto', }}
            >
            </Box>
          </Box>

        </Stack>
      </Box>

      <Box color="Background">
        <Grid container spacing={3}
          sx={{
            py: { xs: 1, lg: 5, },
            px: { xs: 1, lg: 14, xl: 44, },
          }}  
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
            sx={{
              backgroundColor: '#8A9785',
              borderRadius: 2,
              px: {xs: 2, lg: 2, },
              py: {xs: 2, lg: 1, }
            }}
            >
              <Typography variant="h2" color="text">
                Top 10 Safest Cities in 2026
              </Typography>
              <Box
              component="ul"
              sx={{
                padding: '0',
                listStyle: 'none',
                color: theme.palette.text.main
              }}
              >
                <Box component="li">City 1</Box>
                <Box component="li">City 2</Box>
                <Box component="li">City 3</Box>
                <Box component="li">City 4</Box>
                <Box component="li">City 5</Box>
                <Box component="li">City 6</Box>

              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}
            sx={{
            }}
          >
              <Typography variant="h2" color="text">
                Trustworthy Information
              </Typography>
              <Typography variant="body2" color="text">
                We collect information and gather it into one place for your convenience.
              </Typography>
              <Typography variant="body2" color="text">
                Here is a list of our sources:
              </Typography>
              <Box
              component="ul"
              sx={{
                padding: '0',
                listStyle: 'none',
                color: theme.palette.primary.main
              }}
              >
                {[
                'U.S. Census Bureau (ACS): Housing, Income, and Commute Statistics',
                'Bureau of Labor Statistics (BLS): Employment and Wage Data',
                'FBI Crime Data Explorer: Violent and Property Crime Rates',
                'NOAA NCEI: Weather and Climate Information',
                'Trust for Public Land: Park and Green Space Indices',
              ].map((text) => (
                <Box key={text} component="li">
                  <Box
                    component="a"
                    href="https://www.census.gov/en.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'inherit',          // 👈 use parent color
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      '&:visited': {
                        color: 'inherit',        // 👈 prevent purple
                      },
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {text}
                  </Box>
                </Box>
              ))}
              </Box>

          </Grid>
        </Grid>
       </Box>

       <Box color="Background">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Typography variant="h2" color="text" fontWeight="bold">
            Cities with Fastest Job Growth in 2024 - 2025
          </Typography>
          <Typography variant="body2" color="primary">
            U.S. cities leading the way in employment and economic expansion.
          </Typography>
        </Box>

        <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row'},
          }}
        >
          <CityCard />
        </Box>


       </Box>



    </>
  );
}

export default home;
