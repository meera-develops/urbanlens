import { useParams } from "react-router-dom";
import citiesInfo from "../../components/citiesInfo";
import { Box, Typography } from "@mui/material";

//add dropdown menu
//continue going down to add comments 

function community() {

  const { citySlug } = useParams();
  const city = citiesInfo.find((c) => c.slug === citySlug);
  if (!city) {
  return <h2>City not found</h2>;
  }


  return (
    <>
      <Box
      sx={{
        pt: 5, 
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center'
      }}
      >
        <Box
          component="img"
          src={city.img}
          alt={city.title}
          sx={{
            width: "50vw",
            height: "auto",
            borderRadius: "10px",
            alignSelf: 'center'
          }}
        />
        <Typography variant="h2" color="primary"
          sx={{ 
            mt: 4,
            width: '50vw', 
            alignSelf: 'center' 
          }}
        >{city.title}</Typography>
      </Box>
         
    </>
  )
}

export default community;