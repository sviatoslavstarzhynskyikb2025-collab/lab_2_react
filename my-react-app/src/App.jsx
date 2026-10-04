import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Header />
      <hr />
      <About />
      <Education />
      <Skills />
      <Certificates />
      <Languages />
      <hr />
      <Footer />
    </main>
  );
}

export default App;