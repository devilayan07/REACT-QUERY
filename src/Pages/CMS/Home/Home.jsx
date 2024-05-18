import React from 'react'
import { Profile } from '../../../Api/Functions/profiledetails.api';
import { useQuery } from '@tanstack/react-query';
import { Container,Box,Typography,Grid } from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { profile_pic } from '../../../Api/Axios/axiosInstance';


function Home() {

    const {
        data: profile,
      } = useQuery({
        queryKey: ["landing-page-details"],
        queryFn: () => Profile(),
      });
      console.log(profile, "profile");

  return (
    <>
              <Box sx={{ paddingTop: "100px", paddingBottom: "50px",display:"flex",justifyContent:"center" }}>
      <Container>
        <Grid
          container
          sx={{
            height: "500px",
            // width: "1400px",
            // margin: "0 auto",
            border: "2px solid white",
            justifyContent:"center",
            alignItems:"center",
            gap:"20px"
          }}
        >
                    <Grid
            item
            lg={6}
            sx={{ backgroundColor: "#cb2d1b", textAlign: "center" }}
          >
            <img
              src={profile_pic(profile?.profile_pic)}
              alt=""
              height={"200px"}
              width={"200px"}
              style={{ marginTop: "20px", borderRadius: "50%" }}
            />
            <Box sx={{ marginTop: "30px" }}>
              <Typography variant="h5" color={"whitesmoke"}>
                Name:{profile && profile.first_name} {profile && profile.last_name}
              </Typography>
              <Typography variant="h6" color={"whitesmoke"}>
                Email Id:{profile && profile.email}
              </Typography>


            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Typography sx={{ paddingLeft: "8px" ,color:"whitesmoke"}}>
                <FacebookIcon />
              </Typography>
              <Typography sx={{ paddingLeft: "8px",color:"whitesmoke" }}>
                <TwitterIcon />
              </Typography>
              <Typography sx={{ paddingLeft: "8px",color:"whitesmoke"}}>
                <InstagramIcon />
              </Typography>
            </Box>
          </Grid>
            </Grid>
          </Container>
          </Box>

    
    </>
  )
}

export default Home
