import React, { Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import GalleryPage from "./pages/GalleryPage";
import RestrictedRoute from "./RestrictedRoutes";
import PrivatedRoute from "./PrivatRoutes";


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
    element: (
      <PrivatedRoute redirectTo="/login">
        <GalleryPage />
      </PrivatedRoute>
    ),
  },
];

function App() {
  
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
