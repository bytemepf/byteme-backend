const filtering = ({products, name, category, brand, min, max, alphabetic, numeric}) => {
    
      if (name) {
        products = products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
      }
  
      if (category) {
        products = products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
      }
  
      if (brand) {
        products = products.filter((product) => product.brand.toLowerCase() === brand.toLowerCase());
      }
  
      if (min) {
        products = products.filter((product) => product.price >= Number(min));
      }
  
      if (max) {
        products = products.filter((product) => product.price <= Number(max));
      }
  
      if (alphabetic) {
        products.sort((a, b) => {
          let x = a.name.toLowerCase(), y = b.name.toLowerCase();
          return x == y ? 0 : x > y ? 1 : -1;
        });
  
        if(alphabetic==="z-a"){
          products.reverse()
        }
      }
  
      if (numeric) {
        products.sort((a, b) => a.price - b.price);
        if(numeric==="desc"){
          products.reverse()
        }
      }
      
      return products
}

module.exports = {
    filtering
}