import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground" data-testid="text-404-title">
            404
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-404-subtitle">
            Página No Encontrada
          </p>
        </div>
        
        <p className="text-muted-foreground max-w-md" data-testid="text-404-description">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        
        <Link href="/">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors" data-testid="button-back-home">
            Volver al Inicio
          </button>
        </Link>
      </div>
    </div>
  );
}
