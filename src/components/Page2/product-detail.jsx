import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';

// 1. Define the gallery mapping for each unique product ID
const PRODUCT_GALLERY_MAP = {
  'sofa': [
    'https://admin.regalfurniturebd.com/storage/uploads/fullsize/2026-06/sdc-3126-3-1-20-2.jpeg',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80'
  ],
  'desk': [
    'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    'https://ofixfurniture.com/cdn/shop/files/Athens-Executive-Desk-00.jpg?v=1767601214&width=3840',
    'https://www.designtone.com.bd/image/cache/catalog/Ergonomic%20New/full-set-1000x1000.jpg.webp'
  ],
  'follwer-pot': [
    'https://cdn.shopify.com/s/files/1/1334/4597/files/Blog-diningtable-tulips_1024x1024.jpg?v=1750436844',
    'https://getpotted.com/upload/iblock/ad8/lyccjg6917sfhkdmwuhoeihjuwqooaii.jpg',
    'https://m.media-amazon.com/images/I/71Kmb1Be8ML._AC_UF1000,1000_QL80_.jpg'
  ],
  'boucle': [
    'https://hatil-image.s3.ap-southeast-1.amazonaws.com/master_image/Horace-118.png',
    'https://ikiru.in/cdn/shop/files/p2vPpZZzcT12FySML7waHpZusTrCpApsAhxh40w4G0s.jpg?v=1763919483&width=1600',
    'https://media.wallmantra.com/product/other/wallmantra-graphite-elegant-lounge-chair-single-3C03-large.webp'
  ],
  'table-02': [
    'https://image.made-in-china.com/2f0j00ECmhzDcdhQkG/Coffee-Table-Living-Room-Home-Small-Apartment-Multi-Function-Rental-Room-Tea-Table-Simple-Modern-Sofa-Side-Table-Creative-Small-Side-Table.webp',
    'https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2021/12/30/d0ae5aad871f4d6abd952057771b9a33.jpg',
    'https://furniturenow.co.nz/cdn/shop/files/MetroCoffeeTable1.png?v=1779116356&width=800'
  ],
  'bed-01': [
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=800&q=80'
  ],
  'shelf-01': [
    'https://www.furnituredirect.com.my/wp-content/uploads/2022/01/NORMAD-SHELFMAIN-26.jpg',
    'https://admin.regalfurniturebd.com/storage/uploads/fullsize/2024-11/bsc-303-wev.jpg',
    'https://m.media-amazon.com/images/I/715JqJHMjIL.jpg'
  ],
  'wallpaper': [
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'
  ]
};

const ProductDetail = ({ selectedProduct, currentCartCount, onAddToCart, onCartClick, onHomeClick, onCollectionClick, onBackClick, onViewReviews }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [showVisitCart, setShowVisitCart] = useState(false);
  const [animatedReviewCount, setAnimatedReviewCount] = useState(0);

  const parsePrice = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr;
    const numeric = priceStr.replace(/[^0-9]/g, '');
    return parseInt(numeric, 10) || 0;
  };

  const basePrice = parsePrice(selectedProduct.price);

  // 2. Dynamically grab the images from our map based on ID, fallback to main image if missing
  const productImages = PRODUCT_GALLERY_MAP[selectedProduct.id] || [selectedProduct.image];

  const [mainImage, setMainImage] = useState(productImages[0]);

  // Update main preview if active product changes
  useEffect(() => {
    const freshImages = PRODUCT_GALLERY_MAP[selectedProduct.id] || [selectedProduct.image];
    setMainImage(freshImages[0]);
    window.scrollTo(0, 0); 
  }, [selectedProduct]);

  useEffect(() => {
    const target = Number(selectedProduct.reviews || 0);
    if (target <= 0) {
      setAnimatedReviewCount(0);
      return;
    }

    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 20));
    const intervalId = window.setInterval(() => {
      current += increment;
      if (current >= target) {
        setAnimatedReviewCount(target);
        window.clearInterval(intervalId);
      } else {
        setAnimatedReviewCount(current);
      }
    }, 40);

    return () => window.clearInterval(intervalId);
  }, [selectedProduct.reviews]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < fullStars ? 'text-[#C9A05C]' : 'text-[#D8D3C8]'}>★</span>
    ));
  };

  return (
    <div className="min-h-screen bg-[#F4F1EC] pt-32 pb-16 px-6 sm:px-12 flex flex-col items-center">
      <Navbar cartCount={currentCartCount} onCartClick={onCartClick} onHomeClick={onHomeClick} onCollectionClick={onCollectionClick} />

      <div className="w-full max-w-[1500px] flex items-center justify-start mt-4">
        <button 
          onClick={onBackClick}
          className="font-sans text-[14px] w-[180px] h-[50px] align-middle text-center rounded-2xl bg-[#020c05] hover:bg-[#00320d] font-semibold text-[#ffffff] transition-colors cursor-pointer flex items-center justify-center gap-1.5 group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span> Back to collection
        </button>
      </div>

      <div className="w-full max-w-[1500px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
        
        {/* COLUMN 1: Visual Asset Gallery */}
        <div className="lg:col-span-5 flex flex-col gap-4 sticky top-36">
          <div className="w-full h-[450px] bg-white rounded-[20px] overflow-hidden border border-[rgba(12,38,32,0.08)] shadow-sm">
            <img 
              src={mainImage} 
              alt={selectedProduct.name} 
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 rounded-xl overflow-hidden bg-white border-2 flex-shrink-0 cursor-pointer transition-all ${
                  mainImage === img ? 'border-[#C9A05C] scale-95 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="Preview thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* COLUMN 2: Context Specifications */}
        <div className="lg:col-span-4 flex flex-col border-b lg:border-b-0 pb-8 lg:pb-0 px-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8B5E3C] mb-1">
            {selectedProduct.category || 'Atelier'} · {selectedProduct.family || 'custom'} collection
          </span>
          <h1 className="font-serif text-[36px] font-medium leading-[1.1] text-[#0C2620] mb-2">
            {selectedProduct.name}
          </h1>
          <p className="text-[14px] text-[#6B6963] font-sans leading-relaxed mb-4">
            Signature artisan build highlighted by {selectedProduct.material.toLowerCase()}.
          </p>

          <div className="flex items-center gap-2 mb-4 border-b border-[rgba(12,38,32,0.1)] pb-4 w-full">
            <div className="flex text-[15px]">{renderStars(selectedProduct.rating)}</div>
            <span className="font-sans text-[13px] font-semibold text-[#0C2620]">{selectedProduct.rating} out of 5</span>
            <span className="text-[12px] text-[#6B6963] font-mono">({selectedProduct.reviews} reviews)</span>
          </div>

          <div className="mb-6">
            <span className="text-[14px] font-sans text-[#6B6963]">Price: </span>
            <span className="text-[28px] font-sans font-semibold text-[#0C2620]">{selectedProduct.price}</span>
            <p className="text-[12px] text-[#2F5D4E] font-medium mt-1">VAT and premium inside-home delivery included.</p>
          </div>

          <div className="mb-6">
            <h3 className="font-sans text-[13px] font-bold uppercase tracking-wider text-[#0C2620] mb-3">About this piece</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li className="text-[13px] font-sans text-[#4A4944] leading-relaxed">Upholstered using premium materials matching standard {selectedProduct.family} guidelines.</li>
              <li className="text-[13px] font-sans text-[#4A4944] leading-relaxed">Sustainably sourced internal framework milled down for structural longevity.</li>
              <li className="text-[13px] font-sans text-[#4A4944] leading-relaxed">Finished with architectural joint detailing built by hand at the atelier studio.</li>
            </ul>
          </div>
        </div>

        {/* COLUMN 3: Cart Execution Engine */}
        <div className="lg:col-span-3 bg-white border border-[rgba(12,38,32,0.1)] rounded-[24px] p-6 shadow-[0_12px_32px_rgba(12,38,32,0.04)] sticky top-36">
          <div className="text-[24px] font-sans font-semibold text-[#0C2620] mb-2">
            €{(basePrice * selectedQuantity).toLocaleString()}
          </div>
          
          <div className="flex items-center gap-1.5 text-[13px] font-medium text-[#2F5D4E] mb-4">
            <span className="h-2 w-2 rounded-full bg-[#2F5D4E] inline-block animate-pulse"></span>
            In Stock / Ready to Ship
          </div>

          <div className="space-y-1.5 text-[12px] font-sans text-[#6B6963] mb-6 pb-4 border-b border-[rgba(12,38,32,0.08)]">
            <p>Ships from: <span className="text-[#0C2620] font-medium">Hearthwood Atelier, Denmark</span></p>
            <p>Delivery: <span className="text-[#0C2620] font-medium">3-5 business days</span></p>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label htmlFor="quantity" className="text-[13px] font-sans text-[#4A4944] font-medium">Quantity:</label>
            <select 
              id="quantity"
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(Number(e.target.value))}
              className="bg-[#F4F1EC] border border-[rgba(12,38,32,0.15)] rounded-lg px-3 py-1.5 font-sans text-[13px] font-medium text-[#0C2620] outline-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-2.5 mt-6">
            <button
              onClick={() => {
                onAddToCart(selectedProduct, selectedQuantity);
                setShowVisitCart(true);
              }}
              className="w-full py-3 bg-[#C9A05C] hover:bg-[#DBB670] active:scale-[0.99] text-[#0C2620] font-sans font-semibold rounded-full text-[13px] uppercase tracking-wider transition duration-200 cursor-pointer shadow-sm shadow-[rgba(12,38,32,0.1)]"
            >
              Add to Cart
            </button>
            {showVisitCart && (
              <button
                type="button"
                onClick={onCartClick}
                className="w-full py-3 rounded-full border border-[#0C2620]/15 bg-[#E8F3EC] text-[#0C2620] font-sans font-semibold text-[13px] uppercase tracking-wider transition duration-200 cursor-pointer hover:bg-[#DDEFE4]"
              >
                Visit Cart
              </button>
            )}
            <button className="w-full py-3 bg-[#0C2620] hover:bg-[#153d34] active:scale-[0.99] text-[#F7F2E8] font-sans font-semibold rounded-full text-[13px] uppercase tracking-wider transition duration-200 cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>

      </div>

      {/* LOWER TAB CONTAINER */}
      <div className="w-full max-w-[1500px] mt-16 bg-white border border-[rgba(12,38,32,0.08)] rounded-[24px] overflow-hidden shadow-sm">
        <div className="flex border-b border-[rgba(12,38,32,0.08)] bg-[#EDEAE4]/40">
          {['details', 'dimensions', 'care'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-sans text-[13px] font-medium capitalize border-b-2 transition-all cursor-pointer ${
                activeTab === tab 
                  ? 'border-[#0C2620] text-[#0C2620] bg-white' 
                  : 'border-transparent text-[#6B6963] hover:text-[#0C2620]'
              }`}
            >
              {tab === 'details' ? 'Material & Craftsmanship' : tab}
            </button>
          ))}
        </div>
        
        <div className="p-8 font-sans text-[14px] leading-relaxed text-[#4A4944]">
          {activeTab === 'details' && (
            <div className="space-y-3">
              <p>Every structural point of <strong>{selectedProduct.name}</strong> is stress-tested to endure decades of continual domestic use.</p>
              <p>Crafted dynamically to coordinate with the full {selectedProduct.family} collections signature aesthetic.</p>
            </div>
          )}
          {activeTab === 'dimensions' && (
            <div className="grid grid-cols-2 max-w-sm gap-2 font-mono text-[13px]">
              <div className="text-[#6B6963]">Total Width:</div><div className="text-[#0C2620] font-medium">210 cm</div>
              <div className="text-[#6B6963]">Total Depth:</div><div className="text-[#0C2620] font-medium">85 cm</div>
              <div className="text-[#6B6963]">Seat Height:</div><div className="text-[#0C2620] font-medium">44 cm</div>
            </div>
          )}
          {activeTab === 'care' && (
            <p className="italic">Vacuum surface fabric using standard low-suction nozzles. Blot moisture spills instantly with dry un-dyed cloth panels.</p>
          )}
        </div>
      </div>

      <div className="w-full max-w-[1500px] mt-10">
        <div className="rounded-[24px] border border-[rgba(12,38,32,0.08)] bg-[#FAF8F4] p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.32em] text-[#8B5E3C] mb-4">Customer reviews</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex text-[22px] text-[#C9A05C]">{renderStars(selectedProduct.rating)}</div>
                <div>
                  <p className="text-3xl font-semibold text-[#0C2620] leading-none">{animatedReviewCount}</p>
                  <p className="text-sm text-[#6B6963]">{selectedProduct.reviews} reviews</p>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-7 text-[#4A4944]">
                Read what owners are saying about <strong>{selectedProduct.name}</strong> and discover the full collection of reviews at the end of the product experience.
              </p>
            </div>

            <button
              type="button"
              onClick={onViewReviews}
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#0C2620]/15 bg-[#0C2620] px-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#F7F2E8] transition hover:bg-[#153d34]"
            >
              View Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;