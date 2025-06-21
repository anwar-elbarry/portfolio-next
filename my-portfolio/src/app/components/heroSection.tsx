"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import profile from "@/app/assets/profile.png";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular,faJava,faLaravel,faVuejs,faGithub,faLinkedin,faDiscord } from "@fortawesome/free-brands-svg-icons";
import mockHeroLottieData from "@/app/components/lottie/hero-lottie.json";
import { ArrowBigRight, Sparkle } from "lucide-react";
import ResumeBtn from "./ui/resume-btn";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  setIsLoaded(true);
    
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center flex-col  w-full overflow-auto bg-gradient-to-br from-black via-gray-900 to-black">
      <section className="hero w-full h-[100vh] ">
{/* Animated Background Elements */}
<div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            top: '10%',
            left: '5%',
          }}
        />
        <div 
          className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-green-400/20 to-lime-500/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.05}px, ${-mousePosition.y * 0.05}px)`,
            bottom: '10%',
            right: '5%',
          }}
        />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Lottie Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl opacity-10 sm:opacity-15 lg:opacity-20 mix-blend-screen transition-transform duration-500"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        >
          <Lottie 
            animationData={mockHeroLottieData} 
            loop={true} 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 min-h-screen">
        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:flex px-6 lg:justify-between lg:items-center lg:h-screen lg:px-8 xl:px-12">
          {/* Left Content */}
          <div className="flex-1 max-w-3xl">
            <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {/* Greeting Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">Available for opportunities</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-bold mb-8 leading-tight">
                <div className="overflow-hidden">
                  <span className="inline-block bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent animate-pulse transform hover:scale-105 transition-transform duration-300 text-5xl xl:text-6xl 2xl:text-7xl">
                    Hello! 👋
                  </span>
                </div>
                <div className="mt-2 overflow-hidden">
                  <span className="inline-block text-white font-medium text-4xl xl:text-5xl 2xl:text-6xl">
                    I&apos;m{' '}
                    <span className="relative group">
                      <span className="text-green-500">
                       El barry Anouar
                      </span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                  </span>
                </div>
                <div className="mt-4 overflow-hidden">
                  <span className="inline-block text-white/90 font-light tracking-wide text-3xl xl:text-4xl 2xl:text-5xl">
                    <span className="text-green-400 font-medium">&lt;</span>
                    Full Stack Developer
                    <span className="text-green-400 font-medium">/&gt;</span>
                  </span>
                </div>
              </h1>

              {/* Subtitle */}
              <p className="text-xl xl:text-2xl text-white/80 mb-12 leading-relaxed">
                Crafting digital experiences that blend creativity with cutting-edge technology
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-6 ${isLoaded ? "slide-in-left stagger-6" : ""}`}>
                <a href="/contact" className="text-sm btn-primary inline-flex items-center gap-2 group">
                  <Sparkle size={20} className="group-hover:rotate-12 transition-transform" />
                  Let&apos;s Connect
                </a>
                <a href="/projects" className="text-sm btn-secondary inline-flex items-center gap-2 group">
                  View My Work
                  <ArrowBigRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <ResumeBtn />
              </div>
            </div>
          </div>
          { /* img portfolio*/ }
          <div className="flex-1 max-w-3xl scale-75">
            <div className={`relative flex justify-center ${isLoaded ? "slide-in-right" : ""}`}>
              <div className="relative">
                {/* Multiple glowing rings */}
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl scale-110 pulse-glow"></div>
                <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-2xl scale-125 rotate-slow"></div>

                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: "5s" }}>
                  <div className="absolute top-1/2 -left-4 w-3 h-3 bg-emerald-500 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute top-1/2 -right-4 w-2 h-2 bg-emerald-400 rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute -bottom-4 left-1/2 w-4 h-4 border border-emerald-500 transform -translate-x-1/2 rotate-45"></div>
                  <div className="absolute -top-4 left-1/2 w-4 h-4 border border-emerald-500 transform -translate-x-1/2 rotate-45"></div>
                </div>

                {/* Main image container */}
                <div className="relative w-60 h-120 lg:w-96 floating-animation">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-4xl"></div>
                  <Image
                    src={profile}
                    alt="El barry Anouar"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-4xl border-4 border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300"
                    priority
                  />

                  {/* Floating skill badges */}
                  <div className="absolute -top-8 -left-8 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-full px-3 py-1 text-sm text-red-500 floating-animation">
                    <FontAwesomeIcon icon={faAngular} className="mr-2"/>
                    Angular
                  </div>
                  <div
                    className="absolute -bottom-8 -right-8 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-full px-3 py-1 text-sm text-yellow-400 floating-animation"
                    style={{ animationDelay: "1s" }}
                  >
                    <FontAwesomeIcon icon={faJava} className="mr-2"/>
                    Java
                  </div>
                  <div className="absolute top-50 -right-30 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-full px-3 py-1 text-sm text-red-400 floating-animation">
                    <FontAwesomeIcon icon={faLaravel} className="mr-2"/>
                    Laravel
                  </div>
                  <div
                    className="absolute bottom-50 -left-30 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-full px-3 py-1 text-sm text-green-400 floating-animation"
                    style={{ animationDelay: "1s" }}
                  >
                    <FontAwesomeIcon icon={faVuejs} className="mr-2"/>
                    Vue.js
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout (below lg) */}
        <div className="lg:hidden flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 py-8">
          {/* Profile Image */}
          <div className={`relative flex justify-center lg:justify-end ${isLoaded ? "slide-in-right" : ""}`}>
              <div className="relative">
                {/* Multiple glowing rings */}
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl scale-110 pulse-glow"></div>
                <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-2xl scale-125 rotate-slow"></div>

                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                  <div className="absolute -top-4 left-1/2 w-3 h-3 bg-emerald-500 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute top-1/2 -right-4 w-2 h-2 bg-emerald-400 rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute -bottom-4 left-1/2 w-4 h-4 border border-emerald-500 transform -translate-x-1/2 rotate-45"></div>
                  <div className="absolute top-1/2 -left-4 w-3 h-3 bg-emerald-300 rounded-full transform -translate-y-1/2"></div>
                </div>

                {/* Main image container */}
                <div className="relative w-80 h-80 lg:w-96 floating-animation">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full"></div>
                  <Image
                    src={profile}
                    alt="El barry Anouar"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-full border-4 border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300"
                    priority
                  />

                  {/* Floating skill badges */}
                  <div className="absolute -top-10 -left-8 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-full px-3 py-1 text-sm text-red-500 floating-animation">
                    <FontAwesomeIcon icon={faAngular} className="mr-2"/>
                    Angular
                  </div>
                  <div
                    className="absolute -bottom-10 -right-8 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-full px-3 py-1 text-sm text-yellow-400 floating-animation"
                    style={{ animationDelay: "1s" }}
                  >
                    <FontAwesomeIcon icon={faJava} className="mr-2"/>
                    Java
                  </div>
                  <div className="absolute -top-12 -right-8 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-full px-3 py-1 text-sm text-red-400 floating-animation">
                    <FontAwesomeIcon icon={faLaravel} className="mr-2"/>
                    Laravel
                  </div>
                  <div
                    className="absolute -bottom-12 -left-8 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-full px-3 py-1 text-sm text-green-400 floating-animation"
                    style={{ animationDelay: "1s" }}
                  >
                    <FontAwesomeIcon icon={faVuejs} className="mr-2"/>
                    Vue.js
                  </div>

                </div>
              </div>
            </div>

          {/* Content */}
          <div className={`text-center transition-all duration-1000 w-full ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 mb-6 sm:mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white/90">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-bold mb-6 sm:mb-8 leading-tight">
              <div className="overflow-hidden">
                <span className="inline-block bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent animate-pulse transform hover:scale-105 transition-transform duration-300 text-3xl sm:text-4xl md:text-5xl">
                  Hello! 👋
                </span>
              </div>
              <div className="mt-2 overflow-hidden">
                <span className="inline-block text-white font-medium text-2xl sm:text-3xl md:text-4xl">
                  I&apos;m{' '}
                  <span className="relative group">
                    <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent font-extrabold hover:from-green-300 hover:via-emerald-300 hover:to-lime-300 transition-all duration-300">
                     El barry Anouar
                    </span>
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </span>
                </span>
              </div>
              <div className="mt-3 sm:mt-4 overflow-hidden">
                <span className="inline-block text-white/90 font-light tracking-wide text-lg sm:text-xl md:text-2xl">
                  <span className="text-green-400 font-medium">&lt;</span>
                  Full Stack Developer
                  <span className="text-green-400 font-medium">/&gt;</span>
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
              Crafting digital experiences that blend creativity with cutting-edge technology
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                <span className="relative z-10">Let&apos;s Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105">
                View My Work
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>

       {/* Scroll indicator with animation */}
       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center hover:border-emerald-500 transition-colors cursor-pointer">
          <div className="w-1 h-3 bg-emerald-500 rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-slate-500 text-xs mt-2 text-center">Scroll</p>
      </div>
      </div>
      </section>
            {/* Social links with animations */}
            <div className={`z-50 fixed bottom-8 right-1 transform -translate-x-1/2 flex flex-col gap-6 ${isLoaded ? "slide-in-left stagger-6" : ""}`}>
                {[
                  { icon: faGithub, href: "#", delay: "0.1s" },
                  { icon: faLinkedin, href: "#", delay: "0.2s" },
                  { icon: faDiscord, href: "#", delay: "0.3s" },
                ].map(({ icon, href, delay }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
                    style={{ animationDelay: delay }}
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
            </div>
    </div>
  );
}