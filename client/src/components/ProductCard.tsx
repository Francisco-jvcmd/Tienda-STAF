import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card bg-card rounded-lg shadow-md overflow-hidden" data-testid={`card-product-${product.id}`}>
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
        data-testid={`img-product-${product.id}`}
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2" data-testid={`text-name-${product.id}`}>
          {product.name}
        </h4>
        <p className="text-accent text-xl font-bold" data-testid={`text-price-${product.id}`}>
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
