export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  // Ropa
  {
    id: "ropa-1",
    name: "Camiseta Llana - Negro",
    price: 10.00,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "ropa"
  },
  {
    id: "ropa-2", 
    name: "Camiseta Llana - Blanca",
    price: 10.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "ropa"
  },
  {
    id: "ropa-3",
    name: "Camiseta Llana - Color Habano", 
    price: 10.00,
    image: "https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "ropa"
  },

  // Calzado
  {
    id: "calzado-1",
    name: "Zapatillas",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "calzado"
  },
  {
    id: "calzado-2",
    name: "Botas de Niña con Dibujos",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1583615627073-0067376169cc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "calzado"
  },
  {
    id: "calzado-3",
    name: "Chancletas",
    price: 8.00,
    image: "https://images.unsplash.com/photo-1659963970293-b12cfeb286c5?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "calzado"
  },

  // Cosméticos
  {
    id: "cosmeticos-1",
    name: "Labial",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "cosmeticos"
  },
  {
    id: "cosmeticos-2",
    name: "Rímel",
    price: 6.50,
    image: "https://plus.unsplash.com/premium_photo-1678377960130-bb70ffeb1cd8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cosmeticos"
  },
  {
    id: "cosmeticos-3",
    name: "Crema Facial",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1585232350744-974fc9804d65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cosmeticos"
  },
  {
    id: "cosmeticos-4",
    name: "Protector Solar",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cosmeticos"
  },

  // Aseo Personal
  {
    id: "aseo-1",
    name: "Pasta de Dientes Colgate",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "aseo"
  },
  {
    id: "aseo-2",
    name: "Cepillo de Dientes Colgate",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "aseo"
  },
  {
    id: "aseo-3",
    name: "Jabón Protex",
    price: 1.50,
    image: "https://images.unsplash.com/photo-1585681616639-ac3885ec8155?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "aseo"
  },

  // Salud
  {
    id: "salud-1",
    name: "Alcohol",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "salud"
  },
  {
    id: "salud-2",
    name: "Mascarillas",
    price: 0.50,
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "salud"
  }
];

export const categories = [
  { id: "ropa", name: "Ropa", icon: "fas fa-tshirt" },
  { id: "calzado", name: "Calzado", icon: "fas fa-shoe-prints" },
  { id: "cosmeticos", name: "Cosméticos", icon: "fas fa-palette" },
  { id: "aseo", name: "Aseo Personal", icon: "fas fa-hand-sparkles" },
  { id: "salud", name: "Salud", icon: "fas fa-heartbeat" }
];
