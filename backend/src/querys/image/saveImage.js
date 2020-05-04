
const image = require('../../models/productImages')

async function saveImage ( field, products ) {
    let {originalname, filename  } = field
    let { id } = products
    await image.create({
        name:originalname , path: '/img/uploads/'+ filename, productsid: id
    },{
        field:['name','path','productsid']
    })     
}

module.exports = saveImage