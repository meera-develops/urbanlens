import Cities from "../../components/citiesInfo.js";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import CompareCard from "../../components/comparisionCityCard.jsx";

function compareCities() {

    const { slug1, slug2 } = useParams();
    const city1 = Cities.find(city => city.slug === slug1);
    const city2 = Cities.find(city => city.slug === slug2);
    if (!city1 || !city2) {
        return <Typography variant="h2">City not found</Typography>
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: 'center',
                alignItems: {xs: 'center', md: 'flex-start'},
                gap: 0,
                pt: 3,
            }}>
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
        </>
    )
} export default compareCities;