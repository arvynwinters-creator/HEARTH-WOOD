import React, { useEffect, useRef, useState } from 'react';

const MATERIAL_STYLES = {
  textile: { label: 'Boucle', dotColor: 'bg-[#2F5D4E]', bgColor: 'bg-[#E4ECE8]', textColor: 'text-[#2F5D4E]' },
  wood: { label: 'Oak', dotColor: 'bg-[#8B5E3C]', bgColor: 'bg-[#EFE4D8]', textColor: 'text-[#8B5E3C]' },
  stone: { label: 'Travertine', dotColor: 'bg-[#6B6963]', bgColor: 'bg-[#E9E7E2]', textColor: 'text-[#6B6963]' },
  metal: { label: 'Brass', dotColor: 'bg-[#C9A05C]', bgColor: 'bg-[#F3E9D3]', textColor: 'text-[#C9A05C]' }
};

export function Card({ 
  product = { 
    id: 'unknown', 
    name: 'Item Name', 
    material: 'Material details', 
    family: 'textile', 
    price: '€0', 
    rating: 5, 
    reviews: 0,
    image: '' 
  },
  onAddToCart,
  onProductClick,
  delay = 0
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const style = MATERIAL_STYLES[product.family] || MATERIAL_STYLES.textile;

  useEffect(() => {
    const node = cardRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < rating ? 'text-[#C9A05C]' : 'text-[#D8D3C8]'}>
        ★
      </span>
    ));
  };

  return (
    <div
      ref={cardRef}
      id={product.id}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group mb-6 w-full overflow-hidden rounded-[20px] border border-[rgba(12,38,32,0.10)] bg-white transition-all duration-700 ease-out hover:shadow-lg will-change-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      {/* Clicking the image container opens details */}
      <div 
        onClick={() => onProductClick && onProductClick(product)}
        className="relative h-45 w-full overflow-hidden bg-[#EDEAE4] cursor-pointer"
      >
        {product.image && (
          <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
        )}
        <div className={`absolute left-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider shadow-[0_2px_8px_rgba(12,38,32,0.1)] ${style.bgColor} ${style.textColor}`}>
          <span className={`h-2 w-2 flex-none rounded-full ${style.dotColor}`}></span>
          {style.label}
        </div>
      </div>

      <div className="p-[18px_20px_20px]">
        {/* Clicking the text heading opens details */}
        <p 
          onClick={() => onProductClick && onProductClick(product)}
          className="font-serif text-[18px] font-medium leading-[1.2] text-[#0C2620] cursor-pointer hover:text-[#C9A05C] transition-colors"
        >
          {product.name}
        </p>
        <p className="mt-1 font-sans text-[12px] uppercase tracking-wider text-[#6B6963]">{product.material}</p>
        
        <div className="mt-2.5 flex items-center gap-2">
          <span className="space-x-px text-[13px] tracking-wider">{renderStars(product.rating)}</span>
          <span className="font-mono text-[11px] text-[#6B6963]">({product.reviews})</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-sans font-semibold text-[16px] text-[#0C2620]">{product.price}</span>
          <button 
            type="button" 
            onClick={() => onAddToCart?.(product, 1)}
            className="flex-none rounded-full bg-[#C9A05C] px-4 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#0C2620] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#DBB670] hover:shadow-[0_10px_20px_rgba(12,38,32,0.18)] active:translate-y-0"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;