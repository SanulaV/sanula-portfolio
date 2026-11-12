"use client";

import { useEffect, useState, type FC } from "react";

export const ThemeToggle: FC = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.dataset.theme === "light");
  }, []);

  const toggle = () => {
    const next = !light;
    document.documentElement.dataset.theme = next ? "light" : "dark";
    localStorage.setItem("portfolio-theme", next ? "light" : "dark");
    setLight(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${light ? "dark" : "light"} theme`}
      aria-pressed={light}
      className="theme-toggle"
    >
      <span aria-hidden>{light ? "☀" : "☾"}</span>
      <span className="hidden sm:inline">{light ? "Light" : "Dark"}</span>
    </button>
  );
};
