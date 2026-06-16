import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#f9f5ed]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image with Abstract Shapes */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-[80%] h-[90%] bg-[#b99547] rounded-3xl -rotate-3"></div>
          <div className="absolute top-0 left-0 w-[80%] h-[90%] bg-[#2D2D2D] rounded-3xl rotate-3 opacity-20"></div>
          <img 
            src="/images/client-testimonial.webp" 
            alt="Satisfied Client" 
            className="relative w-[80%] h-[500px] object-cover rounded-3xl shadow-2xl"
          />
        </div>

        {/* Right Side: Quote Content */}
        <div className="space-y-8">
          <FaQuoteLeft className="text-5xl text-[#b99547]" />
          
          <blockquote className="text-3xl md:text-4xl font-serif text-[#2D2D2D] leading-snug">
            "Quickpes Services transformed our property in Beckenham. Their 
            team was discreet, professional, and completely resolved our 
            pest issues with zero hassle. Highly recommended!"
          </blockquote>

          <div className="border-l-4 border-[#b99547] pl-6">
            <h4 className="text-xl font-black text-[#2D2D2D] uppercase tracking-widest">
              Sarah Jenkins
            </h4>
            <p className="text-[#b99547] font-bold">
              Homeowner in Beckenham
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}