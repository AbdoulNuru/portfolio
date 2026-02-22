import { useState, useEffect, lazy, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

const Resume = lazy(() => import('./components/Resume'))

function App() {
  const [view, setView] = useState<'portfolio' | 'resume'>(() =>
    window.location.pathname === '/resume' ? 'resume' : 'portfolio'
  )

  // Sync browser back/forward with view state
  useEffect(() => {
    const handlePopState = () => {
      setView(window.location.pathname === '/resume' ? 'resume' : 'portfolio')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleResumeClick = () => {
    setView('resume')
    window.history.pushState({}, '', '/resume')
    window.scrollTo({ top: 0 })
  }

  const handleBackToPortfolio = () => {
    setView('portfolio')
    window.history.pushState({}, '', '/')
    window.scrollTo({ top: 0 })
  }

  if (view === 'resume') {
    return (
      <>
        <Suspense fallback={<div className="min-h-screen bg-gray-200 flex items-center justify-center"><div className="text-gray-500">Loading...</div></div>}>
          <Resume onBack={handleBackToPortfolio} />
        </Suspense>
        <Analytics />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation onResumeClick={handleResumeClick} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-black"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <Analytics />
    </div>
  )
}

export default App
