import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import index from "../src/index.css"
import Header from "./Components/Header";
import Body from "./Components/Body";
// import About from "./Pages/About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Error from "./Pages/Error";
import RestrauntMenu from "./Pages/RestrauntMenu";
import UserContext from "./Components/utils/UserContext";
import Contact from "./Pages/Contact";
import { Provider } from "react-redux";
import appStore from "./Components/utils/appStore";
import Cart from "./Pages/cartPage";


// const heading=React.createElement("h1",{id:"heading"},"Hello World From React");

/*In above Line, create element take three arguments, one is element you want to create, {}=> this  is used to give
attribute to tags like id or classes and third one is Text */

// console.log(heading)
// When you Console the heading you will see an object, and in props you will see 3rd one is children 'hello world from react'

// const root=ReactDOM.createRoot(document.getElementById('inner'));
// root.render(heading)



/*If i want to create Structure like html in react:
<div id="parent">
    <div id="child">
    <h1>H1 Tag </h1>
    <h2>H2 Tag </h2>
    </div>
    <div id="child2">
    <h1>H1 Tag </h1>
    <h2>H2 Tag </h2>
    </div>
</div>
*/



const About= lazy(()=>import("./Pages/About"))







// App

const AppLayout=()=>{

const [userName,setUserName]=useState();

useEffect(()=>{
  const data={
    name:"Syed Musa Azam"
  };
  setUserName(data.name)
},[])

    return(
      <Provider  store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div>
      <Header />
     <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
    )
  }
 


  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      children:[
        {
          path:"/",
          element: <Body />
        },
        {
          path:"/about",
          element:<Suspense fallback={"Loading..."}><About /></Suspense>
        },
        {
          path:"/contact",
          element:<Contact  />
        },
        {
          path:"/restraunts/:resid",
          element: <RestrauntMenu />
        },
        {
          path:"/cart",
          element:<Cart />
        }
      ],
      errorElement: <Error />
    }
    
  ])

const root=ReactDOM.createRoot(document.getElementById('inner'));
root.render(<RouterProvider router={appRouter} />);

// Now if I want to  make siblings in Child then we put in an array.