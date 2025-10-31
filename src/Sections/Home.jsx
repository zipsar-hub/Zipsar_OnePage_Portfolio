import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Plus, Minus, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

// LogoLoop Component
const LogoLoop = ({ logos, speed, direction, logoHeight, gap, pauseOnHover, scaleOnHover, fadeOut, fadeOutColor }) => {
  const [isPaused, setIsPaused] = useState(false);

  const animationDuration = `${speed}s`;
  const animationDirection = direction === 'right' ? 'reverse' : 'normal';

  return (
    <div className="relative w-full overflow-hidden" style={{ height: `${logoHeight}px` }}>
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}
      <div
        className="flex gap-0"
        style={{
          animation: `scroll ${animationDuration} linear infinite`,
          animationDirection: animationDirection,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className={`flex-shrink-0 flex items-center justify-center ${
              scaleOnHover ? 'transition-transform hover:scale-110' : ''
            }`}
            style={{
              width: `${logoHeight}px`,
              height: `${logoHeight}px`,
              marginRight: `${gap}px`,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${100 / 3}%);
          }
        }
      `}</style>
    </div>
  );
};

// FAQ Component
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className="border-t border-b border-white/30 py-6 md:py-8 px-4 md:px-6 cursor-pointer group hover:bg-white/5 transition-all duration-300"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium flex-1 text-left">{question}</h3>
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
          {isOpen ? <Minus className="w-5 h-5 md:w-6 md:h-6" /> : <Plus className="w-5 h-5 md:w-6 md:h-6" />}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm md:text-base text-white/80 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const images = [
    { src: "/Images/company1.png", alt: "Company 1" },
    { src: "/Images/company2.jpeg", alt: "Company 2" },
    { src: "/Images/company3.png", alt: "Company 3" },
    { src: "/Images/company4.png", alt: "Company 4" },
    { src: "/Images/company5.jpeg", alt: "Company 5" },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const imageGridRef = useRef(null);
  const logoLoopRef = useRef(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web design and development, digital marketing, SEO optimization, social media management, graphic design, and website maintenance. Our team of experts works closely with you to deliver customized solutions that meet your specific business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on the scope and complexity. A basic website can take 4-6 weeks, while more complex projects with custom features may take 2-3 months. We'll provide you with a detailed timeline during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! We offer comprehensive maintenance and support packages to ensure your digital presence continues to perform optimally. This includes regular updates, security monitoring, content updates, and technical support whenever you need it."
    },
    {
      question: "What makes your agency different from others?",
      answer: "We pride ourselves on our client-centered approach, with 100% of work completed in-house by our experienced team. With over 10 years of experience and 150+ happy clients, we combine strategic thinking with creative excellence to deliver measurable results that drive your business forward."
    },
    {
      question: "How do you measure success?",
      answer: "We establish clear KPIs and goals at the start of every project, tailored to your specific objectives. Whether it's increased traffic, higher conversion rates, improved engagement, or better search rankings, we provide regular reports with actionable insights to demonstrate the value we're delivering."
    }
  ];

  useEffect(() => {
    // Smooth scroll animation for image grid
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    if (imageGridRef.current) {
      const images = imageGridRef.current.querySelectorAll('.animate-on-scroll');
      images.forEach((img) => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(50px)';
        img.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(img);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Home" className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-[calc(100vh-90px)] relative flex flex-col justify-around items-center py-10 px-4 md:px-8">
        <div className="flex flex-col gap-2 md:gap-4 w-full md:w-[80%] lg:w-[70%] xl:w-[60%]">
          <h1 className="font-semibold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[120px] xl:text-[128px] text-left leading-none">
            Digital
          </h1>
          <h1 className="font-semibold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[120px] xl:text-[128px] text-right leading-none">
            Brilliance.
          </h1>
        </div>
        <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl w-full text-center px-4 tracking-tight mt-8">
          Websites • Digital Marketing • Design
        </span>
      </div>

      {/* Partners Section */}
      <div className="flex items-center justify-center py-10 my-10 px-4">
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center max-w-4xl">
          We partner with some incredible brands, take a look.
        </h1>
      </div>

      {/* Logo Loop Section */}
      <div ref={logoLoopRef} className="w-full md:w-[90%] lg:w-[80%] mx-auto overflow-hidden flex flex-col gap-10 md:gap-20 my-10 md:my-20 relative z-50">
        <LogoLoop
          logos={images}
          speed={60}
          direction="left"
          logoHeight={120}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
        />
        <LogoLoop
          logos={images}
          speed={60}
          direction="right"
          logoHeight={120}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
        />
      </div>

      {/* Image Grid Section */}
      <div ref={imageGridRef} className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 my-16 md:my-24 relative z-10">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          <div className="animate-on-scroll w-full h-[250px] md:h-[300px] overflow-hidden rounded-2xl transition-transform hover:scale-[1.02] duration-500">
            <img src="https://picsum.photos/500/300?random=1" alt="Portfolio" className="w-full h-full object-cover" />
          </div>
          <div className="animate-on-scroll w-full h-[250px] md:h-[300px] overflow-hidden rounded-2xl transition-transform hover:scale-[1.02] duration-500">
            <img src="https://picsum.photos/500/300?random=2" alt="Portfolio" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          <div className="animate-on-scroll w-full h-[150px] md:h-[200px] overflow-hidden rounded-2xl transition-transform hover:scale-[1.02] duration-500">
            <img src="https://picsum.photos/500/300?random=3" alt="Portfolio" className="w-full h-full object-cover" />
          </div>
          <div className="animate-on-scroll w-full h-[150px] md:h-[200px] overflow-hidden rounded-2xl transition-transform hover:scale-[1.02] duration-500">
            <img src="https://picsum.photos/500/300?random=4" alt="Portfolio" className="w-full h-full object-cover" />
          </div>
          <div className="animate-on-scroll w-full h-[150px] md:h-[200px] overflow-hidden rounded-2xl transition-transform hover:scale-[1.02] duration-500">
            <img src="https://picsum.photos/500/300?random=5" alt="Portfolio" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          <div className="animate-on-scroll w-full h-[250px] md:h-[300px] overflow-hidden rounded-2xl transition-transform hover:scale-[1.02] duration-500">
            <img src="https://picsum.photos/500/300?random=6" alt="Portfolio" className="w-full h-full object-cover" />
          </div>
          <div className="animate-on-scroll w-full h-[250px] md:h-[300px] overflow-hidden rounded-2xl transition-transform hover:scale-[1.02] duration-500">
            <img src="https://picsum.photos/500/300?random=7" alt="Portfolio" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Featured In Section */}
      <div className="mt-16 md:mt-24 lg:mt-32 px-4">
        <h1 className="w-full text-center text-lg sm:text-xl md:text-2xl font-semibold mb-10 md:mb-16">
          AS FEATURED IN:
        </h1>
        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[3/1] rounded-lg overflow-hidden hover:opacity-80 transition-opacity duration-300">
              <img src={`https://picsum.photos/300/100?random=${i + 10}`} alt="Featured" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="my-16 md:my-24 py-10 md:py-16 lg:py-20 px-4">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              We drive digital success, through award-winning marketing strategies.
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              As an experienced and dedicated digital marketing agency based in Guildford in Surrey and Soho in London, we know the importance of delivering top results through a client centred approach which incorporates thorough research, planning and discussion surrounding your goals. Whether you are looking for a fresh web design service and build, assistance with paid or organic social media, SEO or advice surrounding your current marketing strategy, our team of digital marketing experts are on hand to help.
            </p>
            <button className="text-base md:text-lg flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black w-full sm:w-auto max-w-[300px] hover:bg-gray-100 transition-all duration-300 font-medium">
              <ArrowRight className="w-5 h-5" /> WHO WE ARE
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src="https://picsum.photos/450?random=20"
              alt="About Us"
              className="rounded-2xl object-cover w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Services Section - Vertical Text */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-[90%] md:w-[85%] lg:w-[80%] mx-auto my-16 md:my-24 py-10">
        {[
          { num: '01', title: 'Graphic Design' },
          { num: '02', title: 'Search Engine Optimization' },
          { num: '03', title: 'Social Media' },
          { num: '04', title: 'Web Design' },
          { num: '05', title: 'Website Hosting' },
          { num: '06', title: 'Website Maintenance' }
        ].map((service) => (
          <div key={service.num} className="flex items-center justify-center h-36 sm:h-48 md:h-54">
            <h1 className="text-lg sm:text-xl md:text-2xl whitespace-nowrap transform -rotate-90 origin-center">
              <span className="font-semibold italic">{service.num}</span> {service.title}
            </h1>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="my-16 md:my-24 lg:my-32">
        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-10 md:py-16 lg:py-20">
          <h1 className="font-thin text-base sm:text-lg md:text-xl w-full text-center mb-12 md:mb-16 lg:mb-20 tracking-wider">
            WHY WORK WITH US?
          </h1>
          <div className="w-full lg:w-[90%] xl:w-[80%] mx-auto space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 md:py-10 px-4 md:px-10 border-b-2 border-white/30 gap-4 sm:gap-8 hover:bg-white/5 transition-all duration-300">
              <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">100%</h1>
              <h1 className="w-full sm:w-1/2 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Work completed in house
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 md:py-10 px-4 md:px-10 border-b-2 border-white/30 gap-4 sm:gap-8 hover:bg-white/5 transition-all duration-300">
              <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">10+</h1>
              <h1 className="w-full sm:w-1/2 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Years crafting digital experiences
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 md:py-10 px-4 md:px-10 gap-4 sm:gap-8 hover:bg-white/5 transition-all duration-300">
              <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">150+</h1>
              <h1 className="w-full sm:w-1/2 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Happy Clients
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="my-16 md:my-24 py-10 md:py-16 px-4">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-16">
            Frequently Asked Questions
          </h1>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10 w-full min-h-[60vh] md:min-h-[calc(100vh-80px)] py-16 md:py-20 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center max-w-3xl leading-tight">
          Ready to transform your business?
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center text-white/90">
          Book an informal chat with one of our specialists
        </p>
        <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-black text-lg md:text-xl rounded-full flex gap-2 items-center hover:bg-gray-100 transition-all duration-300 font-medium">
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          GET IN TOUCH
        </button>
      </div>

      {/* Footer */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto border-t-2 border-white/30 my-12 md:my-20 pt-12 md:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
          <div>
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl">Surrey</h1>
            <div className="space-y-2 text-sm md:text-base text-white/80">
              <p>The Tile Kiln</p>
              <p>Tilehouse Farm</p>
              <p>Guildford</p>
              <p>United Kingdom</p>
              <p>GU4 8AE</p>
            </div>
          </div>
          <div>
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl">London</h1>
            <div className="space-y-2 text-sm md:text-base text-white/80">
              <p>72-74 Dean Street</p>
              <p>Soho, London</p>
              <p>United Kingdom</p>
              <p>W1D 3SG</p>
            </div>
          </div>
          <div>
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl">Say Hello</h1>
            <div className="space-y-2 text-sm md:text-base">
              <p className="text-teal-400 font-medium">Surrey</p>
              <p className="text-white/80">+44 1483 912900</p>
              <p className="text-teal-400 font-medium mt-4">London</p>
              <p className="text-white/80">+44 207 183 7787</p>
            </div>
          </div>
          <div>
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl">Navigate</h1>
            <div className="space-y-2 text-sm md:text-base text-white/80">
              <p className="hover:text-white transition-colors cursor-pointer">Home</p>
              <p className="hover:text-white transition-colors cursor-pointer">Service</p>
              <p className="hover:text-white transition-colors cursor-pointer">Latest Task</p>
              <p className="hover:text-white transition-colors cursor-pointer">Contact us</p>
              <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm md:text-base text-white/60">
              © 2025 Digital Brilliance. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;