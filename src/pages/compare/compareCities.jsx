import Cities from "../../components/citiesInfo.js";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material";

function compareCities() {

    const { slug1, slug2 } = useParams();
    const city1 = Cities.find(city => city.slug === slug1);
    const city2 = Cities.find(city => city.slug === slug2);
    if (!city1 || !city2) {
        return <Typography variant="h2">City not found</Typography>
    }

    return (
        <>
            <h1>Compare here!</h1>
            <Box sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
            }}>
                <Box sx={{ flex: 1}}>
                    <Typography>{city1.title}</Typography>
                    <Typography>{city1.description}</Typography>
                </Box>
                <Box sx={{ flex: 1}}>
                    <Typography>{city2.title}</Typography>
                    <Typography>{city2.description}</Typography>
                </Box>
            </Box>
        </>
    )
} export default compareCities;