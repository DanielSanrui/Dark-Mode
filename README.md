# Modo Oscuro utilizando React Router

Este proyecto es una aplicación web desarrollada con **React**, **TypeScript** y **Tailwind CSS** que permite visualizar la información de una persona usuaria ficticia, incluyendo su biografía, personalidad, puntos de dolor y objetivos. Además, cuenta con un sistema de cambio de tema (claro/oscuro).

## 🛠 Tecnologías Utilizadas

- **React** - Biblioteca para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript para tipado estático
- **Tailwind CSS** - Framework de estilos utilitario
- **React Router** - Para la navegación entre rutas

### Descripción de los archivos principales

- **`components/CardInfo.tsx`** → Componente que muestra información en forma de tarjeta, ya sea un párrafo o una lista.
- **`components/Header.tsx`** → Encabezado con el título "User Persona" y el botón para cambiar de tema.
- **`components/Persona.tsx`** → Tarjeta con los detalles personales de la persona ficticia.
- **`components/ThemeToggle.tsx`** → Botón para alternar entre modo claro, oscuro y sistema.
- **`hooks/useDarkMode.ts`** → Hook personalizado para gestionar el tema de la aplicación.
- **`routes/home.tsx`** → Página principal que ensambla todos los componentes.
- **`root.tsx`** → Configuración general de la aplicación y manejo de errores.

## 🚀 Instalación y Ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/user-persona-app.git
   cd user-persona-app
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Accede a la aplicación en `http://localhost:5173` (o el puerto que indique Vite).

## 🎨 Estilos y Temas

- La aplicación utiliza Tailwind CSS para los estilos.
- El cambio de tema se almacena en `localStorage` y se gestiona con el hook `useDarkMode.ts`.
- Clases CSS personalizadas están en `app.css`.

## 📌 Funcionalidades
- ✅ Diseño responsivo.
- ✅ Modo oscuro/claro basado en la preferencia del usuario.
- ✅ Componente reutilizable para mostrar información.
- ✅ Uso de Tailwind CSS para estilizar.
