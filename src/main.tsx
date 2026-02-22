import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeWebVitalsMonitoring } from "./utils/performance";

// Initialize performance monitoring
initializeWebVitalsMonitoring();

createRoot(document.getElementById("root")!).render(<App />);
