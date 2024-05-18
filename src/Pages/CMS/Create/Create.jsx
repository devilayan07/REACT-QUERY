import { Box, Container, TextField, Button, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { AddcreateNow } from '../../../Api/Functions/create.api'
import { toast } from 'react-toastify'
function Create() {
    const [image, setImage] = useState(); 
    const { register, handleSubmit, formState: { errors } } = useForm()


    // const { mutate, isPending } = useMutation({
    //     mutationFn: AddcreateNow,
    //     onSuccess: (data) => {
    //         toast("Hello")

    //     }
    // })
    const {mutate,isPending}=useMutation({
        mutationFn:AddcreateNow,
        onSuccess:(data)=>{
            // console.log(data)
            toast.success(data.message)
            // localStorage.setItem("title",data.title)
        }
    })

    const onSubmit = (data) => {
        const formdata = new FormData()
        formdata.append("title", data.title)
        formdata.append("description", data.description)
        formdata.append("image", data.image[0])

        mutate(formdata)
        //    console.log(formdata)


    }
    return (
        <Box sx={{ marginTop: "80px" }}>

            <Container component="main" maxWidth="xs">

                <Box
                    sx={{ marginTop: "100px" }}>
                    <Typography textAlign={"center"} variant='h5'>Create Data</Typography>

                    <Box component="form" sx={{ margin: "20px", padding: "10px", alignItems: "center" }}  >
                        <TextField
                            {...register("title", { required: true })}
                            margin='normal'
                            fullWidth

                            id='title'
                            label="Enter The Title"
                            name='title'
                            error={errors.title}
                            helperText={errors.title && "Title is required"}
                            autoComplete='title'
                            autoFocus
                        />


                        <TextField
                            {...register("description", { required: true })}
                            margin='normal'
                            fullWidth

                            id='description'
                            label="Enter The Description"
                            name='description'
                            error={errors.description}
                            helperText={errors.description && "Description is required"}



                            autoComplete='description'
                            autoFocus
                        />
{/* 
<TextField
                {...register("image", { required: true, maxLength: 20 })}

                fullWidth
                margin="normal"
                variant="outlined"
                type="file"
                error={!!errors.image}
                helperText={errors.image && "Image is required"}
                onChange={(e) => setImage(e.target.files[0])} 
              />   */}



<TextField
    {...register("image", { required: true, maxLength: 20 })}
    fullWidth
    margin="normal"
    variant="outlined"
    type="file"
    error={!image && !!errors.image} 
    helperText={!image && errors.image && "Image is required"} 
    onChange={(e) => setImage(e.target.files[0])}
/>


{image && (
                <img
                  style={{ height: "180px" }}
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="upload-img"
                />
              )}


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
              /> */}


     {
        isPending ? (
            <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{ marginTop: "20px" }}
            // onClick={handleSubmit(onSubmit)}
        >
            Loading....
        </Button>


        ):(
            <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{ marginTop: "20px" }}
            onClick={handleSubmit(onSubmit)}
        >
            Submit
        </Button>


        )
     }



                    </Box>


                </Box>
            </Container>


        </Box>
    )
}

export default Create

// import React from 'react'
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// // import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// // import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// // import Link from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useForm } from 'react-hook-form';
// import { useMutation } from '@tanstack/react-query';
// import { registerAPI } from '../../../Api/Functions/register.api';
// import { toast } from 'react-toastify';
// import { AddcreateNow, createAPI } from '../../../Api/Functions/create.api';




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

// export default function Create() {


//   const{register,handleSubmit,formState:{errors}}=useForm()

//   const mutation=useMutation({
//       mutationFn:AddcreateNow,
//       onSuccess:(data)=>{
//         if(data.status===200){
//           toast.success(data.message)
//         }
//         else{
//           if(data.status===201){
//             toast.error(data.message)

//           }
//         }
//       }
//   })

//   const onSubmit=(data)=>{
//          const formData=new FormData()
//          formData.append("title",data.title)
//          formData.append("description",data.description)
//          mutation.mutate(formData)
        
//   }

//   return (
//     <>
//        <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
         
//           <Typography component="h1" variant="h5">
//             Create
//           </Typography>
//           <Box
//             component="form"
//                       noValidate
//             sx={{ mt: 1 }}
//           >
          


//    <TextField    
   
//    {...register("title",{required:true,maxLength:20})}
//    fullWidth
//    label="Title"
//    id='title'
//    error={errors.title}
//    helperText={errors.title && "Title is required"}
//    autoFocus
   
//    />

//            <TextField    
           
//            {...register("description",{required:true,maxLength:20})}
//            fullWidth
//            label="Description"
//            id='description'
//            error={errors.description}
//            helperText={errors.description && "Description is required"}
           
//            />
         

       
//             {/* <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={handleSubmit(onSubmit)}  
//             >
//               Sumbit
//             </Button> */}
//             {mutation.isPending   ?    
            
//             <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
            
//           >
//             Loading..
//           </Button>    :  


// <Button
// type="submit"
// fullWidth
// variant="contained"
// sx={{ mt: 3, mb: 2 }}
// onClick={handleSubmit(onSubmit)}  
// >
// Sumbit
// </Button>
          
          
//           }


           
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//     </>
//   )
// }






