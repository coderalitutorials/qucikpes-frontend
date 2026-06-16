import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Homeabout() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Images (Collage style as per template) */}
        <div className="relative h-[500px]">
          {/* Main Image */}
          <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="/images/pest-about-1.webp" 
            alt="Pest Control Work" 
            className="w-[80%] h-[400px] object-cover rounded-2xl shadow-xl"
          />
          {/* Floating Image */}
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="/images/pest-about-2.webp" 
            alt="Professional Technician" 
            className="absolute bottom-0 right-0 w-[50%] h-[250px] object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D]">
            About <span className="text-[#b99547]">Quickpes</span>
          </h2>
          <p className="text-[#555] text-lg leading-relaxed">
            At Quickpes Services, we specialize in comprehensive pest management solutions across Beckenham. 
            With years of experience, our professional team ensures your home and business environments 
            are kept safe, hygienic, and entirely pest-free using eco-friendly methods.
          </p>
          <p className="text-[#555] text-lg leading-relaxed">
            We understand the stress pests can cause. That’s why we provide rapid response, 
            discreet service, and long-term prevention strategies tailored to your specific needs.
          </p>
          
          <Link 
            to="/about-us" 
            className="inline-block text-[#b99547] font-bold uppercase tracking-[0.2em] hover:text-[#2D2D2D] transition-all"
          >
            READ MORE →
          </Link>
        </div>

      </div>
    </section>
  );
}