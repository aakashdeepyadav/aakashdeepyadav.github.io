import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#2D3748] z-50"
            initial={{ scaleX: 0 }}
            style={{ transformOrigin: "0%" }}
        >
            <motion.div
                className="h-full bg-gradient-to-r from-[#00D9FF] to-[#FF6B35]"
                style={{ width: `${scrollProgress}%` }}
            />
        </motion.div>
    );
};

export default ScrollProgress;
