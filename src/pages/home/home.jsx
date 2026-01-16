import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'

function home() {

  return (
    <>
      <Box backgroundColor="background">
        <Typography variant="h1">Libre???</Typography>
        <Typography variant="h3">Testing for smaller font</Typography>
        <Typography variant="body1">Ok, this should've actually worked</Typography>
        <Typography variant="p">Testing p size</Typography>
      </Box>
      
    </>
  )
}

export default home;