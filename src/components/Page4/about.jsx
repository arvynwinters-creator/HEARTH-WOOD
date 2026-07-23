import React, { useEffect, useRef, useState } from 'react'

const About = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const sectionClass = `bg-[#0C2620] py-20 text-[#F7F2E8] transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`
  const headerClass = `space-y-6 transition-all duration-700 delay-150 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`
  const cardBaseClass = 'rounded-[28px] border border-[#EDE1D0]/15 bg-[#132C22]/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-700'
  const featureCardClass = 'rounded-[28px] bg-[#112F24] p-5 transition-all duration-700'
  const panelClass = 'rounded-[40px] border border-[#EDE1D0]/10 bg-[#0F3325]/70 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.2)] transition-all duration-700'
  const highlightClass = 'rounded-[34px] border border-[#C9A05C]/20 bg-[#132C22]/90 p-6 text-center transition-all duration-700'

  return (
    <section id="about" ref={sectionRef} className={sectionClass}>
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className={headerClass}>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C9A05C]">About us</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[#F7F2E8] sm:text-5xl">
              Crafted to inspire confidence, comfort, and a home that feels undeniably curated.
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-[#D7C9B4] sm:text-lg">
              At HearthWood, every piece is designed to make your space feel warmer, more intentional, and effortlessly elegant. We blend premium materials,
              thoughtful details, and honest service so your purchase becomes a lasting part of your story.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className={`${cardBaseClass} ${
                  isVisible ? 'opacity-100 translate-y-0 delay-[180ms]' : 'opacity-0 translate-y-6'
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A05C]">Mission</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#F7F2E8]">Design with purpose</h3>
                <p className="mt-3 text-sm leading-6 text-[#D7C9B4]">
                  We create furniture that feels both timeless and warm, so your home looks beautiful and lives comfortably every day.
                </p>
              </div>
              <div
                className={`${cardBaseClass} ${
                  isVisible ? 'opacity-100 translate-y-0 delay-[260ms]' : 'opacity-0 translate-y-6'
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A05C]">Promise</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#F7F2E8]">Trustworthy service</h3>
                <p className="mt-3 text-sm leading-6 text-[#D7C9B4]">
                  From transparent pricing to reliable delivery, we stand behind every order with care, clear communication, and exceptional support.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${panelClass} ${
              isVisible ? 'opacity-100 translate-y-0 delay-[220ms]' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C9A05C]">Special services</p>
                <h3 className="mt-4 text-3xl font-semibold text-[#F7F2E8]">More than furniture</h3>
                <p className="mt-4 text-sm leading-6 text-[#D7C9B4]">
                  We bring premium finishing, expert styling guidance, and a gentle buying experience that makes every room feel more inviting.
                </p>
              </div>

              <div className="grid gap-4">
                <div
                  className={`${featureCardClass} ${
                    isVisible ? 'opacity-100 translate-y-0 delay-[280ms]' : 'opacity-0 translate-y-6'
                  }`}
                >
                  <p className="font-semibold text-[#F7F2E8]">Personalized curation</p>
                  <p className="mt-2 text-sm text-[#D7C9B4]">
                    Receive tailored recommendations for pieces that fit your home, style, and daily life.
                  </p>
                </div>
                <div
                  className={`${featureCardClass} ${
                    isVisible ? 'opacity-100 translate-y-0 delay-[320ms]' : 'opacity-0 translate-y-6'
                  }`}
                >
                  <p className="font-semibold text-[#F7F2E8]">Premium craftsmanship</p>
                  <p className="mt-2 text-sm text-[#D7C9B4]">
                    Every product is built with high-quality materials and refined detailing for beauty that endures.
                  </p>
                </div>
                <div
                  className={`${featureCardClass} ${
                    isVisible ? 'opacity-100 translate-y-0 delay-[360ms]' : 'opacity-0 translate-y-6'
                  }`}
                >
                  <p className="font-semibold text-[#F7F2E8]">Hassle-free delivery</p>
                  <p className="mt-2 text-sm text-[#D7C9B4]">
                    We make buying simple with fast shipping, secure packaging, and responsive support from start to finish.
                  </p>
                </div>
              </div>

              <div
                className={`${highlightClass} ${
                  isVisible ? 'opacity-100 translate-y-0 delay-[420ms]' : 'opacity-0 translate-y-6'
                }`}
              >
                <p className="text-sm uppercase tracking-[0.24em] text-[#C9A05C]">What makes us different</p>
                <p className="mt-4 text-2xl font-semibold leading-tight text-[#F7F2E8]">
                  Confident, curated design that feels effortless and inspires every room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About