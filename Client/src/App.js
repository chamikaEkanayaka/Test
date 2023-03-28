// import Gallery from "./Pages/Gallery";
// import HomePage from "./Pages/HomePage"

// function App() {
//   return (
//     <div>
//       {/* <HomePage/> */}
//       <Gallery/>
//     </div>
//   );
// }
// export default App;

import {React} from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,Link,RouterProvider,Outlet} from "react-router-dom";
import NavBar from './Components/Common/NavBar';
import HomePage from "./Pages/HomePage"
import Gallery from "./Pages/Gallery";




export default function App() {
    const router=createBrowserRouter(
        createRoutesFromElements( 
            <>
              <Route path="/" element={<Root/>}>
                  <Route path="/home" element={<HomePage/>}/>
                  <Route path="/gallery" element={<Gallery/>}/>
              </Route>
            </>
            
        )
    )
    
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
        
    )
}

const Root=()=>{
    return(
        <>
        {/* <NavBar/> */}
        <div><Outlet/></div>
        </>
    )
}