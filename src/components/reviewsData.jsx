



// import React from "react";
// import { Quote } from "lucide-react";

// const reviews = [
//   {
//     name: "Alistair Vance",
//     text: "The structural fortification they installed was invisible yet impenetrable. A true masterclass in property defense.",
//   },
//   {
//     name: "Marcus Thorne",
//     text: "I appreciated the clinical, no-nonsense approach. The facility was cleared without a single disruption to our workflow.",
//   },
//   {
//     name: "Dominic West",
//     text: "When other companies failed, their thermal protocols succeeded. They treat properties with genuine care.",
//   },
// ];

// export default function PesSaveTestimonials() {
//   return (
//     <section className="bg-[#b99547] py-32 overflow-hidden border-t border-[#0A2240]/20">
//       <div className="max-w-[1400px] mx-auto px-12">
        
//         {/* Header */}
//         <div className="mb-24">
//           <span className="text-[#0A2240] font-mono uppercase tracking-[0.4em] text-xs mb-6 block">
//             // Client Verification
//           </span>
//           <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
//             Voices of <br/> <span className="text-[#0A2240]">The Estate</span>
//           </h2>
//         </div>

//         {/* Testimonials - Interactive Hover Effect */}
//         <div className="flex flex-col lg:flex-row gap-8">
//           {reviews.map((rev, idx) => (
//             <div 
//               key={idx} 
//               className="flex-1 relative border-l border-[#0A2240]/30 pl-10 py-10 transition-colors duration-500 hover:bg-[#0A2240] group"
//             >
//               <Quote className="w-12 h-12 text-[#0A2240]/20 mb-8 transition-colors duration-500 group-hover:text-[#b99547]" />
              
//               <p className="text-xl md:text-2xl text-[#0A2240] font-medium leading-relaxed mb-10 min-h-[150px] transition-colors duration-500 group-hover:text-white">
//                 "{rev.text}"
//               </p>
              
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-[1px] bg-[#0A2240] transition-colors duration-500 group-hover:bg-[#b99547]" />
//                 <span className="text-[#0A2240] font-black uppercase tracking-[0.2em] text-sm transition-colors duration-500 group-hover:text-[#b99547]">
//                   {rev.name}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }











import React from "react";
import { FaUserShield, FaUserTie, FaUserCog } from "react-icons/fa";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "james Vance",
    text: "The structural fortification they installed was invisible yet impenetrable. A true masterclass in property defense.",
    icon: FaUserShield,
  },
  {
    name: "Mr. Thorne",
    text: "I appreciated the clinical, no-nonsense approach. The facility was cleared without a single disruption to our workflow.",
    icon: FaUserTie,
  },
  {
    name: "ion morgan",
    text: "When other companies failed, their thermal protocols succeeded. They treat properties with genuine care.",
    icon: FaUserCog,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative bg-[#f9f5ed] p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#b99547]/10"
            >
              {/* Icon replacing the image */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#2D2D2D] rounded-full flex items-center justify-center border-4 border-white shadow-md">
                <rev.icon className="text-2xl text-[#b99547]" />
              </div>

              <Quote className="text-[#b99547] w-8 h-8 mb-6 mt-6" />
              
              <p className="text-[#555] text-lg leading-relaxed italic mb-8">
                "{rev.text}"
              </p>
              
              <div className="text-center pt-4 border-t border-[#b99547]/20">
                <span className="block font-black text-[#2D2D2D] uppercase tracking-widest text-sm">
                  {rev.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}