// El metodo filtering ordena en cascada de acuerdo a los parametros recibidos
// Devuelve una array de productos filtrado y ordenado
const filtering = ({ products, name, category, brand, min, max, alphabetic, numeric }) => {

  // filtra por nombre
  if (name) {
    products = products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
  }

  // filtra por categoria
  if (category) {
    products = products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
  }

  // filtra por marca
  if (brand) {
    products = products.filter((product) => product.brand.toLowerCase() === brand.toLowerCase());
  }

  // filtra por precio minimo
  if (min) {
    products = products.filter((product) => product.price >= Number(min));
  }

  //filtra por precio maximo
  if (max) {
    products = products.filter((product) => product.price <= Number(max));
  }

  // filtra por orden alfabetico
  if (alphabetic) {
    products.sort((a, b) => {
      let x = a.name.toLowerCase(), y = b.name.toLowerCase();
      return x == y ? 0 : x > y ? 1 : -1;
    });
    console.log(products, "111111");
    // filtra por orden alfabetico inverso
    if (alphabetic === "z-a") {
      products.reverse()
    }
    console.log(products, "222222");
  }

  // filtra por precio de forma ascendente
  if (numeric) {
    products.sort((a, b) => a.price - b.price);

    // filtra por precio de forma descendente
    if (numeric === "desc") {
      products.reverse()
    }
  }

  return products
}

module.exports = {
  filtering
}