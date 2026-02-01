import { Box, Typography, Grid, Snackbar, Alert, } from "@mui/material";
import John from "../../assets/img/usersImages/john_doe.jpg";
import Cities from "../../components/citiesInfo";
import CityCard from "../../components/cityCard";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, } from "react";
import replies from "../../components/mockComments.js";
import CommunityMsg from "../community/communityMsg.jsx";
import { useTheme, alpha } from "@mui/material/styles";

function userAccount() {
  const myCities = Cities.slice(6, 8);
  const theme = useTheme();

  const [alertMsg, setAlertMsg] = useState(null);

  const [compareList, setCompareList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (compareList.length === 2) {
      navigate(`/compare/${compareList[0]}/${compareList[1]}`);
      setCompareList([]);
    }
  }, [compareList, navigate]);

  const handleCompare = (slug) => {
    setCompareList((prev) => {
      if (prev.includes(slug)) {
        setAlertMsg(null);
        setTimeout(() => setAlertMsg("Removed from Comparision"), 100);
        return prev.filter((s) => s !== slug);
      }
      const updated = [...prev, slug];
      const city = Cities.find((c) => c.slug === slug);
      if (updated.length < 2) {
        setAlertMsg(null);
        setTimeout(() =>
          setAlertMsg(
            `${city?.title || slug} selected - pick another city to compare`,
          ),
        );
      }
      return updated;
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: 4,
          ml: 2,
        }}
      >
        <Typography variant="h2" color="text">
          Your Info
        </Typography>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            component="img"
            src={John}
            sx={{
              height: "200px",
              width: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 20%",
              mr: 4,
              mb: 3,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="body3" color="text">
              Johnny Danger
            </Typography>
            <Typography variant="body1" color="primary">
              johnnydanger@example.com
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body3"
          color="text"
          sx={{
            ml: 2,
          }}
        >
          Bio
        </Typography>
        <Typography
          variant="body2"
          color="text"
          sx={{
            backgroundColor: "rgba(144, 170, 85, 0.15)",
            maxWidth: { xs: "80vw", md: "45vw" },
            padding: 3,
            borderRadius: 3,
            mt: { xs: 1, md: 0 },
          }}
        >
          In my thirties now, I’ve become pretty intentional about where my
          money goes and how I want to live. UrbanLens helps me make sense of
          the real cost of living in the city — not just rent and bills, but the
          everyday stuff like food, commutes, and weekend plans. I like getting
          to compare experiences with other people who are trying to balance
          comfort, affordability, and a lifestyle that still feels enjoyable.
          When I’m not scrolling through cost breakdowns, you’ll usually find me
          exploring neighborhoods, trying out local restaurants, or looking for
          ways to stretch a dollar without sacrificing the things I love.
        </Typography>
        <Box
          sx={{
            my: 2,
            backgroundColor: "#ffffff",
            px: { xs: 1 },
            pl: { md: 2 },
            pb: 3,
            borderRadius: 3,
            width: { xs: "90vw", md: "70vw", xl: "70vw" },
            height: "auto",
          }}
        >
          <Typography variant="h2" color="text">
            Saved Cards
          </Typography>
          <Grid
            container
            gap={{ xs: 3, md: 0 }}
            sx={{
              px: { md: 0 },
              mt: 2,
            }}
          >
            {myCities.map((city) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                key={city.id}
                sx={{ "& > a": { mx: 0 } }}
              >
                <CityCard
                  title={city.title}
                  image={city.img}
                  subtitle={city.subtitle}
                  slug={city.slug}
                  defaultBookmarked={true}
                  defaultLiked={true}
                  onCompare={handleCompare}
                  isComparing={compareList.includes(city.slug)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            my: 2,
            backgroundColor: "#ffffff",
            px: { xs: 1 },
            pl: { md: 2 },
            pb: 3,
            borderRadius: 3,
            width: { xs: "90vw", md: "70vw", xl: "70vw" },
            height: "auto",
          }}
        >
          <Typography variant="h2" color="text">
            Post Replies
          </Typography>
          <Grid
            container
            columnSpacing={{ xl: 2 }}
            rowGap={{ md: 3 }}
            sx={{
              px: { md: 0 },
              mt: 2,
              flexWrap: { xl: "nowrap" },
              overflowX: { xl: "auto" },
              pb: { xl: 2 },
              scrollbarWidth: "thin",
              scrollbarColor: `${theme.palette.primary.main} transparent`,
            }}
          >
            {replies.map((reply) => (
              <Grid
                size={{ xs: 12, md: 4 }}
                key={reply.id}
                sx={{ flexShrink: { xl: 0 } }}
              >
                <CommunityMsg
                  name={reply.name}
                  image={reply.image}
                  date={reply.date}
                  message={reply.msg}
                  fullWidth
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Snackbar
        open={!!alertMsg}
        autoHideDuration={2500}
        onClose={() => setAlertMsg(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setAlertMsg(null)}
          severity="success"
          variant="standard"
        >
          {alertMsg}
        </Alert>
      </Snackbar>
    </>
  );
}
export default userAccount;
