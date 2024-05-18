
import React, { useState, useEffect } from 'react'
import { Grid, AppBar, Toolbar, Typography, Tabs, Tab, Box, Button, useTheme, useMediaQuery } from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Link } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import DrawerComp from '../../../Component/DrawerComp/DrawerComp';
import { Log_out } from '../../../Redux-Toolkit/Slice/authSlice';

function Header() {
    const [authenticated, setAuthenticated] = useState(false);
    const dispatch = useDispatch()
    const theme = useTheme()
    const [value, setValue] = useState()
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuthenticated(true);
        }
    }, [authenticated]);






    console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    console.log(isMatch)

    const handleChange = ((e, value) => {
        setValue(value)

    })

    const logOut = () => {

        dispatch(Log_out())
    }


    return (

        <AppBar sx={{ backgroundColor: "#FFFFFF" }}>
            <Toolbar>
                <DirectionsCarIcon />

                {isMatch ? <>
                    <Typography variant='h6' sx={{ fontWeight: "700", marginLeft: "20px" }}>
                        Electric
                    </Typography>

                    <DrawerComp />


                </> : <Grid sx={{ placeItems: "center" }} container >
                    <Grid item xs={2}>
                        <Typography variant='h6' sx={{ fontWeight: "700", marginLeft: "20px",color:"green" }}>
                            Electric
                       </Typography>
                    </Grid>
                    <Grid item xs={6} >
                        <Tabs sx={{ marginLeft: "auto" }} textColor='inherit' indicatorColor='secondary' value={value} onChange={handleChange}>
                            <Tab sx={{color:"green"}}  label="Home" to="/" component={Link}  />
                            <Tab  sx={{color:"green"}} label="Create" to="/create" component={Link} />
                            <Tab  sx={{color:"green"}} label="Product" to="/productlist" component={Link} />





                        </Tabs>
                    </Grid>
                    <Grid item xs={1} />

                    <Grid item xs={3}>
                        <Box display="flex">
                            <Link onClick={logOut} to={"/login"}> <Button variant='contained'  sx={{ backgroundColor: "#F77D0A", marginLeft: "auto" }}>
                                Logout
                            </Button>
  </Link>




                            <Button variant='contained' component={Link} to="/login" sx={{ backgroundColor: "#F77D0A", marginLeft: "auto" }}>
                                Login
                            </Button>

                        </Box>


                    </Grid>
                </Grid>}

            </Toolbar>
        </AppBar>

    )
}

export default Header



