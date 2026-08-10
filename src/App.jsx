import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Eager load Home page for instant above-the-fold content loading
import Home from './pages/Home';

// Lazy loaded page components for optimal code splitting
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const LostLoveBack = lazy(() => import('./pages/LostLoveBack'));
const RelationshipProblem = lazy(() => import('./pages/RelationshipProblem'));
const FinancialProblem = lazy(() => import('./pages/FinancialProblem'));
const IntercasteMarriage = lazy(() => import('./pages/IntercasteMarriage'));
const DuaWazifa = lazy(() => import('./pages/DuaWazifa'));
const FamilyChild = lazy(() => import('./pages/FamilyChild'));
const LoveGuidance = lazy(() => import('./pages/LoveGuidance'));
const Booking = lazy(() => import('./pages/Booking'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#022C22] font-sans antialiased selection:bg-[#C9A227] selection:text-[#022C22]">
        <Navbar />

        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen bg-[#022C22]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/lost-love-back" element={<LostLoveBack />} />
              <Route path="/services/relationship-problem" element={<RelationshipProblem />} />
              <Route path="/services/financial-problem" element={<FinancialProblem />} />
              <Route path="/services/intercaste-marriage" element={<IntercasteMarriage />} />
              <Route path="/services/dua-wazifa" element={<DuaWazifa />} />
              <Route path="/services/family-child" element={<FamilyChild />} />
              <Route path="/services/love-guidance" element={<LoveGuidance />} />
              <Route path="/book-consultation" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        {/* FLOATING WHATSAPP BUTTON */}
        <WhatsAppButton variant="floating" />
      </div>
    </Router>
  );
}
