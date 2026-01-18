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
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CompareIcon from '@mui/icons-material/Compare';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

//make the icons fill upon click 

function cityCard({ title, subtitle, image }) {

    const theme = useTheme();

    return (
        <>
        <Card
        sx={{
            width: 340,
            borderRadius: 2,
            overflow: "hidden",
        }}
        >
      {/* Image */}
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
      />

      {/* Green footer area */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
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
          <IconButton size="small" sx={{ color: theme.palette.accent.main }}>
            <BookmarkBorderIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: theme.palette.accent.main }}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: theme.palette.accent.main }}>
            <ChatBubbleOutlineOutlinedIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: theme.palette.accent.main }}>
            <CompareIcon />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
    </>
    )
};
export default cityCard;