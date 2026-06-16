


// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loadingToast = toast.loading("Submitting callback request...");

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/callback",
//         formData
//       );

//       toast.success(
//         res.data.message || "Deployment confirmed. A specialist will contact you.",
//         { id: loadingToast }
//       );

//       setFormData({
//         name: "",
//         postcode: "",
//         phone: "",
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.", {
//         id: loadingToast,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="bg-[#b99547] py-24 relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#0A2240]" />

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         <div className="text-[#0A2240] space-y-8">
//           <div>
//             <h3 className="text-[#0A2240]/80 font-black tracking-[0.3em] uppercase text-sm mb-4">
//               Priority Access
//             </h3>

//             <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">
//               DISCREET <br />
//               <span className="text-[#0A2240]">ASSET</span> PROTECTION
//             </h2>
//           </div>

//           <p className="text-[#0A2240]/90 text-lg leading-relaxed border-l-2 border-[#0A2240] pl-6 font-medium">
//             Elite pest management for high-value properties in Purley. We
//             operate with absolute discretion, ensuring your environment remains
//             impeccable and secure.
//           </p>

//           <div className="grid grid-cols-2 gap-6 pt-6">
//             <div className="bg-[#0A2240]/10 p-4 rounded border-l-4 border-[#0A2240]">
//               <span className="block text-2xl font-black text-[#0A2240]">
//                 24/7
//               </span>
//               <span className="text-xs uppercase text-[#0A2240] font-bold tracking-widest">
//                 Rapid Response
//               </span>
//             </div>

//             <div className="bg-[#0A2240]/10 p-4 rounded border-l-4 border-[#0A2240]">
//               <span className="block text-2xl font-black text-[#0A2240]">
//                 100%
//               </span>
//               <span className="text-xs uppercase text-[#0A2240] font-bold tracking-widest">
//                 Discreet Service
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#0A2240] p-8 md:p-12 rounded-lg shadow-2xl">
//           <h4 className="text-white font-black text-2xl mb-8 uppercase">
//             Request Consultation
//           </h4>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               name="name"
//               className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//               placeholder="YOUR NAME"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 name="postcode"
//                 className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//                 placeholder="POSTCODE"
//                 value={formData.postcode}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 name="phone"
//                 className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//                 placeholder="PHONE"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#b99547] text-[#0A2240] py-5 font-black uppercase tracking-[0.2em] hover:bg-white transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
//             >
//               {loading ? "INITIALIZING..." : "Secure your inspection"}
//             </button>
//           </form>
//         </div>
//       </div>

//       <Toaster />
//     </section>
//   );
// }





import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function CallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loadingToast = toast.loading("Sending request...");

    try {
      // API call same logic ke sath
      await axios.post("https://quickpes-backend.vercel.app/api/callback", formData);
      toast.success("Request received! Our team will contact you shortly.", { id: loadingToast });
      setFormData({ name: "", postcode: "", phone: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.", { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#2D2D2D] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="text-white space-y-8">
          <h3 className="text-[#b99547] font-bold tracking-[0.3em] uppercase text-sm">
            Quick Response
          </h3>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            NEED A <br />
            <span className="text-[#b99547] italic">FAST SOLUTION</span> <br />
            IN BECKENHAM?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-[#b99547] pl-6">
            Don't let pests compromise your comfort. Quickpes Services provides 
            rapid, professional, and reliable eradication. Fill out the form 
            to get an expert inspection at your doorstep.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="bg-white/5 p-4 rounded-md border border-[#b99547]/30">
              <span className="block text-3xl font-bold text-[#b99547]">24/7</span>
              <span className="text-xs uppercase text-gray-400 font-bold tracking-widest">Support</span>
            </div>
            <div className="bg-white/5 p-4 rounded-md border border-[#b99547]/30">
              <span className="block text-3xl font-bold text-[#b99547]">Local</span>
              <span className="text-xs uppercase text-gray-400 font-bold tracking-widest">Beckenham</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl">
          <h4 className="text-[#2D2D2D] font-black text-2xl mb-8 uppercase tracking-wider">
            Request A Callback
          </h4>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              className="w-full bg-gray-100 border-b-2 border-[#2D2D2D] p-4 text-[#2D2D2D] outline-none focus:border-[#b99547] transition-all"
              placeholder="YOUR NAME"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="postcode"
                className="w-full bg-gray-100 border-b-2 border-[#2D2D2D] p-4 text-[#2D2D2D] outline-none focus:border-[#b99547] transition-all"
                placeholder="POSTCODE"
                value={formData.postcode}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                className="w-full bg-gray-100 border-b-2 border-[#2D2D2D] p-4 text-[#2D2D2D] outline-none focus:border-[#b99547] transition-all"
                placeholder="PHONE"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2D2D2D] text-white py-5 font-bold uppercase tracking-[0.2em] hover:bg-[#b99547] transition-all cursor-pointer disabled:opacity-60"
            >
              {loading ? "SENDING..." : "SECURE YOUR INSPECTION"}
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
}