"use client"

import { useEffect, useState } from "react"

function DarkModeButton() {
  const [theme, setTheme] = useState(localStorage.theme)
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    }
  }, [])
  return (
    <div className="fixed bottom-10 right-10 dark:bg-white bg-slate-900 flex flex-row p-3 rounded-full">
      <label className="inline-flex items-center cursor-pointer">
        <input
          onChange={(e) => {
            if (e.target.checked) {
              document.documentElement.classList.add("dark")
              setTheme("dark")
              localStorage.theme = "dark"
            } else {
              document.documentElement.classList.remove("dark")
              setTheme("light")
              localStorage.theme = "light"
            }
          }}
          defaultChecked={theme === "dark"}
          type="checkbox"
          id="dark"
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-slate-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-900"></div>
        <span className="ms-3 text-sm font-semibold dark:text-slate-900 text-white">Dark Mode</span>
      </label>
    </div>
  )
}

export default DarkModeButton
