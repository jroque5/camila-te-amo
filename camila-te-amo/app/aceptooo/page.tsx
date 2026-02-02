'use client';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import "./Acepto.css";

const AceptoooPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
    if (isOpen) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
  
      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isOpen]);


    return (
        <div className="yay-container">
      
      <AnimatePresence mode='wait'>
        {!isOpen ? (
          <motion.div 
            key="envelope"
            className="envelope"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="envelope-flap"></div>
            <div className="envelope-heart">💌</div>
            <p className="envelope-text">ABRELOOO 💖</p>
          </motion.div>
        ) : (
          
          <motion.div 
            key="letter"
            className="letter-paper"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>

            <h1 className="letter-title">Mi Cachetonaa... ❤️</h1>
            
            <div className="letter-body">
              <p>
                Desde que llegaste a mi vida, todo tiene un color diferente. No necesito un 14 de febrero para recordarte cuánto te amo, pero aprovecho la excusa para decirte que eres mi persona favorita en el mundo.
                Quiero que nunca dudes de lo que significas para mí. Eres la mejor parte de mi vida 💗, mi alegría en los días buenos y mi refugio en los días malos.
                Eres mi paz, mi ilusión, mi razón para luchar y la persona con la que quiero compartir cada instante de mi existencia. No me alcanzan las palabras para explicarte cuánto te amo, pero si me alcanzará la vida para demostrártelo contigo a mi lado ♾️🧡.
              </p>
              <p>
                Gracias por tenerme tanta paciencia, por hacerme reír todos los días, por ser mi compañera y por amarme como soy (amargado y sin paciencia jajaj)
              </p>
              <br/>
              <p>
              Espero ya estés más tranquila después de estos últimos días agitados que tuviste, sé que esto no es mucho pero espero te haya gustado
              esta sorpresa que te preparé con mucho amor y dedicación. 
              </p>
            </div>

            <div className="photo-grid">
              <div className="photo-frame rotate-left">
                <Image src={"/1-pag.jpeg"} alt="Nosotros 1" width={150} height={150} style={{objectFit: 'cover'}} />
              </div>
              
              <div className="photo-frame rotate-right">
                <Image src={"/2-pag.jpeg"} alt="Nosotros 2" width={150} height={150} style={{objectFit: 'cover'}} />
              </div>

              <div className="photo-frame rotate-left">
                <Image src={"/3-pag.jpeg"} alt="Nosotros 3" width={150} height={150} style={{objectFit: 'cover'}} />
              </div>

              <div className="photo-frame rotate-right">
                <Image src={"/4-pag.jpeg"} alt="Nosotros 4" width={150} height={150} style={{objectFit: 'cover'}} />
              </div>

              <div className="photo-frame">
                <Image src={"/5-pag.jpeg"} alt="Nosotros 5" width={150} height={150} style={{objectFit: 'cover'}} />
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
    )
}

export default AceptoooPage;