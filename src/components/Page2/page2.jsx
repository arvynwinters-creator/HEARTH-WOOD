import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import Order from '../order';
import Card from './card';
import ProductDetail from './product-detail';
import Page3Reviews from '../Page3/page3-revews';

const Page2 = ({ onNavigateToHome, onNavigateToReviews, setShowPage3 }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMore, setShowMore] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  
  // State to hold the actively selected product data
  const [activeProduct, setActiveProduct] = useState(null);

  const furnitures = [
    {
      id: 'sofa',
      name: 'The Haven Sofa',
      material: 'Boucle · olive bolsters · 3-seat',
      family: 'textile',
      category: 'Seating',
      price: '€2,340',
      rating: 5,
      reviews: 128,
      image: 'https://admin.regalfurniturebd.com/storage/uploads/fullsize/2026-06/sdc-3126-3-1-20-2.jpeg' 
    },
    {
      id: 'desk',
      name: 'The Atlas Desk',
      material: 'Smoked Oak · brass cable grommet',
      family: 'wood',
      category: 'Tables',
      price: '€1,650',
      rating: 4,
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'follwer-pot',
      name: 'The Oasis Pot',
      material: 'Chiseled Travertine · drainage plate',
      family: 'stone',
      category: 'Objects',
      price: '€320',
      rating: 5,
      reviews: 95,
      image: 'https://cdn.shopify.com/s/files/1/1334/4597/files/Blog-diningtable-tulips_1024x1024.jpg?v=1750436844'
    },
    {
      id: 'boucle',
      name: 'Orbit Lounge Chair',
      material: 'Brushed Brass · Cognac Leather',
      family: 'metal',
      category: 'Seating',
      price: '€1,180',
      rating: 4,
      reviews: 67,
      image: 'https://hatil-image.s3.ap-southeast-1.amazonaws.com/master_image/Horace-118.png'
    },
    {
      id: 'table-02', 
      name: 'Terra Nestleing Table', 
      material: 'Brushed Brass · Dark Teal Velvet',
      family: 'metal',
      category: 'Seating',
      price: '€1,240',
      rating: 4,
      reviews: 18,
      image: 'https://image.made-in-china.com/2f0j00ECmhzDcdhQkG/Coffee-Table-Living-Room-Home-Small-Apartment-Multi-Function-Rental-Room-Tea-Table-Simple-Modern-Sofa-Side-Table-Creative-Small-Side-Table.webp'
    },
    {
      id: 'bed-01', 
      name: 'The Somnus Bed Frame',
      material: 'Solid Walnut · woven cane headboard',
      family: 'wood',
      category: 'Bedroom',
      price: '€2,850',
      rating: 5,
      reviews: 34,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'shelf-01', 
      name: 'Apex Modular Shelf',
      material: 'Powder-coated Steel · Oak tiers',
      family: 'mixed',
      category: 'Storage',
      price: '€890',
      rating: 4,
      reviews: 51,
      image: 'https://www.furnituredirect.com.my/wp-content/uploads/2022/01/NORMAD-SHELFMAIN-26.jpg'
    },
    {
      id: 'wallpaper',
      name: 'Muted Horizon Wallpaper',
      material: 'Non-woven fibrous paper · matte finish',
      family: 'textile',
      category: 'Decor',
      price: '€145',
      rating: 5,
      reviews: 88,
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80'
    },
  ];

  const syncUrlWithProduct = (productId = null) => {
    const url = new URL(window.location.href);

    if (productId) {
      url.searchParams.set('target', productId);
    } else {
      url.searchParams.delete('target');
    }

    window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const openProduct = (productId) => {
    const targetItem = furnitures.find((item) => item.id === productId);

    if (!targetItem) {
      setActiveProduct(null);
      setShowPage3?.(true);
      return;
    }

    setActiveProduct(targetItem);
    setSelectedCategory('All');
    setIsCartOpen(false);
    setIsReviewsOpen(false);
    setShowPage3?.(false);

    setTimeout(() => {
      window.scrollTo({ top: window.scrollY + 100, behavior: 'smooth' });
    }, 60);
  };

  useEffect(() => {
    const openProductFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const targetId = params.get('target');

      if (targetId) {
        openProduct(targetId);
      } else {
        setActiveProduct(null);
        setShowPage3?.(true);
      }
    };

    const handleSearchSelection = (event) => {
      if (event.detail?.targetId) {
        openProduct(event.detail.targetId);
      }
    };

    openProductFromUrl();
    window.addEventListener('open-product-from-search', handleSearchSelection);
    window.addEventListener('popstate', openProductFromUrl);

    return () => {
      window.removeEventListener('open-product-from-search', handleSearchSelection);
      window.removeEventListener('popstate', openProductFromUrl);
    };
  }, []);

  const filteredFurnitures = selectedCategory === 'All'
    ? furnitures
    : furnitures.filter(item => item.category === selectedCategory);

  const categories = ['All', 'Seating', 'Tables', 'Objects', 'Bedroom', 'Storage', 'Decor'];
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const openProductFromCart = (product) => {
    const selectedProduct = furnitures.find((item) => item.id === product.id);
    if (selectedProduct) {
      setActiveProduct(selectedProduct);
      syncUrlWithProduct(selectedProduct.id);
      setIsCartOpen(false);
      setShowPage3?.(false);
      setTimeout(() => {
        window.scrollTo({ top: window.scrollY + 100, behavior: 'smooth' });
      }, 60);
    }
  };

  const handleProductSelection = (clickedItem) => {
    setActiveProduct(clickedItem);
    setIsReviewsOpen(false);
    syncUrlWithProduct(clickedItem.id);
    setShowPage3?.(false);
    setTimeout(() => {
      window.scrollTo({ top: window.scrollY + 100, behavior: 'smooth' });
    }, 60);
  };

  const toggleShowMore = () => {
    setShowMore(prev => !prev);
  };

  if (isCartOpen) {
    return (
      <Order
        cartItems={cartItems}
        cartCount={cartCount}
        onContinueShopping={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveItem}
        onOpenProduct={openProductFromCart}
      />
    );
  }

  if (isReviewsOpen && activeProduct) {
    return (
      <Page3Reviews
        selectedProduct={activeProduct}
        onBackToProduct={() => {
          setIsReviewsOpen(false);
          setShowPage3?.(false);
        }}
      />
    );
  }

  // IF a product is actively selected, return the ProductDetail page with relevant data injected
  if (activeProduct) {
    return (
      <ProductDetail 
        selectedProduct={activeProduct} 
        currentCartCount={cartCount}
        onAddToCart={handleAddToCart}
        onCartClick={() => setIsCartOpen(true)}
        onHomeClick={onNavigateToHome}
        onViewReviews={() => {
          setIsReviewsOpen(true);
          setShowPage3?.(false);
        }}
        onCollectionClick={() => {
          setActiveProduct(null);
          setIsReviewsOpen(false);
          setShowPage3?.(true);
          syncUrlWithProduct();
          setTimeout(() => {
            window.scrollTo({ top: window.scrollY + 1000, behavior: 'smooth' });
          }, 60);
        }}
        onBackClick={() => {
          setActiveProduct(null);
          setIsReviewsOpen(false);
          setShowPage3?.(true);
          syncUrlWithProduct();
          setTimeout(() => {
            window.scrollTo({ top: window.scrollY + 100, behavior: 'smooth' });
          }, 60);
        }}
      />
    );
  }

  return (
    <div id="collection-section" className="min-h-screen bg-[#F4F1EC] pt-40 pb-16 px-12 flex flex-col items-center">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onCollectionClick={() => {
          onNavigateToHome?.();
          window.scrollTo({ top: 2000, behavior: 'smooth' });
        }}
        onHomeClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onReviewsClick={onNavigateToReviews}
      />

      <div className="upper-section w-full max-w-[1700px] flex flex-col items-start mb-12 px-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8B5E3C] mb-1">Solid-wood atelier</p>
        <h1 className="text-[32px] font-medium tracking-[-0.01em] mb-6 font-serif text-[#0C2620]">Full collection</h1>
        
        <div className="w-full flex flex-wrap items-center gap-2 border border-[rgba(12,38,32,0.10)] rounded-full bg-white p-2.5 shadow-[0_10px_26px_rgba(12,38,32,0.06)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`border-none rounded-full px-5 py-2.5 font-sans text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0C2620] text-[#F7F2E8]'
                  : 'bg-transparent text-[rgba(12,38,32,0.65)] hover:bg-[rgba(12,38,32,0.06)]'
              }`}
            >
              {cat}
            </button>
          ))}
          
          <span className="ml-auto pr-4 font-mono text-[11px] uppercase tracking-wider text-[#6B6963]">
            {filteredFurnitures.length} {filteredFurnitures.length === 1 ? 'piece' : 'pieces'}
          </span>
        </div>
      </div>

      <div className="lower-section w-full max-w-[1700px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {filteredFurnitures.length > 0 ? (
          filteredFurnitures.map((item, index) => (
            <div key={item.id} className="w-full max-w-100">
              <Card 
                product={item} 
                onAddToCart={handleAddToCart} 
                onProductClick={handleProductSelection}
                delay={index * 90}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-[#6B6963] text-[15px] font-medium text-center">
            Nothing in this category yet — check back soon.
          </div>
        )}
      </div>

      <div className="w-full max-w-[1700px] flex flex-col items-center mt-8 gap-4">
        <button
          onClick={toggleShowMore}
          className="px-6 py-2.5 bg-[#0C2620] text-white rounded-full font-sans text-[13px] font-medium tracking-wide shadow-md transition-all duration-300 hover:bg-[#133a31] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
        >
          {showMore ? 'Show less' : 'Show more'}
          
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2.5" 
            stroke="currentColor" 
            className={`w-3.5 h-3.5 transition-transform duration-300 ease-in-out ${
              showMore ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {showMore && (
          <p className="text-[#6B6963] text-[14px] font-medium font-sans animate-fadeUp">
            The new furniture additions will be arriving soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page2;
