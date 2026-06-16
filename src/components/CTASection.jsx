import React from "react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              YOU IDENTIFY THE PESTS, <br />
              <span className="text-[#b99547]">WE ELIMINATE THE THREAT.</span>
            </h2>
          </div>

          {/* Right: CTA Button */}
          <div>
            <button
              onClick={() => navigate("/contact-us")}
              className="bg-[#b99547] text-[#2D2D2D] px-10 py-6 font-black text-lg uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl"
            >
              Let's Talk About service that you need  
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}