"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) return null;

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
