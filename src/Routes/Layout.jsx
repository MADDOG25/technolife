import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Testimonials from "../pages/Testimonials";
export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <main className="bg-blue h-full font-sans">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/testimonios" element={<Testimonials />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
