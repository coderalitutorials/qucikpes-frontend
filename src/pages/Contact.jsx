


// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { PhoneCall, MapPin, Clock, ArrowRight } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Heat Treatment",
//     "Carpet Moth & Beetle Treatment",
//     "Cockroach Gel Treatment",
//     "Rats & Mice Proofing",
//     "Flea Eradication",
//     "Wasp & Bee Removal",
//     "Squirrel Exclusion & Proofing",
//     "Commercial Kitchen Deep Sanitization",
//     "Bird Netting & Spikes Installation",
//   ];

//   const faqs = [
//     {
//       question: "How quickly can your team arrive?",
//       answer:
//         "We offer same-day emergency response across London, including Purley. Our local technicians are dispatched immediately.",
//     },
//     {
//       question: "Are your treatments safe for pets?",
//       answer:
//         "Yes, we use targeted, low-toxicity methods compliant with UK safety regulations.",
//     },
//     {
//       question: "Do you offer a guarantee?",
//       answer:
//         "Yes, most treatments include a guaranteed pest-free period with free re-treatments if needed.",
//     },
//     {
//       question: "Do you serve commercial businesses?",
//       answer:
//         "Yes, we handle contracts for restaurants, hotels, and offices with full compliance documentation.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Processing your request...");

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/contact",
//         formData
//       );

//       toast.success(res.data.message || "Request received successfully!", {
//         id: loaderToast,
//       });

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.", {
//         id: loaderToast,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#b99547] min-h-screen mt-20 py-20 px-6 md:px-12">
//       <Toaster />

//       <div className="max-w-[1400px] mx-auto">
//         <div className="mb-20">
//           <h1 className="text-6xl md:text-8xl font-black uppercase text-[#0A2240] tracking-tighter mb-6">
//             QuickShield
//             <br />
//             Emergency Intake
//           </h1>

//           <p className="text-[#0A2240]/80 font-medium text-lg max-w-2xl">
//             Secure your premises with London&apos;s leading rapid response pest
//             control team.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="bg-[#0A2240] text-white p-8 md:p-12 rounded-[2rem]">
//             <h2 className="text-3xl font-black uppercase mb-8">
//               Initiate Protocol
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   name="name"
//                   placeholder="Full Name"
//                   onChange={handleChange}
//                   value={formData.name}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />

//                 <input
//                   name="phone"
//                   placeholder="Phone Number"
//                   onChange={handleChange}
//                   value={formData.phone}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email Address"
//                   onChange={handleChange}
//                   value={formData.email}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />

//                 <input
//                   name="postcode"
//                   placeholder="Postcode"
//                   onChange={handleChange}
//                   value={formData.postcode}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />
//               </div>

//               <select
//                 name="service"
//                 onChange={handleChange}
//                 value={formData.service}
//                 required
//                 className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547] appearance-none text-white"
//               >
//                 <option value="" className="text-black">
//                   Select Service Required...
//                 </option>

//                 {services.map((s) => (
//                   <option key={s} value={s} className="text-black">
//                     {s}
//                   </option>
//                 ))}
//               </select>

//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Briefly describe the infestation..."
//                 onChange={handleChange}
//                 value={formData.message}
//                 required
//                 className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#b99547] text-[#0A2240] py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all disabled:opacity-60"
//               >
//                 {loading ? "Transmitting..." : "Dispatch Request"}
//                 <ArrowRight size={20} />
//               </button>
//             </form>
//           </div>

//           <div className="space-y-8">
//             <div className="h-64 w-full rounded-2xl overflow-hidden border-4 border-[#0A2240]/20 shadow-xl">
//               <iframe
//                 title="Purley London Service Area"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19889.37877239077!2d-0.12933748281249764!3d51.3394747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760086a9f4c33d%3A0x7d2873138b1f6966!2sPurley%2C%20London!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>

//             <div className="bg-white/50 p-8 rounded-3xl border border-[#0A2240]/10">
//               <h3 className="font-black text-[#0A2240] text-xl uppercase mb-6">
//                 QuickShield Operational Data
//               </h3>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-4">
//                   <MapPin className="text-[#0A2240]" />
//                   <span className="font-bold">Purley & Greater London</span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <PhoneCall className="text-[#0A2240]" />
//                   <span className="font-bold">07405 025488</span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <Clock className="text-[#0A2240]" />
//                   <span className="font-bold">24/7 Emergency Deployment</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="mt-16 bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
//           <div className="space-y-4">
//             <div className="inline-block bg-[#b99547] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//               Verified 5-Star Service
//             </div>

//             <h3 className="text-3xl font-black text-white uppercase tracking-tight">
//               Trusted in Purley & London
//             </h3>
//           </div>

//           <a
//             href="https://maps.app.goo.gl/oEtHbaR3t2RKbHXq8?g_st=ic"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#b99547] transition-all duration-300"
//           >
//             Visit Google Profile
//           </a>
//         </section>

//         <section className="mt-20 max-w-4xl mx-auto">
//           <h2 className="text-3xl font-black uppercase text-center text-[#0A2240] mb-12">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-3">
//             {faqs.map((faq, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white/20 border border-[#0A2240]/20 rounded-xl overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggleFaq(idx)}
//                   className="w-full flex items-center justify-between p-5 font-bold text-[#0A2240]"
//                 >
//                   {faq.question}
//                   <span>{activeFaq === idx ? "－" : "＋"}</span>
//                 </button>

//                 {activeFaq === idx && (
//                   <div className="p-5 pt-0 text-[#0A2240]/80 border-t border-[#0A2240]/10">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Contact;















import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { PhoneCall, MapPin, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", postcode: "", service: "", message: "",
  });
  const [loading, setLoading] = useState(false);

  const services = [
    "Ants Control", "Bed Bugs Heat Treatment", "Carpet Moth & Beetle Treatment",
    "Cockroach Gel Treatment", "Rats & Mice Proofing", "Flea Eradication",
    "Wasp & Bee Removal", "Squirrel Exclusion & Proofing",
    "Commercial Kitchen Deep Sanitization", "Bird Netting & Spikes Installation",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loaderToast = toast.loading("Processing your request...");
    try {
      const res = await axios.post("https://quickpes-backend.vercel.app/api/contact", formData);
      toast.success(res.data.message || "Request received!", { id: loaderToast });
      setFormData({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong.", { id: loaderToast });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 pb-20 bg-[#f9f5ed]">
      <Toaster />
      
      {/* Hero Section */}
      <div className="bg-[#b99547]/10 py-20 px-6 text-center border-b border-[#b99547]/20">
        <h1 className="text-6xl md:text-7xl font-black uppercase text-[#0A2240] tracking-tighter mb-4">Contact Us</h1>
        <p className="text-[#0A2240]/70 max-w-lg mx-auto italic">
          Professional pest control solutions for Beckenham and surrounding areas.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-16 grid md:grid-cols-2 gap-16">
        {/* Left Side: Form */}
        <div>
          <h2 className="text-3xl font-black uppercase text-[#0A2240] mb-8">Send A Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Full Name *" className="w-full p-4 border border-[#0A2240]/20 rounded-lg outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} required value={formData.name} />
            <div className="grid grid-cols-2 gap-4">
                <input name="phone" placeholder="Phone *" className="w-full p-4 border border-[#0A2240]/20 rounded-lg outline-none" onChange={(e) => setFormData({...formData, phone: e.target.value})} required value={formData.phone} />
                <input name="postcode" placeholder="Postcode *" className="w-full p-4 border border-[#0A2240]/20 rounded-lg outline-none" onChange={(e) => setFormData({...formData, postcode: e.target.value})} required value={formData.postcode} />
            </div>
            <input name="email" type="email" placeholder="Email *" className="w-full p-4 border border-[#0A2240]/20 rounded-lg outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} required value={formData.email} />
            <select name="service" className="w-full p-4 border border-[#0A2240]/20 rounded-lg outline-none" onChange={(e) => setFormData({...formData, service: e.target.value})} required value={formData.service}>
              <option value="">Select Service *</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <textarea name="message" rows="4" placeholder="Message *" className="w-full p-4 border border-[#0A2240]/20 rounded-lg outline-none" onChange={(e) => setFormData({...formData, message: e.target.value})} required value={formData.message}></textarea>
            
            <button disabled={loading} className="w-full bg-[#0A2240] text-white py-4 font-black uppercase tracking-widest hover:bg-[#b99547] transition-all">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-black uppercase text-[#0A2240] mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex gap-4"><MapPin className="text-[#b99547]" /> <div><h4 className="font-bold">Location</h4><p className="text-[#555]">Beckenham, London</p></div></div>
              <div className="flex gap-4"><PhoneCall className="text-[#b99547]" /> <div><h4 className="font-bold">Call Us</h4><p className="text-[#555]">07424 398243</p></div></div>
              <div className="flex gap-4"><Mail className="text-[#b99547]" /> <div><h4 className="font-bold">Email Us</h4><p className="text-[#555]">info@pestcontrolbeckenham.uk</p></div></div>
            </div>
          </div>
          
          {/* Google Business Profile Section */}
          <div className="bg-[#0A2240] text-white p-8 rounded-2xl flex flex-col items-center text-center">
            <h3 className="text-xl font-black uppercase mb-4">Verified 5-Star Service</h3>
            <p className="text-white/70 mb-6 text-sm">Trusted in Beckenham & London. Check our latest reviews and updates.</p>
            <a href="https://maps.app.goo.gl/pDXGu1ZvzuFbxAit5?g_st=ic" target="_blank" className="bg-[#b99547] text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-[#0A2240] transition-all">
              Visit Google Profile
            </a>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-[1200px] mx-auto px-6 mt-20">
        <iframe title="Beckenham Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19875.293158022736!2d-0.03858025!3d51.4085449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487607753a8f5c6f%3A0x7d2873138b1f6966!2sBeckenham%2C%20UK!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk" className="w-full h-[400px] rounded-2xl border-2 border-[#b99547]/20" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </main>
  );
};

export default Contact;