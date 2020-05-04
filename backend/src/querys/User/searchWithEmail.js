
const Users = require('../../models/user')

async function searchWithEmail (email) {
    
    let usersEmail = await Users.findOne({
        where: {email}
    })

    return usersEmail
}

module.exports = searchWithEmail