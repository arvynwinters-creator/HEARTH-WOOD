import { useState } from 'react'
import Page1 from './components/Page1/page1'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/page3-revews'
import About from './components/Page4/about'
import Footer from './components/footer' 
import Login from './components/login'   
import { GoogleOAuthProvider } from '@react-oauth/google'
import BotpressChat from './components/ai-agent' // 1. Import your custom component

const App = () => {
  const [showPage3, setShowPage3] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNavigateToLogin = () => {
    setCurrentPage('login')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const handleNavigateToReviews = () => {
    setCurrentPage('home')
    setShowPage3(true)
    setTimeout(() => scrollToSection('reviews-section'), 100)
  }

  const handleNavigateToMaterials = () => {
    window.scrollTo({ top: 4000, behavior: 'smooth' })
  }

  const handleNavigateToAbout = () => {
    setTimeout(() => scrollToSection('about'), 100)
  }

  const handleNavigateToCollection = () => {
    window.scrollTo({ top: 2000, behavior: 'smooth' })
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="min-h-screen flex flex-col justify-between bg-[#F4F1EC] relative">
        
        <main className="flex-grow">
          {currentPage === 'login' ? (
            <Login onNavigateToHome={() => setCurrentPage('home')} />
          ) : (
            <>
              <Page1
                onNavigateToHome={() => scrollToSection('home-section')}
                onNavigateToCollection={handleNavigateToCollection}
                onNavigateToLogin={handleNavigateToLogin}
                onNavigateToReviews={handleNavigateToReviews}
                onNavigateToMaterials={handleNavigateToMaterials}
                onNavigateToAbout={handleNavigateToAbout}
              />
              <button 
                onClick={handleNavigateToLogin}
                className="fixed top-12 left-420 z-[99999] bg-[#c5a206] text-[#353535] px-4 py-2 rounded-4xl font-bold shadow-lg cursor-pointer hover:bg-transparent hover:shadow-none hover:border-1 hover:border-[#fff] hover:text-[#fff] transition duration-300"
              >
                LOGIN / SIGN UP
              </button>

              <Page2
                onNavigateToHome={() => scrollToSection('home-section')}
                onNavigateToReviews={handleNavigateToReviews}
                setShowPage3={setShowPage3}
              />
              <About />
              {showPage3 && <Page3 />}
            </>
          )}
        </main>

        <Footer onCollectionClick={() => {
          setCurrentPage('home');
          setTimeout(() => scrollToSection('collection-section'), 100);
        }} />

        {/* 2. Render the AI Botpress Widget */}
        <BotpressChat />
      </div>
    </GoogleOAuthProvider>
  )
}

export default App;