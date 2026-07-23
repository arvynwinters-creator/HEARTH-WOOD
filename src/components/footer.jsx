import React from 'react';

const Footer = ({ onCollectionClick }) => {
  return (
    <footer className="w-full bg-[#0C2620] text-[#F4F1EC] font-sans pt-16 pb-8 px-6 sm:px-12 border-t border-[rgba(244,241,236,0.1)] mt-auto">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[rgba(244,241,236,0.1)]">
        
        {/* Brand Presentation & Social Links with Logos */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h2 className="font-serif text-[24px] text-[#C9A05C] tracking-wide font-medium">Hearthwood Atelier</h2>
          <p className="text-[14px] text-[#D8D3C8] leading-relaxed max-w-sm">
            Sustainably engineering premium bespoke architectural home furniture designed to stand structural and aesthetic tests of generations.
          </p>
          
          {/* Social Links with Logos */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-[#C9A05C] hover:text-[#DBB670] text-[13px] transition-colors border border-[rgba(201,160,92,0.2)] rounded-full px-3 py-1.5 hover:border-[#DBB670]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-[#C9A05C] hover:text-[#DBB670] text-[13px] transition-colors border border-[rgba(201,160,92,0.2)] rounded-full px-3 py-1.5 hover:border-[#DBB670]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
              <span>Facebook</span>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-[#C9A05C] hover:text-[#DBB670] text-[13px] transition-colors border border-[rgba(201,160,92,0.2)] rounded-full px-3 py-1.5 hover:border-[#DBB670]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>

            {/* Pinterest */}
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-[#C9A05C] hover:text-[#DBB670] text-[13px] transition-colors border border-[rgba(201,160,92,0.2)] rounded-full px-3 py-1.5 hover:border-[#DBB670]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
              <span>Pinterest</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-[#C9A05C] hover:text-[#DBB670] text-[13px] transition-colors border border-[rgba(201,160,92,0.2)] rounded-full px-3 py-1.5 hover:border-[#DBB670]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

          </div>
        </div>

        {/* Column 1: Navigation Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A05C] font-semibold mb-1">Collections</h4>
          <button 
            onClick={onCollectionClick} 
            className="text-[13px] text-[#D8D3C8] hover:text-white text-left transition-colors cursor-pointer"
          >
            All Furniture
          </button>
          <a href="#living-room" className="text-[13px] text-[#D8D3C8] hover:text-white transition-colors">Living Space</a>
          <a href="#bedroom" className="text-[13px] text-[#D8D3C8] hover:text-white transition-colors">Bedroom Atelier</a>
          <a href="#office" className="text-[13px] text-[#D8D3C8] hover:text-white transition-colors">Executive Workspace</a>
        </div>

        {/* Column 2: Assistance & Direct Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A05C] font-semibold mb-1">Direct Contact</h4>
          
          <a href="tel:+18005550199" className="text-[13px] text-[#D8D3C8] hover:text-white transition-colors flex items-center gap-2">
            <svg className="w-4 h-4 fill-current text-[#C9A05C]" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.5-1-1-1h-3.5c-.6 0-1 .5-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
            </svg>
            <span>+8801761463512</span>
          </a>

          <a href="mailto:concierge@hearthwood.com" className="text-[13px] text-[#D8D3C8] hover:text-white transition-colors flex items-center gap-2">
            <svg className="w-4 h-4 fill-current text-[#C9A05C]" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>arvynwinters@gmail.com</span>
          </a>

          <a href="#shipping" className="text-[13px] text-[#D8D3C8] hover:text-white transition-colors mt-2">Delivery Guidelines</a>
          <a href="#care-guide" className="text-[13px] text-[#D8D3C8] hover:text-white transition-colors">Material & Care Guide</a>
        </div>

        {/* Column 3: Newsletter Sign-up */}
        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A05C] font-semibold mb-1">Atelier News</h4>
          <p className="text-[13px] text-[#D8D3C8] leading-normal">Subscribe to preview seasonal micro-collections.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full mt-1 border border-[rgba(244,241,236,0.2)] rounded-full overflow-hidden bg-[rgba(255,255,255,0.03)] focus-within:border-[#C9A05C] transition-all">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-transparent px-4 py-2.5 text-[12px] text-white outline-none placeholder-[#8A867E]"
            />
            <button type="submit" className="px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#0C2620] bg-[#C9A05C] hover:bg-[#DBB670] transition-colors whitespace-nowrap cursor-pointer">
              Join
            </button>
          </form>
        </div>

      </div>

      {/* Legal & Copyright Info */}
      <div className="max-w-[1500px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#8A867E] gap-4">
        <p>© 2026 Hearthwood Atelier Ltd. Crafted meticulously for elegant living spaces.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;