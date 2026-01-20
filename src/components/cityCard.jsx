import { Typography } from "@mui/material";
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
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useState } from "react";
import { Link } from "react-router-dom";

//when user clicks on the card, or the bookmark, or the heart, all clicks should take them to the single city page for that city 

//and change the useState for a state that will persist for user logged in status and beyond refreshes

function cityCard({ title, subtitle, image, slug }) {

    const [bookmarked, setBookmarked] = useState(false);
    const [liked, setLiked] = useState(false);
    // const [chat, setChat] = useState(false);  
    const [compare, setCompared] = useState(false);

    const theme = useTheme();

    return (
        <>
        <Card
        sx={{
            width: "100%",
            maxWidth: 340,
            mx: 'auto',
            borderRadius: 2,
            overflow: "hidden",
            boxSizing: 'border-box',
            cursor: 'pointer',
            boxShadow: 3,
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
          <IconButton onClick={() => setBookmarked(!bookmarked)}>
            {bookmarked ? <BookmarkIcon sx={{color: theme.palette.accent.main}} /> : <BookmarkBorderIcon sx={{color: theme.palette.accent.main}} />}
          </IconButton>
          <IconButton onClick={() => setLiked(!liked)} sx={{ color: theme.palette.accent.main }}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
          </IconButton>

          <IconButton component={Link} to={`/communityboard/${slug}`} size="small" sx={{ color: theme.palette.accent.main }}>
            <ChatBubbleOutlineOutlinedIcon />
          </IconButton>

          <IconButton onClick={() => setCompared(!compare)} sx={{ color: theme.palette.accent.main }}>
            {compare ? <IoMdGitCompare /> : <IoIosGitCompare /> }
          </IconButton>
        </CardActions>
      </Box>
    </Card>
    </>
    )
};
export default cityCard;