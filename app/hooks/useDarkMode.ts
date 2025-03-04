import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "system"; // Definición del tipo de tema

export function useDarkMode() {
    // Estado para gestionar el tema actual, obteniendo el valor desde localStorage o por defecto "system"
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "system"; // Previene errores en SSR
        return (localStorage.getItem("theme") as Theme) || "system";
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)"); // Detecta el esquema de color del sistema

        const applyTheme = () => {
            if (theme === "dark") {
                document.documentElement.classList.add("dark"); // Aplica el tema oscuro
            } else if (theme === "light") {
                document.documentElement.classList.remove("dark"); // Aplica el tema claro
            } else {
                document.documentElement.classList.toggle("dark", mediaQuery.matches); // Sigue el esquema del sistema
            }
            localStorage.setItem("theme", theme); // Guarda el tema en localStorage
        };

        applyTheme();

        // Maneja cambios en el esquema de color del sistema cuando el tema es "system"
        const handleSystemChange = (e: MediaQueryListEvent) => {
            if (theme === "system") {
                document.documentElement.classList.toggle("dark", e.matches);
            }
        };

        mediaQuery.addEventListener("change", handleSystemChange);
        return () => mediaQuery.removeEventListener("change", handleSystemChange);
    }, [theme]);

    // Función para alternar entre los temas "light", "dark" y "system"
    const toggleTheme = () => {
        setTheme((prev) =>
            prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
        );
    };

    return { theme, toggleTheme }; // Retorna el estado y la función para alternar el tema
}
