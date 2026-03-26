import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const mouse = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) setVisible(true);

      // Move dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
      }
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    // Detect hoverable elements
    const onOverInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, .skill-icon, .glass-card, .glow-card")
      ) {
        setHovering(true);
      }
    };

    const onOutInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, .skill-icon, .glass-card, .glow-card")
      ) {
        setHovering(false);
      }
    };

    // Smooth ring follow with RAF
    let raf: number;
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
      ring.x = lerp(ring.x, mouse.x, 0.15);
      ring.y = lerp(ring.y, mouse.y, 0.15);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOverInteractive);
    document.addEventListener("mouseout", onOutInteractive);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOverInteractive);
      document.removeEventListener("mouseout", onOutInteractive);
    };
  }, [visible]);

  // Hide on touch devices
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          opacity: visible ? 1 : 0,
          width: clicking ? "6px" : "8px",
          height: clicking ? "6px" : "8px",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          opacity: visible ? 1 : 0,
          width: hovering ? "48px" : "36px",
          height: hovering ? "48px" : "36px",
          borderColor: hovering
            ? "rgba(0, 180, 216, 0.6)"
            : "rgba(0, 180, 216, 0.35)",
          backgroundColor: hovering
            ? "rgba(0, 180, 216, 0.06)"
            : "transparent",
          ...(clicking
            ? { width: "28px", height: "28px", borderColor: "rgba(0, 180, 216, 0.8)" }
            : {}),
        }}
      />
    </>
  );
};

export default CustomCursor;
