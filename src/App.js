import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import ReactPage from './pages/projects/ReactPages';

const App = () => (
  <div className="App">
    <Header />
    <HeaderMobile />
    <hr />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:name" element={<ReactPages />} />
      <Route path="/projects/:name" element={<RailsPages />} />
      <Route path="/projects/:name" element={<JSPages />} />
      <Route path="/projects/:name" element={<LandingPages />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

export default App;
