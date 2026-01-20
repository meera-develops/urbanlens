import { getCities, getCityBySlug } from "../../services/myCities";
import { Box, Typography, IconButton, useTheme, Alert } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IoIosGitCompare } from "react-icons/io";
import { IoMdGitCompare } from "react-icons/io";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function SingleCityPage() {
    const { citySlug } = useParams();
    // const cities = getCities();
    const city = getCityBySlug(citySlug);
    if (!city) {
      return <Typography variant="h2">City not found</Typography>;
    }

    const [bookmarked, setBookmarked] = useState(false);
    const [liked, setLiked] = useState(false);
    const [compare, setCompared] = useState(false);
    const [alertMsg, setAlertMsg] = useState(null);

    const theme = useTheme();

    useEffect(() => {
        if (alertMsg) {
            const timer = setTimeout(() => setAlertMsg(null), 2500);
            return () => clearTimeout(timer);
        }
    }, [alertMsg]);

    return (
        <>
        <Box
        sx={{

        }}
        >
            <Box
            sx={{
                backgroundColor: '#ECEFDE',
                ml: '-10px',
                pl: '20px',
                width: '100vw',
                py: '1.5rem'
            }}
            >
                <Box
                component="img"
                src={city.img}
                alt={city.title}
                sx={{
                    width: {xs: '90vw', lg: '50vw'},
                    height: "auto",
                    borderRadius: "10px",
                    mt: 5,
                    display: 'block',
                }}
                />
                <Box sx={{ mt: 1 }}>
                    <IconButton onClick={() => { setBookmarked(!bookmarked); setAlertMsg(bookmarked ? 'Removed from bookmarks' : 'Added to bookmarks'); }} sx={{ color: theme.palette.primary.main }}>
                        {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                    <IconButton onClick={() => { setLiked(!liked); setAlertMsg(liked ? 'Removed from favorites' : 'Added to favorites'); }} sx={{ color: theme.palette.primary.main }}>
                        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
                    </IconButton>
                    <IconButton
                        component={Link}
                        to={`/communityboard/${citySlug}`}
                        size="small"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        <ChatBubbleOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => { setCompared(!compare); setAlertMsg('Select another city to compare'); }} sx={{ color: theme.palette.primary.main }}>
                        {compare ? <IoMdGitCompare /> : <IoIosGitCompare /> }
                    </IconButton>
                </Box>
                {alertMsg && <Alert severity="success" onClose={() => setAlertMsg(null)} sx={{ mt: 1, width: 'fit-content' }}>{alertMsg}</Alert>}

                <Typography variant="h2" color="primary"
                sx={{ 
                    my: 4,
                    width: '50vw' 
                }}
                >City Details - <em>{city.title}</em></Typography>
                <Typography
                variant="body1">{city.subtitle}</Typography>
                </Box>
            </Box>
        </>
    )
} export default SingleCityPage;