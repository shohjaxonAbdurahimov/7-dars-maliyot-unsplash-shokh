//import Auth firebase

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userSetting } from "./redux/likeSlice";

import ProtectedRoutes from "./components/ProtectedRoutes";

import { auth } from "./firebase/firebaseConfig";
import { useEffect } from "react";
import React from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RooterLayout from "./layouts/RooterLayout";
import LikedPhotos from "./pages/LikedPhotos";
import Login from "./pages/Login";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(

      <Route >

        <Route path="/" element={<ProtectedRoutes>
          <RooterLayout />
        </ProtectedRoutes>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="likedPhotos" element={<LikedPhotos />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (info) => {
      dispatch(userSetting(info))
    })
  }, [])



  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
