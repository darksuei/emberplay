import { useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "enabled");

  const toggleDarkMode = () => {
    darkMode
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", darkMode ? "disabled" : "enabled");
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode };
};
