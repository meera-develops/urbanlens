import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Grid, } from '@mui/material';
import Cards from "../../components/cityCard";
import citiesInfo from "../../components/citiesInfo";
import Sidebar from "../../components/sidebar";

//check on mobile
//continue building on mobile
//standarize card heights

const parsePrice = (priceStr) => {
  return parseInt(priceStr.replace(/[$,]/g, ''), 10);
};

function explore() {
  const [sortOrder, setSortOrder] = useState('default');
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  // Filter cities based on search (and later: population, climate)
  const getFilteredCities = () => {
    let result = citiesInfo;

    if (searchTerm) {
      result = result.filter(city =>
        city.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    }
    // Future filters go here:
    // if (population !== 'all') { result = result.filter(...) }
    // if (climate !== 'all') { result = result.filter(...) }

    return result;
  };

  // Sort cities by price
  const getSortedCities = (cities) => {
    if (sortOrder === 'low-to-high') {
      return [...cities].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    }
    if (sortOrder === 'high-to-low') {
      return [...cities].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }
    return cities;
  };

  const filteredCities = getFilteredCities();
  const sortedCities = getSortedCities(filteredCities);

  return (
    <>
      <Box
      sx={{
        ml: '-10px',
      }}
      >
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 3}}>
            <Sidebar sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Grid container spacing={3}
            sx={{
              pt: 3,
            }}
            >
              {sortedCities.map((city) => (
                  <Grid size={{ xs: 12, md: 6 }} key={city.id}>
                    <Cards
                      title={city.title}
                      image={city.img}
                      subtitle={city.subtitle}
                      slug={city.slug}
                    />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>

      </Box>
      
    </>
  )
}

export default explore;