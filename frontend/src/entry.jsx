import { createRoot } from 'react-dom/client'
import './index.css'
import RecruitmentTrail from "./RecruitmentTrail.jsx";

export function mount(el, props = {}) {
  const root = createRoot(el);
  root.render(<RecruitmentTrail {...props} />);
  return () => root.unmount();
}
