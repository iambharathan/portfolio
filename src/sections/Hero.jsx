import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space relative">
      {/* Spline 3D Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      >
        <Spline 
          scene="https://prod.spline.design/sg6Cok8lWPcBz-8G/scene.splinecode"
          style={{ 
            width: "100%", 
            height: "100%" 
          }}
        />
      </div>
      
      {/* Text overlay - positioned above Spline scene */}
      <div className="relative z-20 w-full h-full flex items-start justify-center md:items-start md:justify-start pointer-events-none">
        <div className="pointer-events-auto">
          <HeroText />
        </div>
      </div>

      {/* Static watermark blocker - positioned to completely cover watermark */}
      <div className="absolute bottom-4 right-3 z-30 pointer-events-auto">
        {/* Background sized to fully block watermark */}
        <div className="bg-black/98 backdrop-blur-sm rounded-md px-8 py-2 border border-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-6 border border-white/50 rounded-full flex justify-center bg-black/30">
              <div className="w-0.5 h-2 bg-white/70 rounded-full mt-1 animate-pulse"></div>
            </div>
            <svg 
              className="w-3.5 h-3.5 text-white/60" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <div className="text-white/50 text-xs">Scroll</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
