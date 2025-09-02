import React from 'react';

// Se puede usar la clase 'container' de Tailwind para centrar el contenido
const QuienesSomos = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Quiénes Somos</h1>
      <p className="text-lg text-gray-600 mb-4">
        En STAF, creemos que la calidad es la base de la confianza. Somos un equipo dedicado a seleccionar los mejores productos de moda, calzado y cuidado personal para ofrecerte una experiencia de compra única y satisfactoria.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Nuestra misión es simple: proporcionar productos de alta calidad que no solo se vean bien, sino que también se sientan bien, con la garantía de que cada artículo ha sido elegido pensando en tu bienestar y estilo.
      </p>
      <p className="text-lg text-gray-600">
        Gracias por ser parte de nuestra comunidad.
      </p>
    </div>
  );
};

// Se cambió "AboutUs" por "QuienesSomos"
export default QuienesSomos;