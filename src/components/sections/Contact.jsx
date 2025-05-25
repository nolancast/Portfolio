import emailjs from 'emailjs-com'
import { useState } from 'react';

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          alert("Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            message: ""
          });
      }).catch(() => alert("Oops! Something went wrong. Please try again."));
    form.reset();
  }
    
  return <section id="#contact" className="min-h-screen flex items-center justify-center py-20">
    <div className="px-4 w-150 ">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-center">
        Get In Touch
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relatve">
          <input
            type="text" id="name" name="name" required 
            value ={formData.name}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5"
            placeholder="Name..."
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

        </div>

        <div className="relatve">
          <input
            type="text" id="email" name="email" required
            value ={formData.email}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5"
            placeholder="example@gmail.com"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="relatve">
          <textarea
            id="message" name="message" required
            value ={formData.message}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5"
            placeholder="Your Message..."
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows="5"
          ></textarea>
        </div>
        <button className="w-full bg-indigo-500 text-white font-medium py-3 px-6 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
          Send Message
        </button>
      </form>
    </div>


  </section>
}