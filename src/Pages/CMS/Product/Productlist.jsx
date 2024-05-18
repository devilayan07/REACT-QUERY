// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { AddlistNow } from "../../../Api/Functions/list.api";

// export default function Productlist() {
//   const {
//     data,
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: "product",
//     queryFn:AddlistNow,
//   });
// //   console.log(landingpagedetails, "landingpagedetails");
//   return (
//     <>
//       {data?.map((item) => {
//           return (
//             <> 
//               <h3>{item.title}</h3>
//             </>
//           );
//         })}
//     </>
//   );
// }


import React from "react";
// import { Getlandingpagedetails } from "../../../Api/Functions/productList";
import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import { loginAPI } from "../../../Api/Functions/login.api";
import { AddlistNow, listAPI } from "../../../Api/Functions/list.api";
import {  Typography, Card, CardMedia, CardContent, CardActions, Button, CardActionArea, Grid } from '@mui/material'
import { Link } from "react-router-dom";
import { product } from "../../../Api/Axios/axiosInstance";
import Swal from "sweetalert2";
import { Remove } from "../../../Api/Functions/remove.api";
import { queryClient } from './../../../index';


export default function Products() {
  const {
    data: landingpagedetails,
    isLoading: landingpageloading,
    isError: landingpageError,
  } = useQuery({
    queryKey: ["landing-page-details"],
    queryFn: () => AddlistNow(),
  });
  console.log(landingpagedetails, "landingpagedetails");

  const mutation = useMutation({
    mutationFn: Remove,
    onSuccess: async () => {
      await queryClient.invalidateQueries("landing-page-details");
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    },
  });

  const handleDelete = async (id) => {
    const formData = new FormData();
    formData.append("id", id);
    mutation.mutate(formData);
  };

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  };



  return (
    <section >
    <Typography variant='h5'textAlign={"center"} sx={{marginTop:"80px"}}>Avilabel Models</Typography>
    <Grid container  >
      {
        Array.isArray(landingpagedetails) && landingpagedetails.map((item, index) =>
          <Grid item xs={12} md={4} sm={6} sx={{ marginTop: "30px", paddingLeft: "10px"}}>
            <Card sx={{ marginTop: "20px", maxWidth: 350, height: "450px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200px"
                  image={product(item.image)} />
                <CardContent>
                  <Typography variant='h5' component="div" textAlign="center">{item.title}</Typography>
                  <Typography variant='h6' component="div" >{item.description}</Typography>

                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                {/* <Link to={`/product/${item._id}`}><Button variant='outlined'>Edit</Button></Link> */}
                <Link to={`/product/${item._id}`}><Button variant="contained">Details </Button></Link>
                <Button variant="contained" onClick={()=>handleRemove(item._id)}>Delete</Button>

              </CardActions>

            </Card>
          </Grid>
        )
      }

    </Grid>
    </section>


    


  );
}
