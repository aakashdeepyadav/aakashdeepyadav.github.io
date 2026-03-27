import { useEffect, useRef } from "react";

/**
 * A subtle radial gradient that follows the mouse cursor.
 * Creates a "spotlight" / "flashlight" effect seen on premium sites
 * like Linear, Stripe, and Vercel.
 *
 * Very faint — just enough to add depth without being distracting.
 */
const MouseSpotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth lerp for silky tracking
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentX = lerp(currentX, mouseX, 0.08);
      currentY = lerp(currentY, mouseY, 0.08);
      el.style.background = `radial-gradient(600px circle at ${currentX}px ${currentY}px, rgba(0, 180, 216, 0.04), transparent 60%)`;
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        transition: "opacity 0.3s ease",
      }}
    />
  );
};

export default MouseSpotlight;
