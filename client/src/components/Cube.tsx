import { useEffect, useRef, useState } from 'react';
import './Cube.css';

interface Cubie {
  el: HTMLElement;
  m: DOMMatrix;
}

export default function Cube() {
  const cubeSceneRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(-22);
  const [rotY, setRotY] = useState(45);
  const [velX, setVelX] = useState(0);
  const [velY, setVelY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [status, setStatus] = useState('Initializing...');
  const [busy, setBusy] = useState(false);

  const cubiesRef = useRef<Cubie[]>([]);
  const historyRef = useRef<any[]>([]);
  const manualModeRef = useRef(false);
  const manualTimerRef = useRef<any>(undefined);
  const velXRef = useRef(0);
  const velYRef = useRef(0);
  const rotXRef = useRef(-22);
  const rotYRef = useRef(45);
  const draggingRef = useRef(false);
  const lx2Ref = useRef(0);
  const ly2Ref = useRef(0);

  const CUBIE_PX = 66;
  const STEP_PX = 66;
  const HALF_PX = 33;

  const FC = {
    front: { bg: '#009B48', cls: 'fc-green' },
    back: { bg: '#0051A2', cls: 'fc-blue' },
    right: { bg: '#C41E3A', cls: 'fc-red' },
    left: { bg: '#FF5800', cls: 'fc-orange' },
    top: { bg: '#FFFFFF', cls: 'fc-white' },
    bottom: { bg: '#FFD500', cls: 'fc-yellow' },
    inner: { bg: '#1a1a1a', cls: 'fc-inner' },
  };

  const FACE_DEFS = [
    { key: 'front', t: `translateZ(${HALF_PX}px)` },
    { key: 'back', t: `rotateY(180deg) translateZ(${HALF_PX}px)` },
    { key: 'right', t: `rotateY(90deg) translateZ(${HALF_PX}px)` },
    { key: 'left', t: `rotateY(-90deg) translateZ(${HALF_PX}px)` },
    { key: 'top', t: `rotateX(90deg) translateZ(${HALF_PX}px)` },
    { key: 'bottom', t: `rotateX(-90deg) translateZ(${HALF_PX}px)` },
  ];

  const MOVES = [
    { axis: 'y', slice: 1, angle: 90 }, { axis: 'y', slice: 1, angle: -90 },
    { axis: 'y', slice: 0, angle: 90 }, { axis: 'y', slice: 0, angle: -90 },
    { axis: 'y', slice: -1, angle: 90 }, { axis: 'y', slice: -1, angle: -90 },
    { axis: 'x', slice: 1, angle: 90 }, { axis: 'x', slice: 1, angle: -90 },
    { axis: 'x', slice: 0, angle: 90 }, { axis: 'x', slice: 0, angle: -90 },
    { axis: 'x', slice: -1, angle: 90 }, { axis: 'x', slice: -1, angle: -90 },
    { axis: 'z', slice: 1, angle: 90 }, { axis: 'z', slice: 1, angle: -90 },
    { axis: 'z', slice: -1, angle: 90 }, { axis: 'z', slice: -1, angle: -90 },
  ];

  const snap = (m: any) => {
    m.m41 = Math.round(m.m41 / STEP_PX) * STEP_PX;
    m.m42 = Math.round(m.m42 / STEP_PX) * STEP_PX;
    m.m43 = Math.round(m.m43 / STEP_PX) * STEP_PX;
    ['m11', 'm12', 'm13', 'm21', 'm22', 'm23', 'm31', 'm32', 'm33'].forEach((f) => {
      if (Math.abs(m[f] as number) < 0.1) m[f] = 0;
      else m[f] = Math.sign(m[f] as number);
    });
  };

  const makeCubie = (lx: number, ly: number, lz: number): Cubie => {
    const el = document.createElement('div');
    el.className = 'cubie';
    FACE_DEFS.forEach((fd) => {
      let fc: any = FC.inner;
      if (fd.key === 'front' && lz === 1) fc = FC.front;
      if (fd.key === 'back' && lz === -1) fc = FC.back;
      if (fd.key === 'right' && lx === 1) fc = FC.right;
      if (fd.key === 'left' && lx === -1) fc = FC.left;
      if (fd.key === 'top' && ly === 1) fc = FC.top;
      if (fd.key === 'bottom' && ly === -1) fc = FC.bottom;

      const face = document.createElement('div');
      face.className = 'cubie-face ' + fc.cls;
      face.style.transform = fd.t + (fc === FC.inner ? ' scale(0.98)' : '');
      if (fc !== FC.inner) {
        face.style.backgroundColor = fc.bg;
        face.innerHTML = '<div class="gloss"></div><div class="shine"></div>';
      } else {
        face.style.backgroundColor = '#111';
      }
      el.appendChild(face);
    });
    const m: any = new DOMMatrix();
    m.translateSelf(lx * STEP_PX, -ly * STEP_PX, lz * STEP_PX);
    el.style.transform = m.toString();
    return { el, m };
  };

  const buildCube = () => {
    if (!cubeSceneRef.current) return;
    cubeSceneRef.current.innerHTML = '';
    cubiesRef.current = [];
    for (let y = 1; y >= -1; y--) {
      for (let x = -1; x <= 1; x++) {
        for (let z = 1; z >= -1; z--) {
          const c = makeCubie(x, y, z);
          cubeSceneRef.current.appendChild(c.el);
          cubiesRef.current.push(c);
        }
      }
    }
  };

  const rotateLayer = async (axis: string, slice: number, angle: number, ms: number) => {
    return new Promise<void>((resolve) => {
      if (!cubeSceneRef.current) {
        resolve();
        return;
      }

      const layer = cubiesRef.current.filter((c) => {
        const x = Math.round(c.m.m41 / STEP_PX);
        const y = Math.round(-c.m.m42 / STEP_PX);
        const z = Math.round(c.m.m43 / STEP_PX);
        const val = axis === 'x' ? x : axis === 'y' ? y : z;
        return val === slice;
      });

      if (layer.length === 0) {
        resolve();
        return;
      }

      const pivot = document.createElement('div');
      pivot.style.cssText = 'position:absolute;width:0;height:0;transform-style:preserve-3d;';
      cubeSceneRef.current.appendChild(pivot);
      layer.forEach((c) => pivot.appendChild(c.el));

      pivot.getBoundingClientRect();

      if (ms > 0) {
        pivot.style.transition = `transform ${ms}ms cubic-bezier(0.34, 1.25, 0.64, 1)`;
      }
      pivot.style.transform =
        axis === 'y' ? `rotateY(${angle}deg)` : axis === 'x' ? `rotateX(${angle}deg)` : `rotateZ(${angle}deg)`;

      setTimeout(() => {
        const rotStr =
          axis === 'y' ? `rotateY(${angle}deg)` : axis === 'x' ? `rotateX(${angle}deg)` : `rotateZ(${angle}deg)`;
        const rotM: any = new DOMMatrix();
        rotM.multiplySelf(new DOMMatrix(rotStr));

        layer.forEach((c) => {
          c.m = rotM.multiply(c.m);
          snap(c.m);
          cubeSceneRef.current!.appendChild(c.el);
          c.el.style.transition = 'none';
          c.el.style.transform = c.m.toString();
          void c.el.offsetHeight;
        });

        pivot.remove();
        resolve();
      }, ms + 40);
    });
  };

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const scramble = async (n = 14, ms = 185) => {
    if (busy) return;
    setBusy(true);
    setStatus('Scrambling...');
    historyRef.current = [];

    for (let i = 0; i < n; i++) {
      let m;
      do {
        m = MOVES[Math.floor(Math.random() * MOVES.length)];
      } while (
        historyRef.current.length &&
        historyRef.current[historyRef.current.length - 1].axis === m.axis &&
        historyRef.current[historyRef.current.length - 1].slice === m.slice
      );
      historyRef.current.push(m);
      await rotateLayer(m.axis, m.slice, m.angle, ms);
      await sleep(18);
    }
    setBusy(false);
    setStatus('Scrambled — ready to solve');
  };

  const solve = async (ms = 340) => {
    if (busy || !historyRef.current.length) return;
    setBusy(true);
    setStatus('Solving...');

    const moves = [...historyRef.current].reverse().map((m) => ({ ...m, angle: -m.angle }));
    for (const m of moves) {
      await rotateLayer(m.axis, m.slice, m.angle, ms);
      await sleep(28);
    }
    historyRef.current = [];
    setBusy(false);
    setStatus('Solved! ✓');
  };

  const startScrambleSolve = async (n = 10, ms = 360) => {
    await scramble(n, 0);
    await sleep(400);
    await solve(ms);
  };

  useEffect(() => {
    buildCube();
    startScrambleSolve(10, 380);
  }, []);

  useEffect(() => {
    const animRot = () => {
      if (!draggingRef.current) {
        velYRef.current *= 0.92;
        velXRef.current *= 0.92;
        if (!manualModeRef.current && !busy) {
          velYRef.current += (0.25 - velYRef.current) * 0.025;
          velXRef.current += (0 - velXRef.current) * 0.025;
        }
        rotYRef.current += velYRef.current;
        rotXRef.current += velXRef.current;
        rotXRef.current = Math.max(-65, Math.min(65, rotXRef.current));
      }

      if (cubeSceneRef.current) {
        cubeSceneRef.current.style.transform = `rotateX(${rotXRef.current}deg) rotateY(${rotYRef.current}deg)`;
      }

      setRotX(rotXRef.current);
      setRotY(rotYRef.current);
      requestAnimationFrame(animRot);
    };

    const frame = requestAnimationFrame(animRot);
    return () => cancelAnimationFrame(frame);
  }, [busy]);

  useEffect(() => {
    const cubeVP = document.querySelector('.cube-viewport');
    if (!cubeVP) return;

    const handleMouseDown = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      draggingRef.current = true;
      lx2Ref.current = mouseEvent.clientX;
      ly2Ref.current = mouseEvent.clientY;
      velXRef.current = 0;
      velYRef.current = 0;
      manualModeRef.current = true;
      clearTimeout(manualTimerRef.current);
      manualTimerRef.current = setTimeout(() => {
        manualModeRef.current = false;
      }, 15000) as any;
      e.preventDefault();
    };

    const handleMouseMove = (e: Event) => {
      if (!draggingRef.current) return;
      const mouseEvent = e as MouseEvent;
      const lastDx = (mouseEvent.clientX - lx2Ref.current) * 0.45;
      const lastDy = (mouseEvent.clientY - ly2Ref.current) * 0.45;
      rotYRef.current += lastDx;
      rotXRef.current -= lastDy;
      rotXRef.current = Math.max(-65, Math.min(65, rotXRef.current));
      lx2Ref.current = mouseEvent.clientX;
      ly2Ref.current = mouseEvent.clientY;
    };

    const handleMouseUp = () => {
      draggingRef.current = false;
    };

    cubeVP.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      cubeVP.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="cube-wrapper">
      <div className="cube-aura"></div>
      <div className="cube-viewport">
        <div id="cubeScene" ref={cubeSceneRef}></div>
      </div>
      <div className="cube-ui">
        <div className="cube-status">{status}</div>
        <div className="cube-btns">
          <button
            className="cbtn"
            onClick={() => {
              if (historyRef.current.length > 0) return;
              manualModeRef.current = true;
              clearTimeout(manualTimerRef.current);
              manualTimerRef.current = setTimeout(() => {
                manualModeRef.current = false;
              }, 15000);
              scramble(14, 200);
            }}
            disabled={busy}
          >
            Scramble
          </button>
          <button
            className="cbtn cbtn-solve"
            onClick={() => {
              manualModeRef.current = true;
              clearTimeout(manualTimerRef.current);
              manualTimerRef.current = setTimeout(() => {
                manualModeRef.current = false;
              }, 15000);
              solve(380);
            }}
            disabled={busy}
          >
            Solve
          </button>
        </div>
        <div className="cube-hint">Drag to rotate • buttons to scramble/solve</div>
      </div>
    </div>
  );
}
