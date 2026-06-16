


// import React, { useEffect, useRef, useState } from "react";
// import { CheckCircle2 } from "lucide-react";

// // ─── COUNTER COMPONENT ───
// const Counter = ({ end, label }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           let start = 0;
//           const duration = 2000;
//           const stepTime = 50;
//           const steps = duration / stepTime;
//           const increment = end / steps;

//           const timer = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//               setCount(end);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, stepTime);
//         }
//       },
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [end]);

//   return (
//     <div ref={ref} className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
//       <div className="text-4xl font-black mb-1">{count}+</div>
//       <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">{label}</div>
//     </div>
//   );
// };

// export default function AboutUsPage() {
//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen text-[#0A2240] py-20">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
//         {/* HEADER */}
//         <div className="mb-24">
//           <span className="text-[#0A2240]/60 font-mono tracking-[0.4em] uppercase text-xs mb-6 block">// About Quick Shield</span>
//           <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
//             QuickShield <br/> 
//             <span className="text-[#0A2240] text-3xl md:text-5xl block mt-2 tracking-normal font-medium italic">
//               Professional Pest Protection
//             </span>
//           </h1>
//         </div>

//         <div className="grid md:grid-cols-12 gap-6">
          
//           <div className="md:col-span-7 h-[500px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-2xl">
//             {/* <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">
//             <img src="images/shieldteam.webp" alt=""  className="object-cover object-center"/>
//             </div> */}

// <div className="md:col-span-7 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
//   <img
//     src="/images/shieldteam.webp"
//     alt="QuickShield Team"
//     className="w-full h-full object-cover object-center"
//   />
// </div>


//           </div>

//           <div className="md:col-span-5 bg-white/40 p-10 rounded-[2rem] flex flex-col justify-center border border-white/50">
//             <h2 className="text-4xl font-black uppercase mb-6">Securing Your Property.</h2>
//             <p className="text-lg font-medium leading-relaxed opacity-90">
//               At Quick Shield, we understand that a pest-free environment is essential for peace of mind. We provide rapid, discreet, and effective pest control solutions tailored for the unique needs of our local community.
//             </p>
//           </div>

//           {/* ─── UPDATED STATS SECTION WITH ANIMATION ─── */}
//           <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
//             <Counter end={1200} label="Homes Cleared" />
//             {/* Special case for non-numeric stats */}
//             <div className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
//               <div className="text-4xl font-black mb-1">24/7</div>
//               <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">Availability</div>
//             </div>
//             <Counter end={45} label="Expert Staff" />
//             <Counter end={100} label="Safe Methods (%)" />
//           </div>

//           {/* <div className="md:col-span-5 h-[400px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-xl">
//              <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">IMAGE_2</div>
//           </div> */}


//           <div className="md:col-span-5 h-[400px] rounded-[2rem] overflow-hidden relative shadow-xl">
//   <img
//     src="/images/image2.webp"
//     alt="QuickShield Pest Control Team"
//     className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
//   />

//   {/* Optional Dark Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/20 via-transparent to-transparent"></div>
// </div>

//           <div className="md:col-span-7 bg-white/40 p-12 rounded-[2rem] border border-white/50 flex flex-col justify-center">
//             <h3 className="text-3xl font-black uppercase mb-8">Our Technical Approach</h3>
//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 "Advanced Detection Technology",
//                 "Eco-Friendly Chemical Usage",
//                 "Structural Barrier Installation",
//                 "Continuous Monitoring Plans"
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 font-bold text-lg">
//                   <CheckCircle2 className="text-[#0A2240]" /> {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* <div className="md:col-span-4 h-[350px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-xl">
//              <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">IMAGE_3</div>
//           </div> */}


// <div className="md:col-span-4 h-[350px] rounded-[2rem] overflow-hidden relative shadow-xl group">
//   <img
//     src="/images/image3.webp"
//     alt="QuickShield Pest Control Service"
//     className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
//   />

//   {/* Optional Premium Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/25 via-transparent to-transparent"></div>
// </div>


//           <div className="md:col-span-8 bg-[#0A2240] text-white p-12 rounded-[2rem] flex items-center justify-between">
//             <div>
//               <h3 className="text-3xl font-black uppercase mb-4">Need Emergency Support?</h3>
//               <p className="text-white/70">Our dispatch team is ready to respond to your call immediately.</p>
//             </div>
//             <button className="bg-[#b99547] text-[#0A2240] px-10 py-5 font-black uppercase tracking-widest hover:bg-white transition-all">
//               Call Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }














// import React, { useEffect, useRef, useState } from "react";
// import { CheckCircle2 } from "lucide-react";

// // Counter component waisa hi rahega
// const Counter = ({ end, label }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           let start = 0;
//           const duration = 2000;
//           const stepTime = 50;
//           const steps = duration / stepTime;
//           const increment = end / steps;

//           const timer = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//               setCount(end);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, stepTime);
//         }
//       },
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [end]);

//   return (
//     <div ref={ref} className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
//       <div className="text-4xl font-black mb-1">{count}+</div>
//       <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">{label}</div>
//     </div>
//   );
// };

// export default function AboutUsPage() {
//   return (
//     <main className="bg-white mt-20 min-h-screen text-[#0A2240] py-20">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
//         {/* HEADER - Template style */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-7xl font-serif font-black uppercase text-[#2D2D2D] mb-6">
//             About Us
//           </h1>
//           <p className="max-w-2xl mx-auto text-[#555] text-lg leading-relaxed">
//             We provide expert pest management with a focus on discretion and long-term protection. 
//             Our protocols are designed to secure your property effectively.
//           </p>
//         </div>

//         {/* FEATURED IMAGE SECTION (Replacing Video in image_3fb25d.png) */}
//         <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden mb-20 shadow-2xl">
//           <img
//             src="/images/pest-about-main.webp"
//             alt="Pest Control Operation"
//             className="w-full h-full object-cover"
//           />
//           {/* Overlay gradient to match premium feel */}
//           <div className="absolute inset-0 bg-[#0A2240]/20"></div>
//         </div>

//         {/* Rest of the layout */}
//         <div className="grid md:grid-cols-12 gap-6">
//           <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//             <Counter end={1200} label="Homes Cleared" />
//             <div className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
//               <div className="text-4xl font-black mb-1">24/7</div>
//               <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">Availability</div>
//             </div>
//             <Counter end={45} label="Expert Staff" />
//             <Counter end={100} label="Safe Methods (%)" />
//           </div>

//           <div className="md:col-span-5 h-[400px] rounded-[2rem] overflow-hidden relative shadow-xl">
//             <img src="/images/image2.webp" className="w-full h-full object-cover" alt="Service Detail" />
//           </div>

//           <div className="md:col-span-7 bg-[#f9f5ed] p-12 rounded-[2rem] border border-[#b99547]/20 flex flex-col justify-center">
//             <h3 className="text-3xl font-black uppercase mb-8">Our Technical Approach</h3>
//             <div className="grid grid-cols-2 gap-6">
//               {["Advanced Detection", "Eco-Friendly Usage", "Structural Barriers", "Continuous Monitoring"].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 font-bold text-lg">
//                   <CheckCircle2 className="text-[#b99547]" /> {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }















import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

// Counter component
const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const stepTime = 50;
          const steps = duration / stepTime;
          const increment = end / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
      <div className="text-4xl font-black mb-1">{count}+</div>
      <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">{label}</div>
    </div>
  );
};

export default function AboutUsPage() {
  return (
    <main className="bg-white mt-20 min-h-screen text-[#0A2240] py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-black uppercase text-[#2D2D2D] mb-6">
            About Us
          </h1>
          <p className="max-w-2xl mx-auto text-[#555] text-lg leading-relaxed">
            We provide expert pest management with a focus on discretion and long-term protection. 
            Our protocols are designed to secure your property effectively.
          </p>
        </div>

        {/* FEATURED IMAGE */}
        <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden mb-20 shadow-2xl">
          <img
            src="/images/pest-about-main.webp"
            alt="Pest Control Operation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A2240]/20"></div>
        </div>

        {/* OUR STORY SECTION (Ref: image_3fa437.png) */}
        <section className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <h2 className="text-5xl md:text-7xl font-serif font-black italic text-[#2D2D2D]">
            Our Story
          </h2>
          <div className="space-y-6">
            <p className="text-xl font-bold leading-relaxed text-[#2D2D2D]">
              Founded with the mission to provide impenetrable property defense, our team has 
              evolved into a leader in structural pest management.
            </p>
            <p className="text-lg text-[#555] leading-relaxed">
              We combine advanced detection technology with proven, eco-friendly protocols to 
              ensure your space remains secure. Our commitment to excellence means we never 
              compromise on the quality of our service or the safety of your environment.
            </p>
          </div>
        </section>

        {/* GRID CONTENT */}
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Counter end={1200} label="Homes Cleared" />
            <div className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
              <div className="text-4xl font-black mb-1">24/7</div>
              <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">Availability</div>
            </div>
            <Counter end={45} label="Expert Staff" />
            <Counter end={100} label="Safe Methods (%)" />
          </div>

          <div className="md:col-span-5 h-[400px] rounded-[2rem] overflow-hidden relative shadow-xl">
            <img src="/images/image2.webp" className="w-full h-full object-cover" alt="Service Detail" />
          </div>

          <div className="md:col-span-7 bg-[#f9f5ed] p-12 rounded-[2rem] border border-[#b99547]/20 flex flex-col justify-center">
            <h3 className="text-3xl font-black uppercase mb-8">Our Technical Approach</h3>
            <div className="grid grid-cols-2 gap-6">
              {["Advanced Detection", "Eco-Friendly Usage", "Structural Barriers", "Continuous Monitoring"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-lg">
                  <CheckCircle2 className="text-[#b99547]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}