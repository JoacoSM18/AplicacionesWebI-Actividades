//1. ARREGLOS
//1A
{
  const numeros = [];
  for (let i = 0; i < 5; i++) {
    const n = Number(prompt(`Ingresá el Número ${i + 1} de 5:`));
    numeros.push(n);
  }
  console.log("1A - Números:", numeros);
}

// 1B
{
  const impares = [];
  for (let i = 0; i < 5; i++) {
    const n = Number(prompt(`Ingresá el Número ${i + 1} de 5:`));
    if (n % 2 !== 0) {
      impares.push(n);
    }
  }
  console.log("1B - Solo Impares:", impares);
}

// 1C
{
  const frutas = ["pera", "manzana", "banana", "durazno"];
  frutas.forEach((fruta, i) => {
    frutas[i] = fruta.toUpperCase();
  });
  console.log("1C - forEach:", frutas);
}

// 1D
{
  const frutas = ["pera", "manzana", "banana", "durazno"];
  const frutasMayus = frutas.map((fruta) => fruta.toUpperCase());
  console.log("1D - Original:", frutas);
  console.log("1D - Map:", frutasMayus);
}

// 1E
{
  const frutas = ["pera", "manzana", "banana", "durazno"];
  const conNa = frutas.filter((fruta) => fruta.includes("na"));
  console.log("1E - Frutas con 'na':", conNa);
}

// 2. OBJETOS

// 2A
{
  const producto = {
    nombre: "Remera Básica",
    precio: 8500,
    stock: 15,
    talles: ["s", "m", "l"],
  };
  console.log("2A - Producto:", producto);
}

// 2B
const productos = [
  { nombre: "Remera Básica", precio: 8500, stock: 15, talles: ["S", "M"] },
  { nombre: "Jean Clásico", precio: 25000, stock: 3, talles: ["S", "M", "L"] },
  { nombre: "Campera de Abrigo", precio: 48000, stock: 4, talles: ["M", "L"] },
  { nombre: "Buzo con Capucha", precio: 22000, stock: 20, talles: ["S", "M", "L"] },
];

console.log("2B - Productos con Stock Menor a 5:");
productos.forEach((producto) => {
  if (producto.stock < 5) {
    console.log(producto);
  }
});

// 2C
const productosConDescuento = productos.map((producto) => ({
  ...producto,
  precio: producto.precio * 0.9,
}));
console.log("2C - Con 10% de Descuento:", productosConDescuento);

// 2D
const productosConMuchoStock = productos.filter((producto) => producto.stock > 10);
console.log("2D - Stock Mayor a 10:", productosConMuchoStock);