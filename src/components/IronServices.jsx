

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Sparkles,
//   Crosshair,
//   ArrowUpRight,
//   ChevronRight,
// } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const servicesData = [
//     {
//       id: "01",
//       title: "Mice & Rodent Control",
//       icon: ShieldAlert,
//       image: "/images/rodents.webp",
//       tag: "Mice & Rats",
//       details:
//         "Complete removal of mice and rats from your property. We use safe baiting systems and seal up all holes, cracks, and entry points to stop them from coming back inside.",
//     },
//     {
//       id: "02",
//       title: "Wasp Nest Eradication",
//       icon: Crosshair,
//       image: "/images/wasps.webp",
//       tag: "Wasp Removal",
//       details:
//         "Fast and professional treatment to safely remove active wasp nests from your loft, walls, or garden areas. Our local team responds quickly.",
//     },
//     {
//       id: "03",
//       title: "Bed Bug Heat Treatment",
//       icon: Sparkles,
//       image: "/images/bedbugs.webp",
//       tag: "Bed Bugs",
//       details:
//         "Eco-friendly thermal heat treatments that completely kill bed bugs and their eggs in mattresses, furniture, and carpets. Guaranteed results in just a single visit.",
//     },
//   ];

//   return (
//     <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-t border-[#0A2240]/10 isolate backface-hidden">
      
//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Modernist Section Header */}
//         <div className="max-w-3xl text-left mb-16 space-y-3">
//           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A2240]/70 block">
//             // Core Operational Lines
//           </span>
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
//             Emergency <br /> Protection Hub
//           </h2>
//         </div>

//         {/* !!! THE SPLIT-SCREEN CINEMATIC DECK LAYOUT */}
//         <div className="flex flex-col lg:flex-row items-stretch gap-4 h-[600px] lg:h-[550px] w-full transform-gpu">
//           {servicesData.map((service, index) => {
//             const Icon = service.icon;
//             const isHovered = hoveredIndex === index;
//             const anyHovered = hoveredIndex !== null;

//             // FIX: Specific layout bounds instead of layout broad transitions to prevent repaint cycles
//             const flexClass = anyHovered 
//               ? isHovered 
//                 ? "lg:flex-[3.5] flex-[2]" 
//                 : "lg:flex-[0.8] flex-[0.5] opacity-40 select-none"
//               : "flex-1";

//             return (
//               <div
//                 key={service.id}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 onClick={() => navigate("/contact-us")}
//                 // FIX: Removed transition-all, optimized with precise cubic-bezier flex-basis and opacity rules
//                 className={`relative rounded-[32px] overflow-hidden bg-[#161b22] text-white p-6 md:p-8 flex flex-col justify-between transition-[flex,opacity,border-color] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border border-white/10 shadow-xl transform-gpu will-change-[flex-basis,opacity] ${flexClass}`}
//               >
//                 {/* Background Image Layer */}
//                 <div className="absolute inset-0 z-0 transition-transform duration-500 transform-gpu">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     // FIX: Restricted to simple transform/filter transitions to avoid frame drop
//                     className={`w-full h-full object-cover transition-[transform,filter] duration-500 transform-gpu ${
//                       isHovered 
//                         ? "scale-100 grayscale-0 brightness-[0.75] contrast-[1.05]" 
//                         : "scale-105 grayscale-[15%] brightness-[0.4] contrast-100"
//                     }`}
//                   />
                  
//                   {/* METALLIC GOLD MASK OVERLAY */}
//                   <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-t from-[#C5A86B]/30 via-transparent to-transparent pointer-events-none" />
                  
//                   {/* Bottom Text Protector Gradient */}
//                   <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-[#0A2240] via-[#0A2240]/40 to-transparent pointer-events-none ${
//                     isHovered ? "opacity-60" : "opacity-80"
//                   }`} />
//                 </div>

//                 {/* Top Row: Floating Indicator Status */}
//                 <div className="relative z-10 flex items-center justify-between w-full">
//                   <div className="flex items-center gap-4">
//                     {/* FIX: Swapped transition-all with explicit transform/colors */}
//                     <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-[transform,background-color,color] duration-500 ${
//                       isHovered 
//                         ? "bg-[#C5A86B] text-[#0A2240] border-transparent rotate-[360deg]" 
//                         : "bg-[#0A2240]/90 text-[#C5A86B] border-white/20"
//                     }`}>
//                       <Icon className="w-5 h-5" strokeWidth={2} />
//                     </div>
//                     <span className={`font-mono text-xs font-black tracking-widest text-white/90 bg-[#0A2240]/70 px-2 py-0.5 rounded transition-opacity duration-300 ${
//                       anyHovered && !isHovered ? "lg:opacity-0" : "opacity-100"
//                     }`}>
//                       0{service.id}
//                     </span>
//                   </div>

//                   {/* Corner Arrow Indicator */}
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-[transform,background-color,opacity] duration-500 ${
//                     isHovered 
//                       ? "bg-white text-[#0A2240] rotate-45 opacity-100" 
//                       : "bg-[#0A2240]/90 text-white/80 border-white/20 lg:opacity-0"
//                   }`}>
//                     <ArrowUpRight className="w-4 h-4" />
//                   </div>
//                 </div>

//                 {/* Bottom Row: Content Reveal Engine */}
//                 {/* FIX: Removed backdrop-blur to drop processing latency on mobile layers */}
//                 <div className="relative z-10 w-full space-y-4 bg-gradient-to-t from-[#0A2240] via-[#0A2240]/90 to-transparent p-5 rounded-b-[24px]">
//                   <div className="inline-block px-3 py-1 rounded-md bg-[#0A2240] border border-[#C5A86B]/30 text-[9px] font-mono tracking-widest uppercase text-[#C5A86B]">
//                     {service.tag}
//                   </div>

//                   <div className="space-y-3">
//                     <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight font-sans whitespace-nowrap overflow-hidden text-ellipsis text-white">
//                       {service.title}
//                     </h3>
                    
//                     {/* Height-collapse mechanics */}
//                     {/* FIX: Replaced complex layout auto transitions with smooth visibility/opacity tracking */}
//                     <div className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden transform-gpu ${
//                       isHovered ? "max-h-[150px] opacity-100 pt-1" : "max-h-0 opacity-0 pointer-events-none"
//                     }`}>
//                       <p className="text-xs md:text-sm font-medium leading-relaxed text-slate-200 max-w-xl">
//                         {service.details}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Decorative Side Label for Compressed Cards on Desktop */}
//                 {!isHovered && anyHovered && (
//                   <div className="absolute hidden lg:block inset-x-0 bottom-32 text-center pointer-events-none">
//                     <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black text-[#C5A86B] bg-[#0A2240]/90 border border-[#C5A86B]/20 px-3 py-1 rounded-full rotate-90 inline-block origin-center whitespace-nowrap shadow-md">
//                       View Service
//                     </span>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Global Footer Button */}
//         <div className="text-left md:text-center mt-16">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center gap-6 bg-[#0A2240] hover:bg-[#0A2240]/90 text-white font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer shadow-xl shadow-[#0A2240]/10"
//           >
//             <span>View All Services</span>
//             <div className="w-5 h-5 rounded-full bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//               <ChevronRight className="w-3.5 h-3.5 text-[#0A2240]" strokeWidth={3} />
//             </div>
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function PesSaveServices() {
//   const navigate = useNavigate();
//   const [active, setActive] = useState(0);

//   const services = [
//     { id: "01", title: "Structural Proofing", desc: "Advanced physical fortification for elite estates.", img: "/images/rodents.webp" },
//     { id: "02", title: "Precision Eradication", desc: "Surgical, invisible protocols for total clearance.", img: "/images/wasps.webp" },
//     { id: "03", title: "Heat Treatment", desc: "Thermal mastery for sensitive environments.", img: "/images/bedbugs.webp" }
//   ];

//   return (
//     <section className="bg-[#0A2240] py-32 relative overflow-hidden">
//       {/* Abstract Background Glow */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b99547]/5 rounded-full blur-[150px]" />
      
//       <div className="max-w-[1400px] mx-auto px-12 relative z-10">
//         <div className="flex flex-col lg:flex-row gap-24">
          
//           {/* Left: Interactive Menu */}
//           <div className="flex-1 flex flex-col justify-center">
//             <h3 className="text-[#b99547] font-black tracking-[0.6em] uppercase text-xs mb-10 border-l-2 border-[#b99547] pl-4">Operational Index</h3>
//             {services.map((s, idx) => (
//               <div 
//                 key={idx}
//                 onMouseEnter={() => setActive(idx)}
//                 className="py-10 border-b border-[#b99547]/20 cursor-pointer group"
//               >
//                 <div className={`text-8xl font-black transition-all duration-500 ${active === idx ? "text-[#b99547]" : "text-white/20 group-hover:text-white/40"}`}>
//                   {s.id}
//                 </div>
//                 <h2 className="text-5xl font-black text-white uppercase mt-4 group-hover:pl-6 transition-all duration-500">
//                   {s.title}
//                 </h2>
//               </div>
//             ))}
//           </div>

//           {/* Right: Visual Showcase (CSS Only) */}
//           <div className="flex-1 h-[600px] relative hidden lg:block rounded-[40px] overflow-hidden border border-[#b99547]/20">
//             {services.map((s, idx) => (
//               <div
//                 key={idx}
//                 className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${active === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
//               >
//                 <img 
//                   src={s.img} 
//                   className="w-full h-full object-cover" 
//                   alt={s.title} 
//                 />
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240] via-transparent to-transparent" />
                
//                 {/* Text Description */}
//                 <div className="absolute bottom-10 left-10 p-8">
//                   <p className="text-[#b99547] font-bold text-xl uppercase tracking-widest italic">
//                     {s.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   const services = [
//     {
//       title: "Structural Proofing",
//       image: "/images/rodents.webp",
//       desc: "Impenetrable barriers for estate-wide security."
//     },
//     {
//       title: "Precision Eradication",
//       image: "/images/wasps.webp",
//       desc: "Surgical, invisible protocols for absolute results."
//     },
//     {
//       title: "Heat Treatment",
//       image: "/images/bedbugs.webp",
//       desc: "Eco-conscious thermal mastery for sensitive environments."
//     }
//   ];

//   return (
//     <section className="bg-[#b99547] py-24">
//       <div className="max-w-[1600px] mx-auto px-6">
        
//         {/* Cinematic Header */}
//         <div className="mb-24">
//           <h2 className="text-[12vw] font-black text-[#0A2240] uppercase leading-[0.8] tracking-tighter">
//             Elite<br/>Protocol
//           </h2>
//         </div>

//         {/* Cinematic Cards */}
//         <div className="flex flex-col gap-2">
//           {services.map((service, idx) => (
//             <div 
//               key={idx}
//               className="relative h-[60vh] w-full flex items-end overflow-hidden border-b border-[#0A2240]/30 group cursor-pointer"
//               onClick={() => navigate("/contact-us")}
//             >
//               {/* Background Image that scales on group hover */}
//               <img 
//                 src={service.image} 
//                 alt={service.title}
//                 className="absolute inset-0 w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-[2000ms] ease-out group-hover:scale-105"
//               />
              
//               {/* Dark Overlay for contrast */}
//               <div className="absolute inset-0 bg-[#0A2240]/40 group-hover:bg-[#0A2240]/20 transition-all duration-500" />

//               {/* Service Details */}
//               <div className="relative z-10 w-full p-12 flex justify-between items-end">
//                 <div>
//                   <span className="text-[#b99547] font-bold tracking-[0.2em] text-sm uppercase mb-2 block">0{idx + 1}</span>
//                   <h3 className="text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     {service.title}
//                   </h3>
//                   <p className="text-white/70 max-w-sm text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0 delay-100">
//                     {service.desc}
//                   </p>
//                 </div>

//                 {/* Corner Arrow */}
//                 <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
//                   <ArrowUpRight className="w-8 h-8 text-white group-hover:text-[#0A2240] transition-colors" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   const services = [
//     {
//       title: "Structural Proofing",
//       image: "/images/rodents.webp",
//       desc: "Advanced physical fortification to ensure your estate remains a sealed, pest-free environment."
//     },
//     {
//       title: "Precision Eradication",
//       image: "/images/wasps.webp",
//       desc: "Surgical, non-invasive removal protocols ensuring absolute invisibility during operation."
//     },
//     {
//       title: "Heat Treatment",
//       image: "/images/bedbugs.webp",
//       desc: "Eco-friendly thermal technology to eliminate threats at a microscopic level."
//     }
//   ];

//   return (
//     <section className="bg-[#b99547] py-32 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Unique Header Layout */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
//           <h2 className="text-7xl md:text-9xl font-black text-[#0A2240] uppercase tracking-tighter leading-[0.8]">
//             Elite <br/><span className="text-white italic">Protocol</span>
//           </h2>
//           <p className="max-w-md text-[#0A2240] font-bold text-lg border-l-4 border-[#0A2240] pl-6">
//             A bespoke approach to pest management. We do not treat properties; we secure assets.
//           </p>
//         </div>

//         {/* Stacked Unique Cards */}
//         <div className="space-y-6">
//           {services.map((service, idx) => (
//             <div 
//               key={idx}
//               className="group relative h-[450px] w-full overflow-hidden rounded-[40px] flex items-end p-12 transition-all duration-700 hover:h-[500px]"
//             >
//               {/* Background Image */}
//               <img 
//                 src={service.image} 
//                 alt={service.title}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
//               />
              
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-[#0A2240]/60 transition-colors duration-500 group-hover:bg-[#0A2240]/40" />

//               {/* Content Box */}
//               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
//                 <div>
//                   <span className="text-[#b99547] font-black tracking-[0.4em] uppercase text-xs mb-4 block">0{idx + 1} // Service</span>
//                   <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
//                     {service.title}
//                   </h3>
//                 </div>
                
//                 <div className="md:w-1/3">
//                   <p className="text-white/80 font-medium text-lg mb-6 leading-relaxed">
//                     {service.desc}
//                   </p>
//                   <button 
//                     onClick={() => navigate("/contact-us")}
//                     className="flex items-center gap-3 bg-white text-[#0A2240] px-8 py-3 font-black uppercase text-sm tracking-widest hover:bg-[#b99547] hover:text-white transition-all"
//                   >
//                     Deploy Specialist <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }











// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   const services = [
//     {
//       title: "Structural Proofing",
//       image: "/images/rats.webp",
//       desc: "Advanced physical fortification to ensure your estate remains a sealed, pest-free environment.",
//     },
//     {
//       title: "Precision Eradication",
//       image: "/images/wasps.webp",
//       desc: "Surgical, non-invasive removal protocols ensuring absolute invisibility during operation.",
//     },
//     {
//       title: "Heat Treatment",
//       image: "/images/bedbugs.webp",
//       desc: "Eco-friendly thermal technology to eliminate threats at a microscopic level.",
//     },
//   ];

//   return (
//     <section className="bg-[#b99547] py-16 md:py-24 lg:py-32 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-20 gap-6 md:gap-12">
//           <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-[#0A2240] uppercase tracking-tighter leading-[0.85]">
//             Elite <br />
//             <span className="text-white italic">Protocol</span>
//           </h2>

//           <p className="max-w-md text-[#0A2240] font-bold text-base md:text-lg border-l-4 border-[#0A2240] pl-5">
//             A bespoke approach to pest management. We do not treat properties;
//             we secure assets.
//           </p>
//         </div>

//         <div className="space-y-6">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="group relative min-h-[520px] sm:min-h-[460px] md:h-[450px] w-full overflow-hidden rounded-[28px] md:rounded-[40px] flex items-end p-6 sm:p-8 md:p-12 transition-all duration-700 md:hover:h-[500px]"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
//               />

//               <div className="absolute inset-0 bg-[#0A2240]/65 md:bg-[#0A2240]/60 transition-colors duration-500 group-hover:bg-[#0A2240]/45" />

//               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-6 md:gap-8">
//                 <div>
//                   <span className="text-[#b99547] font-black tracking-[0.25em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3 block">
//                     0{idx + 1} // Service
//                   </span>

//                   <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
//                     {service.title}
//                   </h3>
//                 </div>

//                 <div className="w-full md:w-1/3">
//                   <p className="text-white/85 font-medium text-base md:text-lg mb-5 leading-relaxed">
//                     {service.desc}
//                   </p>

//                   <button
//                     onClick={() => navigate("/contact-us")}
//                     className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#0A2240] px-6 md:px-8 py-3 font-black uppercase text-xs md:text-sm tracking-widest hover:bg-[#b99547] hover:text-white transition-all"
//                   >
//                     Deploy Specialist <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }










// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   const services = [
//     {
//       title: "Structural Proofing",
//       image: "/images/rats.webp",
//       desc: "Advanced physical fortification to ensure your estate remains a sealed, pest-free environment.",
//     },
//     {
//       title: "Precision Eradication",
//       image: "/images/wasps.webp",
//       desc: "Surgical, non-invasive removal protocols ensuring absolute invisibility during operation.",
//     },
//     {
//       title: "Heat Treatment",
//       image: "/images/bedbugs.webp",
//       desc: "Eco-friendly thermal technology to eliminate threats at a microscopic level.",
//     },
//   ];

//   return (
//     <section className="bg-[#b99547] py-16 md:py-24 lg:py-32 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-20 gap-6 md:gap-12">
//           <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-[#0A2240] uppercase tracking-tighter leading-[0.85]">
//             Elite <br />
//             <span className="text-white italic">Protocol</span>
//           </h2>

//           <p className="max-w-md text-[#0A2240] font-bold text-base md:text-lg border-l-4 border-[#0A2240] pl-5">
//             A bespoke approach to pest management. We do not treat properties;
//             we secure assets.
//           </p>
//         </div>

//         {/* Service Cards */}
//         <div className="space-y-6">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               onClick={() => navigate("/contact-us")}
//               className="group relative min-h-[520px] sm:min-h-[460px] md:h-[450px] w-full overflow-hidden rounded-[28px] md:rounded-[40px] flex items-end p-6 sm:p-8 md:p-12 transition-all duration-700 md:hover:h-[500px] cursor-pointer"
//             >
//               {/* Background Image */}
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-[#0A2240]/65 md:bg-[#0A2240]/60 transition-colors duration-500 group-hover:bg-[#0A2240]/45" />

//               {/* Content */}
//               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-6 md:gap-8">
//                 <div>
//                   <span className="text-[#b99547] font-black tracking-[0.25em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3 block">
//                     0{idx + 1} // Service
//                   </span>

//                   <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
//                     {service.title}
//                   </h3>
//                 </div>

//                 <div className="w-full md:w-1/3">
//                   <p className="text-white/85 font-medium text-base md:text-lg mb-5 leading-relaxed">
//                     {service.desc}
//                   </p>

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigate("/contact-us");
//                     }}
//                     className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#0A2240] px-6 md:px-8 py-3 font-black uppercase text-xs md:text-sm tracking-widest hover:bg-[#b99547] hover:text-white transition-all"
//                   >
//                     Deploy Specialist
//                     <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }












import React from "react";
import { useNavigate } from "react-router-dom";
import { GiAnt, GiBee, GiSpiderWeb } from "react-icons/gi";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      title: "ANT CONTROL service",
      icon: GiAnt,
      desc: "Comprehensive solutions to eliminate ant colonies and prevent future infestations in your property.",
    },
    {
      title: "WASP & BEE REMOVAL",
      icon: GiBee,
      desc: "Safe and effective removal of wasp and bee nests to ensure your family's safety and peace of mind.",
    },
    {
      title: "SPIDER ELIMINATION",
      icon: GiSpiderWeb,
      desc: "Targeted treatments to clear spider webs and prevent arachnid activity inside your home.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-6">
            OUR <span className="text-[#b99547]">SERVICES</span>
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <p className="max-w-xl text-[#555] text-lg">
              Professional pest eradication in Beckenham. We provide reliable solutions 
              to keep your premises safe and secure.
            </p>
            <button 
              onClick={() => navigate("/services")}
              className="border-2 border-[#b99547] text-[#b99547] px-8 py-3 font-bold uppercase hover:bg-[#b99547] hover:text-white transition-all"
            >
              View All Services
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => navigate("/contact-us")}
              className="bg-[#f9f5ed] p-10 rounded-2xl border border-[#b99547]/20 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-[#b99547] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <service.icon className="text-3xl text-white" />
              </div>
              
              <h3 className="text-2xl font-serif text-[#2D2D2D] mb-4">
                {service.title}
              </h3>
              
              <p className="text-[#555] mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="flex items-center text-[#b99547] font-bold uppercase tracking-widest group-hover:text-[#2D2D2D] transition-colors">
                contact us <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}