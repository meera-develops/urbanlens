import { Box, Typography, Divider, } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTheme } from "@mui/material/styles";
import { getCities, getCityBySlug } from "../services/myCities";
import InputLabel from '@mui/material/InputLabel';
import Select  from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import Slider from '@mui/material/Slider';

//import range slider and price slider 
//finish making this page
//add logic to price function 
//check on mobile 
//add apply button 
//TODO: add more logic for back-end 
//add field for price 


function Sidebar({ sortOrder, setSortOrder }) {
  const theme = useTheme();
  const cities = getCities();
  const { citySlug } = useParams();
  const navigate = useNavigate();
  const [option, setOption] = useState(citySlug || '');

  const handleChange = (e) => {
    const newSlug = e.target.value;
    setOption(newSlug);
    navigate(`/citydetails/${newSlug}`);
  };
  

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(120, 145, 116, 0.6)',
        minHeight: '100%',
      }}
    >
      <Box
      sx={{
        pt: 3,
       px: '0.8rem',
       display: 'flex',
       flexDirection: 'column',
      }}
      >
        <Typography variant="h3" color="text">
          Filter Results
        </Typography>
        <Divider color="text">
        </Divider>
        <Typography variant="forms" color="text">
          Price
        </Typography>
        <FormControl variant="outlined" sx={{ width: '200px', my: 1 }}>
                    <InputLabel variant="hidden">Price</InputLabel>
                    <Select
                      value={sortOrder}
                      label="Price"
                      sx={{ backgroundColor: '#fff' }}
                      onChange={(e) => setSortOrder(e.target.value)}
                      MenuProps={{ disableScrollLock: true }}
                    >
                      <MenuItem value="default">Default</MenuItem>
                      <MenuItem value="low-to-high">Lowest to Highest</MenuItem>
                      <MenuItem value="high-to-low">Highest to Lowest</MenuItem>
                    </Select>
        </FormControl>
        <Divider color="text">
        </Divider>
        
        <FormControl>
          <FormLabel
          sx= {{
            fontFamily: '"Pontano Sans", "serif"',
            fontSize: '1.5rem',
            color: theme.palette.text.main
          }}
          >Population</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="smallTowns" control={<Radio />} label="Under 50,000 (Small Towns)" />
            <FormControlLabel value="midSize" control={<Radio />} label="50,000 – 250,000 (Mid-Size Cities)" />
            <FormControlLabel value="largeCities" control={<Radio />} label="250,000 – 1 Million (Large Cities" />
            <FormControlLabel value="majorMetros" control={<Radio />} label="Over 1 Million (Major Metros)" />
          </RadioGroup>
        </FormControl>

        <Divider color="text">
        </Divider>
        <FormControl>
          <FormLabel
          sx= {{
            fontFamily: '"Pontano Sans", "serif"',
            fontSize: '1.5rem',
            color: theme.palette.text.main
          }}
          >Climate</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="warm" control={<Radio />} label="Warm and Sunny" />
            <FormControlLabel value="mild" control={<Radio />} label="Moderate" />
            <FormControlLabel value="snowy" control={<Radio />} label="Cold and Snowy" />
            <FormControlLabel value="fourSeasons" control={<Radio />} label="Four Seasons" />
          </RadioGroup>
        </FormControl>
        <Divider color="text">
        </Divider>
        <Typography variant="forms" color="text">Select Place</Typography>

        <FormControl variant="outlined" sx={{ width: '200px', my: 1 }}>
                    
                    <InputLabel>Place</InputLabel>
                    <Select
                      value={option}
                      label="Place"
                      onChange={handleChange}
                      sx={{ backgroundColor: '#fff' }}
                      MenuProps={{ disableScrollLock: true }}
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
        <Divider color="text">
        </Divider>
        {/* //incorporate slider here */}

      </Box>

    </Box>
  );
}

export default Sidebar;
