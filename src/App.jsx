import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="xl:max-w-6xl mx-auto flex flex-col gap-30 px-4 ">
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
