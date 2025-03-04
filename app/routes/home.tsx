// Importación de los componentes reutilizables
import Header from "~/components/header";
import Persona from "~/components/persona";
import CardInfo from "~/components/cardInfo";

function App() {
  return (
    // Contenedor principal centrado y con un ancho medio
    <div className="container-md mx-auto">
      {/* Aplicación de estilos para altura mínima, fondo y colores en modo claro/oscuro */}
      <div className="min-h-screen bg-body-bg-light dark:bg-body-bg-dark text-main-header-light dark:text-main-header-dark p-4">
        {/* Componente de encabezado */}
        <Header />
        {/* Sección con diseño de cuadrícula adaptable (1 columna en móviles, 3 en pantallas medianas en adelante) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
          {/* Componente Persona, posiblemente mostrando información personal */}
          <Persona />
          {/* Tarjeta de información con título "Bio" y texto de relleno */}
          <CardInfo title="Bio" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet mauris enim, vel condimentum risus eget rhoncus, vitae. Viverra pulvinar cras eu ac sed nunc dui." />
          {/* Tarjeta de información con título "Personality" y lista de atributos */}
          <CardInfo
            title="Personality"
            content={["Hardworking", "Smart", "Expressive", "Thoughtful"]}
          />
          {/* Tarjeta de información con título "Pain points" y lista de elementos */}
          <CardInfo
            title="Pain points"
            content={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ]} />
          {/* Tarjeta de información con título "Goals" y lista de objetivos */}
          <CardInfo
            title="Goals"
            content={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."]} />
        </section>
      </div>
    </div>
  );
};

// Exportación del componente principal App
export default App;
