import React, { useState, useEffect } from 'react';
// Make sure this path points perfectly to your Card component
import Card from '../Page2/card.jsx';

const HeroSection = ({ onCollectionClick, onAboutClick }) => {
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  // Number count-up animation logic
  useEffect(() => {
    let start = 0;
    const end = 2000;
    const duration = 2000;
    const startTime = performance.now();

    const animateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);

  const hotspots = [
    { 
      id: 'sofa', 
      left: '52%', 
      top: '71%', 
      product: {
        id: 'sofa',
        name: 'The Haven Sofa',
        material: 'Boucle · olive bolsters · 3-seat',
        family: 'textile',
        category: 'Seating',
        price: '€2,340',
        rating: 5,
        reviews: 128,
        image: 'https://admin.regalfurniturebd.com/storage/uploads/fullsize/2026-06/sdc-3126-3-1-20-2.jpeg' 
      }
    },
    { 
      id: 'table-02', 
      left: '52%', 
      top: '88%', 
      product: {
        id: 'table-02',
        name: 'Terra Nesting Tables',
        material: 'Honed Travertine · Set of 2',
        family: 'stone',
        category: 'Tables',
        price: '€760',
        rating: 4,
        reviews: 64,
        image: 'https://image.made-in-china.com/2f0j00ECmhzDcdhQkG/Coffee-Table-Living-Room-Home-Small-Apartment-Multi-Function-Rental-Room-Tea-Table-Simple-Modern-Sofa-Side-Table-Creative-Small-Side-Table.webp'
      }
    },
    { 
      id: 'boucle', 
      left: '10%', 
      top: '83%', 
      product: {
        id: 'boucle',
        name: 'Orbit Lounge Chair',
        material: 'Brushed Brass · Cognac Leather',
        family: 'metal',
        category: 'Seating',
        price: '€1,180',
        rating: 4,
        reviews: 67,
        image: 'https://hatil-image.s3.ap-southeast-1.amazonaws.com/master_image/Horace-118.png'
      }
    },
    { 
      id: 'follwer-pot', 
      left: '86.5%', 
      top: '75%', 
      product: {
        id: 'follwer-pot',
        name: 'The Oasis Pot',
        material: 'Chiseled Travertine · drainage plate',
        family: 'stone',
        category: 'Objects',
        price: '€320',
        rating: 5,
        reviews: 95,
        image: 'https://cdn.shopify.com/s/files/1/1334/4597/files/Blog-diningtable-tulips_1024x1024.jpg?v=1750436844'
      }
    },
    { 
      id: 'wallpaper', 
      left: '23%', 
      top: '50%', 
      product: {
        id: 'wallpaper',
        name: 'Muted Horizon Wallpaper',
        material: 'Non-woven fibrous paper · matte finish',
        family: 'textile',
        category: 'Decor',
        price: '€145',
        rating: 5,
        reviews: 88,
        image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80'
      }
    },
    { 
      id: 'desk', 
      left: '27%', 
      top: '61%', 
      product: {
        id: 'desk',
        name: 'The Atlas Desk',
        material: 'Smoked Oak · brass cable grommet',
        family: 'wood',
        category: 'Tables',
        price: '€1,650',
        rating: 4,
        reviews: 42,
        image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80'
      }
    },
  ];

  const redirectToPage2 = (targetId) => {
    const url = new URL(window.location.href);
    url.searchParams.set('target', targetId);
    window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new CustomEvent('open-product-from-search', { detail: { targetId } }));
    window.setTimeout(() => {
      window.scrollBy({ top: 1000, behavior: 'smooth' });
    }, 80);
  };

  const filteredHotspots = hotspots.filter((spot) => {
    const haystack = `${spot.product.name} ${spot.id}`.toLowerCase();
    return haystack.includes(searchQuery.trim().toLowerCase());
  });

  useEffect(() => {
    setActiveSuggestionIndex(-1);
  }, [searchQuery]);

  const selectSuggestion = (spot) => {
    setSearchQuery(spot.product.name);
    setActiveSuggestionIndex(-1);
    redirectToPage2(spot.product?.id || spot.id);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();

    if (!query) return;

    const match =
      filteredHotspots[0] ||
      hotspots.find((spot) => `${spot.product.name} ${spot.id}`.toLowerCase().includes(query));

    if (match) {
      selectSuggestion(match);
    }
  };

  const handleSuggestionKeyDown = (event) => {
    if (!filteredHotspots.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveSuggestionIndex((prev) => (prev + 1) % filteredHotspots.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveSuggestionIndex((prev) => (prev <= 0 ? filteredHotspots.length - 1 : prev - 1));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const selectedSpot = filteredHotspots[activeSuggestionIndex >= 0 ? activeSuggestionIndex : 0];
      if (selectedSpot) {
        selectSuggestion(selectedSpot);
      }
    } else if (event.key === 'Escape') {
      setActiveSuggestionIndex(-1);
      setSearchQuery('');
    }
  };

  const preventCardAction = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <section className='relative min-h-screen overflow-hidden bg-[#e8e8e8]'>
      <div className='flex min-h-screen flex-col lg:flex-row'>
        
        {/* Left Column Content Layout */}
        <div className='flex w-full items-center justify-start bg-[#2f2f2f] px-6 py-16 sm:px-10 lg:w-[35%] lg:px-16 xl:px-24'>
          <div className='max-w-[560px] text-[#ffffff]'>
            <div className='mb-6 flex items-center gap-2 opacity-0 animate-[fadeUp_0.9s_ease_0.3s_forwards]'>
              <div className='flex text-[#C9A05C] text-sm'>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className='font-sans text-sm font-medium tracking-wider uppercase text-[#ffffff]'>
                4.9/5 Rating <span className='mx-1.5 text-[#ffbf00]'>•</span> Over <span className='text-[#ffc800] font-semibold'>{count.toLocaleString()}</span>+ homes transformed
              </span>
            </div>

            <h1 className='font-serif text-[clamp(42px,6vw,84px)] font-medium leading-[1.02] tracking-[-0.01em] text-[#ffffff] opacity-0 animate-[fadeUp_0.9s_ease_0.42s_forwards]'>
              Furniture that <em className='font-serif not-italic font-normal text-[#C9A05C]'>opens to the light.</em>
            </h1>

            <p className='mt-5 max-w-[460px] font-sans text-[17px] leading-relaxed text-[#fff]/80 opacity-0 animate-[fadeUp_0.9s_ease_0.54s_forwards]'>
              Boucle, travertine, and warm oak — arranged around a room that lets the courtyard in.
            </p>

<div className='mt-8 flex flex-wrap gap-3.5 opacity-0 animate-[fadeUp_0.9s_ease_0.66s_forwards]'>
              <button onClick={onCollectionClick} className='rounded-full bg-[#A6803D] px-6 py-3 font-josefin text-[13px] font-semibold uppercase tracking-wider text-[#0C2620] transition duration-200 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer'>
                Shop the room
              </button>
              <button onClick={onAboutClick} className='rounded-full border border-[#0C2620]/20 bg-white/60 px-6 py-3 font-josefin text-[#0C2620] backdrop-blur-sm transition duration-200 hover:border-[#0C2620] hover:bg-white/80 cursor-pointer'>
                Why Hearthwood
              </button>
            </div>
          </div>
        </div>

        {/* Right Media Display Column */}
        <div className='relative min-h-[380px] w-full lg:w-[65%] overflow-hidden'>
          <img
            className='absolute inset-0 h-full w-full object-cover object-[center_30%] animate-[slowZoom_20s_ease-out_forwards]'
            src='https://cdn.home-designing.com/wp-content/uploads/2022/03/modern-sofa.jpg'
            alt='Hero Section'
          />
          
          <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(12,38,32,0.2)_0%,rgba(12,38,32,0.02)_40%,rgba(12,38,32,0.85)_100%)]' />

          {/* Search Field (Kept at z-20 layout stack) */}
          <form onSubmit={handleSearch} className='absolute left-1/2 top-1/2 z-20 w-[min(92%,400px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/85 px-4 py-3 shadow-[0_12px_30px_rgba(12,38,32,0.18)] backdrop-blur-md'>
            <label className='flex items-center gap-2 text-[#0C2620]'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.8' stroke='currentColor' className='h-4.5 w-4.5 shrink-0 text-[#A6803D]'>
                <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z' />
              </svg>
              <input
                type='text'
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={handleSuggestionKeyDown}
                placeholder='Search furniture'
                className='w-full bg-transparent text-sm text-[#0C2620] outline-none placeholder:text-[#0C2620]/60'
              />
            </label>

            {searchQuery.trim() && filteredHotspots.length > 0 && (
              <div className='absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-[#0C2620]/10 bg-[#F7F2E8] shadow-[0_12px_30px_rgba(12,38,32,0.16)]'>
                {filteredHotspots.map((spot, index) => {
                  const isActive = index === activeSuggestionIndex;
                  return (
                    <button
                      key={spot.id}
                      type='button'
                      onMouseEnter={() => setActiveSuggestionIndex(index)}
                      onClick={() => selectSuggestion(spot)}
                      className={`block w-full cursor-pointer px-4 py-2.5 text-left text-sm text-[#0C2620] transition ${isActive ? 'bg-[#E9D6AD]' : 'hover:bg-[#E9D6AD]'}`}
                    >
                      {spot.product.name}
                    </button>
                  );
                })}
              </div>
            )}
          </form>

          {/* Interactive Core Hotspots Array Loop */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              /* Fixed: Added 'hover:z-30' so the card elements leap safely over the z-20 search container when hovered */
              className='group absolute z-10 hover:z-30 h-4 w-4 -translate-x-1/2 -translate-y-1/2'
              style={{ left: spot.left, top: spot.top }}
            >
              {/* Pulsing Dot Indicator Element */}
              <div
                onClick={() => redirectToPage2(spot.id)}
                className='relative h-full w-full cursor-pointer rounded-full border-2 border-[#F7F2E8]/90 bg-[#C9A05C] transition-shadow duration-300 group-hover:shadow-[0_0_0_8px_rgba(201,160,92,0.16)] before:absolute before:inset-[-8px] before:rounded-full before:border before:border-[#F7F2E8]/60 before:animate-[pulseRing_2.6s_ease-out_infinite]'
              />
              
              {/* Popover Mini-Card Component Block */}
              <div 
                onClick={preventCardAction}
                className='absolute bottom-[24px] left-1/2 -translate-x-1/2 scale-0 origin-bottom opacity-0 pointer-events-none w-[320px] transition-all duration-300 ease-out group-hover:scale-[0.65] group-hover:opacity-100 group-hover:pointer-events-auto drop-shadow-[0_15px_35px_rgba(12,38,32,0.3)]'
              >
                <Card 
                  product={spot.product} 
                  onAddToCart={preventCardAction} 
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;