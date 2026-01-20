import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getCities, getCityBySlug } from "../../services/myCities";
import { Box, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';

//add dropdown menu
//add comment button 
//continue going down to add comments 
//work on it for mobile
//think about pagination 

function community() {

  const { citySlug } = useParams();
  const navigate = useNavigate();
  const cities = getCities();
  const city = getCityBySlug(citySlug);
  if (!city) {
  return <h2>City not found</h2>;
  }

  const [option, setOption] = useState(citySlug);

  const handleChange = (e) => {
    const newSlug = e.target.value;
    setOption(newSlug);
    navigate(`/communityboard/${newSlug}`);
  };

  return (
    <>
      <Box
      sx={{
        pt: 5, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      >
        <Box
        sx={{
          width: '50vw',
          mb: '5',
        }}
        >
          <FormControl variant="filled" sx={{ width: '200px' }}>
            <InputLabel>City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={option}
              label="City"
              onChange={handleChange}
              sx={{ backgroundColor: 'rgba(120, 145, 116, 0.5)',
                
               }}
            >
              {cities.map((c) => (
                <MenuItem key={c.slug} value={c.slug}
                sx={{
                  fontFamily: " 'Pontano Sans', serif"
                }}
                >
                  {c.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>



        <Box
          component="img"
          src={city.img}
          alt={city.title}
          sx={{
            width: "50vw",
            height: "auto",
            borderRadius: "10px",
            mt: 5,
          }}
        />
        <Typography variant="h2" color="primary"
          sx={{ 
            mt: 4,
            width: '50vw' 
          }}
        >{city.title}</Typography>
      </Box>
         
    </>
  )
}

export default community;