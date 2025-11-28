import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-purple-800 pt-4 text-xs text-slate-500">
        © {new Date().getFullYear()} Thunyathep PNA.
        <span className="text-yellow-400"> Portfolio</span> ·
        {/* <span className="text-purple-400"> DPU</span> */}
      </footer>
    </Layout>
  );
}

export default App;
