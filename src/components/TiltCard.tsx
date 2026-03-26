import { useRef, type ReactNode, type CSSProperties } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * A card wrapper that tilts toward the mouse on hover,
 * creating a 3D perspective effect with a subtle light reflection.
 */
const TiltCard = ({ children, className = "", style = {} }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max ±8deg)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    // Move glare highlight
    if (glare) {
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(0, 180, 216, 0.08) 0%, transparent 60%)`;
      glare.style.opacity = "1";
    }
  };

  const handleLeave = () => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (card) {
      card.style.transform =
        "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
    if (glare) {
      glare.style.opacity = "0";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      style={{
        ...style,
        transformStyle: "preserve-3d",
        transition: "transform 0.2s ease-out",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Light reflection overlay */}
      <div
        ref={glareRef}
        className="tilt-card-glare"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      />
      {/* Card content */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
};

export default TiltCard;
