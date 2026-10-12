import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased flex flex-col">
      <div className="max-w-10xl w-full mx-auto px-4 py-8 justify-between">
        <Header />
        <main className="space-y-6">
          <About />
          <Skills />
          <Education />
          <Certificates />
          <Languages />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;