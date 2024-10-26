"use client";

import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

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
      className="transition-all md:hover:bg-light-secondary  md:dark:hover:bg-white p-[0.6rem] rounded-full "
    >
      {theme === "dark" ? (
        <GoSun className=" text-light-secondary text-xl dark:text-dark-secondary" />
      ) : (
        <GoMoon className=" text-light-primary  text-xl  dark:text-dark-accent" />
      )}
    </button>
  );
}
