import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const getProductsByCategory = (categoryId: string) => {
    return products.filter(product => product.category === categoryId);
  };

  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-primary to-blue-700 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Bienvenidos a STAF
          </h2>
          <p className="text-xl lg:text-2xl mb-8 opacity-90" data-testid="text-hero-subtitle">
            Tu tienda de confianza para productos de calidad
          </p>
          <p className="text-lg mb-8 opacity-80" data-testid="text-hero-categories">
            Ropa, Calzado, Cosméticos, Aseo Personal y Salud
          </p>
          <button
            onClick={scrollToProducts}
            className="inline-block bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            data-testid="button-ver-productos"
          >
            Ver Productos
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-products-title">
            Nuestros Productos
          </h2>

          {categories.map((category) => {
            const categoryProducts = getProductsByCategory(category.id);
            
            if (categoryProducts.length === 0) return null;

            return (
              <div key={category.id} className="category-section mb-16">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-8 text-primary border-b-2 border-primary pb-2" data-testid={`text-category-${category.id}`}>
                  <i className={`${category.icon} mr-3`}></i>
                  {category.name}
                </h3>
                <div className={`grid gap-6 ${
                  category.id === 'ropa' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                  category.id === 'calzado' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                  category.id === 'cosmeticos' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
                  category.id === 'aseo' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
                }`}>
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
