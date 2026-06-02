// Packages
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Views

// Main Views
const Home = lazy(() => import('./views/home.jsx'));
const TOS = lazy(() => import('./views/TOS.jsx'));
const Sitemap = lazy(() => import('./views/sitemap.jsx'));
const Error404 = lazy(() => import('./views/404.jsx'));
const Contact = lazy(() => import('./views/contact.jsx'));
const Credits = lazy(() => import('./views/credits.jsx'));

// Deal or No Deal
const DONDHome = lazy(() => import('./views/DOND.jsx'));
const DONDPlay = lazy(() => import('./views/DONDPlay.jsx'));

// Global CSS
import './css/global/fonts.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/TOS" element={<TOS/>}/>
        <Route path="/sitemap" element={<Sitemap/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/credits" element={<Credits/>}/>

        <Route path="/DOND" element={<DONDHome/>}/>
        <Route path="/DOND/play" element={<DONDPlay/>}/>

        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Suspense>
  </BrowserRouter>
)
