import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { details } from '../../../Api/Functions/details.api';
import { useQuery } from "@tanstack/react-query";
import { Box,CardActionArea,Container,Button,CardActions,Typography,CardContent,CardMedia,Card } from '@mui/material';
import { product } from '../../../Api/Axios/axiosInstance';


function SingleProduct() {
    const{id}=useParams()
    console.log(id)

    const {
        data: singleproducts,
      } = useQuery({
        queryKey: ["landing-page-details"],
        queryFn: () => details(id),
      });
      console.log(singleproducts, "singleproducts");
    

  return (
    <>
    <Box>
  
  <Typography variant='h5' textAlign="center" sx={{ marginTop: "80px" }}>Product Details</Typography>
  <Container sx={{justifyContent:"center",display:"flex"}}>
      <Card sx={{ marginTop: "20px", width: "500px", height: "550px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250px"
            image={product(singleproducts?.image)} />
          <CardContent>
            <Typography variant='h5' component="div" textAlign="center">Title:{singleproducts && singleproducts.title}</Typography>
            <Typography variant='h6' component="div">Description:{singleproducts && singleproducts.description}</Typography>


          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "center",marginTop:"50px" }}>
          <Link to={`/edit/${singleproducts && singleproducts._id}`}><Button variant='contained' alignItems="center">Edit</Button></Link>
        </CardActions>
      </Card>
      </Container>
</Box>

      
    </>
  )
}

export default SingleProduct
