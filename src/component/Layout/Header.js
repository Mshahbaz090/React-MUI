import { useState } from 'react';
import React from 'react'
import { Box, Typography, AppBar, Toolbar, IconButton, Divider, Drawer } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';

import "../../styles/HeaderStyle.css"
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import "../../styles/HeaderStyle.css";
import logo from "../../Images/logo.svg"


const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)


    }




    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>



            <Typography
                color={'goldenrod'}
                variant='h6'
                component='div'
                sx={{ flexGrow: 1, my: 2 }}>


                <FastfoodIcon />
                My Restaurant
            </Typography>
            <Divider />

            <ul className='mobile-navigation'>
                <li>
                    <NavLink activeClassName="active" to={'/'}>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
            </ul>





        </Box>
    )



    return (
        <div>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
                    <Toolbar>

                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge="start"
                            sx={{
                                mr: 2,
                                display: { sm: 'none' },
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />


                        </IconButton>
                        <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1 }}>
                            <img src={logo} alt='logo' height={"50"} width='250' />

                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <NavLink activeClassName='active' to={'/'}>
                                        Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/menu'}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/about'}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'}>Contact</NavLink>
                                </li>
                            </ul>




                        </Box>
                    </Toolbar>







                </AppBar>

                <Box component='nav'>

                    <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            "& .MuiDrawer-paper": {
                                boxSizing: 'border-box',
                                width: "240px",
                            },
                        }} >
                        {drawer}
                    </Drawer>


                </Box>

                <Toolbar />

            </Box>





        </div >
    )
}

export default Header
