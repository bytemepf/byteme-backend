// Este metodo realiza el paginado del array de productos
const paged = (products, totalPages, page, limit) => {

    let pagedProducts = []

    // No me acuerdo que hace esto, si siquera se como lo codee XD
    // Simplemente funciona y si funciona no lo toquen
    if (Number(page) === 1) {
        pagedProducts = products.splice(0, limit)
    } else if (page <= totalPages) {
        pagedProducts = products.splice(limit * (page - 1), limit)
    }

    return pagedProducts
}

module.exports = {
    paged
}