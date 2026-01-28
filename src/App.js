import React from "react";
import { motion } from "framer-motion";
import Tagline from "./components/Tagline";
import SignupForm from "./components/SignupForm";
import SocialLinks from "./components/SocialLinks";
import logo from './logo_new.png';

function App() {
  
  return (
    <div className="min-h-screen bg-chai-cream text-chai-brown selection:bg-chai-gold selection:text-white overflow-hidden relative">
   
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-chai-brown via-chai-gold to-chai-brown z-50"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-chai-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-chai-brown/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <main className="container mx-auto px-6 py-12 md:py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
      
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12"
        >
           <img src={logo} alt="Chai Culture Logo" className="w-32 md:w-40 drop-shadow-lg mx-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Tagline />
          
          <p className="mt-6 text-lg md:text-xl text-chai-brown/80 font-sans leading-relaxed tracking-wide px-4">
            Born from the heritage of royal Indian households, Chai Culture brings you the authentic, 
            time-honored tradition of tea. Every cup is a tribute to our roots, blended with the 
            finest ingredients for the modern connoisseur.
          </p>

          <div className="my-12">
             <div className="inline-block px-6 py-2 border border-chai-gold/40 rounded-full bg-white/40 backdrop-blur-md shadow-sm">
                <span className="text-chai-brown text-sm font-bold tracking-[0.2em] uppercase italic">The Imperial Blend Launching Soon</span>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-chai-brown/60 text-sm font-sans uppercase tracking-widest font-bold">Get First Access</h3>
          </div>
          <SignupForm />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <SocialLinks />
        </motion.div>

      </main>
      
      <footer className="absolute bottom-4 w-full text-center text-chai-brown/40 text-xs font-sans">
        &copy; {new Date().getFullYear()} Chai Culture. All rights reserved.
      </footer>
    </div>
  );
}

export default App;