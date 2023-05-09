//importar "products" de la base de datos

const postProduct = (name, email, password, role, google) => {
    const product = products.create({name, email, password, role, google})

    return product;
}

module.exports= postProduct