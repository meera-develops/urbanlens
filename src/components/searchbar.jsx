import { InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function searchBar() {
    return (
        <>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: '999px',
                px: 2,
                py: 0.5,
                width: { xs: '100%', md: 300 },
            }}
            >
                <SearchIcon sx={{ color: 'black', mr: 1 }} />
                <InputBase
                    placeholder="Search"
                    sx={{ flex: 1,
                        fontFamily: '"Pontano Sans", sans-serif',
                        
                     }}
                />
            </Box>
        </>
    )
} export default searchBar