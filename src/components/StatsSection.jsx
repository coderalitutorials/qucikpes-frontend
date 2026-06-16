

// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// function Counter({ value }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [count, setCount] = useState(0);

//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const duration = 2000;
//       const increment = numericValue / (duration / 16);

//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= numericValue) {
//           setCount(numericValue);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);

//       return () => clearInterval(timer);
//     }
//   }, [isInView, numericValue]);

//   return (
//     <span ref={ref} className="text-5xl font-black text-white mb-4 block">
//       {count}
//       {suffix}
//     </span>
//   );
// }

// const stats = [
//   {
//     value: "15+",
//     label: "Years of Elite Service",
//     desc: "Decades of mastery in discreet pest eradication for luxury estates.",
//   },
//   {
//     value: "5/5",
//     label: "Trust Rating",
//     desc: "Perfect client satisfaction scores for our precision protocols.",
//   },
//   {
//     value: "100%",
//     label: "Eradication Success",
//     desc: "Zero-tolerance policy for pests with lifetime proofing warranties.",
//   },
//   {
//     value: "3000+",
//     label: "Estates Secured",
//     desc: "Successfully protected premier properties across Mayfair.",
//   },
// ];

// export default function PesSaveStatsSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#b99547] py-24 border-t border-[#0A2240]/20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="mb-20 text-center">
//           <span className="text-[#0A2240] font-black tracking-[0.4em] uppercase text-xs">
//             Operational Excellence
//           </span>

//           <h2 className="text-4xl md:text-7xl font-black text-[#0A2240] mt-4 uppercase">
//             Performance <span className="text-white">Metrics</span>
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-[#0A2240] p-8 rounded-lg flex flex-col items-center text-center border-b-4 border-[#b99547] hover:border-white transition-all duration-300"
//             >
//               <Counter value={stat.value} />

//               <h4 className="text-[#b99547] font-black uppercase tracking-widest text-sm mb-3">
//                 {stat.label}
//               </h4>

//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {stat.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <p className="text-[#0A2240] font-bold text-lg mb-6">
//             Ready to secure your property with the QuickShield standard?
//           </p>

//           <button
//             type="button"
//             onClick={() => navigate("/contact-us")}
//             className="bg-[#0A2240] text-[#b99547] px-8 md:px-12 py-4 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2240] transition-all"
//           >
//             Get A Private Consultation
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }














import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="text-5xl font-serif font-bold text-[#2D2D2D] mb-2 block">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: "15+", label: "Years Experience", desc: "Proven track record in reliable pest management." },
  { value: "5/5", label: "Client Rating", desc: "Consistently high standards for every service." },
  { value: "100%", label: "Safe Methods", desc: "Eco-friendly solutions for your peace of mind." },
  { value: "3K+", label: "Local Projects", desc: "Trusted by homeowners across Beckenham." },
];

export default function StatsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-4">
            Why <span className="text-[#b99547]">Choose Quickpes</span>?
          </h2>
          <p className="text-[#555] max-w-2xl mx-auto">
            We combine expert knowledge with professional integrity to deliver 
            unmatched pest control services for the Beckenham community.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 border-r border-[#eee] last:border-none"
            >
              <Counter value={stat.value} />
              <h4 className="text-[#b99547] font-bold uppercase tracking-[0.2em] text-xs mb-2">
                {stat.label}
              </h4>
              <p className="text-[#888] text-sm italic">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center bg-[#f9f5ed] py-12 rounded-2xl">
          <p className="text-[#2D2D2D] font-medium text-lg mb-6">
            Ready to secure your home? Our experts are available 24/7.
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="bg-[#2D2D2D] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#b99547] transition-all"
          >
            Book An Inspection
          </button>
        </div>
      </div>
    </section>
  );
}