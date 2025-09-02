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
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "ropa"
  },
  {
    id: "ropa-2", 
    name: "Camiseta Llana - Blanco",
    price: 10.00,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "ropa"
  },
  {
    id: "ropa-3",
    name: "Camiseta Llana - Habano", 
    price: 10.00,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
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
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "calzado"
  },
  {
    id: "calzado-3",
    name: "Chancletas",
    price: 8.00,
    image: "https://images.unsplash.com/photo-1506629905607-c60c34b39ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
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
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "cosmeticos"
  },
  {
    id: "cosmeticos-3",
    name: "Crema para Piel CeraVe",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    category: "cosmeticos"
  },
  {
    id: "cosmeticos-4",
    name: "Protector Solar Yanbal",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
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
