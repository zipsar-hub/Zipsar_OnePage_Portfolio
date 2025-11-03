import {
  ArrowRight,
  Home,
  Megaphone,
  Instagram,
  Trophy,
  UsersRound,
  Facebook,
  Linkedin,
  Twitter,
  Wrench,
  Zap,
  Youtube,
} from "lucide-react";
import React from "react";
import Card from "../Components/About/Card";
import LogoLoop from "../Components/Home/LogoLoop";

const About = () => {
  const logos = [
    { src: "/Images/Client logo/client-1.svg", alt: "Company 1" },
    { src: "/Images/Client logo/client-2.svg", alt: "Company 2" },
    { src: "/Images/Client logo/client-3.svg", alt: "Company 3" },
    { src: "/Images/Client logo/client-4.svg", alt: "Company 4" },
    { src: "/Images/Client logo/client-5.svg", alt: "Company 5" },
    { src: "/Images/Client logo/client-6.svg", alt: "Company 6" },
    { src: "/Images/Client logo/client-7.svg", alt: "Company 7" },
  ];
  
  return (
    <div id="About" className="relative w-full min-h-screen bg-black text-white">
      <img
        src="/Images/About/about_background.png"
        alt="Background Images"
        className="w-[80%] absolute left-1/2 -translate-x-1/2 -top-1/3 -z-10 opacity-55"
      />
      <div className="relative z-10 w-[90%] md:w-[85%] lg:w-[80%] mx-auto pt-16 md:pt-24">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4">
          A BIT ABOUT US
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">Our Story.</h1>
      </div>
      <div className="bg-black w-[90%] md:w-[85%] lg:w-[80%] mx-auto mt-10 md:mt-20 shadow-top">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 my-10 md:my-20 w-full md:w-[80%] lg:w-[60%] mx-auto px-4 md:px-0">
          <div className="w-full md:w-auto border-b-2 md:border-b-0 md:border-r-2 border-white/30 px-4 md:px-8 pb-8 md:pb-0 md:py-6 flex flex-col items-center gap-4">
            <h1 className="font-semibold text-teal-500 text-2xl md:text-3xl italic">
              1,000
            </h1>
            <p className="font-light text-base md:text-lg w-[80%] text-center text-white">
              CUPS OF TEA BREWED
            </p>
          </div>
          <div className="w-full md:w-auto border-b-2 md:border-b-0 md:border-r-2 border-white/30 px-4 md:px-8 pb-8 md:pb-0 md:py-6 flex flex-col items-center gap-4">
            <h1 className="font-semibold text-teal-500 text-2xl md:text-3xl italic">
              20,000
            </h1>
            <p className="font-light text-base md:text-lg w-[80%] text-center text-white">
              MARIO KART MILES RACED
            </p>
          </div>
          <div className="w-full md:w-auto px-4 md:px-8 flex flex-col items-center gap-4">
            <h1 className="font-semibold text-teal-500 text-2xl md:text-3xl italic">
              100%
            </h1>
            <p className="font-light text-base md:text-lg w-[80%] text-center text-white">
              COMMITMENT TO OUR WORK
            </p>
          </div>
        </div>
        <div className="w-full md:w-[70%] lg:w-[50%] mx-auto px-4 md:px-0 pb-10 md:pb-20">
          <p className="text-center text-white/80 text-sm md:text-base leading-relaxed">
            Ellis Digital is much more than and award-winning digital marketing
            and creative agency (although we are pretty proud of that). We are a
            tight-knit team of solution driven individuals committed to keeping
            our clients unique needs at the core of everything we do. With our
            range of expertise and experience, we are always on-hand to offer
            innovative strategies to elevate your business, whatever your needs.
          </p>
        </div>
        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto my-10 flex items-center justify-center">
          <button className="w-full md:w-auto px-8 font-semibold rounded-full bg-white text-black flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition-all duration-300">
            <ArrowRight className="w-5 h-5" />
            <span>GET IN TOUCH</span>
          </button>
        </div>
      </div>
      <div className="py-20 bg-black/50 backdrop-blur-sm">
        <LogoLoop
                  logos={logos}
                  speed={60}
                  direction="left"
                  logoHeight={170}
                  gap={25}
                  pauseOnHover
                />
      </div>
      <div className="w-full min-h-screen py-16 md:py-24 flex items-center justify-center bg-black">
        <div className="w-[90%] md:w-[85%] lg:w-[80%] gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            logo={<UsersRound size={32} />}
            heading={"Founded in 2025"}
            description={
              "Our talented team of creatives have been doing exceptional work for almost 10 years. We've been around the block, so you can trust in our collective experience to provide you with an un-paralleled service."
            }
          />
          <Card
            logo={<Trophy size={32} />}
            heading={"Award Winning"}
            description={
              "Over the years, we are proud to have accumulated a wide-range of accolades, most notably 'Digital Marketing Agency of the Year' and 'SEO Agency of the Year'."
            }
          />
          <Card
            logo={<Home size={32} />}
            heading={"Founded in 2025"}
            description={
              "Our talented team of creatives have been doing exceptional work for almost 10 years. We've been around the block, so you can trust in our collective experience to provide you with an un-paralleled service."
            }
          />
          <Card
            logo={<Zap size={32} />}
            heading={"Founded in 2025"}
            description={
              "Our talented team of creatives have been doing exceptional work for almost 10 years. We've been around the block, so you can trust in our collective experience to provide you with an un-paralleled service."
            }
          />
          <Card
            logo={<Wrench size={32} />}
            heading={"Founded in 2025"}
            description={
              "Our talented team of creatives have been doing exceptional work for almost 10 years. We've been around the block, so you can trust in our collective experience to provide you with an un-paralleled service."
            }
          />
          <Card
            logo={<Megaphone size={32} />}
            heading={"Founded in 2025"}
            description={
              "Our talented team of creatives have been doing exceptional work for almost 10 years. We've been around the block, so you can trust in our collective experience to provide you with an un-paralleled service."
            }
          />
        </div>
      </div>
      <div className="mt-10 w-[90%] md:w-[85%] lg:w-[80%] mx-auto bg-black text-white">
        <h1 className="text-3xl md:text-4xl lg:text-6xl my-6 md:my-10 font-bold leading-tight">
          Targeted. Optimised. <span className="text-teal-500">Brilliant.</span>
        </h1>
        <p className="w-full md:w-[90%] lg:w-[80%] text-sm md:text-base text-white/80 leading-relaxed">
          Think of us as an extension of your business, we are proud of our
          unique ability to adapt to each of our client's needs and provide an
          entirely bespoke service. A key part of our process is taking the time
          to get to know your business inside and out, so that we can create
          outstanding work that achieve the results you are looking for, within
          your budget. We know your time is precious, so with our tried and
          tested processes and methodologies, you can let us do what we do best,
          and lead your business to digital brilliance. Discover out range of
          digital marketing services below:
        </p>
      </div>
      <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto my-16 md:my-24 py-10 relative z-10 bg-black">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-1 gap-y-8 sm:gap-4 md:gap-6 lg:gap-8">
          {[
            { num: "01", title: "Digital Strategy" },
            { num: "02", title: "Brand Development" },
            { num: "03", title: "Content Creation" },
            { num: "04", title: "UX Design" },
            { num: "05", title: "Web Development" },
            { num: "06", title: "Digital Marketing" },
          ].map((service, index) => (
            <div
              key={service.num}
              className={`group flex items-center justify-center h-40 sm:h-40 md:h-52 lg:h-64 opacity-100 px-0.5 sm:px-2 ${
                index >= 4 ? "col-start-1 col-span-1 sm:col-auto" : "col-span-1"
              }`}
            >
              <h1 className="text-[10px] sm:text-sm md:text-base lg:text-lg text-white whitespace-nowrap [writing-mode:vertical-lr] rotate-180 group-hover:text-teal-400 transition-colors duration-300">
                <span className="font-semibold italic text-xs sm:text-base md:text-lg lg:text-xl">
                  {service.num}
                </span>
                {".  "}
                <span className="ml-0.5 sm:ml-2 lg:text-2xl lg:text-semibold leading-none">
                  {service.title}
                </span>
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white text-black py-10 md:py-20">
        <div className="flex flex-col lg:flex-row w-[90%] md:w-[85%] lg:w-[80%] mx-auto items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl text-gray-300 font-semibold">
                Here's the latest on our team's
              </h1>
              <h1 className="text-2xl md:text-3xl font-semibold mt-1">
                exciting adventures!
              </h1>
            </div>
            <p className="font-semibold text-[15px] md:text-[16px] text-center lg:text-left leading-relaxed">
              When we're not busy crafting amazing campaigns, you'll find us
              enjoying a bit of fun outside the office! Whether it's letting
              loose at a music event, bonding over Friday team lunches or
              playing minigolf, we love making time for team hangouts. We're big
              on staying inspired and educated, so you might also catch us at a
              design event or exploring the latest practices at a conference.
              It's all part of what keeps us ahead of the game and ready to
              bring fresh ideas to your projects!
            </p>
            <p className="font-semibold text-[15px] md:text-[16px] text-center lg:text-left">
              Follow our instagram below and get involved in the action!
            </p>
            <div className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-medium">@zipsar</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="w-full aspect-video overflow-hidden rounded-lg bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Team Photo 1
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2 aspect-square overflow-hidden rounded-lg bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Team Photo 2
                </div>
              </div>
              <div className="w-1/2 aspect-square overflow-hidden rounded-lg bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Team Photo 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-black text-white py-16">
        <div className="w-[90%] md:w-[80%] mx-auto flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-semibold my-5">
              Let's work together and create something <span className="text-teal-500 italic">great.</span>
            </h1>
            <p className="text-[16px] font-light my-10">Get in touch with a member of our team today to start your journey!</p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <input 
              type="text" 
              className="border-b border-white/50 w-full py-3 bg-transparent text-white placeholder:text-white/50 outline-none focus:border-teal-500 transition-colors" 
              placeholder="Your Name" 
            />
            <input 
              type="email" 
              className="border-b border-white/50 w-full py-3 bg-transparent text-white placeholder:text-white/50 outline-none focus:border-teal-500 transition-colors" 
              placeholder="Your Email" 
            />
            <textarea 
              rows="4" 
              className="border-b border-white/50 w-full py-3 bg-transparent text-white placeholder:text-white/50 outline-none focus:border-teal-500 transition-colors resize-none" 
              placeholder="Your Message"
            ></textarea>
            <button className="mt-6 min-w-[150px] font-semibold rounded-full bg-white text-black flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
              <span>SEND MESSAGE</span>
            </button>
          </div>
        </div>
      </div>

      <footer className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto border-t-2 border-white/30 my-12 md:my-20 pt-12 md:pt-16 relative z-10 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
          <div>
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl text-white">
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
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl text-white">
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
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl text-white">
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
            <h1 className="mb-6 md:mb-8 font-semibold text-lg md:text-xl text-white">
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
      </footer>
    </div>
  );
};

export default About; 