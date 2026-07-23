import { useState, useEffect } from 'react';

const Navbar = ({ cartCount = 0, onCartClick, onHomeClick, onCollectionClick, onLoginClick, onReviewsClick, onMaterialsClick, onAboutClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatePop, setAnimatePop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (cartCount === 0) return;
    
    const startTimer = setTimeout(() => {
      setAnimatePop(true);
    }, 0);

    const endTimer = setTimeout(() => {
      setAnimatePop(false);
    }, 300);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [cartCount]);

  return (
    <div 
      className={`navwrap fixed top-0 left-0 z-[9999] w-[100vw] pointer-events-none transition-all duration-300 ${
        isScrolled ? 'bg-[#0C2620]/60 py-2' : 'bg-transparent py-4'
      }`}
    >
      <header className={`flex flex-wrap items-center justify-between rounded-[22px] border
       border-[#fff]/30 px-5 py-4 text-[#EDE1D0] transition-all duration-300 backdrop-blur-md pointer-events-auto ${
         isScrolled 
           ? 'bg-[#0C2620]/60 shadow-[0_18px_40px_rgba(12,38,32,0.14)]' 
           : 'bg-white/5'
       } sm:px-7 lg:px-8`}>
        
        <div className="flex flex-col gap-1 ml-34">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9A05C]">Solid-wood atelier</span>
          <span className="font-serif text-[35px] font-semibold tracking-[-0.02em] text-[#F7F2E8]">Hearth<span className='text-[#009325]'>Wood</span></span>
        </div>

<nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-18 ml-10" aria-label="Primary navigation">
          <button type="button" onClick={onHomeClick} className="cursor-pointer text-md font-semibold text-[#EDE1D0] transition hover:text-[#ffb700]">Home</button>
          <button type="button" onClick={onCollectionClick} className="cursor-pointer text-md font-semibold text-[#EDE1D0] transition hover:text-[#ffb700]">Collection</button>
          <button type="button" onClick={onReviewsClick} className="cursor-pointer text-md font-semibold text-[#EDE1D0] transition hover:text-[#ffb700]">Reviews</button>
          <button type="button" onClick={onAboutClick} className="cursor-pointer text-md font-semibold text-[#EDE1D0] transition hover:text-[#ffb700]">About</button>
        </nav>
        
        <div className="mr-10 flex items-center gap-5">
          <button
            type="button"
            aria-label="View cart"
            onClick={onCartClick}
            className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#ffffff] bg-white/10 text-[#F7F2E8] transition hover:-translate-y-0.5 hover:border-[#ffe600] hover:text-[#ffe600] relative right-60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.5l1.4 8.4a1.5 1.5 0 0 0 1.49 1.24h9.7a1.5 1.5 0 0 0 1.49-1.24L17.1 7.5H5.25" />
              <circle cx="10" cy="19" r="1.6" fill="currentColor" stroke="none" />
              <circle cx="17" cy="19" r="1.6" fill="currentColor" stroke="none" />
            </svg>

            {cartCount > 0 && (
              <span className={`absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#fa9f00] text-[10px] font-bold text-[#0C2620] font-mono shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-300 ${
                animatePop ? 'scale-130 bg-[#ffe600]' : 'scale-100'
              }`}>
                {cartCount}
              </span>
            )}
          </button>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;