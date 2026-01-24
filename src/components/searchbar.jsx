import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { InputBase, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

function SearchBar() {
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const navigate = useNavigate();

    // Sync local state with URL when it changes
    useEffect(() => {
        setSearchTerm(searchParams.get('search') || '');
    }, [searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/explore?search=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    const handleClear = () => {
        setSearchTerm('');
        navigate('/explore');
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
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
                placeholder="Search cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                    flex: 1,
                    fontFamily: '"Pontano Sans", sans-serif',
                }}
            />
            {searchTerm && (
                <IconButton
                    size="small"
                    onClick={handleClear}
                    sx={{ p: 0.5 }}
                >
                    <ClearIcon sx={{ fontSize: 18, color: 'grey' }} />
                </IconButton>
            )}
        </Box>
    );
}

export default SearchBar;