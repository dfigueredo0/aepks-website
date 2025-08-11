import React, { useEffect, useRef, useState } from "react";
import "./retro.css";

// Fetch simple weather label via Open-Meteo (no API key)
async function getWeather({ lat, lon }) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`;
    const r = await fetch(url);
    const j = await r.json();
    const t = Math.round(j?.current?.temperature_2m ?? NaN);
    const label = Number.isFinite(t)
      ? t >= 85 ? "hot" : t >= 65 ? "warm" : t >= 45 ? "cool" : "cold"
      : "fair";
    return Number.isFinite(t) ? `${label} (${t}°)` : label;
  } catch {
    return "fair";
  }
}

export default function RecruitmentTrail({
  events = [], // [{ id, name, description, location, dateTime, type, minigame }]
  sprites = {
    sky: "/assets/recruitment/sprites/sky.png",
    grass: "/assets/recruitment/sprites/grass.png",
    ground: "/assets/recruitment/sprites/ground.png",
    river: "/assets/recruitment/sprites/river.png",
    wagon: "/assets/recruitment/sprites/wagon.png",
    ox: "/assets/recruitment/sprites/ox.png",
  },
  lat = null,
  lon = null,
  dateText, // optional override like "April 4, 1848"
}) {
  const canvasRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const [weather, setWeather] = useState("…");
  const [loaded, setLoaded] = useState(false);

  // Preload sprites (so first frame isn't blank)
  useEffect(() => {
    const imgs = Object.values(sprites).map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = done;
      img.onerror = done;
      return img;
    });
    let count = 0;
    function done() { if (++count >= imgs.length) setLoaded(true); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(sprites)]);

  // Weather
  useEffect(() => {
    if (lat != null && lon != null) getWeather({ lat, lon }).then(setWeather);
    else setWeather("fair");
  }, [lat, lon]);

  // Render loop
  useEffect(() => {
    if (!loaded) return;
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    function resize() {
      c.width = Math.floor(window.innerWidth * dpr);
      c.height = Math.floor(window.innerHeight * dpr);
      c.style.width = "100%";
      c.style.height = "100%";
    }
    resize();
    window.addEventListener("resize", resize);

    const sky = makeImg(sprites.sky);
    const grass = makeImg(sprites.grass);
    const ground = makeImg(sprites.ground);
    const river = makeImg(sprites.river);
    const wagon = makeImg(sprites.wagon);
    const ox = makeImg(sprites.ox);

    let raf;
    function loop(now = 0) {
      const t = now / 1000;
      const W = c.width, H = c.height;

      // Sky background
      ctx.fillStyle = "#7ec0ff";
      ctx.fillRect(0, 0, W, H);
      tile(ctx, sky, W, H * 0.45, 0, t * 5);

      // River strip
      tile(ctx, river, W, H * 0.15, H * 0.45, t * 40);

      // Grass band
      tile(ctx, grass, W, H * 0.15, H * 0.45 - 10 * dpr, t * 20);

      // Ground
      tile(ctx, ground, W, H * 0.25, H * 0.60, t * 60);

      // Actors (ox + wagon)
      const scale = Math.max(1, Math.min(3, (W / dpr) / 600));
      const oxW = 64 * dpr * scale, oxH = 48 * dpr * scale;
      const wagW = 96 * dpr * scale, wagH = 64 * dpr * scale;
      const baseY = H * 0.60 - 8 * dpr;

      ctx.imageSmoothingEnabled = false; // crisp pixels
      ox && ctx.drawImage(ox, W * 0.35, baseY - oxH, oxW, oxH);
      wagon && ctx.drawImage(wagon, W * 0.35 + oxW + 8 * dpr, baseY - wagH, wagW, wagH);

      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [loaded, sprites]);

  // Space to continue
  useEffect(() => {
    function onKey(e) {
      if (e.code === "Space") {
        e.preventDefault();
        if (idx < events.length - 1) setIdx((i) => i + 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, events.length]);

  const current = events[idx] || {};
  const next = events[idx + 1]?.name || "—";
  const date = dateText || new Date().toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });

  return (
    <div className="fullscreen retro">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <button className="btn" onClick={() => idx < events.length - 1 && setIdx(idx + 1)}>▶ Continue</button>

      <div className="hud">
        <div className="title">{current.name || "Event"}</div>
        <div className="grid">
          <div><strong>Date:</strong> {date}</div>
          <div><strong>Weather:</strong> {weather}</div>
          <div><strong>Where:</strong> {current.location || "TBD"}</div>
          <div><strong>Next landmark:</strong> {next}</div>
        </div>
        {current.description ? (
          <div style={{ marginTop: 8 }}>{current.description}</div>
        ) : null}
        <div style={{ textAlign: "center", marginTop: 10 }}>
          Press <strong>SPACE</strong> to continue
        </div>
      </div>
    </div>
  );
}

// ---------- helpers ----------
function makeImg(src) {
  if (!src) return null;
  const img = new Image();
  img.src = src;
  return img;
}

function tile(ctx, img, w, h, y = 0, speed = 0) {
  if (!img || !img.width) {
    ctx.fillStyle = "#3aa13a";
    ctx.fillRect(0, y, w, h);
    return;
  }
  const ih = h;
  const iw = img.width * (ih / img.height);
  const offset = -((speed % iw) + iw) % iw;
  for (let x = offset; x < w + iw; x += iw) {
    ctx.drawImage(img, x, y, iw, ih);
  }
}