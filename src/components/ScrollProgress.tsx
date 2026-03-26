import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-50"
      style={{
        width: `${progress * 100}%`,
        backgroundColor: "#00b4d8",
        transition: "width 0.1s linear",
      }}
    />
  );
};

export default ScrollProgress;
