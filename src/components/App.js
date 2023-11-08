import React, { Suspense, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";
import { refreshThunk } from "../redus/authReducer";
import RestrictedRoute from "./RestrictedRoutes";
// import PrivatedRoute from "./PrivatRoutes";
import GalleryListPage from "./pages/GalleryListPage";
import Details from "./pages/Details";
import Navigation from "./Navigation/Navigation";
import { Container } from "@chakra-ui/react";



const appRouts = [
  { path: "/", element: <HomePage /> },
  // {
  //   path: "/register",
  //   element: (
  //     <RestrictedRoute redirectTo="/contacts">
  //       <RegisterPage />
  //     </RestrictedRoute>
  //   ),
  // },
  {
    path: "/login",
    element: (
      <RestrictedRoute redirectTo="/gallery">
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: "/gallery",
    element: <GalleryListPage />,
  },
  {
    path: "/details",
    element: <Details />,
  },
];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <Container maxW="1200px">
      <Suspense fallback="Loading...">
        <Navigation/>
        <Routes>
          {appRouts.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
