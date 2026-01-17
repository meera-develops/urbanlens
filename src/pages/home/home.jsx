import Typography from '@mui/material/Typography';
import { Box, Stack, Button, } from '@mui/material'
import heroImg from '../../assets/img/homeHero.jpg';
import heroLogo from '../../assets/img/keyNoText.png';
import { useTheme, alpha } from '@mui/material/styles';
// import theme from "../../theme.jsx";

//create a card component to be used for this page and the gallery page
//card component will accept a prop that tells it the city and the city information 
//will have to create city information for now 

function home() {

  const theme = useTheme();

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
              <Typography variant="body3" color="primary"
              sx={{
                fontweight: 500,
                width: '100%',
                letterSpacing: '0.07em',
              }}
              >
                Compare. Decide. Live better.
              </Typography>

              <Button variant="contained" color="secondary" size="large"
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
    </Box>
      
    </>
  )
}

export default home;