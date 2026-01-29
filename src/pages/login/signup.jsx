import Typography from "@mui/material/Typography";
import { Box, Button, InputAdornment, TextField, IconButton, Snackbar, Alert } from "@mui/material";
import background from "../../assets/img/login-bg.jpg";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

function Signup () {

    const theme = useTheme();
    const navigate = useNavigate();
    const [showPw, setShowPw] = useState(false);
    const [alertMsg, setAlertMsg] = useState(null);

    const showAlert = (msg) => {
        setAlertMsg(null);
        setTimeout(() => setAlertMsg(msg), 100);
    };
    const handleClickShowPw = () => setShowPw((show) => !show);
    const handleMouseDownPw = (e) => {
        e.preventDefault();
    };
    const handleMouseUpPw = (e) => {
        e.preventDefault();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        showAlert('Account created successfully!');
        setTimeout(() => navigate('/explore'), 800)
    }

    return (
        <>
        <Box
        sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            ml: '-10px',
            mb: '-2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

        }}
        >
            <Box
            sx={{ 
                backgroundColor: 'rgba(252, 251, 246, 0.65)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                borderRadius: 3,
                width: {xs: '90vw', md: '50vw'},
                height: 'auto',
                py: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
                <Typography variant="h2" color="text">Create Account</Typography>
                <Box component="form" onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3,
                    width: '70%',
                }}
                >   
                    <TextField id="fname" label="first name" variant="filled" required slotProps={{
                        input: {
                            sx: {
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                                '&.Mui-focused': { backgroundColor: 'rgba(255, 255, 255, 1)' },
                                '&:before, &:after': { display: 'none' },
                            },
                        },
                    }} />
                    <TextField id="lname" label="last name" variant="filled" required slotProps={{
                        input: {
                            sx: {
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                                '&.Mui-focused': { backgroundColor: 'rgba(255, 255, 255, 1)' },
                                '&:before, &:after': { display: 'none' },
                            },
                        },
                    }} />
                    <TextField id="email" label="email" variant="filled" slotProps={{
                        input: {
                            sx: {
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                                '&.Mui-focused': { backgroundColor: 'rgba(255, 255, 255, 1)' },
                                '&:before, &:after': { display: 'none' },
                            },
                        },
                    }} />
                    <TextField id="pw" label="password" variant="filled" type={showPw ? 'text' : 'password'} slotProps={{
                        input: {
                            sx: {
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                                '&.Mui-focused': { backgroundColor: 'rgba(255, 255, 255, 1)' },
                                '&:before, &:after': { display: 'none' },
                            },
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label={
                                        showPw ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPw}
                                    onMouseDown={handleMouseDownPw}
                                    onMouseUp={handleMouseUpPw}
                                    edge="end"
                                    >
                                    {showPw ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                        },
                        }}
                    />
                    <TextField id="confirmpw" label="confirm password" variant="filled" type={showPw ? 'text' : 'password'} slotProps={{
                        input: {
                            sx: {
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                                '&.Mui-focused': { backgroundColor: 'rgba(255, 255, 255, 1)' },
                                '&:before, &:after': { display: 'none' },
                            },
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label={
                                        showPw ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPw}
                                    onMouseDown={handleMouseDownPw}
                                    onMouseUp={handleMouseUpPw}
                                    edge="end"
                                    >
                                    {showPw ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                        },
                        }}
                    />
                    <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{
                        mt: 2,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.background.main,
                        fontSize: '1.2rem'
                    }}
                    >
                    Submit
                    </Button>

                </Box>
            </Box>
        </Box>
        <Snackbar
            open={!!alertMsg}
            autoHideDuration={2500}
            onClose={() => setAlertMsg(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert onClose={() => setAlertMsg(null)} severity="success" variant="standard">
                {alertMsg}
            </Alert>
        </Snackbar>
        </>
    )
} 
export default Signup;

