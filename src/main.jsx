// Packages
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Views
const Home = lazy(() => import('./views/home.jsx'));
const TOS = lazy(() => import('./views/TOS.jsx'));
const Sitemap = lazy(() => import('./views/sitemap.jsx'));
const Error404 = lazy(() => import('./views/404.jsx'));

// Global CSS
import './css/global/fonts.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/TOS" element={<TOS/>}/>
        <Route path="/sitemap" element={<Sitemap/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Suspense>
  </BrowserRouter>
)
