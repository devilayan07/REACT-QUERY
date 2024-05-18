


import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react"; // Importing useState
import { AddupdateNow } from "../../../Api/Functions/update.api";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
// import { edit } from "../../../Api/Functions/edit.api";
import { details } from "../../../Api/Functions/details.api";

export default function Update() {
  const [image, setImage] = useState(null);

  const [form, setFormData] = useState({});
  const { id } = useParams();
  console.log(id)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { mutate } = useMutation({
    mutationFn: AddupdateNow,
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await details(id);
        setFormData(data);
        console.log(data, "data");
      } catch (error) { }
    };

    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("description", data?.description);
    formData.append("id", id);
    formData.append("image", data.image[0])

    mutate(formData);
  };

  useEffect(() => {
    setValue("title", form?.title);
    setValue("description", form?.description);
    setValue("image",form?.image)
  }, [form, setValue]);
  console.log(form, "formData");
  return (
    <Box sx={{ marginTop: "80px" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                Contact Form
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register("title", {
                    required: "Title is required",
                  })}
                  label="Your title"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.title}
                  helperText={errors.title && errors.title.message}
                  defaultValue={form?.title || ""}
                />
                <TextField
                  {...register("description", { required: true })}
                  label="Description"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={4}
                  error={!!errors.description}
                  helperText={errors.description && "Description is required"}
                  defaultValue={form?.description || ""}
                />

              

                
              {/* {form.image ? (
                <img
                  src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${form?.image}`}
                  alt="Image"
                  type="file"
                  style={{ width: "100%", height: "auto", marginTop: "10px" }}
                />
              ) : (
                <p>No image selected</p>
              )}
              <TextField
                {...register("image", { required: true, maxLength: 20 })}
                fullWidth
                margin="normal"
                variant="outlined"
                type="file"
                autoFocus
                error={!!errors.image}
                helperText={errors.image && "Image required"}
                defaultValue={form?.image || ""}
              />


 */}




<TextField
                {...register("image", { required: true, maxLength: 20 })}
                fullWidth
               margin="normal"
                variant="outlined"
                type="file"
                autoFocus
                error={!!errors.image}                 helperText={errors.image && "Image required"}
               defaultValue={form?.image || ""}
                onChange={(e) => setImage(e.target.files[0])}
           />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  sx={{ marginTop: 2 }}
                >
                  Send Message
                </Button>



                 <div
               style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  marginTop: "10px",
                }}
              >
               
                {image && (
                  <img
                   style={{
                      position: "absolute",
                       top: 0,
                       left: 0,
                       height: "180px",
                       width: "auto",
                     }}
                     src={URL.createObjectURL(image)}
                     alt=""
                     className="upload-img"
                   />
               )}
               {!image && form.image && (
                  <img                     src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${form?.image}`}
                     alt=""
                    style={{ width: "100%", height: "auto" }}
                   />
                )}
             </div> 
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}










// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";

// // import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// // import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useForm } from "react-hook-form";

// import { toast } from "react-toastify";
// import { AddupdateNow, updateAPI } from "../../../Api/Functions/update.api";
// import { useMutation } from "@tanstack/react-query";
// import { details, detailsAPI } from "../../../Api/Functions/details.api";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export default function Update() {
//   const navigate = useNavigate();
//   // const [image, setImage] = useState(null);
//   const [image, setImage] = useState(null);
//   const [form, setFormData] = useState({});
//   const { id } = useParams();
//   console.log(id, "hello id");
//   const {
//     register,
//     setValue,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const mutation = useMutation({
//     mutationFn: AddupdateNow,
//     onSuccess: (data) => {
//       if (data.status === 200) {
//         toast.success(data.message);
//         navigate("/products");
//       } else {
//         if (data.status === 201) {
//           toast.error(data.message);
//         }
//       }

//       // navigate("/products")
//     },
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await details(id);
//         setFormData(data);
//         console.log(data, "data");
//       } catch (error) {}
//     };

//     fetchData();
//   }, [id]);

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("id", id);
//     formData.append("image", data.image[0]);
//     mutation.mutate(formData);
//   };

//   useEffect(() => {
//     setValue("title", form?.title);
//     setValue("description", form?.description);
//     setValue("image", form?.image);
//   }, [form, setValue]);
//   console.log(form, "formData");

//   return (
//     <>
//       <ThemeProvider theme={defaultTheme}>
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 8,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Typography component="h1" variant="h5">
//               Update
//             </Typography>
//             <Box
//               component="form"
//               onSubmit={handleSubmit(onSubmit)}
//               noValidate
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 {...register("title", { required: true, maxLength: 20 })}
//                 fullWidth
//                 label="Title"
//                 id="title"
//                 margin="normal"
//                 autoFocus
//                 error={errors.title}
//                 helperText={errors.title && "Title is required"}
//                 defaultValue={form?.title || ""}
//               />

//               <TextField
//                 {...register("description", { required: true, maxLength: 30 })}
//                 margin="normal"
//                 fullWidth
//                 autoFocus
//                 label="Description"
//                 id="description"
//                 error={errors.description}
//                 helperText={errors.description && "Description is required"}
//                 defaultValue={form?.description || ""}
//                 // onChange={(e) => setImage(e.target.files[0])}
//               />

//               {/* {form.image ? (
//                 <div
//                   style={{
//                     position: "relative",
//                     width: "100%",
//                     height: "auto",
//                     marginTop: "10px",
//                   }}
//                 >
//                   <img
//                     src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${form?.image}`}
//                     alt="Image"
//                     style={{ width: "100%", height: "auto" }}
//                   />
//                   {image && (
//                     <img
//                       style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         height: "180px",
//                         width: "auto",
//                       }}
//                       src={URL.createObjectURL(image)}
//                       alt=""
//                       className="upload-img"
//                     />
//                   )}
//                 </div>
//               ) : (
//                 <>
//                   <p>No image selected</p>
//                   {image && (
//                     <img
//                       style={{ height: "180px" }}
//                       src={URL.createObjectURL(image)}
//                       alt=""
//                       className="upload-img"
//                     />
//                   )}
//                 </>
//               )} */}




//               <TextField
//                 {...register("image", { required: true, maxLength: 20 })}
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 type="file"
//                 autoFocus
//                 error={!!errors.image}
//                 helperText={errors.image && "Image required"}
//                 defaultValue={form?.image || ""}
//                 onChange={(e) => setImage(e.target.files[0])}
//               />
//  {mutation.isPending ? (
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2 }}
//                   >
//                     Loading...
//                   </Button>
//                 ) : (
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2 }}
//                   >
//                     Update
//                   </Button>
//                 )}
//               <div
//                 style={{
//                   position: "relative",
//                   width: "100%",
//                   height: "auto",
//                   marginTop: "10px",
//                 }}
//               >
               
//                 {image && (
//                   <img
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       height: "180px",
//                       width: "auto",
//                     }}
//                     src={URL.createObjectURL(image)}
//                     alt=""
//                     className="upload-img"
//                   />
//                 )}
//                 {!image && form.image && (
//                   <img
//                     src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${form?.image}`}
//                     alt="Image"
//                     style={{ width: "100%", height: "auto" }}
//                   />
//                 )}
//               </div>
//             </Box>
//           </Box>
//           <Copyright sx={{ mt: 8, mb: 4 }} />
//         </Container>
//       </ThemeProvider>
//     </>
//   );
// }
