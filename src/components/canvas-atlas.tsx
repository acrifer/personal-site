"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  phase: number;
};

const particles: Particle[] = Array.from({ length: 44 }, (_, index) => {
  const column = index % 11;
  const row = Math.floor(index / 11);

  return {
    x: 0.08 + column * 0.085 + (row % 2) * 0.018,
    y: 0.16 + row * 0.18,
    radius: 1.4 + (index % 5) * 0.45,
    speed: 0.18 + (index % 7) * 0.025,
    phase: index * 0.73,
  };
});

function drawBackground(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  pointer: { x: number; y: number; active: boolean },
  reducedMotion: boolean,
) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#f4efe4";
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.42;
  ctx.strokeStyle = "#191714";
  ctx.lineWidth = 0.6;

  const columns = 8;
  const gutter = width * 0.045;
  const left = width * 0.055;
  const usable = width - left * 2;
  const columnWidth = (usable - gutter * (columns - 1)) / columns;

  for (let index = 0; index <= columns; index += 1) {
    const x = left + index * (columnWidth + gutter);
    ctx.beginPath();
    ctx.moveTo(x, height * 0.055);
    ctx.lineTo(x, height * 0.94);
    ctx.stroke();
  }

  for (let index = 0; index < 7; index += 1) {
    const y = height * (0.12 + index * 0.125);
    ctx.beginPath();
    ctx.moveTo(width * 0.04, y);
    ctx.lineTo(width * 0.96, y);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = "#1f2937";
  ctx.lineWidth = Math.max(1, width * 0.0012);
  ctx.globalAlpha = 0.12;

  for (let band = 0; band < 6; band += 1) {
    const offset = band * 0.72;
    ctx.beginPath();
    for (let step = 0; step <= 140; step += 1) {
      const progress = step / 140;
      const wave =
        Math.sin(progress * Math.PI * 2.2 + time * 0.00032 + offset) * 38 +
        Math.cos(progress * Math.PI * 1.1 + offset) * 28;
      const x = width * (0.02 + progress * 0.96);
      const y = height * (0.22 + band * 0.105) + wave;

      if (step === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  const targetX = width * pointer.x;
  const targetY = height * pointer.y;

  particles.forEach((particle, index) => {
    const drift = reducedMotion
      ? 0
      : Math.sin(time * 0.00042 * particle.speed + particle.phase) * 16;
    const pull = pointer.active ? 0.08 : 0.035;
    const x = width * particle.x + drift + (targetX - width * particle.x) * pull;
    const y =
      height * particle.y +
      Math.cos(time * 0.00038 * particle.speed + particle.phase) * 12 +
      (targetY - height * particle.y) * pull;

    if (index % 3 === 0) {
      ctx.beginPath();
      ctx.strokeStyle = "rgba(28, 25, 23, 0.13)";
      ctx.lineWidth = 0.75;
      ctx.moveTo(x, y);
      ctx.lineTo(targetX, targetY);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.fillStyle = index % 8 === 0 ? "#b42318" : "#1c1917";
    ctx.globalAlpha = index % 8 === 0 ? 0.84 : 0.55;
    ctx.arc(x, y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();

  ctx.save();
  const redLine = reducedMotion
    ? width * 0.78
    : width * (0.62 + Math.sin(time * 0.00024) * 0.12);
  ctx.strokeStyle = "#b42318";
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.82;
  ctx.beginPath();
  ctx.moveTo(redLine, height * 0.08);
  ctx.lineTo(redLine + width * 0.06, height * 0.92);
  ctx.stroke();

  ctx.fillStyle = "#111827";
  ctx.globalAlpha = 0.75;
  ctx.font = "11px Manrope, sans-serif";
  ctx.fillText("CANVAS INDEX / 01", width * 0.055, height * 0.08);
  ctx.fillText("LIVE GRID", width * 0.83, height * 0.925);
  ctx.restore();
}

export function CanvasAtlas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let animationId = 0;
    let width = 0;
    let height = 0;
    let reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = {
      x: 0.68,
      y: 0.42,
      active: false,
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawBackground(context, width, height, performance.now(), pointer, true);
    };

    const render = (time: number) => {
      drawBackground(context, width, height, time, pointer, reducedMotion);

      if (!reducedMotion) {
        animationId = window.requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      pointer.y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      window.cancelAnimationFrame(animationId);
      render(performance.now());
    };

    resize();
    render(performance.now());

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
