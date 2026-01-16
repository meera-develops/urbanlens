import { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Button, Menu, MenuList, MenuItem } from "@mui/material";
import { Link } from 'react-router-dom';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';
import Typography from '@mui/material/Typography';
// import keyLogo from '../assets/img/logo.png';

//navbar will have to update to change from "log in" to "my account" upon successful login 

//figure out how to get pages actually routing to their accurate page
//then input key logo 

const pages=[
    { label: 'Home', path: '/' },
    { label: 'Explore Areas', path: '/explore' },
    { label: 'Community Board', path: '/communityboard' },
    { label: 'Log in', path: '/login' },
];


function navbar() {
    const [anchorNav, setAnchorNav] = useState(null);

    const openMenu = (event)=>{
        setAnchorNav(event.currentTarget);
    };
    const closeMenu=()=>{
        setAnchorNav(null);
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs: 'none', md: 'flex'}}}>
                        <LocalLibraryIcon/>
                    </IconButton>
                    <Typography variant="accessories" component="div" sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>Testing</Typography>
                    <Box sx={{display:{xs: 'none', md: 'flex'}}}>
                        {pages.map((page)=>(
                            <Button 
                            key={page.path}
                            color='inherit' 
                            component={Link} to={page.path}>
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{display:{xs: 'flex', md: 'none'}}}>
                        <IconButton size='large' edge='start' color='inherit' onClick={openMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorNav} open={Boolean(anchorNav)} onClose={closeMenu} sx={{display:{xs: 'flex', md: 'none'}}}>
                            <MenuList>
                                {pages.map((page)=>(
                                    <MenuItem
                                    key={page.path}
                                    component={Link}
                                    to={page.path}
                                    onClick={closeMenu}
                                    >{page.label}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </Box>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs: 'flex', md: 'none'}}}>
                        <LocalLibraryIcon/>
                    </IconButton>
                    <Typography variant="accessories" component="div" sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>Testing</Typography>
                </Toolbar>


            </AppBar>
        
        </>
    )
}

export default navbar
