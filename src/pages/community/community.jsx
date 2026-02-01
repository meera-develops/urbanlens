import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { getCities, getCityBySlug } from "../../services/myCities";
import { Box, Typography, Button, useTheme } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import MockComments from "../../components/mockComments.js";
import CommunityMsg from "./communityMsg.jsx";
import TextField from '@mui/material/TextField';
import JohnDoe from "../../assets/img/usersImages/john_doe.jpg"

//TODO about pagination 
//Backend TODO - consider incorporating counter for likes button 

function community() {

  const [comments, setComments] = useState(MockComments);
  const [newComment, setNewComment] = useState("");

  const handlePostComment = (e) => {
    e.preventDefault();

    if (!newComment.trim()) return;

    const commentToAdd = {
      id: comments.length + 1,
      name: "Johnny Danger",
      image: JohnDoe,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      msg: newComment,
    };

    setComments([...comments, commentToAdd ]);
    setNewComment("");
  }

  const theme = useTheme();

  const { citySlug } = useParams();
  const navigate = useNavigate();
  const cities = getCities();
  const city = getCityBySlug(citySlug);
  if (!city) {
  return <h2>City not found</h2>;
  }

  const [option, setOption] = useState(citySlug);

  const handleChange = (e) => {
    const newSlug = e.target.value;
    setOption(newSlug);
    navigate(`/communityboard/${newSlug}`);
  };

  return (
    <>
      <Box
      sx={{
        pt: 5, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      >
        <Box
        sx={{
          width: { xs: '90vw', lg: '50vw' },
          mb: '5',
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <FormControl variant="filled" sx={{ width: '200px' }}>
            <InputLabel>City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={option}
              label="City"
              onChange={handleChange}
              sx={{ backgroundColor: 'rgba(120, 145, 116, 0.5)',
                
               }}
            >
              {cities.map((c) => (
                <MenuItem key={c.slug} value={c.slug}
                sx={{
                  fontFamily: " 'Pontano Sans', serif"
                }}
                >
                  {c.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            width: {xs: '90vw', lg: '50vw'},
            mt: 5,
          }}
        >
          <Box
            component="img"
            src={city.img}
            alt={city.title}
            sx={{
              width: '100%',
              height: "auto",
              borderRadius: "10px",
            }}
          />
          <Button
              variant="contained"
              component={Link}
              size="large"
              to={`/citydetails/${citySlug}`}
              sx={{
                mt: 2,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.main,
              }}
            >
              City Details
            </Button>
            <Typography variant="h2" color="primary"
              sx={{ 
                my: 4,
                width: '50vw' 
              }}
            >{city.title}</Typography>
            <Typography variant="h3" color="primary"
            sx={{
              mb: 4,
            }}
            >
              Top Comments
            </Typography>
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
            >
              <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
              >
                <form onSubmit={handlePostComment}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '16px'
                  }}>
                  <TextField id="outlined-textarea" label="Add a Comment" 
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  multiline
                  sx={{
                    fontFamily: "'Pontano Sans', 'serif'",
                    width: {xs: '80vw', md: '40vw'},
                    fontSize: '1rem',
                  }}
                  />
                  <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.accent.main,
                  }}
                  type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </Box>
              {comments.slice().reverse().map((comment) => (
                <CommunityMsg key={comment.id} 
                name={comment.name}
                image={comment.image}
                date={comment.date}
                message={comment.msg}
                />
              ))}
            </Box>


        </Box>
        
      </Box>
         
    </>
  )
}

export default community;