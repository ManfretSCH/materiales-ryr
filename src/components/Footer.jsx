export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
                        © 2025 Ferretería RyR. Todos los derechos reservados.
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        ACOPLADOS SA, Av. San José, Limpio 110803
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Tel: <a href="tel:+5950982619263" className="hover:underline text-[#ffb300]">+595 0982619263</a> | Email: <a href="mailto:contacto@ferreteriajyr.cl" className="hover:underline text-[#ffb300]">contacto@ferreteriajyr.cl</a>
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Horario: Lunes a Sábado 07:00 - 17:00
                    </span>
                </div>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-4">
                    <li>
                        <span className="font-semibold text-gray-900">Pagos:</span> Efectivo, Transferencia
                    </li>
                    <li>
                        <span className="font-semibold text-gray-900">Envíos:</span> Limpio y Gran Asunción
                    </li>
                    <li>
                        <span className="font-semibold text-gray-900">Garantía:</span> 1 año en productos seleccionados
                    </li>
                </ul>
                <div className="flex gap-3 mt-4 md:mt-0">
                    <a href="https://www.facebook.com/share/17AiTpUsM5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#ffb300] hover:text-[#fff] text-xl">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://wa.me/5950982505879" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#ffb300] hover:text-[#fff] text-xl">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}