import { useEffect, useState } from "react";

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fn = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
        };
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent">
            <div
                className="h-full rounded-r-full transition-all duration-150"
                style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #00d4ff, #7c3aed, #f97316)",
                    boxShadow: "0 0 10px rgba(0, 212, 255, 0.5)",
                }}
            />
        </div>
    );
};

export default ScrollProgress;
