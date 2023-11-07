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
    element: 
        <GalleryListPage />
    
  },
];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <div className={css.App}>
      <Suspense fallback="Loading...">
        <Routes>
          {appRouts.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
