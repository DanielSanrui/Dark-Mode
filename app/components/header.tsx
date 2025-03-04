import ThemeToggle from "./ThemeToggle"; // Importa el componente para cambiar el tema

function Header() {
    return (
        <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
            <div className="relative">
                {/* Título principal del encabezado con soporte para modo claro y oscuro */}
                <h1 className="text-4xl font-bold text-main-header-light dark:text-main-header-dark mb-6">User Persona</h1>

                {/* Línea decorativa debajo del título */}
                <div className="absolute -bottom-2 left-0 w-30 mb-3 h-2 bg-list-bullet-light dark:to-list-bullet-dark rounded-full"></div>
            </div>

            {/* Botón para cambiar entre temas claro y oscuro */}
            <ThemeToggle />
        </header>
    );
}

export default Header;
