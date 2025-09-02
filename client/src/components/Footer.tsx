export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary" data-testid="text-footer-title">
              TIENDA DE PRODUCTOS STAF
            </h3>
            <p className="text-sm opacity-80" data-testid="text-footer-subtitle">
              Tu tienda de confianza para productos de calidad
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-location-title">
              Ubicación
            </h4>
            <p className="text-sm opacity-80" data-testid="text-location">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Ecuador, Pichincha, Pifo
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-contact-title">
              Contacto
            </h4>
            <p className="text-sm opacity-80" data-testid="text-contact-phone">
              <i className="fab fa-whatsapp mr-2"></i>
              +593 997 320 615
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60" data-testid="text-copyright">
            Tienda de Productos STAF. Propietario Patricio Apunte
          </p>
        </div>
      </div>
    </footer>
  );
}
