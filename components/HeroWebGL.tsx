"use client";

import { useEffect, useRef } from "react";

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function HeroWebGL() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      depth: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    const vertexSource = `
      attribute vec3 aPosition;
      uniform float uTime;
      uniform vec2 uPointer;
      uniform float uAspect;
      varying float vAlpha;

      void main() {
        vec3 p = aPosition;

        float waveA = sin(p.x * 1.65 + uTime * 0.55) * 0.14;
        float waveB = cos(p.y * 2.15 - uTime * 0.42) * 0.095;
        float pulse = sin((p.x + p.y) * 1.2 + uTime * 0.25) * 0.035;
        p.z += waveA + waveB + pulse;

        float ax = -0.88;
        float cx = cos(ax);
        float sx = sin(ax);
        p = vec3(p.x, p.y * cx - p.z * sx, p.y * sx + p.z * cx);

        float az = -0.18 + uPointer.x * 0.055;
        float cz = cos(az);
        float sz = sin(az);
        p = vec3(p.x * cz - p.y * sz, p.x * sz + p.y * cz, p.z);

        p.x += uPointer.x * 0.15;
        p.y -= uPointer.y * 0.08;

        float camera = 5.25;
        float depth = max(2.6, camera - p.z);
        vec2 projected = p.xy / depth * 2.55;
        projected.x /= mix(1.0, uAspect, 0.42);

        gl_Position = vec4(projected, 0.0, 1.0);

        float distanceFade = 1.0 - smoothstep(1.2, 3.3, length(aPosition.xy));
        float depthFade = smoothstep(-1.6, 1.5, p.z);
        vAlpha = 0.16 + distanceFade * 0.28 + depthFade * 0.08;
      }
    `;

    const fragmentSource = `
      precision mediump float;
      varying float vAlpha;

      void main() {
        gl_FragColor = vec4(0.06, 0.55, 0.09, vAlpha);
      }
    `;

    const vertex = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const cols = 34;
    const rows = 24;
    const vertices: number[] = [];
    const xMin = -2.55;
    const xMax = 2.55;
    const yMin = -1.7;
    const yMax = 1.7;

    for (let j = 0; j <= rows; j++) {
      const y = yMin + (yMax - yMin) * (j / rows);
      for (let i = 0; i < cols; i++) {
        const x1 = xMin + (xMax - xMin) * (i / cols);
        const x2 = xMin + (xMax - xMin) * ((i + 1) / cols);
        vertices.push(x1, y, 0, x2, y, 0);
      }
    }

    for (let i = 0; i <= cols; i++) {
      const x = xMin + (xMax - xMin) * (i / cols);
      for (let j = 0; j < rows; j++) {
        const y1 = yMin + (yMax - yMin) * (j / rows);
        const y2 = yMin + (yMax - yMin) * ((j + 1) / rows);
        vertices.push(x, y1, 0, x, y2, 0);
      }
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uPointer = gl.getUniformLocation(program, "uPointer");
    const uAspect = gl.getUniformLocation(program, "uAspect");

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.DEPTH_TEST);

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onPointerLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const render = (now: number) => {
      resize();
      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, reduced ? 0.9 : (now - start) / 1000);
      gl.uniform2f(uPointer, pointer.x, pointer.y);
      gl.uniform1f(uAspect, canvas.width / Math.max(1, canvas.height));
      gl.drawArrays(gl.LINES, 0, vertices.length / 3);

      if (!reduced) raf = requestAnimationFrame(render);
    };

    const parent = canvas.parentElement;
    parent?.addEventListener("pointermove", onPointerMove, { passive: true });
    parent?.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", resize, { passive: true });

    resize();
    render(start);

    return () => {
      cancelAnimationFrame(raf);
      parent?.removeEventListener("pointermove", onPointerMove);
      parent?.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", resize);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} className="heroWebGL" aria-hidden="true" />;
}
