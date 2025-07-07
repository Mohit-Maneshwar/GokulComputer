import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Branches from "../pages/Branches";
import Faculty from "../pages/Faculty";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/branches" element={<Branches />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default MainRoutes;
