




// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Plus } from "lucide-react";

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");
  
//   // Ref map for scrolling
//   const serviceRefs = useRef({});

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", code: "ANT-01", details: "Permanent nest eradication using advanced baiting matrices." },
//     { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", code: "BUG-02", details: "Industrial-grade thermal heat and targeted spray applications." },
//     { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", code: "MTH-03", details: "Specialized target applications for high-end carpets." },
//     { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", code: "BTL-04", details: "Precise treatments along baseboards and dark storage zones." },
//     { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", code: "COCK-05", details: "High-performance gel baits for commercial environments." },
//     { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", code: "MCE-06", details: "Comprehensive tracking and structural proofing." },
//     { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", code: "FLE-07", details: "Floor space misting to halt flea multiplication loops." },
//     { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", code: "WSP-08", details: "Fast-acting chemical injection for roofline nests." },
//     { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", code: "BEE-09", details: "Secure live extraction for colony preservation." },
//     { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", code: "SQR-10", details: "Heavy-gauge metal sealing and entry blockades." },
//     { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", code: "HYG-11", details: "Post-infestation biocide cleansing and sanitation." },
//     { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", code: "BRD-12", details: "Architectural UV-stabilized netting for facade." },
//   ];

//   // Scroll to service effect
//   useEffect(() => {
//     if (location.state?.scrollToService) {
//       setSelectedCategory("All");
//       setTimeout(() => {
//         const target = serviceRefs.current[location.state.scrollToService];
//         if (target) {
//           target.scrollIntoView({ behavior: "smooth", block: "center" });
//         }
//       }, 300);
//     }
//   }, [location]);

//   const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen py-20 px-6 md:px-12">
//       <div className="max-w-[1400px] mx-auto border-l border-[#0A2240]/20">
        
//         <div className="pl-6 md:pl-12 mb-20">
//           <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-[#0A2240] mb-8">
//             Our pest <br/>Services
//           </h1>
//           <div className="flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-[#0A2240]/60">
//             {categories.map(cat => (
//               <button 
//                 key={cat} 
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 border-b-2 ${selectedCategory === cat ? "border-[#0A2240] text-[#0A2240]" : "border-transparent"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((s) => (
//             <div 
//               key={s.id}
//               ref={(el) => (serviceRefs.current[s.title] = el)}
//               onClick={() => navigate("/contact-us")}
//               className="group relative border-b border-r border-[#0A2240]/20 p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0A2240]"
//             >
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.4] transition-opacity duration-500 hidden md:block"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
//               <div 
//                 className="absolute right-4 top-4 w-16 h-16 bg-cover bg-center rounded-lg border border-[#0A2240]/30 md:hidden"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
//               <div className="relative z-10 text-[#0A2240] group-hover:text-[#b99547] transition-colors pr-20 md:pr-0">
//                 <span className="font-mono text-[10px] mb-8 block opacity-40 group-hover:opacity-60">{s.code}</span>
//                 <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">{s.title}</h2>
//                 <p className="text-sm font-medium leading-relaxed opacity-70 mb-10 max-w-xs">{s.details}</p>
//                 <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
//                   BOOK SERVICE <Plus size={16} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }



























// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { CheckCircle2 } from "lucide-react";

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   // Har service ke sath points add kar diye hain
//   const servicesData = [
//     { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", points: ["Nest Eradication", "Barrier Treatment", "Safe for Pets"], details: "Permanent nest eradication using advanced baiting matrices." },
//     { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", points: ["Heat Treatment", "Deep Cleaning", "Quick Relief"], details: "Industrial-grade thermal heat and targeted spray applications." },
//     { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", points: ["Fabric Safe", "Larvae Control", "Long Lasting"], details: "Specialized target applications for high-end carpets." },
//     { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", points: ["Baseboard Spray", "Storage Protection", "Non-Toxic"], details: "Precise treatments along baseboards and dark storage zones." },
//     { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", points: ["Gel Baiting", "Entry Sealing", "Fast Action"], details: "High-performance gel baits for commercial environments." },
//     { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", points: ["Tracking", "Proofing", "Humane Removal"], details: "Comprehensive tracking and structural proofing." },
//     { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", points: ["Floor Misting", "Fast Relief", "Safe Methods"], details: "Floor space misting to halt flea multiplication loops." },
//     { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", points: ["Injection", "Nest Removal", "Safe Perimeter"], details: "Fast-acting chemical injection for roofline nests." },
//     { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", points: ["Live Extraction", "Colony Preserving", "Professional"], details: "Secure live extraction for colony preservation." },
//     { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", points: ["Entry Sealing", "Humane Trapping", "Structural"], details: "Heavy-gauge metal sealing and entry blockades." },
//     { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", points: ["Sanitation", "Biocide Wash", "Deep Clean"], details: "Post-infestation biocide cleansing and sanitation." },
//     { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", points: ["UV Protection", "Invisible", "Custom Fit"], details: "Architectural UV-stabilized netting for facade." },
//   ];

//   const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

//   return (
//     <main className="bg-white pt-20 ">
//       {/* Hero Section */}
//       {/* <section className="relative h-[400px]  w-full mb-20 flex items-center justify-center text-center bg-[#0A2240]">
//         <img src="/images/service-hero.webp" className="absolute inset-0  w-full h-full object-cover opacity-40" alt="Hero" />
//         <h1 className="relative z-10 text-white text-6xl md:text-8xl font-black uppercase tracking-tighter">Our Services</h1>
//       </section> */}

// <section className="relative h-[400px] w-full mb-20 flex items-center justify-center text-center bg-[#0A2240] overflow-hidden">
//   <img
//     src="/images/service-hero.webp"
//     className="absolute inset-0 w-full h-full  object-center opacity-40"
//     alt="Hero"
//   />

//   <h1 className="relative z-10 text-white text-6xl md:text-8xl font-black uppercase tracking-tighter">
//     Our Services
//   </h1>
// </section>



//       <div className="max-w-[1200px] mx-auto px-6 mb-20">
//         {/* Category Filter */}
//         <div className="flex justify-center gap-6 mb-20">
//           {categories.map((cat) => (
//             <button key={cat} onClick={() => setSelectedCategory(cat)} className={`text-sm font-black uppercase px-6 py-3 border-2 ${selectedCategory === cat ? "bg-[#0A2240] text-white border-[#0A2240]" : "border-[#0A2240] text-[#0A2240]"}`}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Services Layout */}
//         <div className="flex flex-col gap-12">
//           {filtered.map((s, index) => {
//             const isEven = index % 2 === 0;
//             return (
//               <div key={s.id} onClick={() => navigate("/contact-us")} className={`grid md:grid-cols-2 gap-8 items-center cursor-pointer group ${isEven ? "" : "flex-row-reverse"}`}>
//                 {/* Image Side with rounded borders */}
//                 <div className="h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
//                   <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                 </div>
                
//                 {/* Text Side */}
//                 <div className="bg-[#f9f5ed] p-12 rounded-[2rem] border border-[#b99547]/20 h-full flex flex-col justify-center">
//                   <h2 className="text-4xl font-black uppercase mb-6 text-[#0A2240]">{s.title}</h2>
//                   <p className="text-lg text-[#555] mb-8 leading-relaxed">{s.details}</p>
                  
//                   {/* Points */}
//                   <div className="grid grid-cols-2 gap-4">
//                     {s.points.map((point, i) => (
//                       <div key={i} className="flex items-center gap-2 font-bold text-[#0A2240]">
//                         <CheckCircle2 size={18} className="text-[#b99547]" /> {point}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </main>
//   );
// }














import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Ref store karne ke liye
  const serviceRefs = useRef({});

  const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

  const servicesData = [
    { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", points: ["Nest Eradication", "Barrier Treatment", "Safe for Pets"], details: "Permanent nest eradication using advanced baiting matrices." },
    { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", points: ["Heat Treatment", "Deep Cleaning", "Quick Relief"], details: "Industrial-grade thermal heat and targeted spray applications." },
    { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", points: ["Fabric Safe", "Larvae Control", "Long Lasting"], details: "Specialized target applications for high-end carpets." },
    { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", points: ["Baseboard Spray", "Storage Protection", "Non-Toxic"], details: "Precise treatments along baseboards and dark storage zones." },
    { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", points: ["Gel Baiting", "Entry Sealing", "Fast Action"], details: "High-performance gel baits for commercial environments." },
    { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", points: ["Tracking", "Proofing", "Humane Removal"], details: "Comprehensive tracking and structural proofing." },
    { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", points: ["Floor Misting", "Fast Relief", "Safe Methods"], details: "Floor space misting to halt flea multiplication loops." },
    { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", points: ["Injection", "Nest Removal", "Safe Perimeter"], details: "Fast-acting chemical injection for roofline nests." },
    { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", points: ["Live Extraction", "Colony Preserving", "Professional"], details: "Secure live extraction for colony preservation." },
    { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", points: ["Entry Sealing", "Humane Trapping", "Structural"], details: "Heavy-gauge metal sealing and entry blockades." },
    { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", points: ["Sanitation", "Biocide Wash", "Deep Clean"], details: "Post-infestation biocide cleansing and sanitation." },
    { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", points: ["UV Protection", "Invisible", "Custom Fit"], details: "Architectural UV-stabilized netting for facade." },
  ];

  // Scroll logic
  useEffect(() => {
    if (location.state?.scrollToService) {
      const targetTitle = location.state.scrollToService;
      // Agar "All" category selected nahi hai, toh pehle All pe switch karna padega taake element DOM mein ho
      setSelectedCategory("All");
      
      setTimeout(() => {
        const element = serviceRefs.current[targetTitle];
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [location.state]);

  const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

  return (
    <main className="bg-white pt-20">
      <section className="relative h-[400px] w-full mb-20 flex items-center justify-center text-center bg-[#0A2240] overflow-hidden">
        <img src="/images/service-hero.webp" className="absolute inset-0 w-full h-full object-center opacity-40" alt="Hero" />
        <h1 className="relative z-10 text-white text-6xl md:text-8xl font-black uppercase tracking-tighter">Our Services</h1>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 mb-20">
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`text-sm font-black uppercase px-6 py-3 border-2 ${selectedCategory === cat ? "bg-[#0A2240] text-white border-[#0A2240]" : "border-[#0A2240] text-[#0A2240]"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-12">
          {filtered.map((s, index) => (
            <div 
              key={s.id} 
              ref={(el) => (serviceRefs.current[s.title] = el)} 
              onClick={() => navigate("/contact-us")} 
              className={`grid md:grid-cols-2 gap-8 items-center cursor-pointer group ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
            >
              <div className="h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              
              <div className="bg-[#f9f5ed] p-12 rounded-[2rem] border border-[#b99547]/20 h-full flex flex-col justify-center">
                <h2 className="text-4xl font-black uppercase mb-6 text-[#0A2240]">{s.title}</h2>
                <p className="text-lg text-[#555] mb-8 leading-relaxed">{s.details}</p>
                <div className="grid grid-cols-2 gap-4">
                  {s.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-2 font-bold text-[#0A2240]">
                      <CheckCircle2 size={18} className="text-[#b99547]" /> {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}