import { Typography, Alert } from "@mui/material";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Box,
  useTheme
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IoIosGitCompare } from "react-icons/io";
import { IoMdGitCompare } from "react-icons/io";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


//bookmark and heart should provide visual feedback/alert that the city has been liked or added to favorites 
//and change the useState for a state that will persist for user logged in status and beyond refreshes

function cityCard({ title, subtitle, image, slug }) {

    const [bookmarked, setBookmarked] = useState(false);
    const [liked, setLiked] = useState(false);
    const [compare, setCompared] = useState(false);
    const [alertMsg, setAlertMsg] = useState(null);

    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        if (alertMsg) {
            const timer = setTimeout(() => setAlertMsg(null), 2500);
            return () => clearTimeout(timer);
        }
    }, [alertMsg]);

    return (
        <>
        <Card component={Link} to={`/citydetails/${slug}`}
        sx={{
            width: "100%",
            maxWidth: 340,
            mx: 'auto',
            borderRadius: 2,
            overflow: "hidden",
            boxSizing: 'border-box',
            cursor: 'pointer',
            boxShadow: 4,
            textDecoration: 'none',
            display: 'block',
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
                boxShadow: '0 0 30px rgba(151, 208, 113, 0.6)'
            }
        }} 
        >
      {/* Image */}
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover',
            
        }}
      />

      {/* Green body area */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          //px: 2,   
          py: 1,
        }}
      >
        <CardContent sx={{ pb: 1 }}>
          <Typography variant="body3" fontWeight={600}>
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{ opacity: 0.9, mt: 0.5 }}
          >
            {subtitle}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            pt: 0,
          }}
        >
          <IconButton onClick={(e) => { e.preventDefault(); setBookmarked(!bookmarked); setAlertMsg(bookmarked ? 'Removed from bookmarks' : 'Added to bookmarks'); }} sx={{ color: theme.palette.accent.main }}>
            {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <IconButton onClick={(e) => { e.preventDefault(); setLiked(!liked); setAlertMsg(liked ? 'Removed from favorites' : 'Added to favorites'); }} sx={{ color: theme.palette.accent.main }}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
          </IconButton>
          <IconButton
            size="small"
            sx={{ color: theme.palette.accent.main }}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate(`/communityboard/${slug}`); }}
          >
            <ChatBubbleOutlineOutlinedIcon />
          </IconButton>
          <IconButton onClick={(e) => { e.preventDefault(); setCompared(!compare); setAlertMsg('Select another city to compare'); }} sx={{ color: theme.palette.accent.main }}>
            {compare ? <IoMdGitCompare /> : <IoIosGitCompare /> }
          </IconButton>
        </CardActions>
      </Box>
    </Card>
    {alertMsg && <Alert severity="success" onClose={() => setAlertMsg(null)} sx={{ mt: 1 }}>{alertMsg}</Alert>}
    </>
    )
};
export default cityCard;