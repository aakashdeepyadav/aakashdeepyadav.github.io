import { useMotionValueEvent, useScroll, useSpring, motion } from "framer-motion";
import { useState } from "react";

/**
 * Thin gradient scroll progress bar fixed to the top of the viewport.
 * Uses Framer Motion spring physics for buttery-smooth animation.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setVisible(latest > 0.01);
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, #0077b6, #00b4d8, #00d4ff)",
        transformOrigin: "0%",
        scaleX,
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    />
  );
};

export default ScrollProgress;
