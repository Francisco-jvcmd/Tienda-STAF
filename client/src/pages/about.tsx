export default function About() {
  return (
    <div>
      {/* About Section */}
      <section className="py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-foreground" data-testid="text-about-title">
              Quiénes Somos
            </h2>
            <div className="bg-card rounded-lg shadow-lg p-8 lg:p-12">
              <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground mb-6" data-testid="text-about-mission">
                <strong className="text-primary">TIENDA DE PRODUCTOS STAF</strong> es una empresa ecuatoriana comprometida con brindar productos de alta calidad a precios accesibles para toda la familia.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground mb-6" data-testid="text-about-description">
                Nuestra misión es ser la tienda de confianza que satisface las necesidades diarias de nuestros clientes, ofreciendo desde ropa y calzado hasta productos de cuidado personal y salud.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground" data-testid="text-about-location">
                Con sede en <strong className="text-primary">Pifo, Pichincha</strong>, servimos a toda la comunidad ecuatoriana con dedicación, calidad y los mejores precios del mercado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
