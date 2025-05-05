import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <main className='page'>
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </main>
  )
}

export default App
