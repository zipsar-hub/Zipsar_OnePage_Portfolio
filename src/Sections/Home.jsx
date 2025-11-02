import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Plus,
  Minus,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
import LogoLoop from "../Components/Home/LogoLoop";

//Bg Video Component
const heroVideoSrc = "/video/14520076_1920_1080_24fps.mp4";

// FAQ Component
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className="border-t border-b border-white/30 py-6 md:py-8 px-4 md:px-6 cursor-pointer group hover:bg-white/5 transition-all duration-300"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium flex-1 text-left">
          {question}
        </h3>
        <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
          {isOpen ? (
            <Minus className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <Plus className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm md:text-base text-white/80 leading-relaxed">
          {answer}
        </p>
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
      answer:
        "We offer a comprehensive range of digital services including web design and development, digital marketing, SEO optimization, social media management, graphic design, and website maintenance. Our team of experts works closely with you to deliver customized solutions that meet your specific business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on the scope and complexity. A basic website can take 4-6 weeks, while more complex projects with custom features may take 2-3 months. We'll provide you with a detailed timeline during our initial consultation and keep you updated throughout the process.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Absolutely! We offer comprehensive maintenance and support packages to ensure your digital presence continues to perform optimally. This includes regular updates, security monitoring, content updates, and technical support whenever you need it.",
    },
    {
      question: "What makes your agency different from others?",
      answer:
        "We pride ourselves on our client-centered approach, with 100% of work completed in-house by our experienced team. With over 10 years of experience and 150+ happy clients, we combine strategic thinking with creative excellence to deliver measurable results that drive your business forward.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We establish clear KPIs and goals at the start of every project, tailored to your specific objectives. Whether it's increased traffic, higher conversion rates, improved engagement, or better search rankings, we provide regular reports with actionable insights to demonstrate the value we're delivering.",
    },
  ];

  useEffect(() => {
    // Initialize animations when component mounts
    const initAnimations = () => {
      // Parallax for background video
      gsap.to(".hero-video", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1
        },
        scale: 1.1,
        y: "20%"
      });

      // Hero Section Animation with Parallax
      const heroTl = gsap.timeline({ delay: 0.2 });
      heroTl
        .fromTo("h1:first-child", 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
        .fromTo("h1:nth-child(2)", 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.7"
        )
        .fromTo(".hero-span", 
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        );

      // Parallax for hero text
      gsap.to(".hero-content", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1
        },
        y: "-30%"
      });

      // Featured Section Animation with professional reveal
      gsap.set(".featured-title", { opacity: 0, y: 30 });
      gsap.set(".featured-item", { opacity: 0, y: 20 });

      const featuredTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".featured-section",
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
          markers: false
        }
      });

      featuredTl
        .to(".featured-title", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        })
        .to(".featured-item", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: {
            each: 0.1,
            from: "start",
            grid: "auto"
          },
          ease: "power2.out"
        }, "-=0.4");

      // Add subtle parallax to featured items
      document.querySelectorAll('.featured-item').forEach((item, index) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: ".featured-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          },
          y: (index % 2 === 0) ? -15 : 15,
          ease: "none"
        });
      });

      // About Section Animation with Parallax
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
          markers: false
        }
      });

      aboutTl
        .fromTo(".about-content",
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }
        )
        .fromTo(".about-image",
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" },
          "-=1"
        );

      // Parallax for about section elements
      gsap.to(".about-content", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        y: -50
      });

      gsap.to(".about-image", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        },
        y: -80
      });

      // Services Section Animation with Parallax
      const servicesTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false
        }
      });

      // Select all service items
      const serviceItems = document.querySelectorAll('.service-item');

      // Animate each service item with stagger and parallax
      serviceItems.forEach((item, index) => {
        // Initial animation
        servicesTl.fromTo(item,
          { 
            opacity: 0,
            y: 50,
            scaleY: 0.8
          },
          { 
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.6,
            ease: "power2.out"
          },
          index * 0.1
        );

        // Animate the text inside
        servicesTl.fromTo(item.querySelector('.service-text'),
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          },
          "-=0.3"
        );

        // Add parallax effect to each service item
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          },
          y: -30 * (index % 2 ? 1 : -1), // Alternate direction for more interest
          ease: "none"
        });
      });

      // Stats Section Parallax
      const statsItems = document.querySelectorAll('.stats-item');
      statsItems.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 30%",
            scrub: 1
          },
          y: 50,
          opacity: 0.5,
          ease: "none"
        });
      });

      // Image Grid Animation with earlier trigger point
      if (imageGridRef.current) {
        const revealImages = imageGridRef.current.querySelectorAll('.reveal-image');
        const imageTl = gsap.timeline({
          scrollTrigger: {
            trigger: imageGridRef.current,
            start: "top 80%", // Changed from 70% to 80% to start earlier
            end: "bottom 40%", // Changed from 20% to 40% for earlier completion
            toggleActions: "play none none reverse",
            markers: false
          }
        });

        revealImages.forEach((image, index) => {
          const direction = index % 2 === 0 ? -50 : 50;
          
          imageTl.fromTo(image, 
            { 
              y: 50,
              x: direction,
              opacity: 0,
              scale: 0.95,
              rotation: direction > 0 ? 5 : -5
            },
            {
              duration: 1.2,
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              ease: "power3.out",
              stagger: {
                amount: 1.5,
                from: "random"
              }
            },
            index * 0.2
          );
        });
      }
    };

    // Initialize animations
    initAnimations();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="Home" className="w-full overflow-hidden">
      <div className="hero-section min-h-[calc(100vh-90px)] relative flex flex-col justify-center items-center py-10 px-4 md:px-8 overflow-hidden">
        {/* Background Video with Parallax */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video absolute inset-0 w-full h-full object-cover z-0 scale-105 transform"
          style={{ pointerEvents: "none" }}
          preload="auto"
        >
          <source src={heroVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay with Parallax */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80 z-10 transform" />

        {/* Hero content with Parallax */}
        <div className="hero-content relative z-20 flex flex-col gap-2 md:gap-4 w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mt-[-5vh] transform">
          <h1 className="font-bold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[120px] xl:text-[128px] text-left leading-[0.9] tracking-tight opacity-0">
            Building
          </h1>
          <h1 className="font-bold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[120px] xl:text-[128px] text-right leading-[0.9] tracking-tight opacity-0">
            what matters<span className="text-teal-400">.</span>
          </h1>
        </div>
        <span className="hero-span absolute bottom-20 font-semibold left-10 z-20 text-sm sm:text-base md:text-lg lg:text-xl w-full text-left px-4 tracking-wider mt-8 text-teal-400">
          Design • Develop • Deliver
        </span>
      </div>

      {/* Partners Section */}
      <div className="flex items-center justify-center py-10 my-10 px-4">
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          We partner with some incredible brands, take a look.
        </h1>
      </div>

      {/* Logo Loop Section */}
      <div
        ref={logoLoopRef}
        className="w-full md:w-[90%] lg:w-[80%] mx-auto overflow-hidden flex flex-col gap-10 md:gap-20 my-10 md:my-20 relative z-50"
      >
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

      {/* Image Grid Section with GSAP Reveal Animation */}
      <div className="relative py-20 md:py-32">
        <div
          ref={imageGridRef}
          className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <div className="reveal-image w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-2xl shadow-2xl opacity-0 translate-y-10">
                <img
                  src="https://picsum.photos/500/300?random=1"
                  alt="Portfolio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="reveal-image w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-2xl shadow-2xl opacity-0 translate-y-10">
                <img
                  src="https://picsum.photos/500/300?random=2"
                  alt="Portfolio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <div className="reveal-image w-full h-[120px] sm:h-[150px] md:h-[200px] overflow-hidden rounded-2xl shadow-2xl opacity-0 translate-y-10">
                <img
                  src="https://picsum.photos/500/300?random=3"
                  alt="Portfolio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="reveal-image w-full h-[120px] sm:h-[150px] md:h-[200px] overflow-hidden rounded-2xl shadow-2xl opacity-0 translate-y-10">
                <img
                  src="https://picsum.photos/500/300?random=4"
                  alt="Portfolio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="reveal-image w-full h-[120px] sm:h-[150px] md:h-[200px] overflow-hidden rounded-2xl shadow-2xl opacity-0 translate-y-10">
                <img
                  src="https://picsum.photos/500/300?random=5"
                  alt="Portfolio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <div className="reveal-image w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-2xl shadow-2xl opacity-0 translate-y-10">
                <img
                  src="https://picsum.photos/500/300?random=6"
                  alt="Portfolio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="reveal-image w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-2xl shadow-2xl opacity-0 translate-y-10">
                <img
                  src="https://picsum.photos/500/300?random=7"
                  alt="Portfolio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
        </div>
      </div>

      {/* Featured In Section */}
      <div className="featured-section mt-16 md:mt-24 lg:mt-32 px-4 relative overflow-hidden">
        <div className="featured-content w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
          <h1 className="featured-title w-full text-center text-lg sm:text-xl md:text-2xl font-semibold mb-10 md:mb-16 opacity-0 transform">
            AS FEATURED IN:
          </h1>
          <div className="featured-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
            {['/Images/as featured/image-1.png', 
            '/Images/as featured/image-2.png',
            '/Images/as featured/image-3.webp',
            '/Images/as featured/image-4.webp',
            '/Images/as featured/image-5.webp',
            '/Images/as featured/image-6.webp',
            ].map((i, index) => (
              <div
                key={i}
                className="featured-item group col-span-1 md:col-span-1 aspect-3/2 lg:aspect-3/1.5 rounded-lg overflow-hidden opacity-0 transform hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-full h-full relative bg-black/10 backdrop-blur-sm">
                  <img
                    src={`${i}`}
                    alt="Featured"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 filter grayscale hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section my-16 md:my-24 py-10 md:py-16 lg:py-20 px-4 relative overflow-hidden">
        <div className="parallax-wrapper w-full md:w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="about-content w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10 opacity-0 translate-x-[-100px] transform">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              We drive digital success, through award-winning marketing strategies.
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              As an experienced and dedicated digital marketing agency based in
              Guildford in Surrey and Soho in London, we know the importance of
              delivering top results through a client centred approach which
              incorporates thorough research, planning and discussion
              surrounding your goals. Whether you are looking for a fresh web
              design service and build, assistance with paid or organic social
              media, SEO or advice surrounding your current marketing strategy,
              our team of digital marketing experts are on hand to help.
            </p>
            <button className="text-base md:text-lg flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black w-full sm:w-auto max-w-[300px] hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-medium group">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> WHO WE ARE
            </button>
          </div>
          <div className="about-image w-full lg:w-1/2 flex items-center justify-center opacity-0 translate-x-[100px] transform">
            <img
              src="https://picsum.photos/450?random=20"
              alt="About Us"
              className="rounded-2xl object-cover w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Services Section - Vertical Text */}
      <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto my-16 md:my-24 py-10 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-1 gap-y-8 sm:gap-4 md:gap-6 lg:gap-8">
          {[
            { num: "01", title: "Graphic Design" },
            { num: "02", title: "Search Engine Optimization" },
            { num: "03", title: "Social Media" },
            { num: "04", title: "Web Design" },
            { num: "05", title: "Website Hosting" },
            { num: "06", title: "Website Maintenance" },
          ].map((service, index) => (
            <div
              key={service.num}
              className={`service-item group flex items-center justify-center h-40 sm:h-40 md:h-52 lg:h-64 opacity-0 px-0.5 sm:px-2 ${
                index >= 4 ? 'col-start-1 col-span-1 sm:col-auto' : 'col-span-1'
              }`}
            >
              <h1 className="service-text text-[10px] sm:text-sm md:text-base lg:text-lg whitespace-nowrap [writing-mode:vertical-lr] rotate-180 group-hover:text-teal-400 transition-colors duration-300">
                <span className="font-semibold italic text-xs sm:text-base md:text-lg lg:text-xl">{service.num}</span>
                <span className="ml-0.5 sm:ml-2 leading-none">{service.title}</span>
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section my-16 md:my-24 lg:my-32 relative z-10 overflow-hidden">
        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-10 md:py-16 lg:py-20">
          <h1 className="font-thin text-base sm:text-lg md:text-xl w-full text-center mb-12 md:mb-16 lg:mb-20 tracking-wider transform">
            WHY WORK WITH US?
          </h1>
          <div className="w-full lg:w-[90%] xl:w-[80%] mx-auto space-y-0">
            <div className="stats-item flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 md:py-10 px-4 md:px-10 border-b-2 border-white/30 gap-4 sm:gap-8 hover:bg-white/5 transition-all duration-300 transform">
              <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
                100%
              </h1>
              <h1 className="w-full sm:w-1/2 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Work completed in house
              </h1>
            </div>
            <div className="stats-item flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 md:py-10 px-4 md:px-10 border-b-2 border-white/30 gap-4 sm:gap-8 hover:bg-white/5 transition-all duration-300 transform">
              <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
                10+
              </h1>
              <h1 className="w-full sm:w-1/2 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Years crafting digital experiences
              </h1>
            </div>
            <div className="stats-item flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 md:py-10 px-4 md:px-10 gap-4 sm:gap-8 hover:bg-white/5 transition-all duration-300 transform">
              <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
                150+
              </h1>
              <h1 className="w-full sm:w-1/2 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Happy Clients
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="my-16 md:my-24 py-10 md:py-16 px-4 relative z-10">
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
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10 w-full min-h-[60vh] md:min-h-[calc(100vh-80px)] py-16 md:py-20 px-4 relative">
        <div className="absolute z-10 w-10/12 h-10/12">
          <img src="/Images/as featured/background.webp" alt="Background Image" className="w-full h-full object-fill" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center max-w-3xl leading-tight z-50">
          Ready to transform your business?
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center text-white/90 z-50">
          Book an informal chat with one of our specialists
        </p>
        <button className="px-6 py-3 md:px-8 md:py-4 z-50 bg-white text-black text-sm sm:text-base md:text-xl rounded-full flex gap-2 items-center hover:bg-gray-100 transition-all duration-300 font-medium">
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          GET IN TOUCH
        </button>
      </div>

      {/* Footer */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto border-t-2 border-white/30 my-12 md:my-20 pt-12 md:pt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
          <div>
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl">
              Surrey
            </h1>
            <div className="space-y-2 text-sm md:text-base text-white/80">
              <p>The Tile Kiln</p>
              <p>Tilehouse Farm</p>
              <p>Guildford</p>
              <p>United Kingdom</p>
              <p>GU4 8AE</p>
            </div>
          </div>
          <div>
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl">
              London
            </h1>
            <div className="space-y-2 text-sm md:text-base text-white/80">
              <p>72-74 Dean Street</p>
              <p>Soho, London</p>
              <p>United Kingdom</p>
              <p>W1D 3SG</p>
            </div>
          </div>
          <div>
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl">
              Say Hello
            </h1>
            <div className="space-y-2 text-sm md:text-base">
              <p className="text-teal-400 font-medium">Surrey</p>
              <p className="text-white/80">+44 1483 912900</p>
              <p className="text-teal-400 font-medium mt-4">London</p>
              <p className="text-white/80">+44 207 183 7787</p>
            </div>
          </div>
          <div>
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl">
              Navigate
            </h1>
            <div className="space-y-2 text-sm md:text-base text-white/80">
              <p className="hover:text-white transition-colors cursor-pointer">
                Home
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                Service
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                Latest Task
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                Contact us
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </p>
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
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
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