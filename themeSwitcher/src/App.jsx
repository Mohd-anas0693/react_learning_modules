import { useEffect, useState } from "react"
import { ThemeContextProvider } from "./context/Theme"
import ThemeBtn from "./components/Theme";
import Card from "./components/Card";


function App() {
  const [themeMode, setThemeMode] = useState();
  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove("dark", "light");
    html.classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>

  )
}

export default App
