import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Register from './Pages/AUTH/Register/Register';
// import Login from './Pages/AUTH/Login/Login';
import Wrapper from './Pages/Layout/Wrapper/Wrapper';
// import Productlist from './Pages/CMS/Product/Productlist';
// import Create from './Pages/CMS/Create/Create';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import Loader from './Component/Loader/Loader';
// import Update from './Pages/CMS/Update/Update';
// import SingleProduct from './Pages/CMS/SingleProduct/SingleProduct';
// import Home from './Pages/CMS/Home/Home';


const Register=lazy(()=> import ("./Pages/AUTH/Register/Register"))
const Login=lazy(()=> import ("./Pages/AUTH/Login/Login"))
const Create=lazy(()=> import("./Pages/CMS/Create/Create"))
const Productlist=lazy(()=> import("./Pages/CMS/Product/Productlist"))
const Update=lazy(()=> import("./Pages/CMS/Update/Update"))
const Home=lazy(()=> import("./Pages/CMS/Home/Home"))
const SingleProduct=lazy(()=>import("./Pages/CMS/SingleProduct/SingleProduct"))


function App() {

  function PrivateRoute({children}){
    console.log(children, "children");
    const token=
    localStorage.getItem("token") || sessionStorage.getItem("token");

    return token !== null && token!==undefined ?(
      children
    ) :(
      <>
      <Navigate to="/"/>
      {toast("Please go for login either you can't access product list")}
      
      </>
    )
}


  const PublicRouteNames=[
    {
      path:"/register",
      Component:<Register/>
    },
    {
      path:"/login",
      Component:<Login/>

    },
    {
      path:"/",
      Component:<Home/>
    }

  
  ]

  const PrivateRouteNames=[
    {
    path:"/productlist",
    Component:<Productlist/>
  },
{
  path:"/edit/:id",
  Component:<Update/>
},
{
  path:"/product/:id",
  Component:<SingleProduct/>
},

{
  path:"/create",
  Component:<Create/>
}


]

  return (
    <div className="App">
      {/* <Router>
        <Wrapper>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/productlist" element={<Productlist/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes>
        </Wrapper>
      </Router> */}
      <Suspense fallback={ <Loader/> } >
      <Router>
        <Wrapper>
          <Routes>
            {
              PublicRouteNames?.map((route,index)=>{
                return (
                  <Route key={index} exact path={route.path} element={route.Component} />
                )
              })

            }

{
            PrivateRouteNames?.map((route,index)=>{
              return (
              <Route key={index} exact path={route.path} 
              element={ <PrivateRoute>{route.Component}</PrivateRoute>}
              
              />
              );
            })
          }

          </Routes>
        </Wrapper>
      
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
