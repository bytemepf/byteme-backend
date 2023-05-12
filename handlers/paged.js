const paged = (products,totalPages ,page, limit) => {

    let pagedProducts = []

    if(Number(page)===1){
        pagedProducts = products.splice(0,limit)
    } else if(page<=totalPages){
        pagedProducts = products.splice(limit*(page-1), limit)
    }

    return pagedProducts
}

module.exports={
    paged
}