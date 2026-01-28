import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      console.log("Email submitted:", email);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-chai-gold/30 shadow-sm animate-fade-in">
        <p className="text-chai-brown font-serif text-xl mb-2">Thank You!</p>
        <p className="text-chai-brown/80 font-sans">You've successfully joined our exclusive list.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <input 
        type="email" 
        placeholder="Enter your email address" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-5 py-3 rounded-md border border-chai-brown/20 bg-white/60 focus:outline-none focus:border-chai-gold focus:ring-1 focus:ring-chai-gold transition-all font-sans placeholder:text-chai-brown/40 text-chai-dark"
        required
      />
      <button 
        type="submit" 
        className="group flex items-center justify-center gap-2 px-8 py-3 bg-chai-brown text-chai-gold font-sans font-semibold rounded-md hover:bg-chai-dark transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <span>Notify Me</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}

export default SignupForm;