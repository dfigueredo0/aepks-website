import { createRoot } from "react-dom/client";
import { initValuesAnim } from "./components/values_anim.js";
import { initBrothers } from "./components/brothers.js";
import "./index.css";
import "./Dither.css";
import RecruitmentTrail from "./RecruitmentTrail.jsx";
import Dither from "./Dither.jsx";
import "./components/values_anim.js";
import "./components/brothers.js";

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("events-root");
  if (el) {
    createRoot(el).render(<RecruitmentTrail /* props */ />);
  }
  if (document.querySelector(".core-values")) initValuesAnim();
  if (document.getElementById("exec-list")) initBrothers();
});

export function App() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
        pixelSize={2.0}
      />
    </div>
  );
}

export function mount(el, props = {}) {
  const root = createRoot(el);
  root.render(<RecruitmentTrail {...props} />);
  return () => root.unmount();
}

export function mountDither(el, props = {}) {
  const root = createRoot(el);
  root.render(<Dither {...props} />);
  return () => root.unmount();
}
