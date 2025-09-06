

export default function Inicio() {


    return (
        <>
            <div className="w-full min-h-screen bg-[#f5f5f5] flex justify-center items-start py-16">
                <section className="w-[90%] max-w-5xl bg-white rounded-2xl shadow-lg p-8 mx-auto flex flex-col gap-12">
                    {/* Misión */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <img
                        src="/materiales-ryr/img/mision.png"
                        alt="Misión Ferretería"
                        className="w-full md:w-1/3 rounded-xl shadow-md object-cover"
                        style={{ backgroundColor: "#8d6e63" }}
                        />
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-bold text-[#ffb300] mb-4 text-left">Nuestra Misión</h2>
                            <p className="text-lg text-[#37474f] text-left">
                                Brindar soluciones integrales en materiales y herramientas para la construcción, el hogar y la industria,
                                ofreciendo productos de calidad y atención personalizada para satisfacer las necesidades de nuestros clientes.
                            </p>
                        </div>
                    </div>
                    {/* Visión */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <img
                        src="/materiales-ryr/img/mision.png"
                        alt="Visión Ferretería"
                        className="w-full md:w-1/3 rounded-xl shadow-md object-cover"
                        style={{ backgroundColor: "#8d6e63" }}
                        />
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-bold text-[#ffb300] mb-4 text-left md:text-right">Nuestra Visión</h2>
                            <p className="text-lg text-[#37474f] text-left md:text-right">
                                Ser la ferretería líder en la región, reconocida por su innovación, compromiso social y excelencia en el servicio,
                                contribuyendo al desarrollo de nuestros clientes y la comunidad.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}