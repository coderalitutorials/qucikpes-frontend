



// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Fixed: Base text is now your logo's exact Navy Blue (#0A2240) and switches to Gold on active/hover
//   const navClass = ({ isActive }) =>
//     `text-[14px] lg:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
//       isActive
//         ? "text-[#C5A86B] font-bold" 
//         : "text-[#0A2240] hover:text-[#C5A86B]"
//     }`;

//   // Luxury Mobile Styling: Adjusted to match light background theme cleanly
//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#0A2240] text-white shadow-md shadow-[#0A2240]/20"
//         : "text-[#0A2240] hover:bg-[#0A2240]/5 hover:text-[#C5A86B]"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-20 md:h-24 transition-all duration-500 bg-amber-100 ${
//         isScrolled
//           ? "shadow-xl border-b border-[#C5A86B]/30"
//           : "border-b border-[#C5A86B]/10"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
          
//           {/* Logo (Renders original brand colors directly on amber layout) */}
//           <Link to="/" className="flex items-center h-full py-3" onClick={() => setOpen(false)}>
//             <img 
//               src="/images/pesbyelogo.webp" 
//               alt="Pesbye Services Logo" 
//               className="h-12 md:h-16 w-auto object-contain" 
//             />
//           </Link>

//           {/* Desktop Navigation Link Stack */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-10">
//             <div className="flex items-center gap-8">
//               {["Home", "Services", "About Us", "Contact Us"].map((item) => (
//                 <NavLink 
//                   key={item} 
//                   to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
//                   className={navClass}
//                 >
//                   {({ isActive }) => (
//                     <>
//                       {item}
//                       {isActive && <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#C5A86B]" />}
//                     </>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Location Badge - Dynamic Navy Context Alignment */}
//             <div className="flex items-center gap-2 text-[#0A2240]/70 font-semibold text-xs uppercase tracking-widest pl-8 border-l border-[#C5A86B]/30 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.3}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#0A2240]"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span>Mayfair, London</span>
//             </div>
//           </div>

//           {/* Mobile Toggle Trigger */}
//           <button 
//             onClick={() => setOpen(!open)} 
//             className="md:hidden text-[#0A2240] text-2xl h-10 w-10 flex items-center justify-center rounded-xl hover:bg-[#0A2240]/5 active:scale-95 transition-all"
//           >
//             {open ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Popout Panel Grid */}
//       {open && (
//         <div className="md:hidden bg-amber-100 border-t border-[#C5A86B]/20 p-6 flex flex-col gap-2 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
//            <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About Us</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact Us</NavLink>
//         </div>
//       )}
//     </nav>
//   );
// }















// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[14px] lg:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
//       isActive
//         ? "text-white font-bold"
//         : "text-[#0A2240] hover:text-white"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#0A2240] text-white shadow-md shadow-[#0A2240]/20"
//         : "text-[#0A2240] hover:bg-[#0A2240]/10 hover:text-white"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-20 md:h-24 transition-all duration-500 bg-[#b99547] ${
//         isScrolled
//           ? "shadow-xl border-b border-[#0A2240]/20"
//           : "border-b border-[#0A2240]/10"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center h-full py-3"
//             onClick={() => setOpen(false)}
//           >
//             <img
//               src="/images/quick1.webp"
//               alt="Pesbye Services Logo"
//               className="h-12 md:h-16 w-auto object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-10">
//             <div className="flex items-center gap-8">
//               {["Home", "Services", "About Us", "Contact Us"].map((item) => (
//                 <NavLink
//                   key={item}
//                   to={
//                     item === "Home"
//                       ? "/"
//                       : `/${item.toLowerCase().replace(" ", "-")}`
//                   }
//                   className={navClass}
//                 >
//                   {({ isActive }) => (
//                     <>
//                       {item}
//                       {isActive && (
//                         <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0A2240]" />
//                       )}
//                     </>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Location */}
//             <div className="flex items-center gap-2 text-[#0A2240] font-semibold text-xs uppercase tracking-widest pl-8 border-l border-[#0A2240]/20 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.3}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#0A2240]"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
//                 />
//               </svg>

//               <span>purley, London</span>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-[#0A2240] text-2xl h-10 w-10 flex items-center justify-center rounded-xl hover:bg-[#0A2240]/10 active:scale-95 transition-all"
//           >
//             {open ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-[#b99547] border-t border-[#0A2240]/20 p-6 flex flex-col gap-2 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/"
//             className={mobileNavClass}
//           >
//             Home
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/services"
//             className={mobileNavClass}
//           >
//             Services
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/about-us"
//             className={mobileNavClass}
//           >
//             About Us
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/contact-us"
//             className={mobileNavClass}
//           >
//             Contact Us
//           </NavLink>
//         </div>
//       )}
//     </nav>
//   );
// }





















// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[14px] lg:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
//       isActive ? "text-[#b99547] font-bold" : "text-[#2D2D2D] hover:text-[#b99547]"
//     }`;

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-300 bg-white ${isScrolled ? "shadow-md" : ""}`}>
//       <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
//         <Link to="/" className="flex items-center">
//           <img src="/images/quickpes-logo.png" alt="Quickpes Services Logo" className="h-12 w-auto" />
//         </Link>

//         <div className="hidden md:flex items-center gap-8">
//           {["Home", "About Us", "Services", "Testimonials", "Contact Us"].map((item) => (
//             <NavLink key={item} to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} className={navClass}>
//               {item}
//             </NavLink>
//           ))}
//         </div>

//         <div className="hidden md:block bg-[#b99547] text-white px-6 py-3 font-bold rounded-sm">
//           07424 398243
//         </div>
//       </div>
//     </nav>
//   );
// }










// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[14px] lg:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
//       isActive ? "text-[#b99547] font-bold" : "text-[#2D2D2D] hover:text-[#b99547]"
//     }`;

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-300 bg-white ${isScrolled ? "shadow-md" : ""}`}>
//       <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
//         <Link to="/" className="flex items-center">
//           <img src="/images/quickpeslogo.png" alt="Quickpes Services Logo" className="h-12 w-auto" />
//         </Link>

//         {/* Testimonials hatane ke baad links ka array updated hai */}
//         <div className="hidden md:flex items-center gap-8">
//           {["Home", "About Us", "Services", "Contact Us"].map((item) => (
//             <NavLink 
//               key={item} 
//               to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
//               className={navClass}
//             >
//               {item}
//             </NavLink>
//           ))}
//         </div>

//         <div className="hidden md:block bg-[#b99547] text-white px-6 py-3 font-bold rounded-sm">
//           07424 398243
//         </div>
//       </div>
//     </nav>
//   );
// }














import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ikon ke liye lucide-react ka use kiya hai

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 block py-4 md:py-2 ${
      isActive ? "text-[#b99547] font-bold" : "text-[#2D2D2D] hover:text-[#b99547]"
    }`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-md h-20" : "h-20"}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/quickpeslogo.png" alt="Quickpes Services Logo" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About Us", "Services", "Contact Us"].map((item) => (
            <NavLink key={item} to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} className={navClass}>
              {item}
            </NavLink>
          ))}
          <div className="bg-[#b99547] text-white px-6 py-3 font-bold rounded-sm ml-4">
            07424 398243
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#0A2240]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl px-6 py-8 flex flex-col items-center">
          {["Home", "About Us", "Services", "Contact Us"].map((item) => (
            <NavLink 
              key={item} 
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
              className={navClass}
              onClick={() => setIsOpen(false)} // Click par menu band ho jaye
            >
              {item}
            </NavLink>
          ))}
          <div className="bg-[#b99547] text-white px-8 py-3 font-bold rounded-sm mt-6">
            07424 398243
          </div>
        </div>
      )}
    </nav>
  );
}