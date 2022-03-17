import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import ReactPages from './pages/projects/ReactPages';
import RailsPages from './pages/projects/RailsPages';
import JSPages from './pages/projects/JSPages';
import LandingPages from './pages/projects/LandingPages';

const App = () => (
  <div className="App">
    <Header />
    <HeaderMobile />
    <hr />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/react" element={<ReactPages />} />
      <Route path="/projects/rails" element={<RailsPages />} />
      <Route path="/projects/js" element={<JSPages />} />
      <Route path="/projects/landing" element={<LandingPages />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

export default App;
