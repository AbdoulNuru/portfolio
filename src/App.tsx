import { useState, useEffect, useLayoutEffect, useRef, lazy, Suspense, startTransition } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
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

  // Set by the Resume/Back buttons so the new view opens at the top.
  // Browser back/forward (popstate) leaves the scroll position alone, as before.
  const scrollToTopOnSwitch = useRef(false)

  useLayoutEffect(() => {
    if (scrollToTopOnSwitch.current) {
      scrollToTopOnSwitch.current = false
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [view])

  // The view switch mounts a whole page. As a transition it doesn't block the
  // click from painting, which kept these buttons in the slow INP range.
  const handleResumeClick = () => {
    scrollToTopOnSwitch.current = true
    window.history.pushState({}, '', '/resume')
    startTransition(() => setView('resume'))
  }

  const handleBackToPortfolio = () => {
    scrollToTopOnSwitch.current = true
    window.history.pushState({}, '', '/')
    startTransition(() => setView('portfolio'))
  }

  if (view === 'resume') {
    return (
      <>
        <Suspense fallback={<div className="min-h-screen bg-gray-200 flex items-center justify-center"><div className="text-gray-500">Loading...</div></div>}>
          <Resume onBack={handleBackToPortfolio} />
        </Suspense>
        <Analytics />
        <SpeedInsights />
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
      <SpeedInsights />
    </div>
  )
}

export default App
