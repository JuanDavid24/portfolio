import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
      <Header />
      <main className='xl:max-w-6xl mx-auto mt-18 px-4 '>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
  )
}

export default App
