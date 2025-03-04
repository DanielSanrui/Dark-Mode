interface CardInfoProps {
    title: string; // Define las propiedades del componente: título y contenido (puede ser string o array de strings)
    content: string | string[];
}

// Componente funcional CardInfo que recibe un título y un contenido
const CardInfo = ({ title, content }: CardInfoProps) => {
    return (
        <div className="p-5 bg-card-bg-light dark:bg-card-bg-dark rounded-xl shadow">
            {/* Renderiza el título con estilos específicos para claro/oscuro */}
            <h2 className="text-card-h2-light dark:text-card-h2-dark text-3xl font-bold mb-2 pb-4">{title}</h2>

            {/* Verifica si el contenido es un array, si es así, renderiza una lista */}
            {Array.isArray(content) ? (
                <ul className="list-none pl-3 space-y-2">
                    {content.map((item, index) => (
                        <li
                            key={index} // Clave única para cada elemento de la lista
                            className="
                            relative pl-7 before:content-['']
                            before:absolute before:left-0 before:top-1/2 before:w-5 before:h-1
                            before:bg-black before:rounded-full before:-translate-y-1/2
                            text-card-paragraph-light dark:text-card-paragraph-dark text-xl
                            "
                        >
                            {item} {/* Renderiza cada elemento de la lista */}
                        </li>
                    ))}
                </ul>
            ) : (
                // Si el contenido no es un array, renderiza un párrafo
                <p className="text-card-paragraph-light dark:text-card-paragraph-dark pe-3 text-xl">{content}</p>
            )}
        </div>
    );
};

export default CardInfo;
