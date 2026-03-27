import { useEffect, useRef } from "react";

/**
 * A subtle 3D wireframe topology mesh rendered on a fixed fullscreen canvas.
 * Uses pure Canvas 2D API with manual 3D math — no heavy libraries.
 *
 * The mesh slowly rotates and its vertices undulate via sine waves,
 * creating a flowing terrain/topology effect.
 */

// ── Grid config ──────────────────────────────────────────────
const COLS = 28;
const ROWS = 20;
const SPACING = 38;
const WAVE_AMP = 18;
const WAVE_SPEED = 0.0004;
const ROTATE_SPEED = 0.00008;
const TILT_X = -0.55;
const LINE_OPACITY_DARK = 0.1;
const LINE_OPACITY_LIGHT = 0.07;
const POINT_OPACITY_DARK = 0.2;
const POINT_OPACITY_LIGHT = 0.12;
const PERSPECTIVE = 600;
const COLOR = "0, 180, 216";

// ── Mouse interaction config ─────────────────────────────────
const MOUSE_RADIUS = 120; // influence radius in screen px
const MOUSE_PUSH_STR = 25; // how strongly vertices are displaced

// ── 3D helpers ───────────────────────────────────────────────
interface Vec3 {
  x: number;
  y: number;
  z: number;
}

function rotateY(p: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: p.x * cos - p.z * sin,
    y: p.y,
    z: p.x * sin + p.z * cos,
  };
}

function rotateX(p: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: p.x,
    y: p.y * cos - p.z * sin,
    z: p.y * sin + p.z * cos,
  };
}

function project(p: Vec3, cx: number, cy: number): { x: number; y: number; scale: number } {
  const d = PERSPECTIVE / (PERSPECTIVE + p.z);
  return { x: cx + p.x * d, y: cy + p.y * d, scale: d };
}

// ── Component ────────────────────────────────────────────────
const BackgroundMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let mouseX = -9999;
    let mouseY = -9999;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const isDark = () => !document.documentElement.classList.contains("light-theme");

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const dark = isDark();
      const lineAlpha = dark ? LINE_OPACITY_DARK : LINE_OPACITY_LIGHT;
      const pointAlpha = dark ? POINT_OPACITY_DARK : POINT_OPACITY_LIGHT;

      const rotAngle = prefersReducedMotion ? 0 : time * ROTATE_SPEED;
      const waveTime = prefersReducedMotion ? 0 : time * WAVE_SPEED;

      // Center of the grid in world space
      const gridW = (COLS - 1) * SPACING;
      const gridH = (ROWS - 1) * SPACING;

      // Build projected points
      const projected: { x: number; y: number; scale: number }[][] = [];

      for (let r = 0; r < ROWS; r++) {
        projected[r] = [];
        for (let c = 0; c < COLS; c++) {
          // World position (centered at origin)
          const wx = c * SPACING - gridW / 2;
          const wz = r * SPACING - gridH / 2;
          // Sine-wave Y displacement
          const wy =
            Math.sin(wx * 0.015 + waveTime) *
            Math.cos(wz * 0.015 + waveTime * 0.7) *
            WAVE_AMP;

          const p: Vec3 = { x: wx, y: wy, z: wz };
          const rotated = rotateX(rotateY(p, rotAngle), TILT_X);
          const proj = project(rotated, width / 2, height * 0.55);

          // Mouse proximity displacement
          const dx = proj.x - mouseX;
          const dy = proj.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_PUSH_STR;
            proj.x += (dx / dist) * force;
            proj.y += (dy / dist) * force;
          }

          projected[r][c] = proj;
        }
      }

      // Draw lines
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = `rgba(${COLOR}, ${lineAlpha})`;
      ctx.beginPath();

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const cur = projected[r][c];
          // Right neighbor
          if (c < COLS - 1) {
            const right = projected[r][c + 1];
            ctx.moveTo(cur.x, cur.y);
            ctx.lineTo(right.x, right.y);
          }
          // Bottom neighbor
          if (r < ROWS - 1) {
            const bottom = projected[r + 1][c];
            ctx.moveTo(cur.x, cur.y);
            ctx.lineTo(bottom.x, bottom.y);
          }
        }
      }
      ctx.stroke();

      // Draw points at intersections — brighter near mouse
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const pt = projected[r][c];
          const dx = pt.x - mouseX;
          const dy = pt.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / (MOUSE_RADIUS * 1.5));
          const alpha = pointAlpha + proximity * 0.35;
          const radius = (1.2 + proximity * 1.0) * pt.scale;
          ctx.fillStyle = `rgba(${COLOR}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default BackgroundMesh;
