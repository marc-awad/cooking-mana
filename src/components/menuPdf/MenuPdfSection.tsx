export default function MenuPdfSection() {
  const handleDownload = () => {
    window.open("/menu.pdf", "_blank");
  };

  return (
    <section>
      <h2>Notre carte</h2>

      <button onClick={handleDownload}>
        Télécharger la carte PDF
      </button>
    </section>
  );
}