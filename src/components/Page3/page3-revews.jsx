import React, { useEffect, useRef, useState } from 'react';

const reviewCatalog = {
  sofa: [
    {
      id: 1,
      name: 'Maya & Daniel',
      title: 'Quiet luxury in our living room',
      text: 'The Haven Sofa feels both sculptural and deeply inviting. It brought warmth and calm to our otherwise minimal home.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
      accent: 'from-[#5f6f57] to-[#7b4b2a]',
    },
    {
      id: 2,
      name: 'Alina Brooks',
      title: 'Comfort that still looks refined',
      text: 'The boucle texture is beautiful to touch and the size is perfect for hosting. It is the first piece everyone comments on.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      accent: 'from-[#7b4b2a] to-[#c7a05a]',
    },
  ],
  desk: [
    {
      id: 3,
      name: 'Noah Patel',
      title: 'A grounded workspace',
      text: 'The Atlas Desk makes our office feel calmer and more intentional. The finish feels premium and practical every day.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      accent: 'from-[#8a8f7b] to-[#5f6f57]',
    },
    {
      id: 4,
      name: 'Priya Shah',
      title: 'Smart enough for work, beautiful enough for home',
      text: 'It keeps our setup tidy and elegant. The brass details add a striking but balanced accent.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80',
      accent: 'from-[#7b4b2a] to-[#8a8f7b]',
    },
  ],
  'follwer-pot': [
    {
      id: 5,
      name: 'Sofia Chen',
      title: 'A sculptural finishing touch',
      text: 'The Oasis Pot adds such a grounded elegance to our entryway. The tone and shape feel timeless.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      accent: 'from-[#5f6f57] to-[#c7a05a]',
    },
    {
      id: 6,
      name: 'Liam Ross',
      title: 'Perfect for a simple, curated look',
      text: 'The travertine texture gives a natural warmth that elevates the room without feeling loud.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
      accent: 'from-[#c7a05a] to-[#7b4b2a]',
    },
  ],
  boucle: [
    {
      id: 7,
      name: 'Tina Moreno',
      title: 'The chair feels special every single day',
      text: 'Orbit Lounge Chair has a wonderfully soft silhouette. It stands out beautifully in our reading corner.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80',
      accent: 'from-[#7b4b2a] to-[#5f6f57]',
    },
    {
      id: 8,
      name: 'Owen Green',
      title: 'Refined and comfortable',
      text: 'The leather and brass pairing feels unexpected but elegant. It is a bold accent that still feels warm.',
      rating: 4,
      image: 'https://i.pinimg.com/236x/f7/0d/31/f70d319283fef25dcdc6938d81dd356f.jpg',
      accent: 'from-[#5f6f57] to-[#8a8f7b]',
    },
  ],
  'table-02': [
    {
      id: 9,
      name: 'Harper Bell',
      title: 'Small footprint, huge impact',
      text: 'Terra Nestling Table has become the anchor of our lounge. It feels stylish and practical at the same time.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=300&q=80',
      accent: 'from-[#5f6f57] to-[#7b4b2a]',
    },
  ],
  'bed-01': [
    {
      id: 10,
      name: 'Jules Carter',
      title: 'A calm and restful centerpiece',
      text: 'The Somnus Bed Frame brings a softer luxury to the bedroom. The warm walnut tones feel welcoming and restful.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80',
      accent: 'from-[#7b4b2a] to-[#c7a05a]',
    },
  ],
  'shelf-01': [
    {
      id: 11,
      name: 'Mina Flores',
      title: 'Clean lines with character',
      text: 'Apex Modular Shelf feels architectural without looking cold. It makes our storage look intentional and elegant.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=300&q=80',
      accent: 'from-[#8a8f7b] to-[#5f6f57]',
    },
  ],
  wallpaper: [
    {
      id: 12,
      name: 'Rina Olson',
      title: 'Soft movement and quiet drama',
      text: 'Muted Horizon Wallpaper transforms a plain wall into a calming feature. The texture is beautiful in day and evening light.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=300&q=80',
      accent: 'from-[#5f6f57] to-[#c7a05a]',
    },
  ],
};

const defaultReviews = [
  {
    id: 13,
    name: 'Maya & Daniel',
    title: 'Warm, timeless feel',
    text: 'The craftsmanship feels luxurious without being overwhelming. Every room in our home now has a calm and elegant balance.',
    rating: 5,
    image: 'https://static.vecteezy.com/system/resources/thumbnails/008/974/656/small_2x/cute-kid-girl-holding-bubble-milk-tea-hand-drawn-cartoon-character-illustration-vector.jpg',
    accent: 'from-[#5f6f57] to-[#7b4b2a]',
  },
  {
    id: 14,
    name: 'Alicia Brooks',
    title: 'Beautiful details',
    text: 'I especially loved the rich brown tones and the soft golden accents. It made the entire space feel curated and welcoming.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    accent: 'from-[#7b4b2a] to-[#c7a05a]',
  },
  {
    id: 15,
    name: 'Noah Patel',
    title: 'Comfort meets style',
    text: 'The furniture feels both practical and premium. The earthy palette brings a lovely warmth that still looks modern.',
    rating: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5NPmaA8k8clTsxAIaolrj8AvzpB1uSRr7rHESljeVVllJCiAVBa4--ml&s=10',
    accent: 'from-[#8a8f7b] to-[#5f6f57]',
  },
  {
    id: 16,
    name: 'Zoe Franklin',
    title: 'Elegant and grounded',
    text: 'It feels like the room instantly found its balance. The finish is refined but still cozy in person.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80',
    accent: 'from-[#7b4b2a] to-[#c7a05a]',
  },
  {
    id: 17,
    name: 'Camila Nguyen',
    title: 'Perfectly curated',
    text: 'This piece brought more warmth and texture than I expected. It feels both modern and timeless.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=300&q=80',
    accent: 'from-[#5f6f57] to-[#8a8f7b]',
  },
  {
    id: 18,
    name: 'Rose Miller',
    title: 'Highly recommended',
    text: 'The quality is incredible and the delivery experience was seamless. It suits our home perfectly.',
    rating: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FySzBdHXxc4WPjoas9A6SOU1inekQHYHM_uJ0JqQ_jn7AxKc5flhkXQ&s=10',
    accent: 'from-[#c7a05a] to-[#5f6f57]',
  },
  {
    id: 19,
    name: 'Hasan Malik',
    title: 'Highly recommended',
    text: 'The quality is incredible and the delivery experience was seamless. It suits our home perfectly.',
    rating: 4,
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2266766569.jpg?c=original&q=w_860,c_fill',
    accent: 'from-[#c7a05a] to-[#5f6f57]',
  },
   {
    id: 20,
    name: 'Jack Marvin',
    title: 'Highly recommended',
    text: 'The quality is incredible and the delivery experience was seamless. It suits our home perfectly.',
    rating: 4,
    image: 'https://www.famousbirthdays.com/faces/riley-jake-image.jpg',
    accent: 'from-[#c7a05a] to-[#5f6f57]',
  },
     {
    id: 20,
    name: 'Thomas Shelby',
    title: 'Highly recommended',
    text: 'The quality is incredible and the delivery experience was seamless. It suits our home perfectly.',
    rating: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJz-RuuLf-DraEHqXw7mB6n8_tF_I_4J_sO80sUZM1w&s=10',
    accent: 'from-[#c7a05a] to-[#5f6f57]',
  },
];

const getProductReviews = (productId) => {
  const productReviews = reviewCatalog[productId] || [];

  const fallbackReviews = defaultReviews.filter(
    (review) => !productReviews.some((item) => item.id === review.id)
  );

  return [...productReviews, ...fallbackReviews];
};

const ReviewCard = ({ review, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

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

  return (
    <article
      ref={cardRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group rounded-3xl border border-[#e5dcce] bg-[#fcfaf6] p-6 shadow-[0_10px_30px_rgba(23,35,29,0.06)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(23,35,29,0.12)] will-change-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={review.image}
            alt={review.name}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-[#e2d3b5]"
          />
          <div>
            <h3 className="text-sm font-semibold text-[#17231D]">{review.name}</h3>
            <p className="text-xs uppercase tracking-[0.24em] text-[#7b4b2a]">Verified Guest</p>
          </div>
        </div>
        <div className="text-lg text-[#c7a05a]">
          {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
        </div>
      </div>

      <div className={`mt-5 rounded-2xl bg-linear-to-r ${review.accent} p-px`}>
        <div className="rounded-[15px] bg-[#fffdf8] px-4 py-3">
          <p className="text-sm font-semibold text-[#5f6f57]">{review.title}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-[#5e5a54]">{review.text}</p>
      <div className="mt-5 flex items-center justify-between border-t border-[#ece3d1] pt-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8b877f]">Loved the collection</span>
        <button type="button" className="cursor-pointer text-sm font-semibold text-[#7b4b2a] transition group-hover:text-[#63391f]">
          Read more
        </button>
      </div>
    </article>
  );
};

const Page3Reviews = ({ selectedProduct, onBackToProduct }) => {
  const [reviews, setReviews] = useState(() => getProductReviews(selectedProduct?.id));
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', title: '', text: '', rating: '5' });

  useEffect(() => {
    setReviews(getProductReviews(selectedProduct?.id));
    setShowForm(false);
    setFormData({ name: '', title: '', text: '', rating: '5' });
  }, [selectedProduct?.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.title || !formData.text) {
      return;
    }

    const newReview = {
      id: Date.now(),
      name: formData.name,
      title: formData.title,
      text: formData.text,
      rating: Number(formData.rating),
      image: 'https://static.vecteezy.com/system/resources/previews/027/448/973/non_2x/avatar-account-icon-default-social-media-profile-photo-vector.jpg',
      accent: 'from-[#5f6f57] to-[#c7a05a]',
    };

    setReviews((prev) => [newReview, ...prev]);
    setFormData({ name: '', title: '', text: '', rating: '5' });
    setShowForm(false);
  };

  return (
    <section id="reviews-section" className="bg-[#f7f2e8] px-6 py-20 text-[#17231D] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-4xl border border-[#d8c7a8] bg-[#fffdf8] p-8 shadow-[0_25px_80px_rgba(23,35,29,0.08)] lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#7b4b2a]">
              Client stories
            </p>
            <h2 className="font-serif text-3xl text-[#5f6f57] sm:text-4xl">
              {selectedProduct ? `What owners say about ${selectedProduct.name}` : 'People love the calm elegance of our collection.'}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5e5a54]">
              {selectedProduct
                ? `These reviews are tailored to ${selectedProduct.name}, showing how customers experience this piece in real homes.`
                : 'Each review reflects the warmth of green, the richness of brown, the glow of golden accents, and the softness of grey textures.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {onBackToProduct && (
              <button
                type="button"
                onClick={onBackToProduct}
                className="cursor-pointer rounded-full border border-[#5f6f57] bg-white px-5 py-3 text-sm font-semibold text-[#5f6f57] transition hover:bg-[#f4f0e7]"
              >
                Back to Product
              </button>
            )}
            <button
              type="button"
              onClick={() => setShowForm((prev) => !prev)}
              className="cursor-pointer rounded-full border border-[#7b4b2a] bg-[#7b4b2a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#63391f]"
            >
              {showForm ? 'Close Form' : 'Add Review'}
            </button>
          </div>
        </div>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-3xl border border-[#e2d3b5] bg-[#f8f2e8] p-6 shadow-sm"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-2xl border border-[#d8c7a8] bg-white px-4 py-3 text-sm outline-none ring-0"
              />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Review title"
                className="rounded-2xl border border-[#d8c7a8] bg-white px-4 py-3 text-sm outline-none ring-0"
              />
            </div>

            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Share your experience"
              rows="4"
              className="mt-4 w-full rounded-2xl border border-[#d8c7a8] bg-white px-4 py-3 text-sm outline-none ring-0"
            />

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="rounded-2xl border border-[#d8c7a8] bg-white px-4 py-3 text-sm outline-none"
              >
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
              </select>

              <button
                type="submit"
                className="cursor-pointer rounded-full bg-[#5f6f57] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4a5946]"
              >
                Submit Review
              </button>
            </div>
          </form>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} delay={index * 90} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page3Reviews;
