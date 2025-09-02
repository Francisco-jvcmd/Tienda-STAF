export default function WhatsAppButton() {
  const phoneNumber = "593999737852";
  const message = "Hola, me gustaría más información sobre los productos.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      data-testid="button-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
