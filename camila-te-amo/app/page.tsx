'use client'
import Image from "next/image";
import React, { useState } from "react";
import "./Inicio.css"
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from "next/navigation";

const App = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const text = "Hola mi Cachetona, te tengo una propuesta... ❤️   ¿Quisieras ser mi San Valentín este año? 🥰";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.35 } // 0.35s de demora entre cada palabra
    }
  };

  const handleModalNo = () => {
    setShowModal(false);
  };

  const handleYesClick = () => {
    router.push('/aceptooo'); 
  };

  const textDuration = words.length * 0.35;
  const imageDuration = 1;
  const buttonsDelay = textDuration + imageDuration + 0.5; 

  const child = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 12, 
        stiffness: 100 
      }
    }
  };

  return (
    <div className="main-container">
      <motion.div 
        className="proposal-text"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span 
            key={index}
            variants={child}
            style={{ marginRight: "10px", display: "inline-block" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
     <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Empieza invisible y un poco pequeña
        animate={{ opacity: 1, scale: 1 }}   // Termina visible y tamaño normal
        transition={{ delay: textDuration, duration: imageDuration }}
      >
        <Image 
          src="/tulip.jpeg" 
          alt="Valentine's Day"
          height={300} 
          width={200} 
          style={{ borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
        />
      </motion.div> 
      <motion.div
        className="buttons-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: buttonsDelay, duration: 0.5 }}
      >
        <motion.button
          className="btn btn-yes"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}   
          onClick={handleYesClick} 
        >
          Sí, acepto 💖
        </motion.button>

        {/* Botón NO */}
        <motion.button
          className="btn btn-no"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowModal(true)}
        >
          No 💔
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <div className="modal-content-body" >
              <h2>¿Estás segura mi amor?</h2>
              <p> Piensalo bien...</p>
              <Image src="/triste.jpeg" alt="Tulip" width={170} height={280} />
              </div>
              <div className="modal-buttons">
                <button 
                  className="btn btn-modal-yes"
                >
                  Sí
                </button>

                <button 
                  className="btn btn-modal-no"
                  onClick={handleModalNo}
                >
                  No
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
