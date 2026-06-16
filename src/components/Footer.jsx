

// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#b99547] text-[#0A2240] overflow-hidden border-t border-[#0A2240]/20 z-30 font-sans">
//       <div className="absolute inset-0 bg-[radial-gradient(#0A2240_0.5px,transparent_1px)] [background-size:3rem_3rem] opacity-[0.04] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-[#0A2240]/15">
//           <div className="lg:col-span-5 space-y-6 text-left">
//             <img src="/images/quick1.webp" alt="QuickShield" className="h-20 w-auto object-contain" loading="lazy" />
//             <p className="text-[#0A2240]/80 text-sm sm:text-[15px] leading-relaxed max-w-sm font-medium">
//               Premium biological safety and structural pest containment infrastructure engineered for high-end residential and commercial zones.
//             </p>
//             <div className="inline-flex items-center gap-2 bg-[#0A2240]/5 border border-[#0A2240]/20 px-3.5 py-1.5 rounded-lg shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#0A2240]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-[#0A2240] uppercase font-bold">Certified London Standard</span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#0A2240] uppercase font-black">Corporate Directory</h4>
//               <nav className="grid grid-cols-1 gap-3.5 text-[#0A2240] text-[14px] font-medium">
//                 <Link to="/" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#0A2240]/40" />System Home</Link>
//                 <Link to="/about-us" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#0A2240]/40" />Our Corporate Profile</Link>
//                 <Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#0A2240]/40" />Treatment Protocols</Link>
//                 <Link to="/contact-us" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#0A2240]/40" />Emergency Dispatch Hub</Link>
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#0A2240] uppercase font-black">Active Deployments</h4>
//               <div className="grid grid-cols-1 gap-3.5 text-[#0A2240] text-[14px] font-medium">
//                 <Link to="/services" state={{ scrollToService: "Rats & Mice" }} className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#0A2240]/40" />Rat & Mice Control</Link>
//                 <Link to="/services" state={{ scrollToService: "Bed Bugs" }} className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#0A2240]/40" />Bed Bugs Thermal Heat</Link>
//                 <Link to="/services" state={{ scrollToService: "Moth Treatment" }} className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#0A2240]/40" />Carpet Moth Eradication</Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#0A2240]/15">
//           <div className="flex items-center gap-4 bg-white/20 border border-[#0A2240]/15 p-5 rounded-xl text-left">
//             <div className="p-3 rounded-lg bg-[#0A2240]/10 text-[#0A2240]"><MapPin className="w-5 h-5" /></div>
//             <div>
//               <span className="block text-[10px] font-mono text-[#0A2240]/70 uppercase tracking-wider">Operational Base</span>
//               <span className="text-sm font-semibold text-[#0A2240]">Purley, London, UK</span>
//             </div>
//           </div>
//           <a href="tel:07405025488" className="flex items-center gap-4 bg-white/20 border border-[#0A2240]/15 p-5 rounded-xl group hover:border-[#0A2240]/40 transition-all text-left">
//             <div className="p-3 rounded-lg bg-[#0A2240]/10 text-[#0A2240]"><Phone className="w-5 h-5" /></div>
//             <div>
//               <span className="block text-[10px] font-mono text-[#0A2240]/70 uppercase tracking-wider">Direct Call</span>
//               <span className="text-sm font-semibold text-[#0A2240] group-hover:text-white">07405 025488</span>
//             </div>
//           </a>
//           <a href="mailto:info@pestcontrolpurley.uk" className="flex items-center gap-4 bg-white/20 border border-[#0A2240]/15 p-5 rounded-xl group hover:border-[#0A2240]/40 transition-all text-left">
//             <div className="p-3 rounded-lg bg-[#0A2240]/10 text-[#0A2240]"><Mail className="w-5 h-5" /></div>
//             <div className="truncate">
//               <span className="block text-[10px] font-mono text-[#0A2240]/70 uppercase tracking-wider">Secure Inbound</span>
//               <span className="text-sm font-semibold text-[#0A2240] truncate group-hover:text-white">info@pestcontrolpurley.uk</span>
//             </div>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0A2240] text-white border-t border-[#b99547]/20 z-30 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-[#b99547]/20">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <img src="/images/quickpeslogo.png" alt="Quickpes" className="h-16 w-auto " loading="lazy" />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Professional pest control solutions in Beckenham. We provide rapid, reliable, and humane treatment protocols for all domestic and commercial properties.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#b99547]/10 border border-[#b99547]/30 px-3.5 py-1.5 rounded">
              <ShieldCheck className="w-4 h-4 text-[#b99547]" />
              <span className="text-[10px] tracking-[0.15em] text-[#b99547] uppercase font-bold">Certified Local Standard</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-[11px] tracking-[0.25em] text-[#b99547] uppercase font-black">Quick Links</h4>
              <nav className="grid gap-3 text-[14px] font-medium text-gray-300">
                <Link to="/" className="hover:text-[#b99547] transition-colors">System Home</Link>
                <Link to="/about-us" className="hover:text-[#b99547] transition-colors">Our Profile</Link>
                <Link to="/services" className="hover:text-[#b99547] transition-colors">Treatment Protocols</Link>
                <Link to="/contact-us" className="hover:text-[#b99547] transition-colors">Emergency Dispatch</Link>
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] tracking-[0.25em] text-[#b99547] uppercase font-black">Active Deployments</h4>
              <nav className="grid gap-3 text-[14px] font-medium text-gray-300">
                <Link to="/services" state={{ scrollToService: "Rats & Mice" }} className="hover:text-[#b99547] transition-colors">Rat & Mice Control</Link>
                <Link to="/services" state={{ scrollToService: "Bed Bugs" }} className="hover:text-[#b99547] transition-colors">Bed Bugs Thermal Heat</Link>
                <Link to="/services" state={{ scrollToService: "Moth Treatment" }} className="hover:text-[#b99547] transition-colors">Carpet Moth Eradication</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Contact Cards */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
            <div className="p-2 bg-[#b99547]/20 rounded text-[#b99547]"><MapPin className="w-5 h-5" /></div>
            <div>
              <span className="block text-[10px] text-[#b99547] uppercase tracking-wider">Base</span>
              <span className="text-sm font-semibold">Beckenham, London</span>
            </div>
          </div>
          <a href="tel:07424398243" className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-[#b99547]/20 transition-all">
            <div className="p-2 bg-[#b99547]/20 rounded text-[#b99547]"><Phone className="w-5 h-5" /></div>
            <div>
              <span className="block text-[10px] text-[#b99547] uppercase tracking-wider">Direct Call</span>
              <span className="text-sm font-semibold">07424 398243</span>
            </div>
          </a>
          <a href="mailto:info@pestcontrolbeckenham.uk" className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-[#b99547]/20 transition-all">
            <div className="p-2 bg-[#b99547]/20 rounded text-[#b99547]"><Mail className="w-5 h-5" /></div>
            <div>
              <span className="block text-[10px] text-[#b99547] uppercase tracking-wider">Email</span>
              <span className="text-sm font-semibold truncate">info@pestcontrolbeckenham.uk</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;