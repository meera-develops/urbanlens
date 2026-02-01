import Cities from "../../components/citiesInfo.js";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import CompareCard from "./comparisionCityCard.jsx";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function compareCities() {

    const theme = useTheme();
    const navigate = useNavigate();
    const { slug1, slug2 } = useParams();

    const [option1, setOption1] = useState(slug1);
    const [option2, setOption2] = useState(slug2);

    const city1 = Cities.find(city => city.slug === option1);
    const city2 = Cities.find(city => city.slug === option2);

    if (!city1 || !city2) {
        return <Typography variant="h2">City not found</Typography>
    }

    const handleChange1 = (e) => {
        const newSlug = e.target.value;
        setOption1(newSlug);
        navigate(`/compare/${newSlug}/${option2}`);
    };

    const handleChange2 = (e) => {
        const newSlug = e.target.value;
        setOption2(newSlug);
        navigate(`/compare/${option1}/${newSlug}`);
    };

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                justifyContent: 'center',
                alignItems: {xs: 'center', sm: 'flex-start'},
                gap: {xs: 4, md: 0},
                pt: 3,
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: {md: 4, xl: 10,} }}>
                    <FormControl variant="filled" sx={{ width: '200px', mb: 2 }}>
                        <InputLabel>City 1</InputLabel>
                        <Select
                          value={option1}
                          label="City 1"
                          onChange={handleChange1}
                          sx={{ backgroundColor: 'rgba(120, 145, 116, 0.5)' }}
                        >
                          {Cities.map((c) => (
                            <MenuItem key={c.slug} value={c.slug}
                            sx={{ fontFamily: "'Pontano Sans', serif" }}
                            >
                              {c.title}
                            </MenuItem>
                          ))}
                        </Select>
                    </FormControl>
                    <CompareCard
                        title={city1.title}
                        qol={city1.qol}
                        image={city1.img}
                        population={city1.population}
                        climate={city1.climate}
                        price={city1.price}
                        commute={city1.avg_commute}
                        cost_living={city1.avg_cost_of_living}
                        slug={city1.slug}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FormControl variant="filled" sx={{ width: '200px', mb: 2 }}>
                        <InputLabel>City 2</InputLabel>
                        <Select
                          value={option2}
                          label="City 2"
                          onChange={handleChange2}
                          sx={{ backgroundColor: 'rgba(120, 145, 116, 0.5)' }}
                        >
                          {Cities.map((c) => (
                            <MenuItem key={c.slug} value={c.slug}
                            sx={{ fontFamily: "'Pontano Sans', serif" }}
                            >
                              {c.title}
                            </MenuItem>
                          ))}
                        </Select>
                    </FormControl>
                    <CompareCard
                        title={city2.title}
                        qol={city2.qol}
                        image={city2.img}
                        population={city2.population}
                        climate={city2.climate}
                        price={city2.price}
                        commute={city2.avg_commute}
                        cost_living={city2.avg_cost_of_living}
                        slug={city2.slug}
                    />
                </Box>
            </Box>
            <Box
            sx={{
                mt: 3,
                display: 'flex',
                justifySelf: 'center',
            }}
            >
                <Button color="accent" variant="contained" size="large" component={Link}
                    to={'/explore'}
                    sx={{
                        fontWeight: 600,
                        fontFamily: "'Libre Baskerville'",
                        fontSize: '1rem',
                        mb: {xs: 2, md: 0}
                        }}
                >
                    Discover More Cities 
                </Button>
                
            </Box>
        </>
    )
} export default compareCities;