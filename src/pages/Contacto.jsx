export default function Contacto() {
  return (
    <section className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-12 mx-auto flex flex-col gap-8 my-8">
      <h2 className="text-3xl font-bold mb-4 text-[#ffb300] text-center">Nos encontramos aquí</h2>
      <div className="w-full flex justify-center items-center">
        <iframe
          title="Ubicación Ferretería JyR"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7224.281473235496!2d-57.47892637926804!3d-25.130932376820844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da39d60ea2e21%3A0xe64706a58c0e5083!2zUiZS!5e0!3m2!1ses!2spy!4v1756667949110!5m2!1ses!2spy"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "0.75rem" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Aquí puedes agregar los datos de contacto si lo deseas */}
    </section>
  );
}