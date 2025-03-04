import { useDarkMode } from "../hooks/useDarkMode"; // Importa el hook personalizado para manejar el modo oscuro
import { Sun, Moon, Laptop } from "lucide-react"; // Importa los iconos de luz, oscuridad y sistema

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode(); // Obtiene el tema actual y la función para alternarlo

  return (
    <button
      onClick={toggleTheme} // Cambia el tema cuando se hace clic
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg flex items-center gap-2"
    >
      {/* Renderiza el icono y el texto según el tema actual */}
      {theme === "light" ? (
        <>
          <Sun className="w-5 h-5" />
          <span>Light Mode</span>
        </>
      ) : theme === "dark" ? (
        <>
          <Moon className="w-5 h-5" />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <Laptop className="w-5 h-5" />
          <span>System </span>
        </>
      )}
    </button>
  );
}
