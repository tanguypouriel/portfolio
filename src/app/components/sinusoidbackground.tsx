'use client'

import React, { useEffect, useRef } from 'react';

const SinusoidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const width = window.innerWidth;
    const height = window.innerHeight;
    const amplitude = window.innerHeight * 0.25; // Height of the wave
    const frequency = 0.005; // Wave frequency
    const waveCount = 4; // Number of waves
    const phaseShift = Math.PI / 5; // Phase shift between waves

    if (canvas && context) {
      canvas.width = width;
      canvas.height = height;

      const drawWave = (offset: number, color: string) => {
        context.beginPath();
        context.moveTo(0, height / 2);
        for (let x = 0; x < width; x++) {
          const y = amplitude * Math.sin(frequency * x + offset) + height / 2;
          context.lineTo(x, y);
        }
        context.strokeStyle = color;
        context.lineWidth = 3;
        context.shadowBlur = 10;
        context.shadowColor = color;
        context.stroke();
      };

      let offset = 0;

      const animate = () => {
        context.clearRect(0, 0, width, height);

        for (let i = 0; i < waveCount; i++) {
          const hue = (offset * 5 + i * 60) % 360; // Color shift
          drawWave(offset + i * phaseShift, `hsl(${hue}, 100%, 50%)`);
        }

        offset += 0.025; // Speed of the wave
        requestAnimationFrame(animate);
      };

      animate();
    }

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 bg-black z-0"></canvas>;
};

export default SinusoidBackground;
