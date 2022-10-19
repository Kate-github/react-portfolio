import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className='container'>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
