import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contacto() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const location = useLocation();

  // Mostrar mensaje de éxito si viene de FormSubmit
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccessMessage(true);
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => setShowSuccessMessage(false), 5000);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Mensaje de éxito */}
        {showSuccessMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 text-center">
            <strong>¡Mensaje enviado correctamente!</strong> Te contactaremos pronto.
          </div>
        )}

        {/* Información principal */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#ffb300] text-center">¡Visítanos!</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mapa */}
            <div className="w-full">
              <iframe
                title="Ubicación Ferretería RyR"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7224.281473235496!2d-57.47892637926804!3d-25.130932376820844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da39d60ea2e21%3A0xe64706a58c0e5083!2zUiZS!5e0!3m2!1ses!2spy!4v1756667949110!5m2!1ses!2spy"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Información de contacto */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#263238] mb-4">Materiales RyR</h3>
                <p className="text-[#37474f] mb-6">Tu proveedor de confianza desde hace más de 5 años</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#ffb300] p-3 rounded-full">
                    <i className="bi bi-geo-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#263238]">Dirección</h4>
                    <p className="text-[#37474f]">ACOPLADOS SA, Av. San José, Limpio, camino piquete cue</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#ffb300] p-3 rounded-full">
                    <i className="bi bi-clock text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#263238]">Horarios</h4>
                    <p className="text-[#37474f]">Lunes a Sábado: 07:00 - 17:00</p>
                    <p className="text-[#37474f]">Domingo: Cerrado</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#ffb300] p-3 rounded-full">
                    <i className="bi bi-telephone text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#263238]">Teléfono</h4>
                    <a href="tel:+5950982619263" className="text-[#ffb300] hover:underline font-medium">
                      +595 0982619263
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#25D366] p-3 rounded-full">
                    <i className="bi bi-whatsapp text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#263238]">WhatsApp</h4>
                    <a 
                      href="https://wa.me/5950982619263?text=Hola,%20necesito%20información%20sobre%20productos" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20BA5A] transition-colors"
                    >
                      Chatear ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#263238]">Nuestros Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <i className="bi bi-truck text-4xl text-[#ffb300] mb-4"></i>
              <h4 className="font-semibold text-[#263238] mb-2">Entrega a domicilio</h4>
              <p className="text-sm text-[#37474f]">Llevamos tus materiales directamente a tu obra</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <i className="bi bi-tools text-4xl text-[#ffb300] mb-4"></i>
              <h4 className="font-semibold text-[#263238] mb-2">Asesoría técnica</h4>
              <p className="text-sm text-[#37474f]">Te ayudamos a elegir los mejores materiales</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <i className="bi bi-credit-card text-4xl text-[#ffb300] mb-4"></i>
              <h4 className="font-semibold text-[#263238] mb-2">Formas de pago</h4>
              <p className="text-sm text-[#37474f]">Efectivo, transferencia y tarjetas</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <i className="bi bi-shield-check text-4xl text-[#ffb300] mb-4"></i>
              <h4 className="font-semibold text-[#263238] mb-2">Garantía</h4>
              <p className="text-sm text-[#37474f]">1 año en productos seleccionados</p>
            </div>
          </div>
        </section>

        {/* Formulario de contacto con FormSubmit */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#263238]">Envíanos un mensaje</h3>
          <form 
            action="https://formsubmit.co/johanaramos4321@gmail.com"
            method="POST"
            className="max-w-2xl mx-auto space-y-6"
          >
            {/* Campos ocultos de configuración de FormSubmit */}
            <input type="hidden" name="_next" value="https://manfretsch.github.io/materiales-ryr/contacto?success=true" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nuevo contacto desde la web - Materiales RyR" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#263238] mb-2">Nombre *</label>
                <input 
                  type="text" 
                  name="nombre"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffb300] focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#263238] mb-2">Teléfono *</label>
                <input 
                  type="tel" 
                  name="telefono"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffb300] focus:border-transparent"
                  placeholder="+595 123 456 789"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#263238] mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffb300] focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#263238] mb-2">Tipo de consulta</label>
              <select 
                name="tipo_consulta"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffb300] focus:border-transparent"
              >
                <option value="">Selecciona una opción</option>
                <option value="Cotización">Solicitar cotización</option>
                <option value="Información de productos">Información de productos</option>
                <option value="Entrega a domicilio">Entrega a domicilio</option>
                <option value="Asesoría técnica">Asesoría técnica</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#263238] mb-2">Mensaje *</label>
              <textarea 
                name="mensaje"
                rows={4}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffb300] focus:border-transparent"
                placeholder="Cuéntanos sobre tu proyecto o qué productos necesitas..."
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit"
                className="bg-[#ffb300] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#ff8f00] transition-colors"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}