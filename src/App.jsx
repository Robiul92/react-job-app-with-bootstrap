import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
 } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from './components/HomePage';


 
 

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
       <Route exact path="/" element={<HomePage />} />
         
      </Route>
    )
  );


  return <RouterProvider router={router} />
}

export default App
