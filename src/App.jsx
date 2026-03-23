
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import ContactPage from "./components/pages/ContactPage";


function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <Skills />
      <Projects />
      <ContactPage />
      <Footer />
    

      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      </BrowserRouter> */}
      {/* Navbar section */}
    </>
  );
}

export default App;
