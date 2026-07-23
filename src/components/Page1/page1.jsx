import Navbar from '../navbar' // <-- Points directly to components/navbar.jsx
import HeroSection from './hero-section'

const Page1 = ({ onNavigateToHome, onNavigateToCollection, onNavigateToLogin, onNavigateToReviews, onNavigateToMaterials, onNavigateToAbout }) => {
  return (
    <div id="home-section" className='bg-[#fff] min-h-screen overflow-hidden'>
      <Navbar
        onHomeClick={onNavigateToHome}
        onCollectionClick={onNavigateToCollection}
        onReviewsClick={onNavigateToReviews}
        onMaterialsClick={onNavigateToMaterials}
        onAboutClick={onNavigateToAbout}
        onLoginClick={onNavigateToLogin}
      />
      <HeroSection onCollectionClick={onNavigateToCollection} onAboutClick={onNavigateToAbout} />
    </div>
  )
}

export default Page1;
