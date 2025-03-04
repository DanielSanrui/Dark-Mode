const Persona = () => {
    return (
        // Contenedor principal de la tarjeta de usuario
        <div className="row-span-2 p-4 bg-card-bg-light dark:bg-card-bg-dark rounded-xl shadow flex flex-col">
            {/* Imagen del usuario */}
            <img
                src="../../chica.png"
                alt="User"
                className="w-full h-full object-cover rounded-lg"
            />
            {/* Información del usuario */}
            <h2 className="text-card-h2-light dark:text-card-h2-dark text-lg font-bold mt-2 py-3">
                NAME: <span className="font-normal ps-30">35</span>
            </h2>
            <h2 className="text-card-h2-light dark:text-card-h2-dark text-lg font-bold py-3">
                AGE: <span className="font-normal ps-35">Married, 2 Kids</span>
            </h2>
            <h2 className="text-card-h2-light dark:text-card-h2-dark text-lg font-bold py-3">
                EDUCATION: <span className="font-normal ps-16">University of Calgary</span>
            </h2>
            <h2 className="text-card-h2-light dark:text-card-h2-dark text-lg font-bold py-3">
                LOCATION: <span className="font-normal ps-20">Calgary, Alberta</span>
            </h2>
            <h2 className="text-card-h2-light dark:text-card-h2-dark text-lg font-bold py-3">
                JOB: <span className="font-normal ps-35">Family Physician</span>
            </h2>
            <h2 className="text-card-h2-light dark:text-card-h2-dark text-lg font-bold py-3">
                HOBBIES: <span className="font-normal ps-23">Hiking and dancing</span>
            </h2>
        </div>
    );
};

export default Persona;
