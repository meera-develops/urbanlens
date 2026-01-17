import Typography from '@mui/material/Typography';
import { Box, Stack, Button, useMediaQuery } from '@mui/material'
import heroImg from '../../assets/img/homeHero.jpg';
import heroLogo from '../../assets/img/keyNoText.png';
import { useTheme, alpha, } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CityCarousel from '../../components/carouselFirst.jsx';


//create a card component to be used for this page and the gallery page
//card component will accept a prop that tells it the city and the city information 
//will have to create city information for now 

//fix hero section on mobile 
//make carousel disappear on mobile 
//add peek of images to the left and right on carousel 


function home() {

  const theme = useTheme(); //callback hook for theme
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Box backgroundColor="background">
        <Box
          sx={{
            backgroundImage: `
              linear-gradient(
              rgba(255, 255, 255, 0.1) 0%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(255, 255, 255, 0.9) 100%
              ),
            url(${heroImg})`, 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '55vh', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Box
          sx={{
            display:'flex',
            flexDirection: 'row',
            
          }}
          >
            <Box
            component="img"
            src={heroLogo}
            alt="Urban Lens Key-shaped Logo"
            sx={{
              width: 'auto',
              height: '100%',
              mr: {
                lg: 3,
              }
            }}
            >

            </Box>
            <Stack alignItems="flex-start"
            sx={{
              width: 'fit-content',
            }}
            >
              <Typography variant="h1" color="primary"
              sx={{
                fontWeight: 500,
                marginLeft: 0,
              }}
              >
                UrbanLens
              </Typography>
              <Typography variant="h3" color="primary"
              sx={{
                fontweight: 500,
                width: '100%',
                letterSpacing: '0.07em',
              }}
              >
                Compare. Decide. Live better.
              </Typography>

              <Button variant="contained" color="secondary" size="large" component={Link} to="/explore"
              sx={{
                marginTop: 5,
                borderColor: theme.palette.primary.main,
                border: '2px solid',
                backgroundColor: alpha(theme.palette.secondary.main,0.5),
                color: theme.palette.primary.main,
                boxShadow: 'none',
                '&:hover': {
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
          display: 'flex',
          justifyContent: 'center',
          mt: 5,
          flexDirection: 'column',
          alignItems: 'center'
        }}
        >
          <Typography variant="h2" color="primary">
            Find Your Dream City
          </Typography>
          <Typography variant='body1' color="text"
          sx={{
            textAlign: 'center'
          }}
          >
            We know that moving is a big decision and we’re here to make it easier. 
          </Typography>
          <Typography variant='body1' color="text"
          sx={{
            textAlign: 'center'
          }}
          >
            With UrbanLens, find all the information you need to feel confident in your decision. 
          </Typography>
          <Typography variant='body1' color="text"
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
          >
            Don’t know where to start? Use our Explore Areas page to get started!
          </Typography>
          {isDesktop && <CityCarousel />}
        </Box>

        <Box
        sx={{
          my: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Button variant="contained" component={Link} to="/explore"
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
  )
}

export default home;