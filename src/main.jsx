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

// Christmas Crash
const CCHome = lazy(() => import('./views/CCHome.jsx'));
const CCPP = lazy(() => import('./views/CCPP.jsx'));
const Countdown = lazy(() => import('./views/countdown.jsx'));

// Pointless Wars
const PWHome = lazy(() => import('./views/PWHome.jsx'));
const PWPP = lazy(() => import('./views/PWPP.jsx'));
const PWPlay = lazy(() => import('./views/PWPlay.jsx'));

// Drop the Ball
const DropHome = lazy(() => import('./views/PWHome.jsx'));
const DropPlay = lazy(() => import('./views/PWHome.jsx'));
const DropPP = lazy(() => import('./views/PWHome.jsx'));

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

        <Route path="/christmascrash" element={<CCHome/>}/>
        <Route path="/christmascrash/privacypolicy" element={<CCPP/>}/>
        <Route path="/countdown" element={<Countdown/>}/>

        <Route path="/pointless-wars" element={<PWHome/>}/>
        <Route path="/pointlesswars/privacypolicy" element={<PWPP/>}/>
        <Route path="/pointless-wars/privacypolicy" element={<PWPP/>}/>
        <Route path="/pointless-wars/play" element={<PWPlay/>}/>

        <Route path="/drop-thee-ball" element={<DropHome/>}/>
        <Route path="/drop-thee-ball/play" element={<DropPlay/>}/>
        <Route path="/drop-thee-ball/privacypolicy" element={<DropPP/>}/>

        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Suspense>
  </BrowserRouter>
)
