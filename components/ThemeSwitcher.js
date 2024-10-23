import { useState, useEffect } from "react";
import { GoSun, GoMoon } from "react-icons/go";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.add(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 mt-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-secondary dark:focus:ring-light-secondary"
    >
      {theme === "dark" ? (
        <GoSun className="w-6 h-6 text-light-secondary dark:text-dark-secondary" />
      ) : (
        <GoMoon className="w-6 h-6 text-dark-accent dark:text-dark-accent" />
      )}
    </button>
  );
}
